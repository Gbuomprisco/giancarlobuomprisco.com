import BasePost from "./base-post";

interface Article extends BasePost {
  ogImage?: {
    url: string;
  };

  series?: string;
  canonical?: string;
}

export default Article;
