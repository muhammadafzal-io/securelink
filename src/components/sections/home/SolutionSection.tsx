import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/shared/SectionHeading";

const SolutionSection = () => {
  return (
    <section id="services" className="services-section-bg overflow-x-clip py-12 md:py-24 scroll-mt-24">
      <div className="custom-container">
        <SectionHeading
          eyebrow="Our Services"
          title="What We"
          accent="Build"
          description="Eight services, one team: websites, apps, automation, AI and software that work together instead of living in separate silos."
          className="mb-10 md:mb-14"
        />

        <ul className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <li key={service.slug} className="px-reveal flex">
              <Link
                href={service.href}
                className="group relative flex w-full flex-col overflow-hidden rounded-3xl border border-border bg-surface-elevated p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-[0_20px_50px_-20px_color-mix(in_oklch,var(--brand)_45%,transparent)] focus-visible:outline-2 focus-visible:outline-brand"
              >
                <service.icon
                  aria-hidden="true"
                  strokeWidth={1}
                  className="px-fast pointer-events-none absolute -bottom-6 -right-4 size-32 text-brand/10 transition-colors group-hover:text-brand/20"
                />
                <span className="relative flex size-12 items-center justify-center rounded-xl bg-brand/10 text-brand ring-1 ring-brand/20 transition-colors group-hover:bg-brand group-hover:text-white">
                  <service.icon className="size-6" strokeWidth={1.75} />
                </span>
                <h3 className="relative mt-5 text-[19px] font-semibold leading-snug sm:text-[21px]">
                  {service.name}
                </h3>
                <p className="relative mt-2 text-[14px] text-muted-foreground">{service.summary}</p>

                <ul className="relative mt-5 space-y-2 border-t border-border pt-5">
                  {service.subServices.slice(0, 4).map((sub) => (
                    <li key={sub.title} className="flex items-start gap-2.5 text-[13px] text-foreground/90 sm:text-[14px]">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand" strokeWidth={2.5} />
                      {sub.title}
                    </li>
                  ))}
                </ul>

                <span className="relative mt-auto inline-flex items-center gap-1.5 pt-6 text-[14px] font-semibold text-brand">
                  Explore
                  <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SolutionSection;
