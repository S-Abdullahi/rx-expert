import Link from "next/link";
import { MdNavigateNext } from "react-icons/md";

export interface IBreadcrumb {
  label: string;
  link?: string;
  secondLabel?: string;
}

export default function Breadcrumb(props: IBreadcrumb) {
  const { label, link, secondLabel } = props;
  return (
    <div className="text-white flex items-center ">
      <Link href="/" className="font-medium">
        Home
      </Link>
      <MdNavigateNext />
      {secondLabel ? (
        <div className="flex items-center">
          <Link href={`${link}`} className="font-medium">
            {label}
          </Link>
          <MdNavigateNext />
          <p className="font-light">{secondLabel}</p>
        </div>
      ) : (
        <p className="font-light">{label}</p>
      )}
    </div>
  );
}
