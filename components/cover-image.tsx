import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  width: string;
  height: string;
  slug?: string;
  collection?: string;
};

const CoverImage = ({ title, src, slug, collection, width, height }: Props) => {
  const image = (
    <span
      className={cn("shadow-small block", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
    >
      <Image
        src={src}
        alt={`Cover Image for ${title}`}
        width={width}
        height={height}
        layout="responsive"
      />
    </span>
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
