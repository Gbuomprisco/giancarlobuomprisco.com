import Container from "../components/container";
import PostsList from "../components/posts-list";
import Intro from "../components/intro";
import Layout from "../components/layout";
import MainHeader from "../components/main-header";

import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Post from "../types/post";
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
            <PostsList posts={allPosts} />
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
    "collection",
  ]);

  return {
    props: { allPosts },
  };
};
