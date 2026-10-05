import { Layers, Target } from "lucide-react";
import Hero from "@/components/sections/about-us/Hero";
import MeetingSchedulerSection from "@/components/sections/home/MeetingSchedulerSection";
import ProcessSection from "@/components/sections/home/ProcessSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlobalReach } from "@/components/shared/GlobalReach";

export default function AboutUs() {
  return (
    <div>
      <Hero />

      {/* Who we are */}
      <section className="custom-container py-12 md:py-24">
        <SectionHeading
          eyebrow="Who We Are"
          title="Websites, Software & Automation "
          accent="Under One Roof"
          description="SecureLink is based in the UAE and works with businesses around the world to build the technology behind their growth, a website that represents them properly, software that fits how their team actually works, and automation that removes the busywork in between."
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
          <div className="px-reveal rounded-3xl border border-border bg-surface-elevated p-7 sm:p-9">
            <span className="flex size-12 items-center justify-center rounded-xl bg-brand/10 text-brand ring-1 ring-brand/25">
              <Layers className="size-6" strokeWidth={1.75} />
            </span>
            <p className="mt-5 text-[14px] sm:text-[18px] text-muted-foreground">
              We work across{" "}
              <span className="font-semibold text-foreground">
                web development, AI automation, and custom software
              </span>, which means your website, your internal tools, and the
              automation connecting them are built by one team that
              understands how they fit together.
            </p>
          </div>
          <div className="px-reveal rounded-3xl border border-border bg-surface-elevated p-7 sm:p-9">
            <span className="flex size-12 items-center justify-center rounded-xl bg-brand/10 text-brand ring-1 ring-brand/25">
              <Target className="size-6" strokeWidth={1.75} />
            </span>
            <p className="mt-5 text-[14px] sm:text-[18px] text-muted-foreground">
              Every engagement starts with understanding your business
              first. We&apos;d rather scope a project properly than ship
              something generic. The goal is technology you&apos;ll still be
              using, and happy with, a year from now.
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="custom-container">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-brand/30 bg-surface-elevated px-6 py-14 text-center sm:px-12 md:py-24">
          <div
            aria-hidden="true"
            className="px-slow pointer-events-none absolute left-1/2 top-1/2 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-3xl"
          />
          <div className="relative">
            <SectionHeading eyebrow="Our Approach" title="Technology that solves" accent="a real problem" />
            <p className="mx-auto mt-5 max-w-2xl text-[15px] sm:text-[20px] font-medium text-foreground">
              Built well enough that it doesn&apos;t need replacing in a year.
            </p>
            <p className="mx-auto mt-5 max-w-3xl text-[14px] sm:text-[18px] text-muted-foreground">
              We help businesses, in the UAE and around the world,
              establish a stronger digital presence, automate the
              operational work that eats up time, and build the internal
              systems that let them scale without adding headcount for every
              new process.
            </p>
          </div>
        </div>
      </section>

      <GlobalReach />

      <ProcessSection />

      <MeetingSchedulerSection />
    </div>
  );
}
