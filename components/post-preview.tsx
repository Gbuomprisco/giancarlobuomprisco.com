import Link from "next/link";

import DateFormatter from "./date-formatter";
import CollectionName from "./collection-name";
import Post from "../types/blog-post";
import BlogPostImageSvg from './blog-post-image-svg';

type Props = {
  post: Post;
};

const PostPreview = ({ post }: Props) => {
  const { title, slug, date, collection, readingTime } = post;

  const collectionName = collection.name.toLowerCase();
  const href = `/${collectionName}/${slug}`;
  const hrefString = "/[collection]/[slug]";

  return (
    <div className="shadow-lg rounded-md hover:shadow-xl transition-shadow duration-500">
      <div className="mb-3">
        <div className="h-full w-full lg:h-48 xl:h-48 rounded-t-md">
          <Link as={href} href={hrefString} passHref>
            <a className={'flex'}>
              <BlogPostImageSvg
                className={'rounded-t-md'}
                fontSize={'3.2rem'}
                height={'100%'}
                width={'100%'}
                title={title}
                color={collection.primaryColor}
                imageUrl={collection.logo ?? ''}
              />
            </a>
          </Link>
        </div>
      </div>

      <div className="px-4 py-2">
        <h2 className="text-2xl font-bold mb-2 leading-snug">
          <Link as={href} href={hrefString}>
            <a className="hover:underline">{title}</a>
          </Link>
        </h2>
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
