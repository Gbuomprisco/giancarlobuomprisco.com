import fs from "fs";
import { join } from "path";
import matter, { GrayMatterFile } from "gray-matter";
import { IS_PRODUCTION } from "./constants";
import Post from "../types/post";
import PostType from "../types/post";

type PostFields = Array<keyof Post>;

const MD = `md`;
const MDX = `mdx`;

const DEFAULT_FIELDS: PostFields = [
  "title",
  "date",
  "slug",
  "ogImage",
  "coverImage",
  "collection",
  "excerpt",
  "series",
];

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

const allPosts = getPostSlugs();
const postCache = new Map<string, GrayMatterFile<string>>();

function getPostPath(slug: string, fallbackExtension = MD) {
  const regExp = /\.(mdx|md)$/;
  const result = slug.match(regExp);
  const realSlug = slug.replace(regExp, "");
  const extension = (result && result[0]) ?? `.${fallbackExtension}`;
  const postPath = `${realSlug}${extension}`;
  const fullPath = join(postsDirectory, postPath);

  return {
    fullPath,
    realSlug,
  };
}

function readPost(fullPath: string) {
  if (postCache.has(fullPath)) {
    return postCache.get(fullPath);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const file = matter(fileContents);

  postCache.set(fullPath, file);

  return file;
}

export function getPostBySlug(
  slug: string,
  fields: PostFields = []
): Partial<Post> | undefined {
  const postPathData = getPostPath(slug, MDX);
  const { fullPath, realSlug } = postPathData;
  const file = readPost(fullPath);

  if (!file) {
    return;
  }

  const { data, content } = file;
  const readingTime = getReadingTimeInMinutes(content);

  const items: Partial<Post> = {};

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }

    if (field === "content") {
      items[field] = content;
    }

    items.readingTime = `${readingTime} min read`;
    items.live = data.live;

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(
  fields: PostFields = [],
  filterFn: (post: Partial<Post>) => boolean = () => true
) {
  const posts = allPosts
    .map((slug) => getPostBySlug(slug, fields))
    .filter(Boolean) as PostType[];

  return posts
    .filter(filterByPublishedPostsOnly)
    .filter(filterFn)
    .sort((item, nextItem) => {
      if (!item.date || !nextItem.date) {
        return 1;
      }

      return item.date > nextItem.date ? -1 : 1;
    });
}

export function getAllCollections() {
  const postsWithCollection = getAllPosts(["collection"]).map(
    (item) => item.collection
  );

  return Array.from(new Set(postsWithCollection));
}

export function getPostsByCollection(
  collection: string,
  fields: PostFields = DEFAULT_FIELDS
) {
  return getAllPosts(fields, (item) => {
    return item.collection === collection;
  });
}

export function getPostsBySeries(
  series: string,
  fields: PostFields = DEFAULT_FIELDS
) {
  return getAllPosts(fields, (item) => {
    return Boolean(item.series && item.series === series);
  }).reverse();
}

function getReadingTimeInMinutes(content: string, wpm = 225) {
  const words = content.trim().split(/\s+/).length;

  return Math.ceil(words / wpm);
}

function filterByPublishedPostsOnly(post: Partial<Post>) {
  if (!IS_PRODUCTION || !("live" in post)) {
    return true;
  }

  return post.live;
}
