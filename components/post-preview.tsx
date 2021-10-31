import Link from "next/link";

import DateFormatter from "./date-formatter";
import CollectionName from "./collection-name";
import Post from "../types/blog-post";

type Props = {
  post: Post;
};

const PostPreview = ({ post }: Props) => {
  const { title, slug, date, collection, readingTime } = post;

  const collectionName = collection.name.toLowerCase();
  const href = `/${collectionName}/${slug}`;
  const hrefString = "/[collection]/[slug]";

  return (
    <div>
      <h3 className="text-2xl font-bold mb-2 leading-snug">
        <Link as={href} href={hrefString}>
          <a className="hover:underline">{title}</a>
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
          <CollectionName collection={collection} />
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
