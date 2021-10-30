import cn from "classnames";
import Link from "next/link";

type Props = {
  title: string;
  src: string;
  width: string;
  height: string;
  slug?: string;
  collection?: string;
};

const CoverImage = ({ title, src, slug, collection, width, height }: Props) => {
  const imageStyle = {
    width,
    height,
  };

  const image = (
    <img
      style={imageStyle}
      className={cn("shadow-small block", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
      src={src}
      alt={`Cover Image for ${title}`}
      loading="lazy"
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
