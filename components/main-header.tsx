import MainLogo from "./main-logo";
import Navigation from "./navigation";

const Header = () => {
  return (
    <div className="flex-row flex justify-between items-center py-2 md:py-4 mt-6 mb-8">
      <MainLogo />
      <Navigation />
    </div>
  );
};

export default Header;
