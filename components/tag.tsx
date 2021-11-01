import cn from "classnames";

const Tag: React.FC<{ style?: Record<string, unknown> }> = ({
  children,
  style,
}) => {
  return (
    <div
      style={
        style ?? {
          boxShadow: `0 0 0 2px #525252`,
        }
      }
      className={cn(
        `text-center flex flex-row space-x-1 items-center cursor-pointer justify-center px-3 py-2 rounded hover:shadow-md transition-shadow font-bold`
      )}
    >
      {children}
    </div>
  );
};

export default Tag;
