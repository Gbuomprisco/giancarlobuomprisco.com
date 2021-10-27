type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  live: boolean;
  collection: string;
  tags: string[];
  readingTime: string;

  ogImage: {
    url: string;
  };

  content: string;
};

export default PostType;
