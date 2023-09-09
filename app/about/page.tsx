import Image from "next/image";
import Header from "../components/Header";
import SectionTitle from "../components/SectionTitle";
import CommentSection from "../components/CommentSection";

export default function About() {
  return (
    <div>
      <Header title="About US" label="about us" />
      <section className="section-container grid grid-cols-1 md:grid-cols-3 gap-10">
        <Image
          src="/group-image-8.png"
          alt="about"
          width={448}
          height={545}
          className="md:col-span-1"
        />
        <div className="md:col-span-2">
          <SectionTitle
            sectionName="ABOUT US"
            sectionHead="Terri Vidals"
            sectionTertiary="Founder Of"
            sectionTertiaryEmphasis="Rxpert solutions"
          />
          <div>
            <p className="max-w-[691px] text-justify mt-4">
              Terri has 30 years of experience as a hospital pharmacist. She has
              worked both in community hospital and teaching hospital settings
              as well as nursing home facilities. During that time, she gained
              experience in several clinical areas, and over the last 12 years,
              she has specialized in ensuring medication safety, managing
              pharmacy operations, and controlled substance diversion
              monitoring. She takes a very practical approach and believes all
              change must have a point and result in sustained improvement.
              <br />
              <br />
              Terri has her B.S. in Pharmacy from the University of Kansas and
              is a Licensed Pharmacist in the state of California. She is a
              member of International Health Facility Diversion Association,
              Medication Safety Officers Society, San Diego County Prescription
              Drug Abuse Task Force, and former member of the California
              Hospital Association Medication Safety Committee. Terri is a
              frequent speaker on the topics of diversion in the healthcare
              setting and the role of staff who suspect diversion. She believes
              a safer environment must be created for the patient as well as the
              healthcare worker. Terri brings with her years of experience in
              the hospital setting, a talent for organization and operations, a
              developed skill in diversion monitoring, regulatory survey
              participation, medication safety plans and MERP development, and a
              passion to make a real and lasting difference.
            </p>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-5">
        <Image
          src="/img-10.png"
          alt="laboratory"
          width={705}
          height={468}
          className="md:col-span-2"
        />
        <div className="bg-[#0F468E] text-white p-8 md:col-span-3 flex flex-col justify-between relative">
          <p className="text-lg font-light italic mt-12 max-w-[633px] relative z-10">
            In addition to understanding the ins and outs of the [controlled
            substance use] process completely, she is very proactive in coming
            to me with provider issues that she detects. She truly balances the
            administrative duties and the regulatory components demand with a
            keen sense of what my practitioners do and what their needs are on
            the ground. Terri is instrumental in working with my department,
            balancing patient care, cooperation, ability, and integrity to get
            the job done.
          </p>

          <div className="flex flex-col">
            <span className="font-semibold">–Chief Anesthesiologist,</span>
            <span>UCSD Medical Center</span>
          </div>
          <Image src="/quote.png" alt="quote" width={130} height={94} className="absolute left-8 top-4"/>
        </div>
      </section>
      <CommentSection/>
    </div>
  );
}
