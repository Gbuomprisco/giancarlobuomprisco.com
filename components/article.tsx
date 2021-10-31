import Head from "next/head";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

import Container from "./container";
import PostBody from "./post-body";
import MainHeader from "./main-header";
import PostHeader from "./post-header";
import Layout from "./layout";
import ArticlesList from "./articles-list";
import CollectionBrandingBar from "./collection-branding-bar";
import SectionSeparator from "./section-separator";
import ConvertkitPostSignup from "./convertkit-post-signup";
import SeriesList from "./series-list";
import PostTitle from "./post-title";
import CollectionName from "./collection-name";

import Article from "../types/article";
import { getBrandingByCollection } from "../lib/collectionBranding";

const Article: React.FC<{
  post: Article;
  content: MDXRemoteSerializeResult;
  series: Article[];
  morePosts: Article[];
  isFallback: boolean;
}> = ({ post, content, series, morePosts, isFallback }) => {
  const title = post.series ? `${post.series}: ${post.title}` : post.title;
  const ogImage = post.ogImage?.url || post.coverImage;
  const branding = getBrandingByCollection(post.collection);

  const style: Record<string, string> = {
    "--accent": branding.colorPrimary,
    "--accent-light": branding.colorPrimaryLight,
  };

  return (
    <Layout>
      <CollectionBrandingBar collection={post.collection} />

      <Container>
        <MainHeader />

        {isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-16" style={style}>
              <Head>
                <title>{title}</title>

                <meta property="twitter:title" content={title} />
                <meta property="article:published_time" content={post.date} />

                {post.excerpt && (
                  <meta property="og:description" content={post.excerpt} />
                )}

                {post.canonical && (
                  <link rel="canonical" href={post.canonical} />
                )}

                {ogImage && <meta property="og:image" content={ogImage} />}
              </Head>

              <PostHeader post={post} />

              <div className="mb-12 max-w-2xl mx-auto">
                <SeriesList posts={series} series={post.series} />
              </div>

              <PostBody content={content} />
            </article>

            <div className="max-w-2xl mx-auto">
              <SeriesList posts={series} series={post.series} />
            </div>

            <div className="w-full md:w-8/12 mx-auto my-4">
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

export default Article;
