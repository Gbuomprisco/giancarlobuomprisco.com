import Link from "next/link";

import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import CollectionName from "./collection-name";
import PostType from "../types/post";

type Props = {
  post: PostType;
};

const PostPreview = ({ post }: Props) => {
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

  return (
    <div>
      <div className="mb-3">
        <CoverImage
          slug={slug}
          title={postTitle}
          src={coverImage}
          collection={collection}
          width="300px"
          height="150px"
        />
      </div>

      <h3 className="text-2xl font-bold mb-2 leading-snug">
        <Link as={`/${collection}/${slug}`} href="/[collection]/[slug]">
          <a className="hover:underline">{postTitle}</a>
        </Link>
      </h3>

      <div className="text-xs mb-2 flex flex-row space-x-2 items-center">
        <div className="text-gray-600">
          <DateFormatter dateString={date} />
        </div>

        <span className="text-gray-600">·</span>
        <span className="text-gray-600">{readingTime}</span>
        <span className="text-gray-600">·</span>

        <div className="text-xs">
          <CollectionName name={collection} />
        </div>
      </div>

      <p className="leading-relaxed mb-4 text-sm">{excerpt}</p>
    </div>
  );
};

export default PostPreview;
