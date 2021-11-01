const GridList: React.FC = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-12 lg:gap-x-14 gap-y-20 md:gap-y-24 mb-32">
      {children}
    </div>
  );
};

export default GridList;
