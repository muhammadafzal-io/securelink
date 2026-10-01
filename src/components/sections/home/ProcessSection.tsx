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
    description: "Scope, architecture, and timeline agreed upfront, with no surprises mid-build.",
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
    <section className="custom-container">
      <div className="relative overflow-hidden rounded-3xl bg-surface-elevated py-12 md:py-24">
        {/* Central glow: wide soft halo + tighter core, both centred behind the timeline */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 45% at 50% 55%, color-mix(in oklch, var(--brand) 38%, transparent) 0%, transparent 72%), radial-gradient(85% 80% at 50% 50%, color-mix(in oklch, var(--brand) 18%, transparent) 0%, transparent 78%)",
          }}
        />
        <div
          aria-hidden="true"
          className="px-slow pointer-events-none absolute left-1/2 top-1/2 size-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/25 blur-3xl"
        />

        <div className="relative z-[3] flex flex-col items-center px-5 sm:px-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.15em] text-brand">
            <span className="size-1.5 rounded-full bg-brand" />
            How We Work
          </p>
          <h2 className="mt-5 text-[34px] sm:text-[56px] font-bold leading-[1.05] tracking-tight text-foreground text-center">
            Our <span className="text-brand">Process</span>
          </h2>
          <p className="mt-4 text-[14px] sm:text-[19px] text-muted-foreground text-center max-w-2xl">
            A straightforward way of working, from first call to the system
            running in production.
          </p>

          <ol className="relative mt-12 md:mt-16 grid w-full max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
            {/* Desktop connector: track + progress line that draws on scroll */}
            <span
              aria-hidden="true"
              className="absolute left-[8.33%] right-[8.33%] top-7 hidden h-0.5 bg-border lg:block"
            />
            <span
              aria-hidden="true"
              className="px-draw absolute left-[8.33%] right-[8.33%] top-7 hidden h-0.5 origin-left bg-brand lg:block"
            />

            {steps.map((step, index) => (
              <li
                key={step.title}
                className="px-reveal group relative flex flex-col lg:items-center lg:text-center"
              >
                <span className="relative z-[1] flex size-14 items-center justify-center rounded-full border-2 border-brand bg-background text-brand shadow-[0_0_28px_-6px_color-mix(in_oklch,var(--brand)_70%,transparent)] transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                  <step.icon className="size-6" strokeWidth={1.75} />
                </span>

                <div className="mt-4 flex-1 rounded-2xl border border-border bg-background/60 p-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-brand/50 lg:w-full">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
                    Step {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 text-[18px] sm:text-[20px] font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[13px] sm:text-[14px] text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
