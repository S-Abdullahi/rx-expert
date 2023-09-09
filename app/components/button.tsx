import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

type IButton = {
  buttonText: string;
  type?: "read more" | "submit";
  variant?: "outlined" | "contained" | "submit";
  themeColor?: "primary" | "secondary" | "tertiary";
  url?: string;
};

export default function Button(prop: IButton) {
  const { buttonText, type, variant, themeColor, url } = prop;
  let buttonbg;
  if (variant === "outlined") {
    if (themeColor === "tertiary") {
      buttonbg = "bg-transparent text-[#363636] border-[#363636]";
    } else if (themeColor === "primary") {
      buttonbg = "bg-transparent text-white border-white";
    }
  }
  if (variant === "contained") {
    buttonbg = "bg-[#0F468E] text-white";
  }
  if (variant === "submit") {
    buttonbg = "bg-[#62BB45] text-white";
  }
  return (
    <Link href={url || ''}>
      <button
        className={`flex items-center gap-2 px-6 py-2 mt-5 rounded-full border  ${buttonbg}`}
      >
        {buttonText} <BsArrowRight />{" "}
      </button>
    </Link>
  );
}
