export default interface BasePost {
  slug: string;
  title: string;
  date: string;
  live: boolean;
  collection: string;
  tags: string[];
  readingTime: string;
  content: string;
}
