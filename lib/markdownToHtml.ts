import prism from "remark-prism";
import { serialize } from "next-mdx-remote/serialize";

export default async function markdownToHtml(markdown: string) {
  return serialize(markdown, {
    mdxOptions: {
      remarkPlugins: [prism],
    },
  });
}
