import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import CollectionName from "./collection-name";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  collection: string;
  readingTime: string;
};

const PostHeader = ({
  title,
  coverImage,
  date,
  collection,
  readingTime,
}: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>

      <div className="mb-4 flex justify-center">
        <CollectionName logoSize="24px" name={collection} />
      </div>

      <div className="max-w-2xl mx-auto mb-6">
        <div className="flex flex-row space-x-2 items-center justify-center">
          <div className="text-sm text-center text-gray-600">
            <DateFormatter dateString={date} />
          </div>

          <span className="text-gray-500">·</span>
          <span className="text-gray-500 text-sm">{readingTime}</span>
        </div>
      </div>

      <div className="mb-8 md:mb-16 sm:mx-0">
        <div className="w-12/12 md:w-8/12 mx-auto flex justify-center">
          <CoverImage title={title} src={coverImage} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
