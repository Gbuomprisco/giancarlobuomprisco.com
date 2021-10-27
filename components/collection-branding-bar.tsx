import { getBrandingByCollection } from "../lib/collectionBranding";
import styles from "./collection-branding-bar.module.css";

const CollectionBrandingBar: React.FC<{ collection: string }> = ({
  collection,
}) => {
  const branding = getBrandingByCollection(collection);

  return (
    <div
      style={
        {
          "--from": branding.colorPrimaryLight,
          "--to": branding.colorPrimary,
        } as Record<string, string>
      }
      className={styles.gradient}
    ></div>
  );
};

export default CollectionBrandingBar;
