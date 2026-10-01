import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

export type FaqItem = { question: string; answer: string };

type FaqProps = {
  faqs: FaqItem[];
  ctaHref?: string;
  ctaLabel?: string;
};

/** Zero-JS accordion built on native <details>: accessible, keyboard-friendly, SEO-visible. */
export function Faq({ faqs, ctaHref = "/contact-us", ctaLabel = "Contact Us" }: FaqProps) {
  return (
    <section className="custom-container my-12 md:my-24">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-3xl bg-surface-elevated p-6 sm:p-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title="Frequently Asked"
            accent="Questions"
            description="Straight answers to what clients usually ask before we start."
          />
          <div className="mt-8 rounded-2xl border border-brand/30 bg-brand/10 p-6">
            <h3 className="text-[18px] sm:text-[22px] font-semibold text-foreground">
              Short on time?
            </h3>
            <p className="mt-1 text-[13px] sm:text-[15px] text-muted-foreground">
              Start with a brief intro call, wherever in the world you are.
            </p>
            <Link
              href={ctaHref}
              className="group mt-4 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-[13px] sm:text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              {ctaLabel}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-border bg-background/60 transition-colors open:border-brand/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-[14px] sm:text-[17px] font-medium text-foreground [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand transition-transform duration-200 group-open:rotate-45">
                  <Plus className="size-4" />
                </span>
              </summary>
              <p className="px-5 pb-5 text-[13px] sm:text-[16px] leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
