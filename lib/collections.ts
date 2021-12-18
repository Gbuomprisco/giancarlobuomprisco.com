import { getPath, readDirectory, readFrontMatter } from "./fs-utils";
import Collection from "../types/collection";

const COLLECTIONS_DIRECTORY = `_collections`;

const collections = readDirectory(COLLECTIONS_DIRECTORY).map((slug) => {
  const postPathData = getPath(slug, COLLECTIONS_DIRECTORY);
  const { fullPath, realSlug } = postPathData;
  const data = readFrontMatter(fullPath);

  return { data, slug, realSlug };
});

export function getCollections() {
  return collections.map((item) => item.data?.data as Collection);
}

export function getCollectionBySlug(slug: string) {
  const collection = collections.find((item) => {
    // we support querying by both [collection] and [collection].mdx
    return [item?.slug, item?.realSlug].includes(slug);
  });

  if (!collection) {
    throw new Error(`Collection with slug "${slug}" not found`);
  }

  const data = collection.data?.data as Collection;

  return {
    ...data,
    slug: collection.realSlug,
  };
}

export function getCollectionByName(collectionName: string) {
  const collection = collections.find((item) => {
    return item?.data?.data.name.toLowerCase() === collectionName.toLowerCase();
  });

  if (!collection) {
    console.trace();
  }

  return collection?.data?.data as Collection;
}
