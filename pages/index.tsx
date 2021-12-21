import Head from "next/head";

import Container from "../components/container";
import ArticlesList from "../components/articles-list";
import Intro from "../components/intro";
import Layout from "../components/layout";
import MainHeader from "../components/main-header";

import * as constants from "../lib/constants";
import { getAllArticles, getAllNotes } from "../lib/api";
import Post from "../types/article";
import Note from "../types/note";

type Props = {
  notes: Post[];
  articles: Post[];
};

const Index = ({ articles }: Props) => {
  const structuredData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: constants.TITLE,
    url: constants.SITE_URL,
  });

  return (
    <>
      <Layout>
        <Head>
          <title key="title">
            {constants.TITLE} | {constants.MISSION_STATEMENT}
          </title>

          <script
            key="ld:json"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: structuredData }}
          ></script>
        </Head>

        <Container>
          <MainHeader />

          <div className={"my-12 md:my-24"}>
            <Intro />
          </div>

          <div className={""}>
            <div>
              <div className="mt-4">
                <ArticlesList posts={articles} />
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const articles = getAllArticles([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
    "collection",
    "series",
  ]).slice(0, 6);

  const notes = getAllNotes([
    "title",
    "date",
    "slug",
    "coverImage",
    "collection",
    "excerpt",
  ]).slice(0, 6);

  return {
    props: { articles, notes },
  };
};
