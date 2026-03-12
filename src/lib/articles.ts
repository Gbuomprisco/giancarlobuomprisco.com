import { getCollection, type CollectionEntry } from 'astro:content';

const IS_PRODUCTION = import.meta.env.PROD;

export async function getPublishedArticles(): Promise<
  CollectionEntry<'articles'>[]
> {
  const articles = await getCollection('articles');
  const filtered = IS_PRODUCTION
    ? articles.filter((a) => a.data.live)
    : articles;
  return filtered.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getListableArticles(): Promise<
  CollectionEntry<'articles'>[]
> {
  const articles = await getPublishedArticles();
  return articles.filter((a) => a.data.visibleInListings);
}

export function getArticlesGroupedByYear(
  articles: CollectionEntry<'articles'>[],
): { year: number; articles: CollectionEntry<'articles'>[] }[] {
  const grouped = new Map<number, CollectionEntry<'articles'>[]>();

  for (const article of articles) {
    const year = article.data.date.getFullYear();
    const list = grouped.get(year) ?? [];
    list.push(article);
    grouped.set(year, list);
  }

  return Array.from(grouped.entries())
    .sort(([a], [b]) => b - a)
    .map(([year, articles]) => ({ year, articles }));
}

export function getReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / 225);
}
