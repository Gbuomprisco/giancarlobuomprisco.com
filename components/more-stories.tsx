import PostPreview from "./post-preview";
import Post from "../types/post";

type Props = {
  posts: Post[];
  title?: string;
};

const MoreStories = ({ posts, title }: Props) => {
  return (
    <section>
      <h3 className="mb-8 text-3xl md:text-4xl font-bold tracking-tighter leading-tight">
        {title || `Posts`}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
