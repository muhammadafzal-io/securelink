import React from "react";
import {
  Search,
  ClipboardList,
  Hammer,
  FlaskConical,
  Rocket,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

const steps: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Search,
    title: "Discover",
    description: "We learn your business, your users, and what the project actually needs to solve.",
  },
  {
    icon: ClipboardList,
    title: "Plan",
    description: "Scope, architecture, and timeline agreed upfront — no surprises mid-build.",
  },
  {
    icon: Hammer,
    title: "Build",
    description: "Design and development move together, with regular check-ins along the way.",
  },
  {
    icon: FlaskConical,
    title: "Test",
    description: "Every feature is checked across devices and edge cases before it ships.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "A controlled release, with support close by for the first days that matter most.",
  },
  {
    icon: TrendingUp,
    title: "Improve",
    description: "We keep an eye on performance and usage, and refine once it's live.",
  },
];

const ProcessSection = () => {
  return (
    <div className="custom-container">
      <div className="relative py-10 md:py-20 overflow-hidden rounded-xl bg-surface-elevated">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(60% 70% at 50% 0%, color-mix(in oklch, var(--brand) 8%, transparent) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-[3] flex flex-col items-center px-4">
          <h2 className="text-[32px] sm:text-[48px] font-semibold text-foreground text-center">
            Our Process
          </h2>

          <p className="text-[12px] sm:text-[18px] text-muted-foreground mt-4 text-center max-w-2xl">
            A straightforward way of working, from first call to the system
            running in production.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mt-10 w-full max-w-5xl">
            {steps.map((step, index) => (
              <div key={step.title} className="flex flex-col items-center text-center gap-3">
                <div className="relative flex size-14 items-center justify-center rounded-full bg-brand/10 border border-brand/20">
                  <step.icon className="size-6 text-brand" strokeWidth={1.5} />
                  <span className="absolute -top-1.5 -right-1.5 flex size-5 items-center justify-center rounded-full bg-brand text-[10px] font-semibold text-white">
                    {index + 1}
                  </span>
                </div>
                <h5 className="text-[13px] sm:text-[16px] font-medium text-foreground">
                  {step.title}
                </h5>
                <p className="text-[11px] sm:text-[13px] text-muted-foreground leading-snug">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
