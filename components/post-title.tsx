const PostTitle: React.FC = ({ children }) => {
  return (
    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter md:leading-none mb-8 text-center">
      {children}
    </h1>
  );
};

export default PostTitle;
