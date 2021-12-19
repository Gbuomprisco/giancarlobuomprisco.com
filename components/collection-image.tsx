import Image from "next/image";
import Collection from "../types/collection";

function CollectionImage({
  collection,
  size,
}: {
  collection: Collection;
  size: string;
}) {
  if (collection.emoji) {
    return <span style={{ fontSize: size }}>{collection.emoji}</span>;
  }

  if (collection.logo) {
    return (
      <Image
        className="object-contain"
        loading="lazy"
        layout="fixed"
        width={size}
        height={size}
        src={collection.logo}
        alt={collection.name}
      />
    );
  }

  return null;
}

export default CollectionImage;
