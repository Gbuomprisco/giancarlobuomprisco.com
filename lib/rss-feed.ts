import { Feed } from "feed";
import { writeFileSync } from "fs";
import * as constants from "./constants";
import Article from "../types/article";
import Note from "../types/note";
import { getAllArticles, getAllNotes } from "./api";

const DEFAULT_RSS_PATH = "public/rss.xml";

function generateRSSFeed(
  articles: Article[],
  notes: Note[],
  path = DEFAULT_RSS_PATH
) {
  const baseUrl = constants.SITE_URL;

  const author = {
    name: constants.AUTHOR,
    link: constants.TWITTER_URL,
  };

  const feed = new Feed({
    title: `${constants.TITLE} - Articles`,
    description: constants.MISSION_STATEMENT,
    id: baseUrl,
    link: baseUrl,
    language: constants.SITE_LANGUAGE,
    feedLinks: {
      rss2: `${baseUrl}/rss.xml`,
    },
    author,
    copyright: "",
  });

  articles.forEach((article) => {
    const {
      date,
      slug,
      title,
      content,
      excerpt: description,
      collection,
      live,
    } = article;

    if (!live) {
      return;
    }

    const url = `${baseUrl}/${collection.slug}/${slug}`;

    feed.addItem({
      title,
      id: url,
      link: url,
      description,
      content,
      author: [author],
      date: new Date(date),
    });
  });

  notes.forEach((note) => {
    const { date, slug, title, content, collection, live } = note;
    const url = `${baseUrl}/${collection.slug}/${slug}`;

    if (!live) {
      return;
    }

    feed.addItem({
      title,
      id: url,
      link: url,
      content,
      author: [author],
      date: new Date(date),
    });
  });

  writeFileSync(path, feed.rss2());
}

function main() {
  console.log(`Generating RSS Feed...`);

  try {
    const articles = getAllArticles();
    const posts = getAllNotes();

    generateRSSFeed(articles, posts);

    console.log(`RSS Feed generated successfully...`);
    process.exit(0);
  } catch (e) {
    console.error(`RSS Feed not generated: ${e}`);
    process.exit(1);
  }
}

main();
