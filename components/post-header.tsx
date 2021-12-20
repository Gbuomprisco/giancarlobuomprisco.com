import Link from "next/link";

import DateFormatter from "./date-formatter";
import PostTitle from "./post-title";
import CollectionTag from "./collection-tag";
import DraftBadge from "./draft-badge";
import Article from "../types/article";
import BlogPost from "../types/note";
import SeriesTitle from "./series-title";
import Author from "./author";
import Tag from "./tag";

type Props = {
  post: Article | BlogPost;
};

const PostHeader = ({ post }: Props) => {
  const { title, date, readingTime, live, collection } = post;
  const series = "series" in post && post.series;

  return (
    <>
      {series && <SeriesTitle collection={collection}>{series}</SeriesTitle>}

      <PostTitle>{title}</PostTitle>

      <div className="mb-8 flex space-x-3 items-center justify-center">
        <CollectionTag logoSize="22px" collection={collection} />
        <PostTags tags={post.tags} collection={collection.name} />
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="flex flex-row space-x-2 items-center justify-center">
          {live ? null : <DraftBadge>Draft</DraftBadge>}

          <Author />

          <span className="text-gray-600">·</span>

          <div className="text-sm text-center text-gray-600">
            <DateFormatter dateString={date} />
          </div>

          <span className="text-gray-600">·</span>
          <span className="text-gray-600 text-sm">{readingTime}</span>
        </div>
      </div>
    </>
  );
};

function PostTags({
  tags,
  collection,
}: {
  tags: string[];
  collection: string;
}) {
  return (
    <>
      {(tags ?? [])
        .filter((tag) => {
          // exclude collections with the same name as the tag
          return tag.toLowerCase() !== collection.toLowerCase();
        })
        .map((tag) => {
          const href = `/tags/${tag}`;

          return (
            <Tag key={tag}>
              <Link href="/tags/[tag]" as={href}>
                {tag}
              </Link>
            </Tag>
          );
        })}
    </>
  );
}

export default PostHeader;
