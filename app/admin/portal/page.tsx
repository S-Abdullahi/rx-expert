import Header from "@/app/components/Header";
import { BlogData } from "@/app/section data/blog.data";
import FormRow from "@/app/components/FormRow";
import Image from "next/image";
import { LiaEdit } from "react-icons/lia";
import { MdOutlineDelete } from "react-icons/md";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
} from "react";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

interface IData {
  title: string;
}
export default async function Portal() {
  const data = await getData();

  return (
    <div>
      <Header title="Admin Portal" label="admin-portal" />
      <section className="section-container grid md:grid-cols-2 gap-6">
        {/* blog post list */}
        <section>
          <p className="text-lg mb-4">All blog posts</p>
          {/* {data?.map((item: IData) => {
            return <p>{item.title}</p>;
          })} */}
          {BlogData.map((item, index) => {
            return (
              <div className="bg-gray-100 mb-6 p-3 rounded-sm" key={`${item.heading}-${index}`}>
                <Image
                  src={item.imageUrl}
                  alt={item.heading as string}
                  width={100}
                  height={100}
                />
                <p className="text-lg font-medium">{item.heading}</p>
                <p>{(item.body || "").substring(0, 100)}...</p>
                <p>{item.date}</p>
                <div className="flex gap-4 mt-2 text-sm">
                  <LiaEdit className="text-gray-500 cursor-pointer text-lg hover:text-green-500 hover:scale-125 transition-all ease-linear" />
                  <MdOutlineDelete className="text-gray-500 rounded cursor-pointer text-lg hover:text-red-500 hover:scale-125 transition-all ease-linear" />
                </div>
              </div>
            );
          })}
        </section>
        {/* Add post */}
        <section>
          <form className="flex flex-col gap-4 bg-gray-100 rounded py-6 px-4 mt-10">
            <p>Blog post form</p>
            <FormRow placeholder="post title" />
            <FormRow placeholder="image url" />
            <textarea
              className="border-[0.5px] px-2 py-2 rounded text-sm font-light focus:outline-0 focus:border-[#0F468E]"
              placeholder="post content"
            ></textarea>
            <div>
              <button className="bg-[#0F468E] text-white px-6 py-2 rounded-full">
                Create Blog Post
              </button>
            </div>
          </form>
        </section>
      </section>
    </div>
  );
}
