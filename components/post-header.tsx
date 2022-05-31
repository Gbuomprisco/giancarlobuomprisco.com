import Link from "next/link";

import DateFormatter from "./date-formatter";
import PostTitle from "./post-title";
import CollectionTag from "./collection-tag";
import Article from "../types/article";
import BlogPost from "../types/note";
import SeriesTitle from "./series-title";
import Author from "./author";
import Tag from "./tag";
import SubHeading from "./subheading";
import { TWITTER_URL } from "../lib/constants";

type Props = {
  post: Article | BlogPost;
};

const PostHeader = ({ post }: Props) => {
  const { title, date, readingTime, live, collection, excerpt } = post;
  const series = "series" in post && post.series;

  return (
    <>
      {live ? null : (
        <DraftBar readingTime={readingTime} content={post.content} />
      )}

      <div className={"flex flex-col space-y-8 md:space-y-12"}>
        <div className="flex flex-col md:flex-row md:items-center md:space-y-0 space-y-4 justify-center">
          <div className="flex flex-row space-x-2 items-center">
            <div className={"flex flex-row space-x-4"}>
              <Author />

              <div>
                <p>
                  <a
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                    href={TWITTER_URL}
                  >
                    Giancarlo Buomprisco
                  </a>
                </p>

                <div className="text-sm text-center text-gray-500 flex space-x-1">
                  <DateFormatter dateString={date} />
                  <span className="text-gray-400">·</span>
                  <span className="text-gray-500 text-sm">{readingTime}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:flex flex-1 space-x-3 hidden items-center justify-start md:justify-end">
            <CollectionTag logoSize="22px" collection={collection} />
            <PostTags tags={post.tags} collection={collection.name} />
          </div>
        </div>

        {series ? (
          <SeriesTitle collection={collection}>{series}</SeriesTitle>
        ) : null}

        <div className={"flex flex-col space-y-2"}>
          <PostTitle>{title}</PostTitle>
          <SubHeading>{excerpt}</SubHeading>
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

function DraftBar(
  props: React.PropsWithChildren<{
    readingTime: string;
    content: string;
  }>
) {
  const words = props.content.replaceAll("#", "").split(" ").length;

  return (
    <div
      className={
        "fixed bottom-0 left-0 w-full h-8" +
        " bg-yellow-300 text-sm font-semibold text-center flex items-center" +
        " justify-center"
      }
    >
      Draft - {props.readingTime} - {words} words
    </div>
  );
}

export default PostHeader;
