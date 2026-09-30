import React from "react";
import { caseStudies } from "@/data/caseStudies";

const CaseStudiesSection = () => {
  return (
    <div className="py-10 md:py-20 bg-card">
      <div className="custom-container">
        <div className="flex flex-col items-center gap-1.5 md:gap-3 mb-10 md:mb-14">
          <h2 className="text-[32px] sm:text-[48px] font-semibold text-center text-foreground">
            Case <span className="text-primary">Studies</span>
          </h2>
          <p className="text-[12px] sm:text-[18px] font-normal text-muted-foreground text-center max-w-2xl">
            Real projects. Real results. See how we help businesses transform
            with AI-powered solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group flex flex-col rounded-2xl border border-white/10 bg-surface-elevated p-6 transition-colors hover:border-white/20"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {study.category}
                </span>
                <span className="text-[10px] sm:text-xs font-medium text-muted-foreground">
                  {study.flag}
                </span>
              </div>

              <h3 className="text-[16px] sm:text-[20px] font-medium text-foreground mb-2">
                {study.title}
              </h3>

              <p className="text-[12px] sm:text-sm text-muted-foreground mb-4 flex-1">
                {study.description}
              </p>

              <div className="mt-auto pt-4 border-t border-white/10">
                <span className="text-[12px] sm:text-sm font-medium text-primary">
                  {study.client}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesSection;
