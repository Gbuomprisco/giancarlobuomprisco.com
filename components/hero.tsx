const Hero: React.FC = ({ children }) => {
  return (
    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter md:leading-none mb-6 text-center">
      {children}
    </h1>
  );
};

export default Hero;
