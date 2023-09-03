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
  const isEven = (order as number) % 2 === 0;
  console.log(isEven)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={673}
        height={706}
        className={`${isEven && "order-1"}`}
      />
      <div className={`${isEven && "order-2"}`}>
        <h4 className="text-[28px] font-light text-[#363636] max-w-[544px]">
          {titlePlain}
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
