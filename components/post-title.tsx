const PostTitle: React.FC = ({ children }) => {
  return (
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter md:leading-none mb-8 text-center w-full lg:w-9/12 justify-center mx-auto">
      {children}
    </h1>
  );
};

export default PostTitle;
