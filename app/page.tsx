import Image from "next/image";
import RootLayout from "./layout";
import Link from "next/link";

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
    title: "About Us",
    url: "/about",
  },
  {
    title: "Solutions",
    url: "/solution",
  },
  {
    title: "Resources",
    url: "/about",
  },
  {
    title: "Contact Us",
    url: "/contact",
  },
];

export default function Home() {
  return (
    <div className="bg-[url('../public/bnr-bg-home.png')] bg-no-repeat bg-cover">
      <div className="text-sm text-[#F5F5F5] flex justify-between py-4 px-6 md:px-20">
        <p className=" text-[#F5F5F5]">
          950 Boardwalk Suite 305, San Marcos, CA 92078
        </p>
        <div className="flex items-center gap-4">
          <p className=" text-[#F5F5F5]">+ 234 816 6628 857</p>
          <p className=" text-[#F5F5F5]">rexpert@gmail.com</p>
        </div>
      </div>

      <div className="bg-white h-[73px] flex justify-between items-center  px-6 md:px-20">
        <Image src="/rx-logo.svg" alt="logo" width={116} height={61} />
        <div>
          <ul className="flex gap-4">
            {navItem.map((item) => {
              const { title, url } = item;
              return (
                <li>
                  <Link href={url}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div>hello</div>
    </div>
  );
}
