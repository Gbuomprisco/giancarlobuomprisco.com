import { useRouter } from "next/router";
import { renderToStaticMarkup } from "react-dom/server";
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
import BlogPostImageSvg from "../../components/blog-post-image-svg";

import {
  assertBannerDoesNotExist,
  convertImageToBase64,
  createBannerImage,
  getBannerFromSlug,
} from "../../lib/banners";

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
      moreArticles={moreArticles}
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

  if (!("coverImage" in post)) {
    await generateCoverImage(post);

    post.ogImage = {
      url: getBannerFromSlug(post.slug),
    };
  }

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

  const paths = [...articles, ...posts].map((post) => {
    const slug = post.slug;
    const collection = post.collection.name.toLowerCase();

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
    "canonical",
    "tags",
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
      "tags",
    ]) as BlogPost,
    type: Types.BlogPost,
  };
}

async function generateCoverImage(post: BlogPost) {
  const outputFile = `${post.slug}.webp`;

  try {
    await assertBannerDoesNotExist(outputFile);
  } catch {
    const color = post.collection.primaryColor;
    const imageUrl = post.collection.logo;

    const imageBuffer = imageUrl
      ? await convertImageToBase64(imageUrl)
      : undefined;
    const imageData = imageBuffer
      ? new Buffer(imageBuffer).toString("base64")
      : undefined;

    const svg = renderToStaticMarkup(
      <BlogPostImageSvg
        imageData={imageData}
        color={color}
        title={post.title}
        width={"800"}
        height={"418"}
        fontSize={"4em"}
      />
    );

    await createBannerImage(svg, outputFile);
  }
}
