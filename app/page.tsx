import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenu } from "react-icons/hi";
import Button from "./components/button";
import SectionTitle from "./components/SectionTitle";
import FormRow from "./components/FormRow";

type INavItem = {
  title: string;
  url: string;
};

const navItem: INavItem[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About Us",
    url: "/about",
  },
  {
    title: "Solutions",
    url: "/solution",
  },
  {
    title: "Resources",
    url: "/about",
  },
  {
    title: "Contact Us",
    url: "/contact",
  },
];

export default function Home() {
  return (
    <div>
      <div className="bg-[url('/bnr-bg-home.png')] bg-no-repeat bg-cover">
        <div className="text-sm text-[#F5F5F5] flex flex-col md:flex-row gap-2 md:justify-between py-4 px-6 lg:px-32">
          <p className=" text-[#F5F5F5]">
            950 Boardwalk Suite 305, San Marcos, CA 92078
          </p>
          <div className="flex flex-col md:flex-row md:items-center md:gap-4">
            <p className=" text-[#F5F5F5]">+ 234 816 6628 857</p>
            <p className=" text-[#F5F5F5]">rexpert@gmail.com</p>
          </div>
        </div>

        <div className="bg-white h-[73px] flex justify-between items-center  px-6 lg:px-32">
          <Image src="/rx-logo.svg" alt="logo" width={116} height={61} />
          <div className="flex gap-4 items-center">
            <ul className="md:flex gap-4 hidden">
              {navItem.map((item) => {
                const { title, url } = item;
                return (
                  <li key={title}>
                    <Link href={url}>{title}</Link>
                  </li>
                );
              })}
            </ul>
            <HiOutlineMenu className="md:hidden text-2xl mr-3" />
            <button className="text-white bg-[#0F468E] px-3 py-1 rounded-md hidden lg:block">
              Free Risk Assessment
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:px-32 px-6 mt-8 items-center gap-3">
          <div className="text-white flex flex-col items-start">
            <div className="flex flex-col items-end">
              <div className="flex gap-2 items-center ">
                <Image src="/line-1.png" alt="line" width={95} height={0} />
                <p className="font-extralight">RISK MITIGATION</p>
              </div>
              <h1 className="lg:text-[104px] sm:text-[80px] text-[65px] font-semibold -mt-6">
                Solutions
              </h1>
            </div>

            <div>
              <h1 className="text-[28px] sm:text-[35px] lg:text-[44px] font-light -mt-4 md:-mt-7 leading-7 md:leading-[45px]">
                Are Our Top{" "}
                <span className="text-[#62BB45] font-semibold">Priority</span>
              </h1>
              <p className="max-w-[455px] text-white text-base md:text-lg font-medium mt-4">
                How well does your health care organization prevent controlled
                substance drug diversion?
              </p>
              <Button buttonText="Read More" type="read more" />
            </div>
          </div>
          <div className="flex justify-center">
            <Image src="/img-1.png" alt="main" width={318} height={540} />
          </div>
        </div>
      </div>
      <section className="px-6 lg:px-32 py-16 grid grid-cols-1 lg:grid-cols-2 bg-[#F5F5F5] gap-14 relative">
        <div>
          <SectionTitle
            sectionName="ABOUT US"
            sectionHead="Terri Vidals"
            sectionTertiary="Founder of"
            sectionTertiaryEmphasis="Rxpert Solutions"
          />
          <div className="column-1 sm:columns-2 gap-8 mt-4">
            <p>
              Theresa “Terri” has been a pharmacist for over 35 years, with 15
              years of experience in medication safety and drug diversion
              monitoring. Her background includes work in various clinical
              roles, as well as leadership roles such as Pharmacy Operations
              Manager, Medication Safety Officer, and Pharmacy Director. Terri
              is a subject matter expert in drug diversion mitigation and
              monitoring, and has initiated and overseen diversion monitoring
              programs in healthcare facilities. Terri possesses a proven
              ability to see the big picture, including what to look for and how
              to look for it. While she is compassionate toward healthcare
              professionals with substance abuse disorders, she also understands
              the safety risks and is not afraid to ask hard questions during
              investigation interviews. She is the host of a podcast, Drug
              Diversion Insights, and is a recognized speaker on the topic of
              substance abuse and drug diversion. Terri founded Rxpert Solutions
              so that all facilities would have access to her expertise as an
              alternative to, or as a bridge while waiting for, on-site
              personnel to develop the expertise.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start">
            <Button buttonText="Read more" variant="contained" />
            <Button
              buttonText="Connect with Terri on Linkedin!"
              variant="outlined"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="max-w-[471px] px-[41px] py-[60px] bg-white shadow-md rounded-3xl lg:-mt-[200px]">
            <h3 className="font-light text-[30px] md:text-[34px] leading-9 mb-3">
              Book an{" "}
              <span className="text-[#0F468E] text-[40px] md:text-[46px] font-semibold">
                Appointment
              </span>
            </h3>
            <p className="max-w-[398px] mb-6">
              Please complete the details below and then click on submit and
              we will be in contact
            </p>
            <form className="flex flex-col gap-5">
              <FormRow placeholder="Your Name..." />
              <FormRow placeholder="Email Address..." />
              <FormRow placeholder="Phone..." />
              <FormRow placeholder="Subject..." />
              <textarea
                placeholder="Feedback/Query..."
                className="border px-2 py-2 rounded text-sm"
              />
              <div>
                <Button buttonText="Submit" variant="submit" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
