import fs from "fs";
import { join } from "path";
import matter, { GrayMatterFile } from "gray-matter";
import { IS_PRODUCTION } from "./constants";
import Post from "../types/article";
import Article from "../types/article";
import BasePost from "../types/base-post";
import BlogPost from "../types/blog-post";

type ArticleFields = Array<keyof Article>;
type BlogPostFields = Array<keyof BlogPost>;

const MDX = `mdx`;

const DEFAULT_ARTICLE_FIELDS: ArticleFields = [
  "title",
  "date",
  "slug",
  "ogImage",
  "coverImage",
  "collection",
  "excerpt",
  "series",
];

const DEFAULT_POST_FIELDS: BlogPostFields = [
  "title",
  "date",
  "slug",
  "collection",
];

const ARTICLES_DIRECTORY_NAME = "_articles";
const POSTS_DIRECTORY_NAME = "_posts";

const articlesDirectory = join(process.cwd(), ARTICLES_DIRECTORY_NAME);
const postsDirectory = join(process.cwd(), POSTS_DIRECTORY_NAME);

export function getArticleSlugs() {
  return fs.readdirSync(articlesDirectory);
}

export function getPostsSlugs() {
  return fs.readdirSync(postsDirectory);
}

const allArticles = getArticleSlugs();
const allPosts = getPostsSlugs();

const postCache = new Map<string, GrayMatterFile<string>>();

export function getArticleBySlug(
  slug: string,
  fields: ArticleFields = DEFAULT_ARTICLE_FIELDS
): Partial<Post> | undefined {
  return getPostFieldsBySlug(slug, articlesDirectory, fields);
}

export function getBlogPostBySlug(
  slug: string,
  fields: BlogPostFields = DEFAULT_POST_FIELDS
): Partial<BlogPost> | undefined {
  return getPostFieldsBySlug(slug, postsDirectory, fields);
}

export function getAllCollections() {
  const postsWithCollection = getAllArticles(["collection"]).map(
    (item) => item.collection
  );

  return Array.from(new Set(postsWithCollection));
}

export function getPostsByCollection(
  collection: string,
  fields: ArticleFields = DEFAULT_ARTICLE_FIELDS
) {
  return getAllArticles(fields, (item) => {
    return item.collection === collection;
  });
}

export function getPostsBySeries(
  series: string,
  fields: ArticleFields = DEFAULT_ARTICLE_FIELDS
) {
  return getAllArticles(fields, (item) => {
    return Boolean(item.series && item.series === series);
  }).reverse();
}

export function getPostsBySeriesSlug(
  seriesSlug: string,
  fields: ArticleFields = DEFAULT_ARTICLE_FIELDS
) {
  return getAllArticles(fields, (item) => {
    return Boolean(item.series && slugify(item.series) === seriesSlug);
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

export function getAllSeries(): string[] {
  return Array.from(
    new Set(
      getAllArticles(DEFAULT_ARTICLE_FIELDS, (item) => !!item.series).map(
        (item) => item.series as string
      )
    )
  );
}

export function slugify(value: string) {
  return value
    .split(" ")
    .map((item) => item.toLowerCase())
    .join("-");
}

function getPostFieldsBySlug<PostType extends BasePost>(
  slug: string,
  directory: string,
  fields: Array<keyof PostType> = []
): Partial<PostType> | undefined {
  const postPathData = getPostPath(slug, directory);
  const { fullPath, realSlug } = postPathData;
  const file = readPost(fullPath);

  if (!file) {
    return;
  }

  const { data, content } = file;
  const readingTime = getReadingTimeInMinutes(content);

  const items: Record<string, string> = {};

  for (const field of fields as string[]) {
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
  }

  return items as unknown as Partial<PostType>;
}

export function getAllArticles(
  fields: ArticleFields = DEFAULT_ARTICLE_FIELDS,
  filterFn: (post: Partial<Article>) => boolean = () => true
) {
  const posts = allArticles
    .map((slug) => getArticleBySlug(slug, fields))
    .filter(Boolean) as Article[];

  return _getAllPosts(posts, filterFn);
}

export function getAllPosts(
  fields: BlogPostFields = DEFAULT_POST_FIELDS,
  filterFn: (post: Partial<BlogPost>) => boolean = () => true
) {
  const posts = allPosts
    .map((slug) => getBlogPostBySlug(slug, fields))
    .filter(Boolean) as BlogPost[];

  return _getAllPosts(posts, filterFn);
}

function _getAllPosts<Type extends BasePost>(
  posts: Type[],
  filterFn: (post: Partial<Type>) => boolean = () => true
) {
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

function getPostPath(slug: string, directory: string) {
  const regExp = /\.(mdx|md)$/;
  const result = slug.match(regExp);
  const realSlug = slug.replace(regExp, "");
  const extension = (result && result[0]) ?? `.${MDX}`;
  const postPath = `${realSlug}${extension}`;
  const fullPath = join(directory, postPath);

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
