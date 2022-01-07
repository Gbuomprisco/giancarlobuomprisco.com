import Head from "next/head";

import Container from "../components/container";
import ArticlesList from "../components/articles-list";
import Layout from "../components/layout";
import MainHeader from "../components/main-header";
import Hero from "../components/hero";
import SubHeading from "../components/subheading";

import { getAllArticles } from "../lib/api";
import Post from "../types/article";
import { TITLE } from "../lib/constants";

type Props = {
  posts: Post[];
};

const Articles = ({ posts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title key="title">{TITLE} | Articles</title>

          <meta
            key="meta:description"
            name="description"
            content={
              "Long-form Articles and Guides about Angular, React, Next, Firebase, NestJS, StencilJS"
            }
          ></meta>
        </Head>

        <Container>
          <MainHeader />

          <Hero>Articles</Hero>

          <SubHeading>
            Long-form Articles and Guides, mostly on software
          </SubHeading>

          <div className="flex-col space-y-12 mt-8 md:mt-16">
            <ArticlesList posts={posts} />
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Articles;

export const getStaticProps = async () => {
  return {
    props: { posts: getAllArticles() },
  };
};
