import Link from "next/link";

const Header = () => {
  return (
    <div className="flex-col md:flex-row flex md:justify-between mt-16 mb-16 md:mb-12">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
        <Link href="/">
          <a className="hover:underline">Blog</a>
        </Link>
        .
      </h2>
    </div>
  );
};

export default Header;
