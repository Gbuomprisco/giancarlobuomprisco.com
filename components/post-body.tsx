import { MDXProvider } from "@mdx-js/react";
import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

const LazyImage: React.FC<Record<string, string>> = (
  props: Record<string, string>
) => <img src={props.src} alt={props.alt} loading="lazy" {...props} />;

const components = {
  img: LazyImage,
};

const PostBody = ({ content }: Props) => {
  const styles = markdownStyles["markdown"];

  return (
    <div className="max-w-2xl mx-auto leading-loose">
      <MDXProvider components={components}>
        <div className={styles} dangerouslySetInnerHTML={{ __html: content }} />
      </MDXProvider>
    </div>
  );
};

export default PostBody;
