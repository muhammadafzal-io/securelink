import Hero from "@/components/sections/home/Hero";
import KalTechBenifits from "@/components/sections/home/KalTechBenefits";
import SolutionSection from "@/components/sections/home/SolutionSection";
import TrustedPartners from "@/components/sections/home/TrustedPartners";
import TestimonialSection from "@/components/sections/home/TestimonialSection";
import MeetingSchedulerSection from "@/components/sections/home/MeetingSchedulerSection";
import KalTechGrowth from "@/components/sections/home/KalTechGrowth";
// import CaseStudiesSection from "@/components/sections/home/CaseStudiesSection";

export default function Home() {
  return (
    <div>
      <Hero />

      <div className="bg-section-gradient pt-8 sm:pt-0">
        <TrustedPartners />

        <SolutionSection />
      </div>

      <KalTechBenifits />

      <KalTechGrowth />

      {/* <CaseStudiesSection /> */}

      <TestimonialSection />

      <MeetingSchedulerSection />
    </div>
  );
}
