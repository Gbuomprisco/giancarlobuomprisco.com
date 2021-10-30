import MainLogo from "./main-logo";
import Navigation from "./navigation";

const Header = () => {
  return (
    <div className="flex-row flex justify-between items-center my-8 md:my-12">
      <MainLogo />
      <Navigation />
    </div>
  );
};

export default Header;
