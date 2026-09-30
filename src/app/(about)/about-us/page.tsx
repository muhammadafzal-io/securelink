import Hero from "@/components/sections/about-us/Hero";
import MeetingSchedulerSection from "@/components/sections/home/MeetingSchedulerSection";
import ProcessSection from "@/components/sections/home/ProcessSection";

export default function AboutUs() {
  return (
    <div>
      <Hero />
      <div className="flex w-full px-6 sm:px-10 sm:pb-6 flex-col pt-8 sm:pt-16">
        <div className="flex flex-col w-full sm:max-w-3xl mx-auto text-center">
          <h1 className="relative z-10 font-bold text-foreground sm:text-[48px] text-[32px] capitalize">
            Websites, Software & Automation — Under One Roof
          </h1>
          <p className="relative z-10 sm:py-2 text-[12px] sm:text-[18px] font-normal text-muted-foreground mt-2">
            Secure Link works with businesses across the UAE to build the
            technology behind their growth — a website that represents
            them properly, software that fits how their team actually
            works, and automation that removes the busywork in between.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 mt-12 sm:mt-16 max-w-5xl mx-auto">
          <div className="flex w-full sm:w-1/2 text-[12px] sm:text-[18px] font-normal text-muted-foreground">
            <p>
              We work across{" "}
              <span className="font-semibold text-foreground">
                web development, AI automation, and custom software
              </span>{" "}
              — which means your website, your internal tools, and the
              automation connecting them are built by one team that
              understands how they fit together.
            </p>
          </div>
          <div className="flex w-full sm:w-1/2 text-[12px] sm:text-[18px] font-normal text-muted-foreground">
            <p>
              Every engagement starts with understanding your business
              first. We'd rather scope a project properly than ship
              something generic — the goal is technology you'll still be
              using, and happy with, a year from now.
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="hero-about-us-vision-filter items-center justify-center">
          <h1 className="relative z-10 font-bold text-[32px] sm:text-[48px] capitalize text-center">
            Our Approach
          </h1>
          <p className="relative z-10 py-2 text-[12px] sm:text-[18px] font-normal text-muted-foreground mt-2 text-center px-8 sm:px-0">
            Build technology that solves a real problem, built well enough
            that it doesn't need replacing in a year.
          </p>
          <p className="relative z-10 py-2 text-[12px] sm:text-[18px] font-normal text-muted-foreground mt-12 sm:mt-18 text-center px-8 sm:px-0">
            We help UAE businesses establish a stronger digital presence,
            automate the operational work that eats up time, and build the
            internal systems that let them scale without adding
            headcount for every new process.
          </p>
        </div>
      </div>

      <ProcessSection />

      <div className="flex w-full bg-surface-elevated py-12"></div>

      <MeetingSchedulerSection />
    </div>
  );
}
