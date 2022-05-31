const GridList = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-12 lg:gap-x-14 gap-y-16 md:gap-y-18 mb-16">
      {children}
    </div>
  );
};

export default GridList;
