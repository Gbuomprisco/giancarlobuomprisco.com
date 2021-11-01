import cn from "classnames";

const Tag: React.FC<{ style?: Record<string, unknown> }> = ({
  children,
  style,
}) => {
  return (
    <div
      style={
        style ?? {
          border: `2px solid #323232`,
        }
      }
      className={cn(
        `text-center flex flex-row space-x-1 items-center cursor-pointer justify-center px-2 py-1 rounded-md hover:shadow-md transition-shadow font-bold`
      )}
    >
      {children}
    </div>
  );
};

export default Tag;
