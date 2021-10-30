import Container from "../components/container";
import ArticlesList from "../components/articles-list";
import Intro from "../components/intro";
import Layout from "../components/layout";
import MainHeader from "../components/main-header";

import { getAllArticles } from "../lib/api";
import Head from "next/head";
import Post from "../types/article";
import { TITLE } from "../lib/constants";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>{TITLE}</title>
        </Head>

        <Container>
          <MainHeader />

          <div>
            <Intro />
          </div>

          <div className="flex-col space-y-12 mt-8 md:mt-16">
            <ArticlesList posts={allPosts} />
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllArticles([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
    "collection",
    "series",
  ]);

  return {
    props: { allPosts },
  };
};
