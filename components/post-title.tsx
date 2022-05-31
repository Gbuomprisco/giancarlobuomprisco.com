const PostTitle = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter md:leading-none mb-4 mdd:mb-8 w-full">
      {children}
    </h1>
  );
};

export default PostTitle;
