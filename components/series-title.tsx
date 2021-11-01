import Collection from "../types/collection";

const SeriesTitle: React.FC<{ collection: Collection }> = ({
  children,
  collection,
}) => {
  const style: Record<string, string> = {
    color: collection.primaryColor,
    lineHeight: "1.2",
  };

  return (
    <h1
      className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-2 text-center"
      style={style}
    >
      {children}
    </h1>
  );
};

export default SeriesTitle;
