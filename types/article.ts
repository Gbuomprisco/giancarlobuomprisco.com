import BasePost from "./base-post";

interface Article extends BasePost {
  coverImage: string;

  ogImage?: {
    url: string;
  };

  series?: string;
  canonical?: string;
}

export default Article;
