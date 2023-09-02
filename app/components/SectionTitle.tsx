import Image from "next/image";

type ISectionTitle = {
  sectionName: string;
  sectionHead: string;
  sectionTertiary: string;
  sectionTertiaryEmphasis: string;
};

export default function SectionTitle(props: ISectionTitle) {
  const { sectionName, sectionHead, sectionTertiary, sectionTertiaryEmphasis } =
    props;
  return (
    <div className="text-[#363636] flex flex-col items-start">
      <div className="flex flex-col items-end">
        <div className="flex gap-2 items-center ">
          <Image src="/line-gray.jpg" alt="line" width={95} height={0} />
          <p className="font-light text-[20px] md:text-[26px]">{sectionName}</p>
        </div>
        <h1 className="text-[50px] md:text-[76px] font-semibold -mt-5 text-[#0F468E]">
          {sectionHead}
        </h1>
      </div>

      <div>
        <h1 className="text-[20px] md:text-[28px] font-light -mt-4 md:-mt-7 leading-7 md:leading-[45px]">
          {sectionTertiary}
          <span className="text-[#0F468E] font-semibold">
             &nbsp;{sectionTertiaryEmphasis}
          </span>
        </h1>
      </div>
    </div>
  );
}
