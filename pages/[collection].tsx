import Container from "../components/container";
import MainHeader from "../components/main-header";
import ArticlesList from "../components/articles-list";
import Layout from "../components/layout";
import CollectionBrandingBar from "../components/collection-branding-bar";
import ConvertkitPostSignup from "../components/convertkit-post-signup";

import { getArticlesByCollection, getPostsByCollection } from "../lib/api";
import { getCollections, getCollectionByName } from "../lib/collections";

import Article from "../types/article";
import Post from "../types/blog-post";

import CollectionName from "../components/collection-name";
import PostTitle from "../components/post-title";
import Collection from "../types/collection";
import PostsList from "../components/posts-list";

type Props = {
  articles: Article[];
  posts: Post[];
  collection: Collection;
  preview?: boolean;
};

const CollectionPosts = ({ posts, articles, collection, preview }: Props) => {
  return (
    <Layout preview={preview}>
      <CollectionBrandingBar collection={collection} />

      <Container>
        <MainHeader />

        <div className="flex justify-center">
          <PostTitle>
            <CollectionName logoSize="90px" collection={collection} />
          </PostTitle>
        </div>

        <div className="mt-8 md:mt-12 flex flex-col space-y-8">
          {articles.length ? (
            <div className="flex flex-col space-y-4">
              <h2 className="text-xl font-bold">Latest Articles</h2>
              <ArticlesList posts={articles} />
            </div>
          ) : null}

          {posts.length ? (
            <div className="flex flex-col space-y-4">
              <h2 className="text-xl font-bold">Latest Posts</h2>
              <PostsList posts={posts} />
            </div>
          ) : null}
        </div>

        <div className="w-full md:w-8/12 mx-auto mt-8">
          <ConvertkitPostSignup />
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
