import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";

import Container from "../../components/container";
import MainHeader from "../../components/main-header";
import Layout from "../../components/layout";
import ArticlesList from "../../components/articles-list";
import PostTitle from "../../components/post-title";
import CollectionBrandingBar from "../../components/collection-branding-bar";

import { getPostsBySeriesSlug, getAllSeries, slugify } from "../../lib/api";
import Article from "../../types/article";

type Props = {
  collection: string;
  series: string;
  posts: Article[];
};

const Series = ({ posts, collection, series }: Props) => {
  const router = useRouter();

  if (!router.isFallback && !posts.length) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <Head>
        <title>{series}</title>
      </Head>

      <CollectionBrandingBar collection={collection} />

      <Container>
        <MainHeader />

        <PostTitle>{series}</PostTitle>

        <div className="my-16">
          <ArticlesList posts={posts} />
        </div>
      </Container>
    </Layout>
  );
};

export default Series;

type Params = {
  params: {
    series: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const { series } = params;
  const posts = getPostsBySeriesSlug(series);

  return {
    props: {
      series: posts[0]?.series,
      collection: posts[0]?.collection,
      posts,
    },
  };
}

export async function getStaticPaths() {
  const allSeries = getAllSeries().map(slugify);

  return {
    paths: allSeries.map((series) => {
      return {
        params: {
          series,
        },
      };
    }),
    fallback: false,
  };
}
