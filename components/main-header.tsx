import Link from "next/link";
import Navigation from "./navigation";

const Header = () => {
  return (
    <div className="flex-col md:flex-row flex md:justify-between mt-16 mb-16 md:mb-12">
      <h2 className="font-normal tracking-tight md:tracking-tighter leading-tight">
        <Link href="/">
          <a className="hover:underline">
            <b>GIANCARLO</b>BUOMPRISCO
          </a>
        </Link>
      </h2>

      <div>
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
