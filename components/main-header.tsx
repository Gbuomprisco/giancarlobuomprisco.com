import MainLogo from "./main-logo";
import Navigation from "./navigation";

const Header = () => {
  return (
    <div className="flex-row flex justify-between items-center py-4 mt-2 mb-6">
      <MainLogo />
      <Navigation />
    </div>
  );
};

export default Header;
