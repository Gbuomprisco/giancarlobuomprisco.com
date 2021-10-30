import Container from "../components/container";
import MainHeader from "../components/main-header";
import ArticlesList from "../components/articles-list";
import Layout from "../components/layout";
import CollectionBrandingBar from "../components/collection-branding-bar";
import ConvertkitPostSignup from "../components/convertkit-post-signup";

import { getAllCollections, getPostsByCollection } from "../lib/api";
import Article from "../types/article";
import CollectionName from "../components/collection-name";
import PostTitle from "../components/post-title";

type Props = {
  posts: Article[];
  collection: string;
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
            <CollectionName logoSize="90px" name={collection} />
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
  const collection = params.collection;
  const posts = getPostsByCollection(collection);

  return {
    props: {
      posts,
      collection,
    },
  };
}

export async function getStaticPaths() {
  const collections = getAllCollections();

  return {
    paths: collections.map((collection) => {
      return {
        params: {
          collection,
        },
      };
    }),
    fallback: false,
  };
}
