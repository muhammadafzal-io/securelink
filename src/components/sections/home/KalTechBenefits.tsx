import { cn } from "@/lib/utils";
import { ThemeAwareIcon } from "@/components/theme-aware-icon";
import React from "react";

const KalTechBenifits = () => {
  const cardContent = [
    {
      icon: "/assets/benifits/benifits-icon1.png",
      title: "AI-Native Approach",
      description: "We don't just add AI. It's in our DNA.",
    },
    {
      icon: "/assets/benifits/benifits-icon2.png",
      title: "Lightning-Fast MVPs",
      description: "AI accelerates your time to market.",
    },
    {
      icon: "/assets/benifits/benifits-icon3.png",
      title: "Full-Stack AI Teams",
      description: "Engineers, strategists, and data scientists on call.",
    },
    {
      icon: "/assets/benifits/benifits-icon4.png",
      title: "Generative & Predictive AI",
      description: "From LLMs to ML pipelines.",
    },
    {
      icon: "/assets/benifits/benifits-icon5.png",
      title: "Future-Proof Architecture",
      description: "AI-ready from day one.",
    },
    {
      icon: "/assets/benifits/benifits-icon6.png",
      title: "Flexible Engagement Models",
      description: "Hourly, retainer, or AI-as-a-Service.",
    },
  ];

  return (
    <div className="relative py-10 md:py-20 overflow-hidden">
      <div className="benifits-section-bg-image" />

      <div className="custom-container relative z-[5]">
        <h3 className="text-[32px] sm:text-[48px] font-semibold text-foreground text-center">
          Why Choose{" "}
          <span className="text-brand text-[32px] sm:text-[48px]"> Kal</span>
          Tech?
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 rounded-xl border border-border overflow-hidden bg-card/70 backdrop-blur-md mt-10 divide-x divide-y divide-border">
          {cardContent.map((item, index) => (
            <Benefitcard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KalTechBenifits;

const Benefitcard = ({
  className,
  icon,
  title,
  description,
}: {
  className?: string;
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div
      className={cn(
        "group px-4 md:px-8 py-7 md:py-10 flex flex-col gap-1 transition-colors duration-300",
        className
      )}
    >
      <div className="icon-tile size-10">
        <ThemeAwareIcon src={icon} alt={title} width={28} height={28} />
      </div>

      <div className="mt-3 space-y-1.5 sm:space-y-1">
        <h5 className="text-[14px] sm:text-[20px] font-medium text-foreground">
          {title}
        </h5>
        <p className="text-[12px] sm:text-[16px] font-normal text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
};
