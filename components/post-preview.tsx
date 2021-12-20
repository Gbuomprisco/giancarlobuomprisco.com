import Link from "next/link";

import DateFormatter from "./date-formatter";
import CollectionName from "./collection-name";
import Post from "../types/note";
import BlogPostImageSvg from "./blog-post-image-svg";

type Props = {
  post: Post;
};

const PostPreview = ({ post }: Props) => {
  const { title, slug, date, collection, readingTime } = post;

  const collectionName = collection.name.toLowerCase();
  const href = `/${collectionName}/${slug}`;
  const hrefString = "/[collection]/[slug]";

  return (
    <div className="border border-gray-100 rounded-md hover:shadow-xl transition-shadow duration-500">
      <div>
        <div className="rounded-t-md">
          <h2>
            <Link as={href} href={hrefString} passHref>
              <a className={"flex"}>
                <BlogPostImageSvg
                  className={"rounded-t-md"}
                  fontSize={"3.5rem"}
                  height={"100%"}
                  width={"100%"}
                  viewBox="0 0 800 180"
                  title={title}
                  color={collection.primaryColor}
                  imageUrl={collection.logo ?? ""}
                />
              </a>
            </Link>
          </h2>
        </div>
      </div>

      <div className="text-xs mb-6 flex flex-row space-x-2 items-center px-4">
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
