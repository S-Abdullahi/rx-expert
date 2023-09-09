'use client'
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenu } from "react-icons/hi";
import { useAppContext } from "../Context";
import SideBar from "./SideBar";

type INavItem = {
  title: string;
  url: string;
};

const navItem: INavItem[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Solutions",
    url: "/solution",
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

export default function NavBar() {
  const { isOpen, menuToggle } = useAppContext();
  return (
    <div className="bg-white h-[73px] flex justify-between items-center  px-6 lg:px-32">
      <Image src="/rx-logo.svg" alt="logo" width={116} height={61} />
      <div className="flex gap-4 items-center">
        <div className="md:flex gap-4 hidden">
          {navItem.map((item) => {
            const { title, url } = item;
            return (
              <Link href={url} key={title}>
                {title}
              </Link>
            );
          })}
        </div>
        <HiOutlineMenu
          className="md:hidden text-2xl mr-3 cursor-pointer"
          onClick={() => menuToggle()}
        />
        <button className="text-white bg-[#0F468E] px-3 py-1 rounded-md hidden lg:block">
          Free Risk Assessment
        </button>
      </div>
      {isOpen && <SideBar />}
    </div>
  );
}
