import prism from "remark-prism";
import { serialize } from "next-mdx-remote/serialize";

export default async function markdownToHtml(markdown: string, scope = {}) {
  return serialize(markdown, {
    scope,
    mdxOptions: {
      remarkPlugins: [prism],
    },
  });
}
