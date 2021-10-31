import { getPath, readDirectory, readFrontMatter } from "./fs-utils";
import Collection from "../types/collection";

const COLLECTIONS_DIRECTORY = `_collections`;

const collections = readDirectory(COLLECTIONS_DIRECTORY).map((slug) => {
  const postPathData = getPath(slug, COLLECTIONS_DIRECTORY);
  const { fullPath, realSlug } = postPathData;

  return readFrontMatter(fullPath);
});

export function getCollections() {
  return collections;
}

export function getCollection(collectionName: string) {
  const collection = collections.find((item) => {
    const data = item?.data as Collection;

    return data.name.toLowerCase() === collectionName.toLowerCase();
  });

  return collection?.data as Collection;
}
