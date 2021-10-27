import Link from "next/link";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();

  const links = {
    About: {
      label: "About Me",
      path: "/about",
    },
    Contact: {
      label: "Contact me",
      path: "/contact",
    },
  };

  const isActive = (path: string) => {
    return router.pathname === path;
  };

  const Item = ({ link }: { link: { label: string; path: string } }) => {
    return (
      <li
        className={
          "text-gray-700 hover:text-gray-900" +
          (isActive(link.path) ? "font-bold" : "")
        }
      >
        <Link href={link.path}>{link.label}</Link>
      </li>
    );
  };

  return (
    <ul className="flex space-x-8 px-4">
      <Item link={links.About} />
      {false && <Item link={links.Contact} />}
    </ul>
  );
};

export default Navigation;
