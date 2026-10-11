import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { getService, services, templatedServices } from "@/data/services";
import { ServiceHero } from "@/components/shared/ServiceHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Faq } from "@/components/shared/Faq";
import ProcessSection from "@/components/sections/home/ProcessSection";
import MeetingSchedulerSectionServices from "@/components/sections/home/MeetingSchedulerSectionServices";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return templatedServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return { title: service.name, description: service.summary };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service || !templatedServices.includes(service)) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <div>
      <ServiceHero title={service.headline} description={service.summary} icon={service.icon} />

      <section className="custom-container py-12 md:py-24">
        <SectionHeading
          eyebrow={service.name}
          title="What we"
          accent="deliver"
          description="Each engagement is scoped around your business, then built, tested and supported by one team."
        />
        <ul className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {service.subServices.map((sub) => (
            <li
              key={sub.title}
              className="px-reveal group rounded-3xl border border-border bg-surface-elevated p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand ring-1 ring-brand/25 transition-colors group-hover:bg-brand group-hover:text-white">
                <Check className="size-5" strokeWidth={2.5} />
              </span>
              <h3 className="mt-5 text-[18px] font-semibold text-foreground sm:text-[21px]">{sub.title}</h3>
              <p className="mt-2 text-[14px] text-muted-foreground sm:text-[16px]">{sub.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="custom-container">
        <div className="mx-auto max-w-6xl rounded-3xl bg-surface-elevated px-6 py-12 sm:px-10 md:py-16">
          <SectionHeading
            eyebrow="Technology"
            title="Tools we"
            accent="build with"
            description="Chosen for reliability, security and long-term maintainability."
          />
          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {service.tech.map((t) => (
              <li
                key={t}
                className="rounded-full border border-brand/30 bg-brand/10 px-5 py-2.5 text-[14px] font-semibold text-foreground sm:text-[16px]"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="mt-12 md:mt-24">
        <ProcessSection />
      </div>

      {service.faqs.length > 0 && <Faq faqs={service.faqs} />}

      <section className="custom-container mt-12 md:mt-20">
        <h2 className="text-center text-[22px] font-semibold text-foreground sm:text-[30px]">
          More services
        </h2>
        <ul className="mx-auto mt-6 grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((s) => (
            <li key={s.slug}>
              <Link
                href={s.href}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-surface-elevated px-5 py-4 text-[15px] font-medium text-foreground transition-colors hover:border-brand/50"
              >
                <span className="flex items-center gap-3">
                  <s.icon className="size-5 text-brand" strokeWidth={1.75} />
                  {s.name}
                </span>
                <ArrowUpRight className="size-4 text-brand transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <MeetingSchedulerSectionServices />
    </div>
  );
}
