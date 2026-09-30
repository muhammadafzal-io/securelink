import React from "react";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/data/caseStudies";

const CaseStudiesSection = () => {
  const preview = caseStudies.slice(0, 3);

  return (
    <div className="py-10 md:py-20 bg-card">
      <div className="custom-container">
        <div className="flex flex-col items-center gap-1.5 md:gap-3 mb-10 md:mb-14">
          <h2 className="text-[32px] sm:text-[48px] font-semibold text-center text-foreground">
            Example <span className="text-brand">Projects</span>
          </h2>
          <p className="text-[12px] sm:text-[18px] font-normal text-muted-foreground text-center max-w-2xl">
            A look at the kind of work we take on across web development, AI
            automation, and custom software.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {preview.map((study, index) => (
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

        <div className="flex justify-center mt-10">
          <Button variant="outline" className="group gap-2 rounded-full" asChild>
            <Link href="/portfolio">
              View All Projects
              <MoveUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesSection;
