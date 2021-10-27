import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { IS_PRODUCTION } from "./constants";
import Post from "../types/post";

type PostFields = Array<keyof Post>;

const MD = `md`;
const MDX = `mdx`;

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

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

export function getPostBySlug(
  slug: string,
  fields: PostFields = []
): Partial<Post> {
  let postPathData = getPostPath(slug, MDX);

  const { fullPath, realSlug } = postPathData;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
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

export function getAllPosts(fields: PostFields = []) {
  const slugs = getPostSlugs();

  return slugs
    .map((slug) => getPostBySlug(slug, fields))
    .filter(filterByPublishedPostsOnly)
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
  fields: PostFields = [
    "title",
    "date",
    "slug",
    "ogImage",
    "coverImage",
    "collection",
    "excerpt",
  ]
) {
  return getAllPosts(fields).filter((item) => item.collection === collection);
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
