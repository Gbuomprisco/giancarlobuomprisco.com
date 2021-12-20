import Head from "next/head";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { AUTHOR, SITE_NAME, SITE_URL, TWITTER_URL } from "../lib/constants";

import Container from "./container";
import PostBody from "./post-body";
import MainHeader from "./main-header";
import PostHeader from "./post-header";
import Layout from "./layout";
import CollectionBrandingBar from "./collection-branding-bar";
import SectionSeparator from "./section-separator";
import ConvertKitPostSignup from "./convertkit-post-signup";
import PostTitle from "./post-title";
import CollectionName from "./collection-name";

import PostType from "../types/note";
import PostsList from "./posts-list";
import ArticleType from "../types/article";
import ArticlesList from "./articles-list";

const Post: React.FC<{
  post: PostType;
  morePosts: PostType[];
  moreArticles: ArticleType[];
  isFallback: boolean;
  content: MDXRemoteSerializeResult;
}> = ({ post, content, morePosts, moreArticles, isFallback }) => {
  const collection = post.collection;
  const coverImage = post.coverImage;
  const excerpt = post.excerpt;

  const style: Record<string, string> = {
    "--accent": collection.primaryColor,
    "--accent-light": collection.primaryColorLight,
    "--accent-contrast": collection.contrastColor,
  };

  const fullImagePath = `${SITE_URL}${coverImage}`;

  const structuredDataJson = {
    "@context": "https://schema.org/",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://google.com/article",
    },
    description: excerpt,
    headline: post.title,
    images: [fullImagePath],
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
        <CollectionBrandingBar collection={collection} />

        <Container>
          <MainHeader />

          {isFallback ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article className="mb-16">
                <Head>
                  <title>{post.title}</title>
                  <meta property="og:type" content="article" />
                  <meta
                    key="og:title"
                    property="og:title"
                    content={post.title}
                  />

                  <meta property="og:site_name" content={SITE_NAME} />
                  <meta property="article:published_time" content={post.date} />
                  <meta
                    key="twitter:title"
                    property="twitter:title"
                    content={post.title}
                  />
                  <meta
                    key="og:image"
                    property="og:image"
                    content={fullImagePath}
                  />

                  <meta
                    key="twitter:image"
                    property="twitter:image"
                    content={fullImagePath}
                  />

                  {excerpt && (
                    <>
                      <meta
                        property="og:description"
                        content={excerpt}
                        key="og:description"
                      />

                      <meta
                        key="twitter:description"
                        property="twitter:description"
                        content={excerpt}
                      />

                      <meta
                        name="description"
                        content={excerpt}
                        key="meta:description"
                      />
                    </>
                  )}
                  <script type="application/ld+json">
                    {JSON.stringify(structuredDataJson)}
                  </script>
                </Head>

                <PostHeader post={post} />

                <PostBody content={content} />
              </article>

              <div className="w-full md:w-8/12 mx-auto">
                <ConvertKitPostSignup collection={post.collection.name} />
              </div>

              {Boolean(moreArticles.length) && (
                <div>
                  <SectionSeparator />

                  <h3 className="text-2xl md:text-3xl text-center font-semibold my-4 md:my-12 flex flex-row space-x-4 items-center justify-center">
                    <span>Articles about</span>{" "}
                    <CollectionName logoSize="28px" collection={collection} />
                  </h3>

                  <ArticlesList posts={moreArticles} />
                </div>
              )}

              {Boolean(morePosts.length) && (
                <div>
                  <SectionSeparator />

                  <h3 className="text-2xl md:text-3xl text-center font-semibold my-4 md:my-12 flex flex-row space-x-4 items-center justify-center">
                    <span>Posts about</span>{" "}
                    <CollectionName logoSize="28px" collection={collection} />
                  </h3>

                  <PostsList posts={morePosts} />
                </div>
              )}
            </>
          )}
        </Container>
      </div>
    </Layout>
  );
};

export default Post;
