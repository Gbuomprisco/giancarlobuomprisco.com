import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const MDX = `mdx`;

export function readDirectory(path: string) {
  return fs.readdirSync(path);
}

export function readFrontMatter(fullPath: string) {
  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");

    return matter(fileContents);
  } catch {
    return;
  }
}

export function getPath(slug: string, directory: string) {
  const regExp = /\.(mdx|md)$/;
  const result = slug.match(regExp);
  const realSlug = slug.replace(regExp, "");
  const extension = (result && result[0]) ?? `.${MDX}`;
  const postPath = `${realSlug}${extension}`;
  const fullPath = join(directory, postPath);

  return {
    fullPath,
    realSlug,
  };
}
