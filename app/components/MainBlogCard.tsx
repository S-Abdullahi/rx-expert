import Image from "next/image";
import Button from "./button";
import SubSectionTitle from "./SubSectionTitle";
import { IBlogData } from "../section data/blog.data";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TbMessageCircle2Filled } from "react-icons/tb";

export default function MainBlogCard(props: IBlogData) {
  const {
    id,
    imageUrl,
    textPlain,
    textColored,
    date,
    previewText,
    noOfComments,
  } = props;
  return (
    <div className="flex flex-col gap-4">
      <Image src={imageUrl} alt="laboratory" width={835} height={426} />
      <div>
        <SubSectionTitle titlePlain={textPlain} titleColored={textColored} />
        <div className="flex gap-6">
          <span className="flex items-center gap-1">
            <FaRegCalendarAlt /> {date}
          </span>
          <span className="flex items-center gap-1">
            <TbMessageCircle2Filled />
            {noOfComments}
          </span>
        </div>
      </div>
      <p className="max-w-[835px] text-[#363636]">{previewText}</p>
      <Button
        buttonText="Read More"
        variant="outlined"
        themeColor="tertiary"
        url={`/blog/${id}`}
      />
    </div>
  );
}
