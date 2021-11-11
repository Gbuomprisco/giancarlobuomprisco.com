import Link from "next/link";
import { useRouter } from "next/router";
import { createRef } from "react";
import MainLogo from "./main-logo";

interface Link {
  label: string;
  path: string;
}

const Navigation = () => {
  const router = useRouter();
  const nav = createRef<HTMLUListElement>();

  const links: Record<string, Link> = {
    Articles: {
      label: "Articles",
      path: "/articles",
    },
    Blog: {
      label: "Blog",
      path: "/blog",
    },
    About: {
      label: "About",
      path: "/about",
    },
    Contact: {
      label: "Contact me",
      path: "/contact",
    },
    Consulting: {
      label: "Consulting",
      path: "/consulting",
    },
  };

  const isActive = (path: string) => {
    return router.pathname.split("/").includes(path.slice(1));
  };

  const Item: React.FC<{ link: Link }> = ({ link }) => {
    return (
      <li
        className={
          "active:text-black text-lg lg:text-base " +
          (isActive(link.path)
            ? "border-b-4 pb-1 border-yellow-200  font-bold"
            : "text-gray-800 hover:text-gray-900 font-medium hover:underline")
        }
      >
        <Link href={link.path} passHref>
          <a className="block">{link.label}</a>
        </Link>
      </li>
    );
  };

  const navOpenClassName = "nav-open";

  function toggleMenu() {
    const el = nav.current;

    if (!el) return;

    if (el.classList.contains(navOpenClassName)) {
      el.classList.remove(navOpenClassName);
    } else {
      el.classList.add(navOpenClassName);
    }
  }

  return (
    <>
      <div className="justify-end lg:hidden flex">
        <button
          aria-label="Open Menu"
          className="navbar-burger"
          type="button"
          onClick={toggleMenu}
        >
          <span className="block relative w-7 rounded-sm bg-black h-1"></span>
          <span className="block relative w-7 rounded-sm bg-black h-1 mt-1"></span>
          <span className="block relative w-7 rounded-sm bg-black h-1 mt-1"></span>
        </button>
      </div>

      <ul
        className="lg:space-x-8 px-4 hidden flex-col space-y-4 lg:space-y-0 lg:flex lg:flex-row nav"
        ref={nav}
      >
        <li className="flex flex-row justify-between pt-4 mb-6 lg:hidden">
          <div>
            <MainLogo />
          </div>

          <div className="flex justify-end">
            <span
              onClick={toggleMenu}
              className="bg-gray-100 font-bold text-sm rounded-full shadow-xl flex items-center justify-center w-16 h-16"
            >
              Close
            </span>
          </div>
        </li>

        <Item link={links.Blog} />
        <Item link={links.Articles} />
        <Item link={links.Consulting} />
        <Item link={links.About} />
        <Item link={links.Contact} />
      </ul>
    </>
  );
};

export default Navigation;