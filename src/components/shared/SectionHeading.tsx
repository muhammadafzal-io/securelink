import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  /** Plain text, or use `accent` to colour the trailing words in the brand colour. */
  title: string;
  accent?: string;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <p className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.15em] text-brand">
          <span className="size-1.5 rounded-full bg-brand" />
          {eyebrow}
        </p>
      )}
      <h2 className="text-[30px] sm:text-[48px] font-bold leading-[1.08] tracking-tight text-foreground">
        {title}
        {accent && <> <span className="text-brand">{accent}</span></>}
      </h2>
      {description && (
        <p className="max-w-2xl text-[14px] sm:text-[18px] text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
