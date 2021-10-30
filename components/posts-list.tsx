import PostPreview from "./post-preview";
import Post from "../types/blog-post";

type Props = {
  posts: Post[];
};

const PostsList: React.FC<Props> = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </>
  );
};

export default PostsList;
