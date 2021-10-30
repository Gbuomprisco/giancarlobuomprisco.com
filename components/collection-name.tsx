import cn from "classnames";
import Link from "next/link";

import { getBrandingByCollection } from "../lib/collectionBranding";

function CollectionName({
  name,
  logoSize,
}: {
  name: string;
  logoSize?: string;
}) {
  const size = logoSize ?? `16px`;

  return (
    <Link href="/[collection]" as={`/${name}`} passHref>
      <div
        className={cn(
          "text-center flex flex-row space-x-1 items-center cursor-pointer",
          getCollectionClass(name)
        )}
      >
        <CollectionImage name={name} size={size} />

        <span className="hover:underline">{getName(name)}</span>
      </div>
    </Link>
  );
}

export default CollectionName;

function CollectionImage({ name, size }: { name: string; size: string }) {
  if (isEmojiType(name)) {
    return <span style={{ fontSize: size }}>{getEmojiByCollection(name)}</span>;
  }

  const style: Record<string, string> = {
    width: size,
    height: size,
  };

  return (
    <img
      className="object-contain"
      loading="lazy"
      style={style}
      src={getCollectionImageLink(name)}
      alt={name}
    />
  );
}

function getName(name: string) {
  const initial = name.slice(0, 1).toUpperCase();

  return initial + name.slice(1);
}

function getCollectionClass(name: string) {
  return `collection--${name}`;
}

function getCollectionImageLink(name: string) {
  const branding = getBrandingByCollection(name);

  return branding.logo as string;
}

function getEmojiByCollection(name: string) {
  switch (name) {
    case "thoughts":
      return `🤔`;
  }
}

function isEmojiType(name: string) {
  return ["thoughts"].includes(name);
}
