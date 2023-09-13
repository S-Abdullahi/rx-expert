import { Metadata } from "next";
import Header from "../components/Header";
import SectionTitle from "../components/SectionTitle";
import SectionImageDetails from "../components/sectionImageDetail";
import { solutionSectionData } from "../section data/homepage.data";

export const metadata: Metadata = {
  title: "Rxpert Solution",
  description: "Rxpert solution",
};

export default function Solution() {
  return (
    <div>
      <Header title="Solutions" label="solutions" />
      <div className="px-6 lg:px-32 py-12 bg-[url('/bgn-industries-2.png')]">
        <SectionTitle sectionName="OUR SOLUTIONS" sectionHead="Why Choose Us" />
        <p className="max-w-[746px] text-[#363636]">
          Rxpert Solutions will work with all disciplines involved in the
          medication management pathway to move toward improved safety and
          compliance. Rxpert Solutions gives you access to a pharmacist with
          years of hospital pharmacy experience, an outside perspective, and a
          passion for finding practical and lasting solutions to improve
          medication safety. Our pharmacist team has been hand picked so we can
          ensure a high level of performance. Each consultant will be selected
          based on your needs and their expertise.
        </p>
      </div>
      <section className="px-6 lg:px-32 py-12">
        <div className="gap-3">
          {solutionSectionData.map((data, index) => {
            const {
              imageSrc,
              imageAlt,
              titlePlain,
              titleColored,
              description,
              readmoreUrl
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
                readmoreUrl={readmoreUrl}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
