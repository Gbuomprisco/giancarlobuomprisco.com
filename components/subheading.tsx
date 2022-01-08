const SubHeading: React.FC<{
  className?: string
}> = ({ children, className }) => {
  return (
    <h2 className={`text-xl md:text-2xl text-gray-500 ${className}`}>
      {children}
    </h2>
  );
};

export default SubHeading;
