import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import markdownStyles from "./markdown-styles.module.css";
import MDXComponents from "../components/mdx-components";

type Props = {
  content: MDXRemoteSerializeResult;
};

const PostBody = ({ content }: Props) => {
  const styles = markdownStyles["markdown"];

  return (
    <div className={`max-w-2xl mx-auto leading-loose ${styles}`}>
      <MDXRemote {...content} components={MDXComponents}></MDXRemote>
    </div>
  );
};

export default PostBody;
