import Link from "next/link";

import CollectionImage from "./collection-image";
import Collection from "../types/collection";
import Tag from "./tag";

function CollectionBadge({
  collection,
  logoSize,
}: {
  collection: Collection;
  logoSize?: string;
}) {
  const size = logoSize ?? `16px`;

  const style = {
    "--backgroundColor": collection.primaryColor,
    "--color": collection.contrastColor,
  };

  const href = `/${collection.name.toLowerCase()}`;

  return (
    <Tag style={style}>
      <Link href="/[collection]" as={href} passHref>
        <a className="flex flex-row space-x-1 items-center justify-center">
          <CollectionImage collection={collection} size={size} />

          <span className="hover:underline">{collection.name}</span>
        </a>
      </Link>
    </Tag>
  );
}

export default CollectionBadge;
