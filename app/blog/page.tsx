import Image from "next/image";
import Header from "../components/Header";
import { BlogData } from "../section data/blog.data";
import MainBlogCard from "../components/MainBlogCard";
import { CiSearch } from "react-icons/ci";
import { RecentBlogPost } from "../section data/blog.data";
import SmallBlogCard from "../components/SmallBlogCard";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rx-Expert Blog",
  description: "Rxpert blog",
};

export default function Blog() {
  return (
    <div>
      <Header title="Blog" label="Blog" />
      <section className="section-container grid grid-cols-1 md:grid-cols-12 gap-6 ">
        <div className="md:col-span-8 flex flex-col gap-12">
          {BlogData.map((blog) => {
            return <MainBlogCard key={blog.id} {...blog} />;
          })}
        </div>
        <div className="md:col-span-4">
          <div className="bg-[#0F468E] py-9 px-6 max-w-[331px]">
            <div className="w-full relative flex items-center">
              <input
                placeholder="Search..."
                className="px-3 text-[#363636] py-2 w-full focus:outline-none shadow-md"
              />
              <CiSearch className="absolute right-2" />
            </div>
          </div>
          <p className="text-[#363636] my-4">
            Recent <span className="text-[#0F468E] font-semibold">Posts</span>
          </p>
          <div className="flex flex-col gap-4">
            {RecentBlogPost.map((post, index) => {
              return <SmallBlogCard {...post} key={`${post.title}-${index}`} />;
            })}
          </div>
        </div>
      </section>
      <div className="mb-4 flex justify-center">
        <div className="border-[1px] py-1 px-2 rounded-lg border-[#0f468E] flex gap-2">
          <button className="flex items-center"><MdNavigateBefore/> prev</button>
          <button>1</button>
          <button className="flex items-center">next <MdNavigateNext/></button>
        </div>
      </div>
    </div>
  );
}
