import Hero from "@/components/sections/about-us/Hero";
import MeetingSchedulerSection from "@/components/sections/home/MeetingSchedulerSection";
import Image from "next/image";
import KalTechBenifits from "@/components/sections/home/KalTechBenefits";
import KalTechGrowth from "@/components/sections/home/KalTechGrowth";
// import CaseStudiesSection from "@/components/sections/home/CaseStudiesSection";

export default function AboutUs() {
  return (
    <div>
      

      <Hero />
      <div className="flex w-full pl-10 sm:pb-6 flex-row pt-8 sm:pt-0">
        <div className="flex flex-col sm:w-1/2 w-full">
          <h1 className="relative z-10 font-bold text-foreground sm:text-[48px] text-[32px] capitalize">
            Next-Gen AI Engineering
          </h1>
          <p className="relative z-10 sm:py-2 text-[12px] sm:text-[18px] font-normal text-muted-foreground mt-2">
            KalTech is a full-stack AI venture studio driven by a singular goal:
            making intelligence scalable. We partner with visionary startups,
            enterprises, and ecosystems to turn complex challenges into elegant,
            AI-enabled solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-12 sm:mt-16">
            <div className="flex w-full sm:w-1/2 z-10 text-[12px] sm:text-[18px] font-normal text-muted-foreground">
              <p>
                Our DNA blends{" "}
                <span className="font-semibold text-muted-foreground">
                  deep software engineering
                </span>{" "}
                with{" "}
                <span className="font-semibold text-muted-foreground">
                  AI innovation
                </span>
                , enabling us to build future-ready products — from intelligent
                assistants to enterprise-grade automation platforms.
              </p>
            </div>
            <div className="flex w-full sm:w-1/2 z-10 text-[12px] sm:text-[18px] font-normal text-muted-foreground">
              <p>
                Founded by a team of domain experts, we bring together{" "}
                <span className="font-semibold text-muted-foreground">
                  strategists, AI engineers, product designers, and growth
                  architects
                </span>{" "}
                to craft solutions that are as scalable as they are smart.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-1/2 z-10 justify-end hidden sm:flex">
          <Image
            src={"/assets/about-us-img.png"}
            alt="about-us"
            height={500}
            width={900}
          ></Image>
        </div>
      </div>
      <div className="relative">
        <div className="hero-about-us-vision-filter items-center justify-center">
          <h1 className="relative z-10 font-bold text-[32px] sm:text-[48px] capitalize text-center">
            Our Vision & Mission
          </h1>
          <p className="relative z-10 py-2 text-[12px] sm:text-[18px] font-normal text-muted-foreground mt-2 text-center hidden sm:flex">
            Driven to lead the world into a smarter, faster, and more connected
            future—powered <br></br> by AI-first innovation and purposeful
            design.
          </p>
          <p className="relative z-10 py-2 text-[12px] sm:text-[18px] font-normal text-muted-foreground mt-2 px-12 text-center flex sm:hidden">
            Driven to lead the world into a smarter, faster, and more connected
            future—powered by AI-first innovation and purposeful design.
          </p>
          <p className="relative z-10 py-2 text-[12px] sm:text-[18px] font-normal text-muted-foreground mt-18 text-center hidden sm:flex">
            To design, develop, and deploy AI-powered systems that accelerate
            growth, automate<br></br> operations, and empower organizations to
            lead confidently in a digital world.
          </p>
          <p className="relative z-10 py-2 px-12 text-[12px] sm:text-[18px] font-normal text-muted-foreground mt-12 text-center flex sm:hidden">
            To design, develop, and deploy AI-powered systems that accelerate
            growth, automate operations, and empower organizations to lead
            confidently in a digital world.
          </p>
        </div>
      </div>
      <KalTechBenifits />
      <KalTechGrowth />
      {/* <CaseStudiesSection /> */}
      <div className="flex w-full bg-surface-elevated py-12"></div>
      <MeetingSchedulerSection />
    </div>
  );
}
