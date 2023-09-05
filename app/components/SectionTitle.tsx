import Image from "next/image";

type ISectionTitle = {
  sectionName: string;
  sectionHead: string;
  sectionTertiary: string;
  sectionTertiaryEmphasis: string;
  textColorOne?: "primary" | "secondary" | "tertiary" | "accent";
  textColorTwo?: "primary" | "secondary" | "tertiary" | "accent";
  textColorThree?: "primary" | "secondary" | "tertiary" | "accent";
};

const textColorFn = (color: string) => {
  switch (color) {
    case "primary":
      return "text-[#0F468E]";
      break;
    case "secondary":
      return "text-[#FFFF]";
      break;
    case "tertiary":
      return "text-[#363636]";
      break;
    case "accent":
      return "text-[#62BB45]";
      break;
    default:
  }
};

export default function SectionTitle(props: ISectionTitle) {
  const {
    sectionName,
    sectionHead,
    sectionTertiary,
    sectionTertiaryEmphasis,
    textColorOne,
    textColorTwo,
    textColorThree,
  } = props;

  return (
    <div
      className={`${
        textColorOne ? textColorFn(textColorOne) : "text-[#363636]"
      } flex flex-col items-start`}
    >
      <div className="flex flex-col items-end">
        <div className="flex gap-2 items-center ">
          <Image
            src={`${textColorOne ? "/line-1.png" : "/line-gray.jpg"}`}
            alt="line"
            width={95}
            height={0}
          />
          <p className="font-light text-[20px] md:text-[26px]">{sectionName}</p>
        </div>
        <h1
          className={`text-[40px] md:text-[50px] lg:text-[55px] font-semibold -mt-5 md:-mt-6 ${
            textColorTwo ? textColorFn(textColorTwo) : "text-[#0F468E]"
          } `}
        >
          {sectionHead}
        </h1>
      </div>

      <div>
        <h1 className="text-[20px] md:text-[28px] font-light -mt-3 md:-mt-4 leading-7 md:leading-[45px]">
          {sectionTertiary}
          <span
            className={`${
              textColorThree ? textColorFn(textColorThree) : "text-[#0F468E]"
            }  font-semibold`}
          >
            &nbsp;{sectionTertiaryEmphasis}
          </span>
        </h1>
      </div>
    </div>
  );
}
