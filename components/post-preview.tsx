import Link from "next/link";

import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import CollectionName from "./collection-name";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
  collection: string;
  readingTime: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  collection,
  readingTime,
}: Props) => {
  return (
    <div>
      <div className="mb-3">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          collection={collection}
        />
      </div>

      <h3 className="text-2xl font-bold mb-2 leading-snug">
        <Link as={`/${collection}/${slug}`} href="/[collection]/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>

      <div className="text-xs mb-2 flex flex-row space-x-2 items-center">
        <div className="text-gray-500">
          <DateFormatter dateString={date} />
        </div>

        <span className="text-gray-500">·</span>
        <span className="text-gray-500">{readingTime}</span>
        <span className="text-gray-500">·</span>

        <div className="text-xs">
          <CollectionName name={collection} />
        </div>
      </div>

      <p className="leading-relaxed mb-4 text-sm">{excerpt}</p>
    </div>
  );
};

export default PostPreview;
