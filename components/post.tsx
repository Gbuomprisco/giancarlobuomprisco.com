import Head from "next/head";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

import Container from "./container";
import PostBody from "./post-body";
import MainHeader from "./main-header";
import PostHeader from "./post-header";
import Layout from "./layout";
import CollectionBrandingBar from "./collection-branding-bar";
import SectionSeparator from "./section-separator";
import ConvertkitPostSignup from "./convertkit-post-signup";
import PostTitle from "./post-title";
import CollectionName from "./collection-name";

import PostType from "../types/blog-post";
import PostsList from "./posts-list";
import { getBrandingByCollection } from "../lib/collectionBranding";

const Post: React.FC<{
  post: PostType;
  morePosts: PostType[];
  isFallback: boolean;
  content: MDXRemoteSerializeResult;
}> = ({ post, content, morePosts, isFallback }) => {
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
                <title>{post.title}</title>

                <meta property="twitter:title" content={post.title} />
                <meta property="article:published_time" content={post.date} />
              </Head>

              <PostHeader post={post} />
              <PostBody content={content} />
            </article>

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

                <PostsList posts={morePosts} />
              </div>
            )}
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Post;
