import Image from "next/image";
import Button from "./button";

interface IBlogCard {
  imageUrl: string;
  day: string;
  month: string;
  newsHeadline: string;
  newsPreview: string;
}

export default function BlogCard(props: IBlogCard) {
  const { imageUrl, day, month, newsHeadline, newsPreview } = props;
  return (
    <div className={`bg-[url('/img-6.png')] bg-no-repeat bg-cover pb-4`}>
      <div>
        <div className="flex justify-end">
          <div
            className="flex flex-col items-end bg-[#F1F1F1] h-[128px] w-[163px] font-bold text-[22px] leading-5 pr-4 pt-4 -mt-[0.5px] -mr-[0.5px]"
            style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
          >
            <span>{day}</span>
            <span>{month}</span>
          </div>
        </div>
        <div className=" text-white px-4">
          <div className="flex justify-start">
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-1">
                <span>
                  <Image
                    src="/line-white.png"
                    alt="line"
                    width={50}
                    height={0}
                  />
                </span>
                <span className="font-light">NEWS</span>
              </div>
              <span className="font-semibold text-xl -mt-2">
                {newsHeadline}
              </span>
            </div>
          </div>

          <p className="font-light">{newsPreview}</p>
          <Button buttonText="Read More" />
        </div>
      </div>
    </div>
  );
}
