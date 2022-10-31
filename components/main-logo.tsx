import Link from "next/link";

const MainLogo = () => {
  return (
    <Link href="/" passHref>
      <a className="hover:underline">
        <b>GIANCARLO</b>BUOMPRISCO
      </a>
    </Link>
  );
};

export default MainLogo;
