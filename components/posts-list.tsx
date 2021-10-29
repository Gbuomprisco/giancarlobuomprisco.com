import PostPreview from "./post-preview";
import Post from "../types/post";
import GridList from "./grid-list";

type Props = {
  posts: Post[];
};

const PostsList = ({ posts }: Props) => {
  return (
    <section>
      <GridList>
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </GridList>
    </section>
  );
};

export default PostsList;
