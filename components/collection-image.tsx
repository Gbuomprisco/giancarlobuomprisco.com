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

  const style: Record<string, string> = {
    width: size,
    height: size,
  };

  return (
    <img
      className="object-contain"
      loading="lazy"
      style={style}
      src={collection.logo}
      alt={collection.name}
    />
  );
}

export default CollectionImage;
