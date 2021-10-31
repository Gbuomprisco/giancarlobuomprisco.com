import Collection from "./collection";

type Hub = {
  name: string;
  collection: Collection;
  live: boolean;
  slug: string;
  content: string;
  tags: string[];
};

export default Hub;
