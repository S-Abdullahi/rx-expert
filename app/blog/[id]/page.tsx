import Header from "@/app/components/Header";
import SectionTitle from "@/app/components/SectionTitle";
import SubSectionTitle from "@/app/components/SubSectionTitle";
import { blogContent } from "@/app/section data/blog.data";
import Image from "next/image";

export default function singleBlogPost({ params }: { params: { id: string } }) {
  const singlePost = blogContent?.find((item) => item.id === params.id);
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
            titlePlain={singlePost?.heading as string}
            titleColored={""}
          />
          <p>{singlePost?.body}</p>
        </div>
      </section>
    </div>
  );
}
