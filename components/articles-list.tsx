import ArticlePreview from "./article-preview";
import Post from "../types/article";
import GridList from "./grid-list";

type Props = {
  posts: Post[];
};

const ArticlesList = ({ posts }: Props) => {
  return (
    <GridList>
      {posts.map((post, index) => {
        const preloadImage = index < 6;

        return (
          <ArticlePreview
            preloadImage={preloadImage}
            key={post.slug}
            post={post}
          />
        );
      })}
    </GridList>
  );
};

export default ArticlesList;
