import { getBrandingByCollection } from "../lib/collectionBranding";

const SeriesTitle: React.FC<{ collection: string }> = ({
  children,
  collection,
}) => {
  const branding = getBrandingByCollection(collection);

  const style: Record<string, string> = {
    color: branding.colorPrimary,
    lineHeight: "1.2",
  };

  return (
    <h1
      className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 text-center"
      style={style}
    >
      {children}
    </h1>
  );
};

export default SeriesTitle;
