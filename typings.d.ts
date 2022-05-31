declare module "@mdx-js/react";
declare module "remark-mdx";

declare global {
  namespace React {
    type FCC = React.FC & { children: React.ReactNode };
  }
}
