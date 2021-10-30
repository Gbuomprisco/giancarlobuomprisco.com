import Link from "next/link";

const MainLogo = () => {
  return (
    <h2 className="font-normal tracking-tight md:tracking-tighter leading-tight">
      <Link href="/" passHref>
        <a className="hover:underline">
          <b>GIANCARLO</b>BUOMPRISCO
        </a>
      </Link>
    </h2>
  );
};

export default MainLogo;
