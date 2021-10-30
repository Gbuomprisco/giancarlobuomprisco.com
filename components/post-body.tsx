import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import markdownStyles from "./markdown-styles.module.css";
import MDXRenderer from "./mdx-renderer";

type Props = {
  content: MDXRemoteSerializeResult;
};

const PostBody = ({ content }: Props) => {
  const styles = markdownStyles["markdown"];

  return (
    <div className={`max-w-2xl mx-auto leading-loose ${styles}`}>
      <MDXRenderer content={content} />
    </div>
  );
};

export default PostBody;
