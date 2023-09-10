import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Image from "next/image";
import Button from "./components/button";
import SectionTitle from "./components/SectionTitle";
import FormRow from "./components/FormRow";
import NavBar from "./components/NavBar";
import { AppProvider } from "./Context";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: "100",
});

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
    imageUrl: "/img-3.png",
    title: "Another Life lost",
    description:
      "There has been a lot of chatter on list serves withing the diversion",
  },
  {
    imageUrl: "/img-2.png",
    title: "Words Matter",
    description:
      "Unintentionally, when talking about addiction, many people use language.",
  },
  {
    imageUrl: "/img-3.png",
    title: "The Drug Diversion Trial",
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
      <body className={`${poppins.variable}`}>
        <AppProvider>{children}</AppProvider>
        <section className="px-6 lg:px-32 py-12 bg-[#F5F5F5]">
          <SectionTitle sectionName="CONTACT US" sectionHead="Get In Touch" />
          <div className="grid grid-cols-1 md:grid-cols-2">
            <form className="flex flex-col gap-4 max-w-[516px]">
              <FormRow
                placeholder="
            Full Name..."
              />
              <FormRow
                placeholder="
            Phone No..."
              />
              <FormRow
                placeholder="
            Email Address..."
              />
              <FormRow
                placeholder="
            Subject..."
              />
              <FormRow
                placeholder="
            Full Name..."
              />
              <textarea
                placeholder="Feedback/Query"
                className="border-[0.5px] px-2 py-2 rounded text-sm font-light focus:outline-0 focus:border-[#0F468E]"
              ></textarea>
              <div>
                <Button buttonText="Submit" variant="contained" />
              </div>
            </form>
            <div></div>
          </div>
        </section>
        <footer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-6  lg:mx-32 my-12">
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
                    <article
                      key={title}
                      className="flex flex-col md:flex-row md:items-center mb-1 gap-2"
                    >
                      <Image
                        src={imageUrl}
                        alt={title}
                        width={106}
                        height={98}
                        className="object-contain rounded-md"
                      />

                      <div>
                        <h5 className="text-[#0F468E] font-semibold">
                          {title}
                        </h5>
                        <p className="max-w-[342px] text-base leading-5">
                          {description}
                        </p>
                        <button className="text-xs font-bold">Read More</button>
                      </div>
                    </article>
                  );
                })}
                <article></article>
              </div>
            </div>
            <div className="">
              <h3 className="text-xl font-semibold mb-3">Newsletter</h3>
              <p className="mb-4">
                Sign up to get new exclusive offers from our latest solutions
              </p>
              <input
                placeholder="Enter Your Email"
                className="shadow-sm font-light rounded p-2 text-sm mb-4 w-full h-[49px] border-[0.5px] border-gray-200"
              />
              <Button buttonText="Submit" type="submit" />
            </div>
          </div>
          <div className="border-t-[1px] border-gray-300 flex flex-col md:flex-row md:justify-between gap-1 text-sm font-thin text-[#363636] py-2 px-6  lg:px-32">
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
