import { SITE_TITLE, SITE_DESCRIPTION } from '#consts.ts';
import { getPublishedArticles } from '#lib/articles.ts';
import rss from '@astrojs/rss';

export async function GET(context) {
  const articles = await getPublishedArticles();
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: articles.map((article) => ({
      title: article.data.title,
      pubDate: article.data.date,
      description: article.data.excerpt,
      link: `/${article.id}/`,
    })),
  });
}
