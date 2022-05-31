const SubHeading: React.FC<React.PropsWithChildren<{
  className?: string
}>> = ({ children, className }) => {
  return (
    <h2 className={`text-xl md:text-2xl text-gray-400 ${className}`}>
      {children}
    </h2>
  );
};

export default SubHeading;
