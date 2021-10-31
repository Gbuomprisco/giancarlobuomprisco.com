import fs from "fs";
import { join } from "path";
import matter, { GrayMatterFile } from "gray-matter";
import { IS_PRODUCTION } from "./constants";

import Article from "../types/article";
import BasePost from "../types/base-post";
import BlogPost from "../types/blog-post";
import Hub from "../types/hub";

type ArticleFields = Array<keyof Article>;
type BlogPostFields = Array<keyof BlogPost>;
type HubsFields = Array<keyof Hub>;

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
  "live",
  "readingTime",
  "tags",
];

const DEFAULT_POST_FIELDS: BlogPostFields = [
  "title",
  "date",
  "slug",
  "readingTime",
  "collection",
  "live",
];

const DEFAULT_HUB_FIELDS: HubsFields = [
  "name",
  "live",
  "slug",
  "collection",
  "content",
  "tags",
];

const ARTICLES_DIRECTORY_NAME = "_articles";
const POSTS_DIRECTORY_NAME = "_posts";
const HUBS_DIRECTORY_NAME = "_hubs";

const articlesDirectory = join(process.cwd(), ARTICLES_DIRECTORY_NAME);
const postsDirectory = join(process.cwd(), POSTS_DIRECTORY_NAME);
const hubsDirectory = join(process.cwd(), HUBS_DIRECTORY_NAME);

export function getArticleSlugs() {
  return fs.readdirSync(articlesDirectory);
}

export function getPostsSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getHubsSlugs() {
  return fs.readdirSync(hubsDirectory);
}

const allArticles = getArticleSlugs();
const allPosts = getPostsSlugs();
const allHubs = getHubsSlugs();

const postCache = new Map<string, GrayMatterFile<string>>();

export function getArticleBySlug(
  slug: string,
  fields: ArticleFields = DEFAULT_ARTICLE_FIELDS
): Partial<Article> | undefined {
  return getPostFieldsBySlug(slug, articlesDirectory, fields);
}

export function getBlogPostBySlug(
  slug: string,
  fields: BlogPostFields = DEFAULT_POST_FIELDS
): Partial<BlogPost> | undefined {
  return getPostFieldsBySlug(slug, postsDirectory, fields);
}

export function getHubBySlug(
  slug: string,
  fields = DEFAULT_HUB_FIELDS
): Partial<Hub> | undefined {
  return getPostFieldsBySlug(slug, hubsDirectory, fields);
}

export function getAllCollections() {
  const postsWithCollection = getAllArticles(["collection"]).map(
    (item) => item.collection
  );

  return Array.from(new Set(postsWithCollection));
}

export function getArticlesByCollection(
  collection: string,
  fields: ArticleFields = DEFAULT_ARTICLE_FIELDS
) {
  return getAllArticles(fields, (item) => item.collection === collection);
}

export function getPostsByCollection(
  collection: string,
  fields: BlogPostFields = DEFAULT_POST_FIELDS
) {
  return getAllPosts(fields, (item) => item.collection === collection);
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

function filterByPublishedPostsOnly(post: Partial<Article>) {
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

function getPostFieldsBySlug<PostType>(
  slug: string,
  directory: string,
  fields: Array<keyof PostType> = []
): Partial<PostType> | undefined {
  const postPathData = getPostPath(slug, directory);
  const { fullPath, realSlug } = postPathData;
  const file = readPost(fullPath, directory);

  if (!file) {
    return;
  }

  const { data, content } = file;
  const readingTime = getReadingTimeInMinutes(content);

  const items: Record<string, string> = {
    live: data.live,
    readingTime: `${readingTime} min read`,
  };

  for (const field of fields as string[]) {
    if (field === "slug") {
      items[field] = realSlug;
      continue;
    }

    if (field === "content") {
      items[field] = content;
      continue;
    }

    if (field === "date") {
      items[field] = new Date(data.date).toISOString();
      continue;
    }

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

export function queryAll(collection: string, tags: string[]) {
  const articles = getAllArticles(DEFAULT_ARTICLE_FIELDS, (article) => {
    return (
      article.collection === collection &&
      tags?.some((tag) => article.tags?.includes(tag))
    );
  });

  const posts = getAllPosts(DEFAULT_POST_FIELDS, (post) => {
    return (
      post.collection === collection &&
      tags?.some((tag) => post?.tags?.includes(tag))
    );
  });

  return { articles, posts };
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

export function getAllHubs(
  fields: HubsFields = DEFAULT_HUB_FIELDS,
  filterFn: (post: Partial<Hub>) => boolean = () => true
): Hub[] {
  const hubs = allHubs
    .map((slug) => getHubBySlug(slug, fields))
    .filter(Boolean) as Hub[];

  return hubs.filter(filterByPublishedPostsOnly).filter(filterFn);
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

function readPost(fullPath: string, directory: string) {
  const key = `${directory}:${fullPath}`;

  if (postCache.has(key)) {
    return postCache.get(key);
  }

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const file = matter(fileContents);

    postCache.set(key, file);

    return file;
  } catch (e) {
    return;
  }
}
