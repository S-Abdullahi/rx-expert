import Image from "next/image";
import { ReviewData } from "../section data/homepage.data";
import SectionTitle from "./SectionTitle";

export default function CommentSection() {
  return (
    <section className="px-6 lg:px-32 py-16">
      <SectionTitle
        sectionName="GREAT REVIEW"
        sectionHead="Great Clients"
        sectionTertiary="Awesome"
        sectionTertiaryEmphasis="Tertiary"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 mt-5 md:mt-10 text-[#363636]">
        {ReviewData.map((review, index) => {
          const { comment, name, qualification } = review;
          return (
            <div
              className="flex items-start gap-3 md:max-w-[333px]"
              key={`${name}-${index}`}
            >
              <Image
                src="/open-quote.png"
                alt="open quote"
                width={35}
                height={25}
              />
              <div>
                <p>
                  {comment}
                  <span className="inline-block">
                    <Image
                      src="/close-quote.png"
                      alt="close quote"
                      width={32}
                      height={25}
                    />
                  </span>
                </p>
                <div className="flex items-start mt-3 gap-2">
                  <div className="h-[61px] min-w-[61px] bg-[#D9D9D9] rounded-full"></div>
                  <div>
                    <p className="font-semibold max-w-[259px]">{name}</p>
                    <p className="text-sm ">{qualification}</p>
                    <Image
                      src="/review-stars.png"
                      alt="review stars"
                      width={67}
                      height={12}
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
