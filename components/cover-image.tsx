import cn from "classnames";
import Link from "next/link";

type Props = {
  title: string;
  src: string;
  slug?: string;
  collection?: string;
};

const CoverImage = ({ title, src, slug, collection }: Props) => {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      loading="lazy"
      className={cn("shadow-small object-contain w-full h-auto", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/${collection}/${slug}`} href="/[collection]/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
