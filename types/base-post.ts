import Collection from "./collection";

export default interface BasePost {
  slug: string;
  title: string;
  date: string;
  live: boolean;
  collection: Collection;
  tags: string[];
  readingTime: string;
  content: string;
  excerpt: string;

  coverImage?: string;
  ogImage?: {
    url: string;
  };
}
