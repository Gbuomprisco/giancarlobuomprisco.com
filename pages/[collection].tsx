import Head from "next/head";

import Container from "../components/container";
import MainHeader from "../components/main-header";
import ArticlesList from "../components/articles-list";
import Layout from "../components/layout";
import ConvertKitPostSignup from "../components/convertkit-post-signup";

import { getArticlesByCollection, getPostsByCollection } from "../lib/api";
import { getCollections, getCollectionByName } from "../lib/collections";

import Article from "../types/article";
import Post from "../types/note";

import CollectionName from "../components/collection-name";
import Collection from "../types/collection";
import Hero from "../components/hero";

type Props = {
  articles: Article[];
  posts: Post[];
  collection: Collection;
  preview?: boolean;
};

const CollectionPosts = ({ posts, articles, collection, preview }: Props) => {
  return (
    <Layout preview={preview}>
      <Head>
        <title key="title">{collection.name}</title>
      </Head>

      <Container>
        <MainHeader />

        <div className="flex justify-center">
          <Hero>
            <CollectionName logoSize="90px" collection={collection} />
          </Hero>
        </div>

        <div className="mt-8 md:mt-12 flex flex-col">
          {articles.length ? (
            <div className="flex flex-col space-y-4">
              <ArticlesList posts={articles} />
            </div>
          ) : null}

          {posts.length ? (
            <div className="flex flex-col space-y-4">
              <ArticlesList posts={posts} />
            </div>
          ) : null}
        </div>

        <div className="w-full md:w-8/12 mx-auto mt-8">
          <ConvertKitPostSignup collection={collection.name} />
        </div>
      </Container>
    </Layout>
  );
};

export default CollectionPosts;

type Params = {
  params: {
    slug: string;
    collection: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const collection = getCollectionByName(params.collection);
  const articles = getArticlesByCollection(params.collection);
  const posts = getPostsByCollection(params.collection);

  return {
    props: {
      posts,
      articles,
      collection,
    },
  };
}

export async function getStaticPaths() {
  const paths = getCollections().map((collection) => {
    const collectionName = collection?.name.toLowerCase();

    return {
      params: {
        collection: collectionName,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
