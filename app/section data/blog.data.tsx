export interface IBlogData {
  id: string;
  imageUrl: string;
  textPlain: string;
  textColored: string;
  date: string;
  previewText: string;
  noOfComments: number;
  heading?: string;
  body?: string;
}

export const BlogData: IBlogData[] = [
  {
    id: "diversion-software-comparison",
    imageUrl: "/blog-img-1.png",
    textPlain: "Diversion",
    textColored: "Software Comparison",
    date: "August 10, 2023",
    heading: "Diversion Software Comparison",
    previewText:
      "Some of you may remember I did a comparison of the various diversion software products back in 2019. I can’t believe it has been that long already! Because it was quite some time ago, I felt it was time to get back out there and reconnect with the vendors and clients to see how things were going. The comparison is still being finalized, but in general, I am seeing that all the companies previously interviewed are still in business and we have picked up a few more in the last couple of years. Omnicell and Kit Check’s Bluesight have joined forces, meaning the client getting the latest Omnicell software also purchases Bluesight for diversion monitoring. Companies which focus on waste assaying are in talks with several of the diversion software companies to see how technologies and data integration can be accomplished.",
    body: "What kind of evidence do you need to pronounce a guilty verdict when it comes to diversion? Catching someone in the act of placing medication in their pocket when they are supposed to be wasting or seeing vials fall out of their locker leaves little room for doubt. Watching someone on camera substitute saline for another medication is definitive. Interviewing a reliable patient immediately after a nurse charts administration of a pain med and hearing the patient did not receive it is conclusive. But what if you don’t have those types of “proof”. What if you have data that tells you this person practices differently than their peers? They dispense more, they waste more, they enter more verbal orders, or they do not account for some of the meds they have removed.",
    noOfComments: 0,
  },
  {
    id: "significant-loss",
    imageUrl: "/blog-img-2.png",
    textPlain: "Significant",
    textColored: "Loss",
    date: "August 9, 2023",
    heading: "significant loss",
    previewText:
      "How does the DEA define significant loss? That is a question many of you who oversee controlled substances have asked over the years. I have asked myself this same question. I recently listened to a webinar by a DEA Diversion Investigator. He reminded the audience that anytime you see a Code of Federal Regulations (CFR) statement, the DEA expects you to conform to the regulation. He specifically referenced 21 CFR 1301.76b which states:",
    body: "What kind of evidence do you need to pronounce a guilty verdict when it comes to diversion? Catching someone in the act of placing medication in their pocket when they are supposed to be wasting or seeing vials fall out of their locker leaves little room for doubt. Watching someone on camera substitute saline for another medication is definitive. Interviewing a reliable patient immediately after a nurse charts administration of a pain med and hearing the patient did not receive it is conclusive. But what if you don’t have those types of “proof”. What if you have data that tells you this person practices differently than their peers? They dispense more, they waste more, they enter more verbal orders, or they do not account for some of the meds they have removed.",
    noOfComments: 2,
  },
  {
    id: "verbal-order",
    imageUrl: "/blog-img-3.png",
    textPlain: "Verbal Order:",
    textColored: "Trust but Verify",
    heading: "verbal order trust but verify",
    date: "July 10, 2023",
    previewText:
      "How common are verbal orders at your facility? How timely are the physicians authenticating those verbal orders? Does anyone other than the nurse entering the verbal order ever check in with the patient to see if the controlled substance ordered and charted as administered was effective? At most facilities, awareness of diversion is lacking. Because of this lack of awareness, it is seldom considered that a nurse advocating for more medications for a patient may be a way to divert. I have personally seen this method used. I also recently read about a case where a nurse plead guilty to diversion by entering fraudulent verbal orders. These verbal orders being entered may be totally unknown to the physician or may be at the request of the nurse who is untruthful about the patient’s need for the medication.",
    body: "What kind of evidence do you need to pronounce a guilty verdict when it comes to diversion? Catching someone in the act of placing medication in their pocket when they are supposed to be wasting or seeing vials fall out of their locker leaves little room for doubt. Watching someone on camera substitute saline for another medication is definitive. Interviewing a reliable patient immediately after a nurse charts administration of a pain med and hearing the patient did not receive it is conclusive. But what if you don’t have those types of “proof”. What if you have data that tells you this person practices differently than their peers? They dispense more, they waste more, they enter more verbal orders, or they do not account for some of the meds they have removed.",
    noOfComments: 2,
  },
  {
    id: "evidence-needed",
    imageUrl: "/blog-img-4.png",
    textPlain: "Evidence Needed",
    textColored: "for Diversion Verdict",
    date: "June 10, 2023",
    heading: "evidence needed for diversion verdict",
    previewText:
      "What kind of evidence do you need to pronounce a guilty verdict when it comes to diversion? Catching someone in the act of placing medication in their pocket when they are supposed to be wasting or seeing vials fall out of their locker leaves little room for doubt. Watching someone on camera substitute saline for another medication is definitive. Interviewing a reliable patient immediately after a nurse charts administration of a pain med and hearing the patient did not receive it is conclusive. But what if you don’t have those types of “proof”. What if you have data that tells you this person practices differently than their peers? They dispense more, they waste more, they enter more verbal orders, or they do not account for some of the meds they have removed.",
    body: "What kind of evidence do you need to pronounce a guilty verdict when it comes to diversion? Catching someone in the act of placing medication in their pocket when they are supposed to be wasting or seeing vials fall out of their locker leaves little room for doubt. Watching someone on camera substitute saline for another medication is definitive. Interviewing a reliable patient immediately after a nurse charts administration of a pain med and hearing the patient did not receive it is conclusive. But what if you don’t have those types of “proof”. What if you have data that tells you this person practices differently than their peers? They dispense more, they waste more, they enter more verbal orders, or they do not account for some of the meds they have removed.",
    noOfComments: 2,
  },
];

interface ISmallBlogCard {
  imageUrl: string;
  title: string;
  previewText: string;
}
export const RecentBlogPost: ISmallBlogCard[] = [
  {
    imageUrl: "/img-7.png",
    title: "Another Life Lost",
    previewText: "There has been a lot of chatter on list serves",
  },
  {
    imageUrl: "/img-8.png",
    title: "Mitigating Diversion",
    previewText: "I recently read a blog by Dennis Tribble,",
  },
  {
    imageUrl: "/img-7.png",
    title: "Words Matter",
    previewText: "I recently read a blog by Dennis Tribble",
  },
];

interface IBlogContent {
  id: string;
  heading: string;
  imageUrl: string;
  body: string;
}

export const blogContent: IBlogContent[] = [
  {
    id: "blog-1",
    heading: "Diversion",
    imageUrl: "/img-7.png",
    body: "What kind of evidence do you need to pronounce a guilty verdict when it comes to diversion? Catching someone in the act of placing medication in their pocket when they are supposed to be wasting or seeing vials fall out of their locker leaves little room for doubt. Watching someone on camera substitute saline for another medication is definitive. Interviewing a reliable patient immediately after a nurse charts administration of a pain med and hearing the patient did not receive it is conclusive. But what if you don’t have those types of “proof”. What if you have data that tells you this person practices differently than their peers? They dispense more, they waste more, they enter more verbal orders, or they do not account for some of the meds they have removed.",
  },
  {
    id: "blog-2",
    heading: "Drug Diversion",
    imageUrl: "/img-7.png",
    body: "What kind of evidence do you need to pronounce a guilty verdict when it comes to diversion? Catching someone in the act of placing medication in their pocket when they are supposed to be wasting or seeing vials fall out of their locker leaves little room for doubt. Watching someone on camera substitute saline for another medication is definitive. Interviewing a reliable patient immediately after a nurse charts administration of a pain med and hearing the patient did not receive it is conclusive. But what if you don’t have those types of “proof”. What if you have data that tells you this person practices differently than their peers? They dispense more, they waste more, they enter more verbal orders, or they do not account for some of the meds they have removed.",
  },
  {
    id: "blog-3",
    heading: "Testing head",
    imageUrl: "/img-7.png",
    body: "What kind of evidence do you need to pronounce a guilty verdict when it comes to diversion? Catching someone in the act of placing medication in their pocket when they are supposed to be wasting or seeing vials fall out of their locker leaves little room for doubt. Watching someone on camera substitute saline for another medication is definitive. Interviewing a reliable patient immediately after a nurse charts administration of a pain med and hearing the patient did not receive it is conclusive. But what if you don’t have those types of “proof”. What if you have data that tells you this person practices differently than their peers? They dispense more, they waste more, they enter more verbal orders, or they do not account for some of the meds they have removed.",
  },
];
