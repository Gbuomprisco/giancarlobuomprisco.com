import Link from "next/link";
import { useRouter } from "next/router";

import Article from "../types/article";
import DateFormatter from "./date-formatter";

const SeriesList: React.FC<{
  series: string | undefined;
  posts: Article[];
}> = ({ series, posts }) => {
  const router = useRouter();

  if (!series) {
    return null;
  }

  return (
    <div className="mx-auto flex flex-col">
      <h3 className="font-medium text-lg md:text-2xl mb-4">
        <b className="font-bold">
          {series} ({posts.length} Part Series)
        </b>
      </h3>

      <div className="flex flex-col space-y-4">
        {posts.map(({ collection, title, slug, date, readingTime }, index) => {
          const isCurrent = router.asPath.includes(slug);

          const style = isCurrent
            ? {
                backgroundColor: collection.primaryColor,
              }
            : {};

          const href = `/${collection.name.toLowerCase()}/${slug}`;
          const hrefString = `/[collection]/[slug]`;

          return (
            <div key={slug} className="flex flex-row items-center space-x-6">
              <div>
                <Link as={href} href={hrefString} passHref>
                  <div
                    style={style}
                    className={`rounded-full cursor-pointer w-10 h-10 opacity-90 hover:opacity-100 flex items-center justify-center ${
                      isCurrent
                        ? "font-bold text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    <span>{index + 1}</span>
                  </div>
                </Link>
              </div>

              <div className="flex flex-col space-y-1">
                <h3 className="leading-snug text-xl">
                  <Link as={href} href={hrefString}>
                    <a
                      className={`hover:underline ${
                        isCurrent ? "font-bold" : "font-medium"
                      }`}
                    >
                      {title}
                    </a>
                  </Link>
                </h3>

                <div className="text-xs mb-2 flex flex-row space-x-2 items-center">
                  <div className="text-gray-600">
                    <DateFormatter dateString={date} />
                  </div>

                  <span className="text-gray-600">·</span>
                  <span className="text-gray-600">{readingTime}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SeriesList;
