import { BsArrowRight } from "react-icons/bs";

type IButton = {
  buttonText: string;
  type: "read more" | "submit";
};

export default function Button(prop: IButton) {
  const { buttonText, type } = prop;
  let buttonbg;
  if (type === "read more") {
    buttonbg = "bg-transparent";
  } else if (type === "submit") {
    buttonbg = "bg-[#62BB45]";
  }
  return (
    <button
      className={`flex items-center gap-2 px-6 py-2 mt-5 rounded-full border text-white border-white ${buttonbg}`}
    >
      {buttonText} <BsArrowRight />{" "}
    </button>
  );
}
