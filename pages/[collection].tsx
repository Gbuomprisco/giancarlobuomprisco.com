import Container from "../components/container";
import MainHeader from "../components/main-header";
import ArticlesList from "../components/articles-list";
import Layout from "../components/layout";
import CollectionBrandingBar from "../components/collection-branding-bar";
import ConvertkitPostSignup from "../components/convertkit-post-signup";

import { getArticlesByCollection } from "../lib/api";
import { getCollections, getCollection } from "../lib/collections";

import Article from "../types/article";
import CollectionName from "../components/collection-name";
import PostTitle from "../components/post-title";
import Collection from "../types/collection";

type Props = {
  posts: Article[];
  collection: Collection;
  preview?: boolean;
};

const CollectionPosts = ({ posts, collection, preview }: Props) => {
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

        <div className="mt-8 md:mt-12">
          <ArticlesList posts={posts} />
        </div>

        <div className="w-full md:w-8/12 mx-auto">
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
  const collection = getCollection(params.collection);
  const posts = getArticlesByCollection(collection.name);

  return {
    props: {
      posts,
      collection,
    },
  };
}

export async function getStaticPaths() {
  const collections = getCollections();

  return {
    paths: collections.map((collection) => {
      const collectionName = collection?.data.name.toLowerCase();

      return {
        params: {
          collection: collectionName,
        },
      };
    }),
    fallback: false,
  };
}
