import Image from "next/image";
import SubSectionTitle from "./SubSectionTitle";
import Button from "./button";

export interface IServiceCard {
  imageUrl: string;
  previewText: string;
  titlePlain: string;
  titleColored: string;
}
export default function ServiceCard(props: IServiceCard) {
  const { imageUrl, previewText, titlePlain, titleColored } = props;
  return (
    <div className="flex flex-col gap-1 md:gap-3">
      <Image src={imageUrl} alt="doctor-lab" width={380} height={290} />
      <SubSectionTitle titlePlain={titlePlain} titleColored={titleColored} />
      <p className="max-w-[380px] text-[#363636]">{previewText}</p>
      <div>
        <Button
          buttonText="Read More"
          variant="outlined"
          themeColor="tertiary"
        />
      </div>
    </div>
  );
}
