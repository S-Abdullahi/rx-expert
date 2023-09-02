import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenu } from "react-icons/hi";
import Button from "./components/button";
import SectionTitle from "./components/SectionTitle";

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
    <div>
      <div className="bg-[url('/bnr-bg-home.png')] bg-no-repeat bg-cover">
        <div className="text-sm text-[#F5F5F5] flex flex-col md:flex-row gap-2 md:justify-between py-4 px-6 lg:px-32">
          <p className=" text-[#F5F5F5]">
            950 Boardwalk Suite 305, San Marcos, CA 92078
          </p>
          <div className="flex flex-col md:flex-row md:items-center md:gap-4">
            <p className=" text-[#F5F5F5]">+ 234 816 6628 857</p>
            <p className=" text-[#F5F5F5]">rexpert@gmail.com</p>
          </div>
        </div>

        <div className="bg-white h-[73px] flex justify-between items-center  px-6 lg:px-32">
          <Image src="/rx-logo.svg" alt="logo" width={116} height={61} />
          <div className="flex gap-4 items-center">
            <ul className="md:flex gap-4 hidden">
              {navItem.map((item) => {
                const { title, url } = item;
                return (
                  <li key={title}>
                    <Link href={url}>{title}</Link>
                  </li>
                );
              })}
            </ul>
            <HiOutlineMenu className="md:hidden text-2xl mr-3" />
            <button className="text-white bg-[#0F468E] px-3 py-1 rounded-md hidden lg:block">
              Free Risk Assessment
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:px-32 px-6 mt-8 items-center gap-3">
          <div className="text-white flex flex-col items-start">
            <div className="flex flex-col items-end">
              <div className="flex gap-2 items-center ">
                <Image src="/line-1.png" alt="line" width={95} height={0} />
                <p className="font-extralight">RISK MITIGATION</p>
              </div>
              <h1 className="lg:text-[104px] sm:text-[80px] text-[65px] font-semibold -mt-6">
                Solutions
              </h1>
            </div>

            <div>
              <h1 className="text-[28px] sm:text-[35px] lg:text-[44px] font-light -mt-4 md:-mt-7 leading-7 md:leading-[45px]">
                Are Our Top{" "}
                <span className="text-[#62BB45] font-semibold">Priority</span>
              </h1>
              <p className="max-w-[455px] text-white text-base md:text-lg font-medium mt-4">
                How well does your health care organization prevent controlled
                substance drug diversion?
              </p>
              <Button buttonText="Read More" type="read more" />
            </div>
          </div>
          <div className="flex justify-center">
            <Image src="/img-1.png" alt="main" width={318} height={540} />
          </div>
        </div>
      </div>
      <section className="px-6 lg:px-32 mt-16">
        <SectionTitle
          sectionName="ABOUT US"
          sectionHead="Terri Vidals"
          sectionTertiary="Founder of"
          sectionTertiaryEmphasis="Rxpert Solutions"
        />
      </section>
    </div>
  );
}
