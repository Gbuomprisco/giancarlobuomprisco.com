import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";

import Container from "../../components/container";
import PostBody from "../../components/post-body";
import MainHeader from "../../components/main-header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import ArticlesList from "../../components/articles-list";
import CollectionBrandingBar from "../../components/collection-branding-bar";
import SectionSeparator from "../../components/section-separator";
import ConvertkitPostSignup from "../../components/convertkit-post-signup";
import SeriesList from "../../components/series-list";

import {
  getArticleBySlug,
  getAllArticles,
  getPostsByCollection,
  getPostsBySeries,
} from "../../lib/api";

import PostTitle from "../../components/post-title";
import markdownToHtml from "../../lib/markdownToHtml";
import Article from "../../types/article";
import CollectionName from "../../components/collection-name";

type Props = {
  post: Article;
  morePosts: Article[];
  series: Article[];
  preview?: boolean;
};

const Post = ({ post, morePosts, preview, series }: Props) => {
  const router = useRouter();

  if (!router.isFallback && (!post?.slug || !post.collection)) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <CollectionBrandingBar collection={post.collection} />

      <Container>
        <MainHeader />

        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-16">
              <Head>
                <title>{post.title}</title>

                <meta property="twitter:title" content={post.title} />
                <meta property="og:description" content={post.excerpt} />
                <meta property="article:published_time" content={post.date} />

                <meta
                  property="og:image"
                  content={post.ogImage?.url || post.coverImage}
                />
              </Head>

              <PostHeader post={post} />

              <div className="mb-12 max-w-2xl mx-auto">
                <SeriesList posts={series} series={post.series} />
              </div>

              <PostBody content={post.content} />
            </article>

            <div className="max-w-2xl mx-auto">
              <SeriesList posts={series} series={post.series} />
            </div>

            <div className="w-full md:w-8/12 mx-auto">
              <ConvertkitPostSignup />
            </div>

            {Boolean(morePosts.length) && (
              <div>
                <SectionSeparator />

                <h3 className="text-2xl md:text-3xl text-center font-semibold my-4 md:my-12 flex flex-row space-x-4 items-center justify-center">
                  <span>More Posts for</span>{" "}
                  <CollectionName logoSize="28px" name={post.collection} />
                </h3>

                <ArticlesList posts={morePosts} />
              </div>
            )}
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
    collection: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const { slug, collection } = params;
  const maxReadMorePosts = 6;

  const post = getArticleBySlug(slug, [
    "title",
    "date",
    "slug",
    "content",
    "ogImage",
    "coverImage",
    "collection",
    "series",
  ]) as Article;

  const morePosts = getPostsByCollection(collection)
    .filter((item) => item.slug !== slug)
    .slice(0, maxReadMorePosts);

  const series = post.series ? getPostsBySeries(post.series) : [];
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
      series,
      morePosts,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllArticles(["slug", "series", "collection"]);

  return {
    paths: posts.map(({ slug, collection }) => {
      return {
        params: {
          collection,
          slug,
        },
      };
    }),
    fallback: false,
  };
}
