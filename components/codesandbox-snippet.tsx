import ClientOnly from "./client-only";
import LazyRender from "./lazy-render";

const CodeSandboxSnippet = ({
  src,
}: React.PropsWithChildren<{ src: string }>) => {
  const style = {
    width: "100%",
    height: "500px",
    border: 0,
    overflow: "hidden",
  };

  return (
    <div className={"my-4"}>
      <div>
        <span
          style={{
            backgroundColor: "var(--accent)",
            color: "var(--accent-contrast",
          }}
          className={
            "font-bold text-sm font-sans p-2 pb-4 rounded-tr-md rounded-tl-md"
          }
        >
          CodeSandbox Demo
        </span>
      </div>

      <ClientOnly>
        <LazyRender rootMargin="200px 0px">
          <iframe
            src={src}
            style={style}
            title="condescending-tree-r0mki"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          />
        </LazyRender>
      </ClientOnly>
    </div>
  );
};

export default CodeSandboxSnippet;
