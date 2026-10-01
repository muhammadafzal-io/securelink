import React from "react";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CaseStudyCard } from "@/components/shared/CaseStudyCard";

const CaseStudiesSection = () => {
  const preview = caseStudies.slice(0, 3);

  return (
    <section className="py-12 md:py-24">
      <div className="custom-container">
        <SectionHeading
          eyebrow="Our Work"
          title="Example"
          accent="Projects"
          description="A look at the kind of work we take on for clients around the world, across web development, AI automation, and custom software."
          className="mb-10 md:mb-14"
        />

        <ul className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((study) => (
            <li key={study.title} className="px-reveal">
              <CaseStudyCard study={study} />
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-6 py-3 text-[14px] sm:text-[16px] font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
          >
            View All Projects
            <MoveUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
