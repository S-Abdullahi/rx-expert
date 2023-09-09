import Image from "next/image";
import Header from "../../components/Header";
import SubSectionTitle from "../../components/SubSectionTitle";
import Button from "../../components/button";
import CommentSection from "../../components/CommentSection";

export default function Drugdiversion() {
  return (
    <div>
      <Header
        title="Drug Diversion"
        label="solution"
        secondLabel="drug diversion"
      />
      <section className="px-6 lg:px-32 pt-16 pb-8 grid grid-cols-1 md:grid-cols-2 items-center gap-7">
        <div>
          <Image
            src="/group-image-9.png"
            alt="apparatus"
            width={673}
            height={706}
          />
        </div>
        <div>
          <SubSectionTitle titlePlain="Drug" titleColored="Diversion" />
          <p className="mt-3 font-light">
            Drug diversion is a real concern in the healthcare setting. It is
            estimated that 10% of nurses are dependent on some type of drug.
            Hospital staff are as vulnerable as the rest of the population to
            addiction. When you consider that vulnerability, and add to it the
            access healthcare providers have to the addictive medications, steps
            must be put in place to monitor for diversion. Allowing a healthcare
            provider to divert medications from the intended path (the patient)
            to themselves results in multiple points of risk.
          </p>
        </div>
      </section>
      <section className="px-6 lg:px-32 pt-8  pb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-5">
          <div>
            <SubSectionTitle titlePlain="Patient" titleColored="Risk" />
            <p className="font-light text-[#363636]">
              The primary victim of diversion is the patient. The risk to the
              patient can vary anywhere from being cared for by an impaired
              healthcare provider who is not at the top of his or her game, to
              being infected with contaminated drug supply which can lead to
              lifelong illness or permanent harm.
            </p>
          </div>
          <div>
            <SubSectionTitle titlePlain="Hospital" titleColored="Risk" />
            <p className="font-light text-[#363636]">
              Healthcare facilities have an obligation to protect their
              patients. Facilities that don’t, risk legal and regulatory
              consequences as well as negative publicity and financial
              implications. All facilities must have a diversion program in
              place to monitor and respond if a diversion incident does take
              place. There are multiple state and federal agencies that enforce
              existing laws and regulations, and they will hold facilities
              accountable in the event of an incident. Regulatory agencies also
              survey with respect to accountability of controlled substances and
              will ask to see how a facility handles chain of custody and
              monitoring. Have you educated your staff to their obligation to
              report?
            </p>
            <Button
              buttonText="Read more"
              variant="outlined"
              themeColor="tertiary"
            />
          </div>
          <div>
            <SubSectionTitle
              titlePlain="Healthcare Provider"
              titleColored="Risk"
            />
            <p className="font-light text-[#363636]">
              Let us not forget the healthcare provider. The staff work as a
              team and if there is an impaired team member it puts all members
              at risk. The member at the highest risk is the addict themselves.
              Having a solid monitoring program in place will help facilities
              identify signs of diversion and impairment sooner rather than
              later with the goal of getting help for the employee as soon as
              possible.
              <br />
              <br />
              Our pharmacy consultants at Rxpert Solutions offer a comprehensive
              approach to diversion monitoring. We have years of experience in
              this area and can assist you in developing a program for your
              facility, assess risks within your current program, work with you
              to create solutions, aid in monitoring, and provide training and
              education.
            </p>
          </div>
        </div>
        <div className="p-4 bg-[#F5F5F5] border-b-[5px] border-[#0F468E]">
          <p className="font-light text-[#363636]">
            I hired Terri (lead pharmacy consultant for Rxpert Solutions) to
            develop a controlled substance monitoring program for our 397 bed
            hospital. Terri performed a complete risk assessment of our
            practices and put a comprehensive program in place. It involved not
            only monthly audit reviews of nurse activity, but other monitoring
            practices within the pharmacy and on the nursing units. She worked
            well with nurse managers and educated them on what to look for and
            how to interpret the pharmacy generated audit results. She was a
            sounding board for them if they had concerns and they would often
            look to her for direction on next steps. Terri emphasized the need
            to report suspected diversion cases to the appropriate agencies
            including the Board of Nursing, and with her help, a process of
            reporting was implemented. Terri also recognized the need to get
            help for healthcare providers with addiction issues. She would train
            the nurse managers with this in mind and encourage them to take this
            approach with staff. She also gave regular education to staff and
            new nurse graduates on the risks of addiction, how to recognize it
            and how to get help if needed.
            <br /> <br />
            Prior to the implementation of this program, I was not aware of any
            staff at this facility being disciplined for suspected or confirmed
            diversion. Within the first month of implementation of the program,
            nurses were literally handing over their badge to their manager when
            confronted. In the first year of the program, 23 staff members had
            been terminated and reported for suspected diversion. This was no
            longer a facility that allowed a free for all with controlled
            substances. Terri helped us make it a safer place all around and the
            program continues with success.
            <br /> <br />
            Terri has a lot of experience and an instinct I learned to listen to
            when she thought something was “off”. She balances compassion,
            intolerance for diversion, safe patient care, and the ability to
            engage the team to find solutions that make a difference. I would
            highly recommend her for any hospital looking to start or improve
            their diversion program.
          </p>
          <div className="flex flex-col mt-3">
            <span className="font-semibold text-[#0F468E]">Victoria Hong, Pharm D</span>
            <span className="text-[#363636]">Director of Pharmacy</span>
          </div>
        </div>
      </section>
      <CommentSection/>
    </div>
  );
}
