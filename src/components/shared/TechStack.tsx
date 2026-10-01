"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/SectionHeading";

export type Tech = { name: string; logo: string; category: string };

type TechStackProps = {
  techStacks: Tech[];
  categories: string[];
  title?: string;
  accent?: string;
  description?: string;
};

export function TechStack({
  techStacks,
  categories,
  title = "Modern Tools.",
  accent = "Reliable Performance.",
  description = "Built with technologies chosen for speed, security, and long-term maintainability.",
}: TechStackProps) {
  const [selected, setSelected] = useState<string>("All");
  const tabs = ["All", ...categories];
  const visible =
    selected === "All" ? techStacks : techStacks.filter((t) => t.category === selected);

  return (
    <section className="custom-container my-12 md:my-24">
      <div className="mx-auto max-w-6xl rounded-3xl bg-surface-elevated px-5 py-12 sm:px-10 md:py-16">
        <SectionHeading
          eyebrow="Technology"
          title={title}
          accent={accent}
          description={description}
        />

        <div
          role="tablist"
          aria-label="Technology categories"
          className="mt-8 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={selected === tab}
              onClick={() => setSelected(tab)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-[12px] sm:text-[14px] font-medium transition-colors",
                selected === tab
                  ? "border-brand bg-brand text-white"
                  : "border-border bg-background/60 text-muted-foreground hover:border-brand/50 hover:text-foreground"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {visible.map((tech) => (
            <li
              key={tech.name}
              className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-background/60 px-3 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50"
            >
              <span className="flex size-14 items-center justify-center rounded-xl bg-white shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tech.logo}
                  alt=""
                  width={32}
                  height={32}
                  loading="lazy"
                  decoding="async"
                  className="size-8 object-contain opacity-80 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </span>
              <span className="text-center text-[12px] sm:text-[13px] font-medium text-muted-foreground group-hover:text-foreground">
                {tech.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
