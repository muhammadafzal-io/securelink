import Hero from "@/components/sections/home/Hero";
import WhySecureLink from "@/components/sections/home/WhySecureLink";
import SolutionSection from "@/components/sections/home/SolutionSection";
import { GlobalReach } from "@/components/shared/GlobalReach";
import ProcessSection from "@/components/sections/home/ProcessSection";
import CaseStudiesSection from "@/components/sections/home/CaseStudiesSection";
import MeetingSchedulerSection from "@/components/sections/home/MeetingSchedulerSection";

export default function Home() {
  return (
    <div>
      <Hero />

      <div className="bg-section-gradient pt-8 sm:pt-0">
        <SolutionSection />
      </div>

      <WhySecureLink />

      <GlobalReach />

      <ProcessSection />

      <CaseStudiesSection />

      <MeetingSchedulerSection />
    </div>
  );
}
