import type { APIRoute, GetStaticPaths } from 'astro';
import { getPublishedArticles } from '#lib/articles.ts';
import { generateOgImage } from '#lib/og.ts';

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await getPublishedArticles();
  return articles.map((article) => ({
    params: { slug: article.id },
    props: { title: article.data.title, date: article.data.date },
  }));
};

export const GET: APIRoute = async ({ props }) => {
  const png = await generateOgImage(props.title, props.date);
  return new Response(png, {
    headers: { 'Content-Type': 'image/png' },
  });
};
