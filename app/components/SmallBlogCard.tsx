import Image from "next/image";
import Link from "next/link";

interface ISmallBlogCard {
  id: string;
  imageUrl: string;
  header: string;
  body: string;
}

export default function SmallBlogCard(props: ISmallBlogCard) {
  const { id, imageUrl, header, body } = props;
  return (
    <div className="flex gap-3">
      <div className="overflow-hidden rounded-md relative">
        <Image
          src={imageUrl}
          alt="doctor"
          width={106}
          height={109}
          className="object-contain"
        />
        <div className="h-[31px] w-[31px] bg-[#0F468E] absolute top-0 left-00 flex flex-col items-center justify-center text-white">
          <span className="font-semibold text-[8px]">June</span>
          <span className="text-sm font-semibold -mt-1">29</span>
        </div>
      </div>
      <div>
        <p className="text-[#0F468E] font-semibold">{header}</p>
        <p className="text-[#363636] md:max-w-[210px]">{`${body?.substring(
          0,
          50
        )}...`}</p>
        <span className="font-semibold text-sm text-[#363636] cursor-pointer">
          <Link href={`/blog/${id}`}>Read More</Link>
        </span>
      </div>
    </div>
  );
}
