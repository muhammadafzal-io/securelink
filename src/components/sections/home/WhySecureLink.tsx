import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Target,
  ShieldCheck,
  Workflow,
  Layers,
  MessagesSquare,
  Compass,
  ArrowRight,
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
      description: "You'll know what's being built, why, and when. No black boxes.",
    },
    {
      icon: Compass,
      title: "End-to-End Ownership",
      description: "From first conversation to post-launch support, one team sees it through.",
    },
  ];

  // Bento layout on lg: rows of 2+1, 1+2, 1+2 columns. First card is the brand-filled hero tile.
  const spans = [
    "lg:col-span-2",
    "",
    "",
    "lg:col-span-2",
    "",
    "lg:col-span-2",
  ];

  return (
    <section className="relative py-14 md:py-28 overflow-hidden">
      <div className="benifits-section-bg-image" />
      <div
        aria-hidden="true"
        className="px-slow pointer-events-none absolute left-1/2 top-24 size-[520px] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl"
      />

      <div className="custom-container relative z-[5]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.15em] text-brand">
            <span className="size-1.5 rounded-full bg-brand" />
            Why Choose Us
          </p>
          <h2 className="mt-5 text-[34px] sm:text-[56px] font-bold leading-[1.05] tracking-tight text-foreground">
            Why <span className="text-brand">SecureLink</span>
          </h2>
          <p className="mt-4 text-[14px] sm:text-[19px] text-muted-foreground">
            Technology partners are easy to find. One that understands your
            business, protects your data, and stays with the project after
            launch is harder, that&apos;s the standard we hold ourselves to.
          </p>
        </div>

        <ul className="mx-auto mt-12 md:mt-16 grid max-w-6xl grid-cols-1 gap-4 md:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cardContent.map((item, index) => {
            const featured = index === 0;
            return (
              <li
                key={item.title}
                className={cn(
                  "px-reveal group relative isolate overflow-hidden rounded-3xl border p-7 sm:p-9 transition-all duration-300 hover:-translate-y-1",
                  spans[index],
                  featured
                    ? "border-brand/60 bg-gradient-to-br from-brand to-[color-mix(in_oklch,var(--brand)_55%,black)] text-white shadow-[0_30px_70px_-30px_color-mix(in_oklch,var(--brand)_80%,transparent)]"
                    : "border-border bg-surface-elevated hover:border-brand/50 hover:shadow-[0_24px_50px_-24px_color-mix(in_oklch,var(--brand)_50%,transparent)]"
                )}
              >
                {/* corner glow */}
                {!featured && (
                  <span
                    aria-hidden="true"
                    className="absolute -right-16 -top-16 -z-10 size-48 rounded-full bg-brand/15 blur-2xl transition-opacity duration-300 group-hover:bg-brand/30"
                  />
                )}
                {/* parallax watermark icon */}
                <item.icon
                  aria-hidden="true"
                  strokeWidth={1}
                  className={cn(
                    "px-fast pointer-events-none absolute -bottom-6 -right-4 -z-10 size-40 sm:size-52",
                    featured ? "text-white/15" : "text-brand/10"
                  )}
                />

                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "flex size-14 items-center justify-center rounded-2xl ring-1",
                      featured
                        ? "bg-white/15 text-white ring-white/30"
                        : "bg-brand/10 text-brand ring-brand/25 transition-colors group-hover:bg-brand group-hover:text-white"
                    )}
                  >
                    <item.icon className="size-7" strokeWidth={1.75} />
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "text-[13px] font-semibold tabular-nums tracking-widest",
                      featured ? "text-white/70" : "text-muted-foreground/60"
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3
                  className={cn(
                    "mt-8 font-semibold leading-snug",
                    featured
                      ? "text-[24px] sm:text-[34px] text-white"
                      : "text-[19px] sm:text-[23px] text-foreground"
                  )}
                >
                  {item.title}
                </h3>
                <p
                  className={cn(
                    "mt-3 max-w-md",
                    featured
                      ? "text-[14px] sm:text-[18px] text-white/85"
                      : "text-[14px] sm:text-[16px] text-muted-foreground"
                  )}
                >
                  {item.description}
                </p>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 text-center">
          <Link
            href="/about-us"
            className="group inline-flex items-center gap-2 text-[14px] sm:text-[16px] font-semibold text-brand"
          >
            More about us
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhySecureLink;
