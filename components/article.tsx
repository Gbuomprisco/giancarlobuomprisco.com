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
import ConvertKitPostSignup from "./convertkit-post-signup";
import SeriesList from "./series-list";
import PostTitle from "./post-title";
import CollectionName from "./collection-name";

import Article from "../types/article";
import { AUTHOR, SITE_URL, TWITTER_URL } from "../lib/constants";

const Article: React.FC<{
  post: Article;
  content: MDXRemoteSerializeResult;
  series: Article[];
  morePosts: Article[];
  isFallback: boolean;
}> = ({ post, content, series, morePosts, isFallback }) => {
  const title = post.series ? `${post.series}: ${post.title}` : post.title;
  const ogImage = post.ogImage?.url ?? post.coverImage;
  const collection = post.collection;
  const fullImagePath = `${SITE_URL}${ogImage}`;

  const style: Record<string, string> = {
    "--accent": collection.primaryColor,
    "--accent-light": collection.primaryColor,
    "--accent-contrast": collection.contrastColor,
  };

  const structuredDataJson = {
    "@context": "https://schema.org/",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://google.com/article",
    },
    image: [fullImagePath],
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: AUTHOR,
      url: TWITTER_URL,
    },
    datePublished: post.date,
  };

  return (
    <Layout>
      <div style={style}>
        <CollectionBrandingBar collection={post.collection} />

        <Container>
          <MainHeader />

          {isFallback ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article className="mb-16">
                <Head>
                  <title>{title}</title>

                  <meta property="og:type" content="article" />
                  <meta property="og:title" content={title} key="og:title" />
                  <meta property="article:published_time" content={post.date} />

                  <meta
                    key="twitter:title"
                    property="twitter:title"
                    content={title}
                  />
                  <meta
                    key="twitter:description"
                    property="twitter:description"
                    content={post.excerpt}
                  />
                  <meta
                    key="twitter:image"
                    property="twitter:image"
                    content={fullImagePath}
                  />

                  {post.excerpt && (
                    <>
                      <meta
                        property="og:description"
                        content={post.excerpt}
                        key="og:description"
                      />

                      <meta
                        name="description"
                        content={post.excerpt}
                        key="meta:description"
                      />
                    </>
                  )}

                  {post.canonical && (
                    <link
                      rel="canonical"
                      href={post.canonical}
                      key="canonical"
                    />
                  )}

                  <meta property="og:image" content={fullImagePath} />

                  <script key="ld:json" type="application/ld+json">
                    {JSON.stringify(structuredDataJson)}
                  </script>
                </Head>

                <PostHeader post={post} />

                <div className="mb-6 max-w-2xl mx-auto">
                  <SeriesList posts={series} series={post.series} />
                </div>

                <PostBody content={content} />
              </article>

              <div className="max-w-2xl mx-auto">
                <SeriesList posts={series} series={post.series} />
              </div>

              <div className="w-full md:w-8/12 mx-auto my-4">
                <ConvertKitPostSignup collection={post.collection.name} />
              </div>

              {Boolean(morePosts.length) && (
                <div>
                  <SectionSeparator />

                  <h3 className="text-2xl md:text-3xl text-center font-semibold my-4 md:my-12 flex flex-row space-x-4 items-center justify-center">
                    <span>Learn more about</span>{" "}
                    <CollectionName logoSize="28px" collection={collection} />
                  </h3>

                  <ArticlesList posts={morePosts} />
                </div>
              )}
            </>
          )}
        </Container>
      </div>
    </Layout>
  );
};

export default Article;
