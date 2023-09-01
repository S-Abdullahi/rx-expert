import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rx-Expert website",
  description: "Rx-Expert",
};

type blogData = {
  imageUrl: string;
  title: string;
  description: string;
};

const footerBlogData: blogData[] = [
  {
    imageUrl: "/blog-small-image-1.svg",
    title: "Another Life lost",
    description:
      "There has been a lot of chatter on list serves withing the diversion",
  },
  {
    imageUrl: "/blog-small-image-2.svg",
    title: "Another Life lost",
    description:
      "Unintentionally, when talking about addiction, many people use language.",
  },
  {
    imageUrl: "/blog-small-image-3.svg",
    title: "Another Life lost",
    description: "I recently heard a conference speaker, Maureen Burger, talk",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4  md:mx-20 my-12">
            <div className="flex flex-col gap-3">
              <Image src="/rx-logo.svg" alt="logo" width={116} height={61} />
              <p className="text-[#363636] max-w-[374px]">
                When was the last time your facility discovered an employee who
                was diverting controlled substances?
              </p>
              <p className="text-[#363636] max-w-[374px]">
                If a facility is not identifying staff suspected of diversion on
                a regular basis through a proactive monitoring system, the
                facility is at risk.
              </p>
              <div className="flex gap-3 mt-4">
                <Image src="/facebook.svg" alt="logo" width={40} height={40} />
                <Image src="/twitter.svg" alt="logo" width={40} height={40} />
                <Image src="/linkedin.svg" alt="logo" width={40} height={40} />
                <Image src="/youtube.svg" alt="logo" width={40} height={40} />
              </div>
            </div>
            <div className="">
              <h3 className="text-xl font-semibold mb-3">Recent Post</h3>
              <div className="">
                {footerBlogData.map((data) => {
                  const { title, description, imageUrl } = data;
                  return (
                    <article key={title} className="flex flex-col items-start mb-1">
                        <Image
                          src={imageUrl}
                          alt={title}
                          width={106}
                          height={92}
                          className="object-contain"
                        />

                      <div>
                        <h5 className="text-[#0F468E] font-semibold">{title}</h5>
                        <p className="max-w-[342px] text-base">{description}</p>
                        <button className="text-xs font-bold">Read More</button>
                      </div>
                    </article>
                  );
                })}
                <article></article>
              </div>
            </div>
            <div className="">
              <h3>Newsletter</h3>
            </div>
          </div>
          <div className="border-t-[1px] border-gray-300 flex justify-between text-sm font-thin text-[#363636] py-2 px-4  md:px-20">
            <p className="text-sm font-light text-[#363636]">
              © Copyright 2021. All Rights Reserved.
            </p>
            <p className="text-sm font-light text-[#363636]">
              Drug Diversion Insights with Terri Vidals | Podcast on Spotify
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
