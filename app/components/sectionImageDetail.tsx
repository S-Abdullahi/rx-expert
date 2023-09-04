import Image from "next/image";
import Button from "./button";

export type ISectionImageDetail = {
  imageSrc: string;
  imageAlt: string;
  titlePlain: string;
  titleColored: string;
  description: string;
  order?: number | undefined;
};

export default function SectionImageDetails(props: ISectionImageDetail) {
  const { imageSrc, imageAlt, titlePlain, titleColored, description, order } =
    props;
  const isEven: boolean = (order as number) % 2 === 0;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-8 lg:mb-0 md:gap-10 md:-my-8">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={673}
        height={706}
        className={`${isEven ? "md:order-4" : ''}`}
      />
      <div className={`${isEven ? "md:order-1" : ''} -mt-5 md:-mt-5`}>
        <h4 className="text-[24px] md:text-[28px] font-light text-[#363636] max-w-[544px]">
          {titlePlain}&nbsp;
          <span className="font-semibold text-[#0F468E]">{titleColored}</span>
        </h4>
        <p className="text-[#363636] mt-4">{description}</p>
        <Button
          buttonText="Read More"
          themeColor="tertiary"
          variant="outlined"
        />
      </div>
    </div>
  );
}
