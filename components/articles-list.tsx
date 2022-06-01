import ArticlePreview from "./article-preview";
import Post from "../types/article";
import GridList from "./grid-list";

type Props = {
  posts: Post[];
  shouldPreload?: boolean;
};

const ArticlesList = ({ posts, shouldPreload }: Props) => {
  const useShouldPreload = shouldPreload ?? true;

  return (
    <GridList>
      {posts.map((post, index) => {
        const preloadImage = useShouldPreload ? index < 6 : false;

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
