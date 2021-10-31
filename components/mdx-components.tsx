import { SITE_URL } from "../lib/constants";
import ArticlesList from "./articles-list";
import PostsList from "./posts-list";
import TweetEmbed from "./tweet-embed";

const LazyImage: React.FC<Record<string, string>> = (
  props: Record<string, string>
) => (
  <img
    className={props.class}
    src={props.src}
    alt={props.alt}
    loading="lazy"
    {...props}
  />
);

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
  img: LazyImage,
  a: ExternalLink,
  ArticlesList,
  PostsList,
  TweetEmbed,
};

export default MDXComponents;
