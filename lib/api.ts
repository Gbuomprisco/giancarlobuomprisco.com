import { join } from "path";
import { IS_PRODUCTION } from "./constants";

import Article from "../types/article";
import BasePost from "../types/base-post";
import BlogPost from "../types/blog-post";
import Hub from "../types/hub";

import { getPath, readDirectory, readFrontMatter } from "./fs-utils";
import { getCollectionBySlug } from "./collections";

type ArticleFields = Array<keyof Article>;
type BlogPostFields = Array<keyof BlogPost>;
type HubsFields = Array<keyof Hub>;

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
  return readDirectory(articlesDirectory);
}

export function getPostsSlugs() {
  return readDirectory(postsDirectory);
}

export function getHubsSlugs() {
  return readDirectory(hubsDirectory);
}

const allArticles = getArticleSlugs();
const allPosts = getPostsSlugs();
const allHubs = getHubsSlugs();

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
  collectionSlug: string,
  fields: ArticleFields = DEFAULT_ARTICLE_FIELDS
) {
  const collection = getCollectionBySlug(collectionSlug);

  return getAllArticles(
    fields,
    (item) =>
      item.collection?.name.toLowerCase() === collection.name.toLowerCase()
  );
}

export function getPostsByCollection(
  collectionSlug: string,
  fields: BlogPostFields = DEFAULT_POST_FIELDS
) {
  const collection = getCollectionBySlug(collectionSlug);

  return getAllPosts(
    fields,
    (item) =>
      item.collection?.name.toLowerCase() === collection.name.toLowerCase()
  );
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

function filterByPublishedPostsOnly<Item extends { live: boolean }>(
  post: Item
) {
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
  const postPathData = getPath(slug, directory);
  const { fullPath, realSlug } = postPathData;
  const file = readFrontMatter(fullPath);

  if (!file) {
    return;
  }

  const { data, content } = file;
  const readingTime = getReadingTimeInMinutes(content);

  const items: Record<string, unknown> = {
    live: data.live,
    readingTime: `${readingTime} min read`,
  };

  for (const field of fields as string[]) {
    if (field === "slug") {
      items[field] = realSlug;
      continue;
    }

    if (field === "collection") {
      items[field] = getCollectionBySlug(data[field]);
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
      article.collection?.name === collection &&
      tags?.some((tag) => article.tags?.includes(tag))
    );
  });

  const posts = getAllPosts(DEFAULT_POST_FIELDS, (post) => {
    return (
      post.collection?.name === collection &&
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

export function getAllTags() {
  const tags = getAllArticles().reduce<string[]>((acc, post) => {
    return [...acc, ...post.tags];
  }, []);

  return Array.from(new Set(tags));
}

export function getArticlesByTag(tag: string) {
  return getAllArticles(DEFAULT_ARTICLE_FIELDS, (article) => {
    return Boolean(article.tags?.includes(tag));
  });
}
