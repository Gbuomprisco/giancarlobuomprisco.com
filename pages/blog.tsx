import Head from "next/head";

import Container from "../components/container";
import PostsList from "../components/posts-list";
import Layout from "../components/layout";
import MainHeader from "../components/main-header";
import Hero from "../components/hero";
import SubHeading from "../components/subheading";

import { getAllPosts } from "../lib/api";
import Post from "../types/article";
import { TITLE } from "../lib/constants";

type Props = {
  posts: Post[];
};

const Blog = ({ posts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title key="title">{TITLE} | Blog</title>

          <meta
            key="meta:description"
            name="description"
            content={
              "Short-form posts, notes and tips about Angular, React, Next, Firebase, NestJS, StencilJS"
            }
          />
        </Head>

        <Container>
          <MainHeader />

          <Hero>Blog</Hero>

          <SubHeading>Short-form posts, notes and tips</SubHeading>

          <div className="space-y-12 mt-8 md:mt-16">
            <div className="w-full">
              <div className="mx-auto flex flex-col space-y-8">
                <PostsList posts={posts} />
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Blog;

export const getStaticProps = async () => {
  return {
    props: { posts: getAllPosts() },
  };
};
