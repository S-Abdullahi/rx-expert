import SectionTitle from "@/app/components/SectionTitle";
import Header from "../../../components/Header";
import Image from "next/image";
import SubSectionTitle from "@/app/components/SubSectionTitle";
import Button from "@/app/components/button";
import ServiceCard from "@/app/components/ServiceCard";
import { IServiceCard } from "@/app/components/ServiceCard";
import CommentSection from "@/app/components/CommentSection";

const relatedServiceDetails: IServiceCard[] = [
  {
    imageUrl: "/img-7.png",
    previewText:
      " As Rxpert Solutions’ lead consultant, Terri Vidals has years of experience in drug diversion monitoring and program development.",
    titlePlain: "Public",
    titleColored: "Speaking",
  },
  {
    imageUrl: "/img-8.png",
    previewText:
      " All front line staff, nurse managers, pharmacy managers, Human Resources, Risk/Quality, and administrative leadership",
    titlePlain: "Diversion Education",
    titleColored: "And Training",
  },
  {
    imageUrl: "/img-9.png",
    previewText:
      "Rxpert Solutions will provide a pharmacist who is skilled at sterile compounding processes to review the policies, procedures",
    titlePlain: "Sterile Compounding - ",
    titleColored: "Education & Compliance",
  },
];

export default function Diversion() {
  return (
    <div>
      <Header
        title="Diversion Mitigation Program"
        label="Solution"
        secondLabel="Diversion Mitigation Program"
      />
      <Image
        src="/group-image-7.png"
        alt="barometer"
        width={1600}
        height={657}
      />
      <section className="px-6 lg:px-32 py-16">
        <div className="-mt-10 md:-mt-32">
          <SubSectionTitle
            titlePlain="Audit On Current State of"
            titleColored="Diversion Mitigation Program"
          />
        </div>

        <div className="columns-1 md:columns-2 md:gap-8 lg:gap-16 mt-4">
          <p className="text-[#363636] text-justify">
            A comprehensive on-site review of your current processes is
            necessary to identify areas of risk. A comprehensive drug diversion
            prevention and monitoring program must look for ways to improve
            controlled substance security, thereby minimizing the avenues for
            diversion. <br />
            <br />
            Rxpert Solutions will evaluate for risk along the entire medication
            pathway with the goal of improving security and accountability. This
            includes confirming that solid policies and procedures are in place,
            policies are being followed, there are checks and balances, and
            unaccounted for (missing) controlled substances are identified and
            investigated timely. Observation of workflow is an essential
            component to understanding where gaps may exist. <br />
            <br />
            Staff have expectations for performance, but when was the last time
            someone observed to see if they are meeting those expectations and
            following best practice? Poor practice and diversion can often look
            alike. A risk assessment will bring poor practices to the surface
            and highlight where work is needed to bring staff into compliance.
            Improving practice will ultimately make diversion easier to spot.
            While monitoring healthcare workers who may be diverting controlled
            substances is important, this gap analysis will give a facility a
            great overview where improvements in prevention are needed.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-32 py-16 bg-[#F5F5F5]">
        <SectionTitle
          sectionHead="Related Services"
          sectionName="OUR SOLUTIONS"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {relatedServiceDetails.map((data) => {
            return <ServiceCard {...data} key={data.previewText} />;
          })}
        </div>
      </section>
      <CommentSection />
    </div>
  );
}
