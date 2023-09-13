import Link from "next/link";
import { useAppContext } from "../Context";
import { useContext } from "react";

type INavItem = {
  title: string;
  url: string;
  innerLink?: { title: string; url: string }[] | undefined;
};
const navItem: INavItem[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Solutions",
    url: "/solution",
    innerLink: [
      { title: "Diversion Mitigation", url: "/solution/diversion" },
      { title: "Drug Diversion", url: "/solution/drug-diversion" },
    ],
  },

  {
    title: "Resources",
    url: "/blog",
  },
  {
    title: "About Us",
    url: "/about",
  },
  {
    title: "Contact Us",
    url: "/contact",
  },
];
export default function SideBar() {
  const { isOpen, menuToggle } = useAppContext();
  return (
    <div className={`w-[45%] bg-white md:hidden  fixed top-0 left-0 ${isOpen ? 'h-auto transition-all duration-300 ease-in-out' : '-ml-[100%] transition-all duration-300 ease-in-out'} z-10 py-10 px-4`}>
      <div className="flex flex-col">
        {navItem.map((nav) => {
          const { title, url, innerLink } = nav;
          return (
            <div className=" flex flex-col border-b-[0.5px]  py-3 pl-2" key={`${title}-${url}`}>
              <Link
                href={url}
                className=" w-full"
                onClick={() => menuToggle()}
              >
                {title}
              </Link>
              {innerLink?.map((item) => {
                const { title, url } = item;
                return (
                  <div
                    className="flex flex-col font-light"
                    key={`${title}-${url}`}
                  >
                    <Link
                      href={url}
                      className="pl-2"
                      onClick={() => menuToggle()}
                    >
                      {title}
                    </Link>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
