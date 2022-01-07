import Link from "next/link";

import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import CollectionName from "./collection-name";
import Article from "../types/article";
import BlogPostImageSvg from "./blog-post-image-svg";

type Props = {
  post: Article;
  preloadImage?: boolean;
};

const ArticlePreview = ({ post, preloadImage }: Props) => {
  const {
    series,
    title,
    slug,
    coverImage,
    collection,
    date,
    readingTime,
    excerpt,
  } = post;

  const postTitle = series ? `${series}: ${title}` : title;
  const href = `/${collection.name.toLowerCase()}/${slug}`;

  return (
    <div className="border border-gray-100 rounded-md hover:shadow-xl transition-shadow duration-500">
      <div className="mb-3 border-b border-gray-50">
        {coverImage ? (
          <CoverImage
            className="h-full w-full lg:h-48 xl:h-48 rounded-t-md"
            slug={slug}
            title={postTitle}
            src={coverImage}
            href={href}
            preloadImage={preloadImage}
          />
        ) : (
          <Link href="/[collection]/[slug]" as={href} passHref>
            <a className={"flex"}>
              <BlogPostImageSvg
                className={"rounded-t-md"}
                fontSize={"3.2rem"}
                height={"100%"}
                width={"100%"}
                title={title}
                color={collection.primaryColor}
                imageUrl={collection.logo ?? ""}
              />
            </a>
          </Link>
        )}
      </div>

      <div className="px-4 py-2">
        <h3 className="text-xl font-bold mb-2 leading-snug">
          <Link as={href} href="/[collection]/[slug]">
            <a className="hover:underline">{postTitle}</a>
          </Link>
        </h3>
      </div>

      <div className="text-xs mb-4 flex flex-row space-x-2 items-center px-4">
        <div className="text-gray-600">
          <DateFormatter dateString={date} />
        </div>

        <span className="text-gray-600">·</span>
        <span className="text-gray-600">{readingTime}</span>
        <span className="text-gray-600">·</span>

        <div className="text-xs">
          <CollectionName collection={collection} />
        </div>
      </div>

      <p className="leading-relaxed mb-4 px-4 text-sm">{excerpt}</p>
    </div>
  );
};

export default ArticlePreview;
