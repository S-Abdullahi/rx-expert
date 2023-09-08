import { ISectionImageDetail } from "../components/sectionImageDetail";

export const solutionSectionData: ISectionImageDetail[] = [
  {
    imageSrc: "/group-image-1.png",
    imageAlt: "barometer",
    titlePlain: "Audit On Current State of",
    titleColored: "Diversion Mitigation Program",
    description:
      "A comprehensive on-site review of your current processes is necessary to identify areas of risk. A comprehensive drug diversion prevention and monitoring program must look for ways to improve controlled substance security, thereby minimizing the avenues for diversion.",
  },
  {
    imageSrc: "/group-image-2.png",
    imageAlt: "stethoscope",
    titlePlain: "Controlled Substance",
    titleColored: "Diversion Auditing",
    description:
      "Federal and state laws address the need for controlled substance monitoring and reporting of loss or theft. Every facility needs to know where all of the controlled substances are at any given time and have a process in place to confirm that there are no losses or thefts.",
  },
  {
    imageSrc: "/group-image-3.png",
    imageAlt: "interview",
    titlePlain: "Interview",
    titleColored: "Coaching",
    description:
      "Much time and energy may be devoted to monitoring for drug diversion, and once suspected, even more time to gathering data and reviewing audit findings. Unfortunately, the findings may then be turned over to someone who lacks experience or skill at conducting an interview.",
  },
  {
    imageSrc: "/group-image-4.png",
    imageAlt: "stethoscope",
    titlePlain: "Controlled Substance",
    titleColored: "Drug Diversion Program Development",
    description:
      "Federal and state laws address the need for controlled substance monitoring and reporting of loss or theft. Every facility needs to know where all of the controlled substances are at any given time and have a process in place to confirm that there are no losses or thefts.",
  },
  {
    imageSrc: "/group-image-5.png",
    imageAlt: "docture",
    titlePlain: "Medication",
    titleColored: "Safety",
    description:
      "While Medication Safety is a broad topic, it is nonetheless crucial and must be considered at all times.Rxpert Solutions offers risk assessments on the medication use process. We provide a pharmacist who has been through MERP and GACH surveys and who will review and offer suggestions",
  },
  {
    imageSrc: "/group-image-6.png",
    imageAlt: "laboratory",
    titlePlain: "Pharmacy",
    titleColored: "Regulatory Compliance",
    description:
      "If you\’ve been cited by a regulatory body and are in need of assistance with correction, Rxpert Solutions can serve as your independent pharmacist consultant.In many states an independent consultant is a requirement if the facility or pharmacist-in-charge is placed on probation. Depending on state licensing requirements, Rxpert Solution can fill the role of that consultant.",
  },
];

interface IReview {
  comment: string;
  name: string;
  qualification: string;
}

export const ReviewData: IReview[] = [
  {
    comment:
      "Terri is absolutely phenomenal. She is an incredibly knowledgeable pharmacy resource. As the medication safety officer, the quality initiatives she implemented not only impacted the patients at our medical center but also reached into the community. Terri is a genuine professional who upholds accountability while creating community among her team members. She is a great listener to identify friction points and has actionable ideas to implement improvements.",
    name: "Lab",
    qualification: "T. Eagle. MBA, MLS(ASCP), CLS Lab Operations Manager",
  },
  {
    comment:
      "Terri is an expert at prospective risk identification -Failure, Mode and Effects Analysis (FMEA). Terri participated in CHPSO Patient Safety Safe Tables and was part of the Hospital Quality Institute’s Regional Quality and Patient Safety Leader Network.  She is an excellent public speaker and communicates well with public and professional audiences. I look forward to her continued work in medication safety.",
    name: "Regional Quality Network at HQI",
    qualification: "A. Munoz, FACHE, CPHQ, CPPS VP",
  },
  {
    comment:
      "In addition to understanding the ins and outs of the [controlled substance use] process completely, she is very proactive in coming to me with provider issues that she detects. She truly balances the administrative duties and the regulatory components demand with a keen sense of what my practitioners do and what their needs are on the ground. Terri is instrumental in working with my department, balancing patient care, cooperation, ability, and integrity to get the job done.",
    name: "UCSD Medical Center",
    qualification: "Chief Anesthesiologist",
  },
];

interface IWhereToHelp {
  imgSrc: string;
  tertiaryText: string;
  emphasisTertiaryText: string;
  description: string;
}

export const WhereToHelpData: IWhereToHelp[] = [
  {
    imgSrc: "/rx-1.png",
    tertiaryText: "Patient",
    emphasisTertiaryText: "Safety Risk",
    description:
      "Patient Safety is THE priority. Without a dynamic program that is constantly reviewing medication management pathways and practices within the facility, patients are exposed to greater risk.",
  },
  {
    imgSrc: "/rx-2.png",
    tertiaryText: "Staff",
    emphasisTertiaryText: "Risk",
    description:
      "The different disciplines within a facility work as a team. If a member of the team is not following safe medication practice or is engaged in drug diversion, the whole team is at risk.",
  },
  {
    imgSrc: "/rx-3.png",
    tertiaryText: "Facility",
    emphasisTertiaryText: "Risk",
    description:
      "The facility holds the liability. Is your facility doing all it can to mitigate the risk to itself and ultimately the patient?",
  }
];
