import Head from "next/head";

import { TITLE } from "../lib/constants";
import Container from "../components/container";
import Layout from "../components/layout";
import MainHeader from "../components/main-header";
import Hero from "../components/hero";
import SubHeading from "../components/subheading";

import { getAllNotes } from "../lib/api";
import ArticlesList from "../components/articles-list";
import Article from "../types/article";

type Props = {
  posts: Article[];
};

const Writings = ({ posts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title key="title">{TITLE} - Writings</title>

          <meta
            key="meta:description"
            name="description"
            content={"Writings, Retrospectives, and Thoughts"}
          />
        </Head>

        <Container>
          <MainHeader />

          <Hero>Writings</Hero>

          <SubHeading>Retrospectives, Thoughts, and Life</SubHeading>

          {posts.length ? (
            <>
              <div className="space-y-12 mt-8 md:mt-16">
                <div className="w-full">
                  <div className="mx-auto flex flex-col space-y-8">
                    <ArticlesList posts={posts} />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <span>No post found</span>
          )}
        </Container>
      </Layout>
    </>
  );
};

export default Writings;

export const getStaticProps = async () => {
  const posts = getAllNotes();

  return {
    props: {
      posts,
    },
  };
};
