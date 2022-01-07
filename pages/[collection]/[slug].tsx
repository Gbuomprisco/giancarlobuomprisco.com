import { useRouter } from "next/router";
import { renderToStaticMarkup } from "react-dom/server";
import ErrorPage from "next/error";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

import Article from "../../components/article";

import {
  getArticleBySlug,
  getAllArticles,
  getArticlesByCollection,
  getPostsByCollection,
  getPostsBySeries,
  getAllNotes,
} from "../../lib/api";

import markdownToHtml from "../../lib/markdownToHtml";
import ArticleType from "../../types/article";
import PostType from "../../types/note";

import { getNoteBySlug } from "../../lib/api";
import BlogPost from "../../types/note";
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

const PostPage = ({ post, moreArticles, series, content }: Props) => {
  const router = useRouter();

  if (!router.isFallback && (!post?.slug || !post.collection)) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Article
      post={post as ArticleType}
      morePosts={moreArticles}
      series={series}
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

  const { post } = getPostItemBySlug(slug);

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

  const image = post.coverImage || post.ogImage?.url;

  if (!image) {
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
    },
  };
}

export async function getStaticPaths() {
  const articles = getAllArticles(["slug", "collection"]);
  const posts = getAllNotes(["slug", "collection"]);

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
    post: getNoteBySlug(slug, [
      "title",
      "date",
      "slug",
      "collection",
      "content",
      "tags",
      "excerpt",
    ]) as BlogPost,
    type: Types.BlogPost,
  };
}

async function generateCoverImage(note: BlogPost) {
  const outputFile = `${note.slug}.webp`;

  try {
    await assertBannerDoesNotExist(outputFile);
  } catch {
    const color = note.collection.primaryColor;
    const imageUrl = note.collection.logo;

    const imageBuffer = imageUrl
      ? await convertImageToBase64(imageUrl)
      : undefined;

    const imageData = imageBuffer
      ? Buffer.from(imageBuffer).toString("base64")
      : undefined;

    const svg = renderToStaticMarkup(
      <BlogPostImageSvg
        imageData={imageData}
        color={color}
        title={note.title}
        width={"800"}
        height={"418"}
        fontSize={"4em"}
        injectStyle={true}
      />
    );

    await createBannerImage(svg, outputFile);
  }
}
