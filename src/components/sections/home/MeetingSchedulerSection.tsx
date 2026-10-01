import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

import Link from "next/link";
import React from "react";

const valuePoints = [
  "UAE-Based, Globally Delivered",
  "Web, Automation & Software Under One Roof",
  "Clear Scope Before We Start",
  "Modern, Scalable Engineering",
  "Direct Access To The Team Building Your Project",
];

type MeetingSchedulerSectionProps = {
  /** Plain part of the headline, then the accented part in brand green. */
  title?: string;
  accent?: string;
  description?: string;
};

const MeetingSchedulerSection = ({
  title = "Let’s talk about",
  accent = "your project",
  description = "Tell us what you’re trying to build (a website, an automation, or a piece of custom software) and we’ll get back to you with clear next steps, wherever in the world you are.",
}: MeetingSchedulerSectionProps) => {
  return (
    <section className="custom-container mt-12 md:mt-24 mb-6 md:mb-10">
      <div className="px-reveal relative isolate overflow-hidden rounded-3xl border border-brand/30 shadow-[0_40px_90px_-40px_color-mix(in_oklch,var(--brand)_60%,transparent)]">
        <Image
          src="/assets/hero/cta-abstract-bg.png"
          alt=""
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="-z-10 object-cover object-center grayscale"
        />
        {/* Brand recolour, then dark scrim for text contrast */}
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-brand mix-blend-color" />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 90% at 85% 50%, color-mix(in oklch, var(--brand) 38%, transparent) 0%, transparent 70%), linear-gradient(100deg, rgba(5,7,10,0.92) 0%, rgba(5,7,10,0.78) 50%, rgba(5,7,10,0.5) 100%)",
          }}
        />
        {/* Blueprint grid, faded toward the edges */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage: "radial-gradient(ellipse 70% 80% at 80% 50%, black 0%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 80% at 80% 50%, black 0%, transparent 75%)",
          }}
        />
        <div
          aria-hidden="true"
          className="px-slow pointer-events-none absolute -right-24 -top-24 -z-10 size-[420px] rounded-full bg-brand/30 blur-3xl"
        />

        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-12 sm:px-10 md:py-20 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-14">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/15 px-4 py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.15em] text-white">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-75 motion-reduce:hidden" />
                <span className="relative inline-flex size-2 rounded-full bg-brand" />
              </span>
              Now taking new projects
            </p>

            <h2 className="mt-5 text-[32px] sm:text-[56px] font-bold leading-[1.05] tracking-tight text-white">
              {title}{" "}
              <span className="text-brand">{accent}</span>
            </h2>

            <p className="mt-4 max-w-xl text-[14px] sm:text-[19px] text-neutral-300">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                className="group icon-btn-ghost-effect hero-primary-btn h-12 sm:h-14 rounded-full text-[14px] sm:text-[18px] gap-4 ps-7 pe-2 relative glowing-effect"
                asChild
              >
                <Link href="/contact-us">
                  Start a Project
                  <div className="icon size-8 sm:size-9">
                    <ArrowRight className="size-4 md:size-5" />
                  </div>
                </Link>
              </Button>

              <Link
                href="/#services"
                className="group inline-flex h-12 sm:h-14 items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 text-[14px] sm:text-[18px] font-medium text-white transition-colors hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <ul className="space-y-3 rounded-2xl border border-white/15 bg-black/40 p-5 sm:p-7">
            {valuePoints.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[13px] sm:text-[16px] text-neutral-100"
              >
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MeetingSchedulerSection;
