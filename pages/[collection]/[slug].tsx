import { useRouter } from "next/router";
import ErrorPage from "next/error";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

import Article from "../../components/article";
import Post from "../../components/post";

import {
  getArticleBySlug,
  getAllArticles,
  getArticlesByCollection,
  getPostsByCollection,
  getPostsBySeries,
  getAllPosts,
} from "../../lib/api";

import markdownToHtml from "../../lib/markdownToHtml";
import ArticleType from "../../types/article";
import PostType from "../../types/blog-post";

import { getBlogPostBySlug } from "../../lib/api";
import BlogPost from "../../types/blog-post";

enum Types {
  BlogPost,
  Article,
}

type Props = {
  type: Types;
  post: ArticleType | PostType;
  moreArticles: ArticleType[];
  morePosts: PostType[];
  series: ArticleType[];
  content: MDXRemoteSerializeResult;
};

const PostPage = ({
  post,
  type,
  morePosts,
  moreArticles,
  series,
  content,
}: Props) => {
  const router = useRouter();

  if (!router.isFallback && (!post?.slug || !post.collection)) {
    return <ErrorPage statusCode={404} />;
  }

  if (type === Types.Article) {
    return (
      <Article
        post={post as ArticleType}
        morePosts={moreArticles}
        series={series}
        content={content}
        isFallback={router.isFallback}
      />
    );
  }

  return (
    <Post
      post={post as PostType}
      morePosts={morePosts}
      content={content}
      isFallback={router.isFallback}
    />
  );
};

export default PostPage;

type Params = {
  params: {
    slug: string;
    collection: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const { slug, collection } = params;
  const maxReadMorePosts = 6;

  const { post, type } = getPostItemBySlug(slug);

  const moreArticles = getArticlesByCollection(collection)
    .filter((item) => item.slug !== slug)
    .slice(0, maxReadMorePosts);

  const morePosts = getPostsByCollection(collection)
    .filter((item) => item.slug !== slug)
    .slice(0, maxReadMorePosts);

  const seriesName =
    "series" in post ? (post as ArticleType).series : undefined;

  const series = seriesName ? getPostsBySeries(seriesName) : [];
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post,
      content,
      series,
      morePosts,
      moreArticles,
      type,
    },
  };
}

export async function getStaticPaths() {
  const articles = getAllArticles(["slug", "collection"]);
  const posts = getAllPosts(["slug", "collection"]);

  const paths = [...articles, ...posts].map(({ collection, slug }) => {
    return {
      params: {
        collection,
        slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

function getPostItemBySlug(slug: string) {
  const article = getArticleBySlug(slug, [
    "title",
    "date",
    "slug",
    "ogImage",
    "coverImage",
    "collection",
    "excerpt",
    "series",
    "content",
  ]);

  if (article) {
    return {
      post: article as ArticleType,
      type: Types.Article,
    };
  }

  return {
    post: getBlogPostBySlug(slug, [
      "title",
      "date",
      "slug",
      "collection",
      "content",
    ]) as BlogPost,
    type: Types.BlogPost,
  };
}
