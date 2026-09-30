import Hero from "@/components/sections/staff-augmentation/Hero";
import MeetingSchedulerSection from "@/components/sections/home/MeetingSchedulerSection";
import Image from "next/image";
import StaffAugmentationBenifits from "@/components/sections/staff-augmentation/StaffAugmentationBenefits";
import PricingCards from "@/components/sections/staff-augmentation/PricingCard";
import ProcessCards from "@/components/sections/staff-augmentation/ProcessCards";
import ContactForm from "@/components/sections/contact-us/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export default function StaffAugmentation() {
  return (
    <div>
      <Hero />
      <div className="flex w-full pl-10 sm:mt-22 pb-6 flex-row">
        <div className="sm:flex sm:w-1/2 z-10 justify-end hidden">
          <Image
            src={"/assets/about-us-img.png"}
            alt="about-us"
            height={500}
            width={900}
          ></Image>
        </div>
        <div className="flex flex-col sm:w-1/2 w-full mt-8 sm:mt-2">
          <h1 className="relative z-10 font-bold text-foreground text-[32px] sm:text-[48px] capitalize">
            Why Choose <br></br>Staff Augmentation?
          </h1>
          <p className="relative z-10 py-2 text-[16px] sm:text-[24px] font-normal text-muted-foreground mt-2">
            Faster Hiring. Smarter Execution. Full Control.
          </p>
          <p className="relative z-10 text-[12px] sm:text-[18px] font-normal text-muted-foreground mt-2 pr-8">
            Staff augmentation gives you the flexibility to scale fast — while
            keeping strategic direction in-house. Instead of spending months
            recruiting or training, you get fully aligned, AI-fluent
            professionals who can hit the ground running.
          </p>
          <p className="relative z-10 text-[12px] sm:text-[18px] font-normal text-muted-foreground mt-6 pr-8">
            - Accelerate time-to-market<br></br> - Eliminate hiring delays and
            onboarding lag<br></br> - Reduce operational costs<br></br> - Retain
            full project ownership<br></br> - Gain immediate AI & engineering
            expertise
          </p>
        </div>
      </div>
      <StaffAugmentationBenifits />
      <div className="relative">
        <div className="hero-about-us-vision-filter items-center justify-center">
          <h1 className="relative z-10 font-bold text-[32px] sm:text-[48px] capitalize">
            Engagement Flexibility:
          </h1>
          <p className="relative z-10 py-2 text-[12px] sm:text-[18px] font-normal text-muted-foreground mt-2 text-center w-[95%] sm:w-full">
            Whether you're looking for a few hours of expert input or a fully
            managed team to take charge of your product,
            <br className="hidden sm:flex"></br> we offer engagement models that
            scale with you. Choose from hourly support, monthly retainers,
            sprint-based<br className="hidden sm:flex"></br> collaboration, or
            end-to-end team management—whatever suits your workflow and goals
            best.
          </p>
          <PricingCards />
        </div>
      </div>
      <ProcessCards />
      <div className="flex flex-col gap-2 text-center w-full pt-16 sm:py-16">
        <h1 className="text-[32px] sm:text-[48px] font-bold text-foreground mb-1 text-center justify-center">
          Let’s Build Smarter.<br className="flex sm:hidden"></br> Together.
        </h1>
        <p className="text-muted-foreground text-[12px] sm:text-[16px] mb-2 md:mb-4 px-8 sm:px-0">
          We partner with startups, enterprises, and global teams to craft
          AI-powered products that lead industries.
        </p>
      </div>
      <div className="flex w-full h-full pl-10 mt-8 md:mt-2 pb-6 md:flex-row flex-col justify-between">
        <div className="flex flex-col gap-16 pr-12 md:w-2/3 w-full">
          <div className="flex flex-col gap-8 max-w-full items-start justify-start">
            <ContactForm />
          </div>
        </div>
        <div className="flex flex-col md:gap-50 md:w-1/3 w-full md:mt-0 mt-8">
          <div className="flex w-[90%] flex-col gap-4 items-start justify-start">
            <div className="flex flex-col h-full w-full bg-card p-4 rounded-xl overflow-hidden">
              <p className="relative z-10 text-[16px] sm:text-[18px] font-medium text-foreground mt-2 text-center sm:text-start">
                Customer Support
              </p>
              <p className="relative z-10 py-2 text-[12px] sm:text-[16px] font-normal text-muted-foreground text-center sm:text-start">
                Our support team is available 24/7 to assist you with any
                issues, queries, or product guidance you need.
              </p>
            </div>
            <div className="flex flex-col h-full w-full bg-card p-4 rounded-xl overflow-hidden">
              <p className="relative z-10 text-[16px] sm:text-[18px] font-medium text-foreground mt-2 text-center sm:text-start">
                Feedback and Suggestions
              </p>
              <p className="relative z-10 py-2 text-[12px] sm:text-[16px] font-normal text-muted-foreground text-center sm:text-start">
                Your feedback shapes our future. We’re constantly evolving, and
                your insights help us improve .
              </p>
            </div>
            <div className="flex flex-col h-full w-full bg-card p-4 rounded-xl overflow-hidden">
              <p className="relative z-10 text-[16px] sm:text-[18px] font-medium text-foreground mt-2 text-center sm:text-start">
                Media Inquiries
              </p>
              <p className="relative z-10 py-2 text-[12px] sm:text-[16px] font-normal text-muted-foreground text-center sm:text-start">
                For press or partnership opportunities, reach out to our media
                team.
              </p>
            </div>
            <div className="flex flex-col h-full w-full bg-card pt-4 px-4 pb-4 md:pb-24 rounded-xl overflow-visible">
              <p className="relative z-10 text-[24px] sm:text-[30px] font-medium text-foreground mt-2 pb-4">
                Reach Out
              </p>
              <span className="flex flex-row gap-2 items-center">
                <MapPin className="ms-1 size-4.5" />
                <p className="relative z-10 py-2 text-[12px] sm:text-[20px] font-normal text-muted-foreground">
                  New Castle, Delaware, USA
                </p>
              </span>
              <span className="flex flex-row gap-2 items-center">
                <Phone className="ms-1 size-4.5" />
                <p className="relative z-10 py-2 text-[12px] sm:text-[20px] font-normal text-muted-foreground">
                  (+92) 3216033066
                </p>
              </span>
              <span className="flex flex-row gap-2 items-center">
                <Mail className="ms-1 size-4.5" />
                <p className="relative z-10 py-2 text-[12px] sm:text-[20px] font-normal text-muted-foreground">
                  shershah@kaltech.online
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
