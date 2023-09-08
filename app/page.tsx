import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenu } from "react-icons/hi";
import Button from "./components/button";
import SectionTitle from "./components/SectionTitle";
import FormRow from "./components/FormRow";
import SectionImageDetails from "./components/sectionImageDetail";
import { solutionSectionData } from "./section data/homepage.data";
import Reveal from "./components/reveal";
import { ReviewData } from "./section data/homepage.data";
import { WhereToHelpData } from "./section data/homepage.data";
import BlogCard from "./components/BlogCard";

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
    url: "/blog",
  },
  {
    title: "Contact Us",
    url: "/contact",
  },
];

const blogDetail = [
  {
    imageUrl: "/img-3.png",
    day: "05",
    month: "NOV",
    newsHeadline: "Significant Loss",
    newsPreview:
      "How does the DEA define significant loss? That is a question many of you who oversee controlled substances have asked over the years.",
  },
  {
    imageUrl: "/img-4.png",
    day: "10",
    month: "DEC",
    newsHeadline: "Another Life lost ",
    newsPreview:
      "There has been a lot of chatter on list serves within the diversion prevention.",
  },
  {
    imageUrl: "/img-4.png",
    day: "16",
    month: "DEC",
    newsHeadline: "Mitigating Diversion",
    newsPreview:
      "I recently read a blog  by Dennis Tribble, a fellow pharmacist and IHFDA member,",
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
              <div>
                <h1 className="text-[28px] sm:text-[35px] lg:text-[44px] font-light -mt-4 md:-mt-7 leading-7 md:leading-[45px]">
                  Are Our Top{" "}
                  <span className="text-[#62BB45] font-semibold">Priority</span>
                </h1>
                <p className="max-w-[455px] text-white text-base md:text-lg font-medium mt-4">
                  How well does your health care organization prevent controlled
                  substance drug diversion?
                </p>
                <Button
                  buttonText="Read More"
                  variant="outlined"
                  themeColor="primary"
                />
              </div>
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
            <p className="text-[#363636]">
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
              themeColor="tertiary"
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
            <p className="max-w-[398px] mb-6 text-[#363636]">
              Please complete the details below and then click on submit and we
              will be in contact
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
      <section className="bg-[url('/bng-industries-3.png')] bg-no-repeat bg-cover px-6 lg:px-32 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 mb-4">
          <div>
            <SectionTitle
              sectionName="OUR SOLUTIONS"
              sectionHead="Why Choose Us"
              sectionTertiary="Where Can"
              sectionTertiaryEmphasis="We Help You"
            />
            <p className="mt-3">
              Rxpert Solutions gives you access to a pharmacist with years of
              hospital pharmacy experience, an outside perspective, and a
              passion for finding practical and lasting solutions to improving
              medication safety.
            </p>
            <Button
              buttonText="Read More About Rxpert Solutions Consulting Solutions"
              variant="outlined"
              themeColor="tertiary"
            />
          </div>
        </div>
        <div className="gap-3">
          {solutionSectionData.map((data, index) => {
            const {
              imageSrc,
              imageAlt,
              titlePlain,
              titleColored,
              description,
            } = data;
            return (
              <SectionImageDetails
                key={imageSrc}
                imageSrc={imageSrc}
                imageAlt={imageAlt}
                titlePlain={titlePlain}
                titleColored={titleColored}
                description={description}
                order={index + 1}
              />
            );
          })}
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-[#F3F3F3]">
        <Image
          src="/img-2.png"
          alt="Joint admission"
          width={705}
          height={468}
        />
        <div className="px-4 md:px-0 pb-4 md:pb-0">
          <p className="max-w-[580px] font-light text-[22px] md:text-[26px] text-[#363636]">
            The Joint Commission has named improving medication safety as a
            National Patient Safety Goal.
          </p>
          <Button
            buttonText="Read More"
            variant="outlined"
            themeColor="tertiary"
          />
        </div>
      </section>

      <section className="px-6 lg:px-32 py-16">
        <SectionTitle
          sectionName="GREAT REVIEW"
          sectionHead="Great Clients"
          sectionTertiary="Awesome"
          sectionTertiaryEmphasis="Tertiary"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 mt-5 md:mt-10">
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

      <section className="bg-[#0F468E] py-8">
        <div className="px-6 lg:px-32 ">
          <SectionTitle
            sectionName="WHERE CAN WE HELP YOU"
            sectionHead="Get Your Business"
            sectionTertiary="Right Up"
            sectionTertiaryEmphasis="There"
            textColorTwo="secondary"
            textColorThree="accent"
            textColorOne="secondary"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 pl-6 pr-6 lg:pr-0 lg:pl-32 gap-6">
          <div className="md:col-span-3 order-2 md:order-1 grid grid-cols-1 sm:grid-cols-3 mt-14 gap-10 sm:gap-4">
            {WhereToHelpData.map((data) => {
              const {
                imgSrc,
                tertiaryText,
                emphasisTertiaryText,
                description,
              } = data;
              return (
                <div className="text-white" key={imgSrc}>
                  <Image
                    src={imgSrc}
                    alt={tertiaryText}
                    width={76}
                    height={76}
                    className="w-[50px] md:w-[76px]"
                  />
                  <h4 className="text-2xl  font-light mt-4 mb-2">
                    {tertiaryText}{" "}
                    <span className="font-semibold">
                      {emphasisTertiaryText}
                    </span>
                  </h4>
                  <p className="md:max-w-[266px] font-light">{description}</p>
                  <Button
                    buttonText="Read More"
                    variant="outlined"
                    themeColor="primary"
                  />
                </div>
              );
            })}
          </div>
          <div className="md:col-span-2 order-1 md:order-2 mt-10 md:mt-0 flex justify-center sm:block">
            <Image
              src="/rx-img-1.png"
              alt="experiment"
              width={532}
              height={463}
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* OUR BLOG SESSION */}
      <section className="px-6 lg:px-32 py-16">
        <SectionTitle
          sectionName="OUR BLOG"
          sectionHead="See Our Latest Blog"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogDetail.map((detail) => {
            return <BlogCard key={detail.newsHeadline} {...detail} />;
          })}
        </div>
      </section>
    </div>
  );
}
