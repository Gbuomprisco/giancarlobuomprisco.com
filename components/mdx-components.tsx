import Image from "next/image";

import { SITE_URL } from "../lib/constants";
import ArticlesList from "./articles-list";
import PostsList from "./posts-list";
import TweetEmbed from "./tweet-embed";
import CodeSandboxSnippet from "./codesandbox-snippet";
import ClientOnly from "./client-only";
import LazyRender from "./lazy-render";

type ImageLayout = "responsive" | "fixed" | "fill" | "intrinsic" | undefined;

const Video: React.FC<{
  src: string;
  width?: string;
  type?: string;
  muted?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
}> = ({ src, type, width, ...props }) => {
  const useType = type ?? "video/mp4";
  const muted = props.muted ?? true;
  const autoPlay = props.autoPlay ?? true;
  const loop = props.loop ?? true;

  return (
    <ClientOnly>
      <LazyRender rootMargin={"-200px 0px"}>
        <video
          className="my-4"
          width={width ?? `100%`}
          height="auto"
          playsInline={!autoPlay}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          controls={!autoPlay}
        >
          <source src={src} type={useType} />
        </video>
      </LazyRender>
    </ClientOnly>
  );
};

const NextImage: React.FC<Record<string, string>> = (props) => {
  const width = props.width ?? "4";
  const height = props.height ?? "3";
  const layout = props.layout ?? "responsive";

  return (
    <Image
      width={width}
      height={height}
      layout={layout as ImageLayout}
      className={props.class}
      src={props.src}
      alt={props.alt}
      {...props}
    />
  );
};

const ExternalLink: React.FC<{ href: string }> = ({ href, children }) => {
  if (href.startsWith(SITE_URL) || href[0] === "/") {
    return <a href={href}>{children}</a>;
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

const MDXComponents = {
  img: NextImage,
  a: ExternalLink,
  ArticlesList,
  PostsList,
  TweetEmbed,
  CodeSandboxSnippet,
  Image: NextImage,
  Video,
};

export default MDXComponents;
