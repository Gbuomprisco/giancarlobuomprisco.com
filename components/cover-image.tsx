import Link from "next/link";
import Image from "next/image";
import cn from "classnames";

type Props = {
  title: string;
  src: string;
  href: string;
  className?: string;
  width?: string;
  height?: string;
  slug?: string;
  preloadImage?: boolean;
};

const CoverImage = ({
  title,
  src,
  slug,
  href,
  className,
  preloadImage,
}: Props) => {
  const image = (
    <Image
      unoptimized={process.env.NODE_ENV !== "production"}
      layout="responsive"
      width={16}
      height={9}
      className={cn("block rounded-t-md", {
        "transition-shadow duration-500": slug,
      })}
      src={src}
      alt={`Cover Image for ${title}`}
      priority={preloadImage}
    />
  );

  return (
    <div className={`sm:mx-0 ${className}`}>
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
