import cn from "classnames";
import Link from "next/link";

type Props = {
  title: string;
  src: string;
  href: string;
  className?: string;
  width?: string;
  height?: string;
  slug?: string;
};

const CoverImage = ({
  title,
  src,
  slug,
  href,
  width,
  height,
  className,
}: Props) => {
  const imageStyle = {
    width,
    height,
  };

  const image = (
    <img
      style={imageStyle}
      className={cn("block", {
        "hover:shadow-xl transition-shadow duration-500": slug,
        [`${className}`]: true,
      })}
      src={src}
      alt={`Cover Image for ${title}`}
      loading="lazy"
    />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={href} href="/[collection]/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
