import { Bot, Code2, Layers, type LucideIcon } from "lucide-react";
import type { CaseStudy } from "@/data/caseStudies";

const icons: Record<string, LucideIcon> = {
  "Web Development": Code2,
  "AI Automation": Bot,
  "Custom Software": Layers,
};

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const Icon = icons[study.category] ?? Layers;
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface-elevated p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-[0_24px_50px_-24px_color-mix(in_oklch,var(--brand)_50%,transparent)]">
      <Icon
        aria-hidden="true"
        strokeWidth={1}
        className="pointer-events-none absolute -bottom-6 -right-4 size-36 text-brand/10 transition-colors group-hover:text-brand/20"
      />
      <span className="relative inline-flex w-fit items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[10px] sm:text-[12px] font-semibold uppercase tracking-wider text-brand">
        <Icon className="size-3.5" strokeWidth={2} />
        {study.category}
      </span>
      <h3 className="relative mt-5 text-[18px] sm:text-[22px] font-semibold leading-snug text-foreground">
        {study.title}
      </h3>
      <p className="relative mt-2 flex-1 text-[13px] sm:text-[15px] text-muted-foreground">
        {study.description}
      </p>
    </article>
  );
}
