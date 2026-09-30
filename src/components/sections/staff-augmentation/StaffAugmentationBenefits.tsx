import { cn } from "@/lib/utils";
import { ThemeAwareIcon } from "@/components/theme-aware-icon";
import React from "react";

const StaffAugmentationBenefits = () => {
  const cardContent = [
    {
      icon: "/assets/staff-augment-assets/ai.svg",
      title: "AI Engineers & ML Developers",
      description:
        "Build and scale models using LLMs, transformers, RAG pipelines",
    },
    {
      icon: "/assets/staff-augment-assets/prompt.svg",
      title: "Prompt Engineers",
      description: "Architect context-aware workflows and system prompts",
    },
    {
      icon: "/assets/staff-augment-assets/full-stack.svg",
      title: "Full-Stack Developers",
      description: "Experts in React, Next.js, Python, Node, Laravel",
    },
    {
      icon: "/assets/staff-augment-assets/dev-ops.svg",
      title: "DevOps & MLOps Experts",
      description: "Build scalable infra, CI/CD, cloud-native pipelines",
    },
    {
      icon: "/assets/staff-augment-assets/product-manager.svg",
      title: "Product Managers (AI-SaaS)",
      description: "Drive velocity with agile AI product leadership",
    },
    {
      icon: "/assets/staff-augment-assets/qa.svg",
      title: "QA & AI Testing Engineers",
      description: "Implement automated, intelligent test cycles",
    },
    {
      icon: "/assets/staff-augment-assets/data-science.svg",
      title: "Data Scientists & Analysts",
      description: "Drive insight from raw data with smart modeling",
    },
  ];

  // Split content into first row (4 cards) and second row (3 cards)
  const firstRowCards = cardContent.slice(0, 4);
  const secondRowCards = cardContent.slice(4);

  return (
    <div className="relative py-10 md:py-20 overflow-hidden">
      <div className="benifits-section-bg-image" />

      <div className="custom-container relative z-[5]">
        <h3 className="text-[32px] sm:text-[48px] font-semibold text-foreground text-center">
          What You Get with KalTech
        </h3>

        <div className="mt-10">
          {/* First row with 4 cards */}
          <div className="flex flex-wrap gap-6 justify-center">
            {firstRowCards.map((item, index) => (
              <div
                key={index}
                className="w-[calc(50%-12px)] md:w-[calc(25%-18px)] bg-background/10 backdrop-blur-md rounded-xl border-1"
              >
                <Benefitcard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </div>
            ))}
          </div>

          {/* Second row with 3 centered cards */}
          <div className="flex flex-wrap gap-6 justify-center mt-6">
            {secondRowCards.map((item, index) => (
              <div
                key={index}
                className="w-[calc(50%-12px)] md:w-[calc(30%-18px)] bg-background/10 backdrop-blur-md rounded-xl border-1"
              >
                <Benefitcard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffAugmentationBenefits;

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
