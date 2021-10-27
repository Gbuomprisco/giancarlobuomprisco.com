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
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
            collection={post.collection}
            readingTime={post.readingTime}
          />
        ))}
      </GridList>
    </section>
  );
};

export default PostsList;
