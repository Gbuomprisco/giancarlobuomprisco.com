import Link from "next/link";
import IconLogo from "./icon-logo";

const MainLogo = () => {
  return (
    <Link href="/" passHref>
      <a className="hover:underline">
        <IconLogo />
      </a>
    </Link>
  );
};

export default MainLogo;
