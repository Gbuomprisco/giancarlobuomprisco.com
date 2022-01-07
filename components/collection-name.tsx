import cn from "classnames";
import Link from "next/link";

import Collection from "../types/collection";
import CollectionImage from "./collection-image";

function CollectionName({
  collection,
  logoSize,
}: {
  collection: Collection;
  logoSize?: string;
}) {
  const size = logoSize ?? `16px`;

  return (
    <Link
      href="/[collection]"
      as={`/${collection.name.toLowerCase()}`}
      passHref
    >
      <div
        className={cn(
          "text-center flex flex-row space-x-1 items-center cursor-pointer",
          getCollectionClass(collection.name)
        )}
      >
        <CollectionImage collection={collection} size={size} />

        <span>{collection.name}</span>
      </div>
    </Link>
  );
}

export default CollectionName;

function getCollectionClass(name: string) {
  return `collection--${name.toLowerCase()}`;
}
