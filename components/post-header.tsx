import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import CollectionName from "./collection-name";
import DraftBadge from "./draft-badge";
import Article from "../types/article";
import BlogPost from "../types/blog-post";
import SeriesTitle from "./series-title";

const PostHeader = ({ post }: { post: Article | BlogPost }) => {
  const { title, date, collection, readingTime, live } = post;

  const series = "series" in post && post.series;
  const coverImage = "coverImage" in post ? post.coverImage : "";

  return (
    <>
      {series && <SeriesTitle collection={collection}>{series}</SeriesTitle>}
      <PostTitle>{title}</PostTitle>

      <div className="mb-4 flex justify-center">
        <CollectionName logoSize="18px" name={collection} />
      </div>

      <div className="max-w-2xl mx-auto mb-6">
        <div className="flex flex-row space-x-2 items-center justify-center">
          {!live && <DraftBadge>Draft</DraftBadge>}

          <div className="text-sm text-center text-gray-600">
            <DateFormatter dateString={date} />
          </div>

          <span className="text-gray-600">·</span>
          <span className="text-gray-600 text-sm">{readingTime}</span>
        </div>
      </div>

      {coverImage && (
        <div className="mb-8 md:mb-16 sm:mx-0">
          <div className="mx-auto w-12/12 lg:w-10/12 xl:w-8/12 justify-center">
            <CoverImage
              width="100%"
              height="auto"
              title={title}
              src={coverImage}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PostHeader;
