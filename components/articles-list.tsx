import ArticlePreview from "./article-preview";
import Post from "../types/article";
import GridList from "./grid-list";

type Props = {
  posts: Post[];
};

const ArticlesList = ({ posts }: Props) => {
  return (
    <GridList>
      {posts.map((post) => (
        <ArticlePreview key={post.slug} post={post} />
      ))}
    </GridList>
  );
};

export default ArticlesList;
