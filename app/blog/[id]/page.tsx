import Header from "@/app/components/Header";
import SubSectionTitle from "@/app/components/SubSectionTitle";
import { BlogData, blogContent } from "@/app/section data/blog.data";
import Image from "next/image";

const getColoredText = (text: string): string | undefined => {
  if (text) {
    const textArray = text.split(" ");
    textArray.shift();
    return textArray.join("");
  } else {
    return "";
  }
};

export default function singleBlogPost({ params }: { params: { id: string } }) {
  const singlePost = BlogData?.find((item) => item.id === params.id);
  return (
    <div>
      <Header
        title={singlePost?.heading as string}
        label="blog"
        secondLabel={singlePost?.heading as string}
      />
      <section className="section-container grid grid-cols-1 md:grid-cols-2 gap-6">
        <Image
          src={singlePost?.imageUrl as string}
          alt={singlePost?.heading as string}
          width={500}
          height={200}
        />
        <div className="p-3 bg-gray-100 rounded-md">
          <SubSectionTitle
            // titlePlain={singlePost?.heading.split(" ")[0] as string || ''}
            titlePlain={singlePost?.textPlain as string}
            // titleColored={getColoredText(singlePost?.heading as string) || ""}
            titleColored={singlePost?.textColored as string}
          />
          <p>{singlePost?.body}</p>
        </div>
      </section>
    </div>
  );
}
