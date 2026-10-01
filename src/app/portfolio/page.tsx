"use client";
import { useState } from "react";
import Hero from "@/components/sections/portfolio/Hero";
import MeetingSchedulerSection from "@/components/sections/home/MeetingSchedulerSection";
import { caseStudies } from "@/data/caseStudies";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CaseStudyCard } from "@/components/shared/CaseStudyCard";
import { GlobalReach } from "@/components/shared/GlobalReach";

export default function Portfolio() {
  const categories = ["All", "Web Development", "AI Automation", "Custom Software"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? caseStudies
      : caseStudies.filter((study) => study.category === activeCategory);

  return (
    <div>
      <Hero />

      <section className="custom-container py-12 md:py-20">
        <SectionHeading
          eyebrow="Selected Work"
          title="Built for real"
          accent="business problems"
          description="Illustrative examples of the work we take on for clients worldwide, shown to give you a sense of scope and approach, not a list of named clients."
        />

        <div
          role="tablist"
          aria-label="Filter projects"
          className="mt-8 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible"
        >
          {categories.map((category) => (
            <button
              key={category}
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-full border px-5 py-2 text-[13px] sm:text-[15px] font-medium transition-colors ${
                activeCategory === category
                  ? "border-brand bg-brand text-white"
                  : "border-border bg-surface-elevated text-muted-foreground hover:border-brand/50 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <ul className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((study) => (
            <li key={study.title}>
              <CaseStudyCard study={study} />
            </li>
          ))}
        </ul>
      </section>

      <GlobalReach />

      <MeetingSchedulerSection />
    </div>
  );
}
