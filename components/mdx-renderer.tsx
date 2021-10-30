import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import MDXComponents from "../components/mdx-components";

const MDXRenderer: React.FC<{
  content: MDXRemoteSerializeResult;
}> = ({ content }) => {
  return <MDXRemote {...content} components={MDXComponents}></MDXRemote>;
};

export default MDXRenderer;
