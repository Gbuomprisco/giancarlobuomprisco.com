import cn from "classnames";
import classes from "./tag.module.css";

const Tag: React.FC<React.PropsWithChildren<{ style?: Record<string, unknown> }>> = ({
  children,
  style,
}) => {
  return (
    <div
      style={
        style ?? {
          "--backgroundColor": `#eee`,
        }
      }
      className={cn(
        `text-center flex flex-row space-x-1 items-center cursor-pointer justify-center px-2 py-1 rounded hover:shadow-md transition-shadow font-bold ${classes["Tag"]}`
      )}
    >
      {children}
    </div>
  );
};

export default Tag;
