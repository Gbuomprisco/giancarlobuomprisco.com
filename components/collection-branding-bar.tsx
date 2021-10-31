import styles from "./collection-branding-bar.module.css";
import Collection from "../types/collection";

const CollectionBrandingBar: React.FC<{ collection: Collection }> = ({
  collection,
}) => {
  return (
    <div
      style={
        {
          "--from": collection.primaryColorLight,
          "--to": collection.primaryColor,
        } as Record<string, string>
      }
      className={styles.gradient}
    ></div>
  );
};

export default CollectionBrandingBar;
