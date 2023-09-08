import Image from "next/image";
import NavBar from "./NavBar";
import Breadcrumb from "./Breadcrumb";
import { IBreadcrumb } from "./Breadcrumb";

interface IHeader extends IBreadcrumb {
  title: string;
}

export default function Header(props: IHeader) {
  const { title, link, label, secondLabel } = props;
  return (
    <div>
      <div className="bg-[url('/bg-header.png')] bg-no-repeat bg-cover pb-6">
        <div className="text-sm text-[#F5F5F5] flex flex-col md:flex-row gap-2 md:justify-between py-4 px-6 lg:px-32">
          <p className=" text-[#F5F5F5]">
            950 Boardwalk Suite 305, San Marcos, CA 92078
          </p>
          <div className="flex flex-col md:flex-row md:items-center md:gap-4">
            <p className=" text-[#F5F5F5]">+ 234 816 6628 857</p>
            <p className=" text-[#F5F5F5]">rexpert@gmail.com</p>
          </div>
        </div>

        <NavBar />

        <div className="my-5 px-6 lg:px-32">
          <p className="font-medium text-[40px] text-white">{title}</p>
          <Breadcrumb label={label} link={link} secondLabel={secondLabel} />
        </div>
      </div>
    </div>
  );
}
