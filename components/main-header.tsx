import MainLogo from "./main-logo";
import Navigation from "./navigation";

const Header = () => {
  return (
    <div className="flex-row flex justify-between items-center my-6 md:my-8">
      <MainLogo />
      <Navigation />
    </div>
  );
};

export default Header;
