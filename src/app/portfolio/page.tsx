"use client";
import { useState } from "react";
import Hero from "@/components/sections/portfolio/Hero";
import MeetingSchedulerSection from "@/components/sections/home/MeetingSchedulerSection";
import { caseStudies } from "@/data/caseStudies";

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

      <div className="custom-container py-10 md:py-16">
        <p className="text-[12px] sm:text-[14px] text-muted-foreground max-w-2xl mb-8">
          These are illustrative examples of the work we take on, shown to
          give you a sense of scope and approach rather than a list of named
          clients.
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-[12px] sm:text-[14px] transition-colors border ${
                activeCategory === category
                  ? "bg-brand text-white border-brand"
                  : "bg-surface-panel text-muted-foreground border-border hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((study, index) => (
            <div
              key={index}
              className="group flex flex-col rounded-2xl border border-border bg-surface-elevated p-6 transition-colors hover:border-brand/40"
            >
              <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-brand mb-4">
                {study.category}
              </span>

              <h3 className="text-[16px] sm:text-[20px] font-medium text-foreground mb-2">
                {study.title}
              </h3>

              <p className="text-[12px] sm:text-sm text-muted-foreground flex-1">
                {study.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <MeetingSchedulerSection />
    </div>
  );
}
