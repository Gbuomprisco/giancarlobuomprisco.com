import Head from "next/head";

import Container from "../components/container";
import ArticlesList from "../components/articles-list";
import Intro from "../components/intro";
import Layout from "../components/layout";
import MainHeader from "../components/main-header";

import { TITLE, MISSION_STATEMENT } from "../lib/constants";
import { getAllArticles, getAllPosts } from '../lib/api';
import Post from "../types/article";
import PostsList from '../components/posts-list';

type Props = {
  posts: Post[];
  articles: Post[];
};

const Index = ({ posts, articles }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title key="title">
            {TITLE} | {MISSION_STATEMENT}
          </title>
        </Head>

        <Container>
          <MainHeader />

          <div className={'my-12 md:my-24'}>
            <Intro />
          </div>

          <div className={''}>
            <div>
              <h2 className="text-2xl font-bold">Latest Articles</h2>

              <div className="mt-4">
                <ArticlesList posts={articles} />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Latest Posts</h2>

              <div className="mt-4">
                <PostsList posts={posts} />
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

  const posts = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "collection",
  ]).slice(0, 6);

  return {
    props: { articles, posts },
  };
};