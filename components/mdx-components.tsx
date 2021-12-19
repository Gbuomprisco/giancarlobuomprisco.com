import Image from "next/image";

import { SITE_URL } from "../lib/constants";
import ArticlesList from "./articles-list";
import PostsList from "./posts-list";
import TweetEmbed from "./tweet-embed";
import CodeSandboxSnippet from "./codesandbox-snippet";

const NextImage: React.FC<Record<string, string>> = (props) => {
  const width = props.width ?? 16;
  const height = props.height ?? 10;

  return (
    <Image
      width={width}
      height={height}
      layout="responsive"
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
};

export default MDXComponents;
