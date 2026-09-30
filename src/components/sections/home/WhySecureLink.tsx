import { cn } from "@/lib/utils";
import {
  Target,
  ShieldCheck,
  Workflow,
  Layers,
  MessagesSquare,
  Compass,
  type LucideIcon,
} from "lucide-react";
import React from "react";

const WhySecureLink = () => {
  const cardContent: { icon: LucideIcon; title: string; description: string }[] = [
    {
      icon: Target,
      title: "Business-Focused Development",
      description: "Every project starts with what your business needs, not a generic template.",
    },
    {
      icon: ShieldCheck,
      title: "Security-Minded by Default",
      description: "Sensible data handling and secure practices built in, not bolted on later.",
    },
    {
      icon: Workflow,
      title: "Automation-First Thinking",
      description: "We look for the repetitive work worth automating, not just repeating it.",
    },
    {
      icon: Layers,
      title: "Modern, Scalable Engineering",
      description: "Built on current frameworks and clean architecture that can grow with you.",
    },
    {
      icon: MessagesSquare,
      title: "Clear Communication",
      description: "You'll know what's being built, why, and when — no black boxes.",
    },
    {
      icon: Compass,
      title: "End-to-End Ownership",
      description: "From first conversation to post-launch support, one team sees it through.",
    },
  ];

  return (
    <div className="relative py-10 md:py-20 overflow-hidden">
      <div className="benifits-section-bg-image" />

      <div className="custom-container relative z-[5]">
        <h3 className="text-[32px] sm:text-[48px] font-semibold text-foreground text-center">
          Why <span className="text-brand">Secure Link</span>
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

export default WhySecureLink;

const Benefitcard = ({
  className,
  icon: Icon,
  title,
  description,
}: {
  className?: string;
  icon: LucideIcon;
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
        <Icon className="size-4 text-foreground" strokeWidth={1.75} />
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
