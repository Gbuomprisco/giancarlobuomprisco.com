import PostPreview from "./post-preview";
import Post from "../types/blog-post";
import GridList from './grid-list';

type Props = {
  posts: Post[];
};

const PostsList: React.FC<Props> = ({ posts }) => {
  return (
    <GridList>
      {posts.map((post) => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </GridList>
  );
};

export default PostsList;
