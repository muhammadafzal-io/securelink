import Link from "next/link";
import { ArrowUpRight, Bot, Check, Code2, Layers, type LucideIcon } from "lucide-react";

type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  features: string[];
  stack: string[];
  outcome: string;
};

const services: Service[] = [
  {
    id: "web-development",
    icon: Code2,
    title: "Web Development",
    description:
      "Business websites, landing pages, and e-commerce stores, designed and built to load fast and represent your business properly.",
    href: "/web-development",
    features: [
      "Business & Corporate Websites",
      "E-Commerce Websites",
      "Custom Web Applications",
      "Website Redesign & Modernization",
    ],
    stack: ["Next.js", "React", "TypeScript", "SEO"],
    outcome: "Fast, search-ready, built to convert",
  },
  {
    id: "ai-automation",
    icon: Bot,
    title: "AI Automation",
    description:
      "AI agents and workflow automation that take repetitive work off your team's plate, from support chatbots to lead routing.",
    href: "/ai-automation",
    features: [
      "AI Assistants & Chatbots",
      "Workflow & Process Automation",
      "Lead Qualification & Sales Automation",
      "LLM Integrations & Custom AI Tools",
    ],
    stack: ["LLMs", "RAG", "AI Agents", "Workflows"],
    outcome: "Hours of manual work handled for you",
  },
  {
    id: "custom-software-development",
    icon: Layers,
    title: "Custom Software Development",
    description:
      "CRMs, admin portals, and internal systems built around how your business actually operates, not a generic template.",
    href: "/custom-software-development",
    features: [
      "SaaS Platforms & Web Applications",
      "CRM & Business Portals",
      "Internal Management Systems",
      "API Integrations & System Connectivity",
    ],
    stack: ["SaaS", "REST APIs", "CRM", "Role-based Access"],
    outcome: "One system your whole team runs on",
  },
];


/* Decorative per-service illustration; two layers drift at different speeds on scroll */
const ServiceVisual = ({ id }: { id: string }) => (
  <div
    aria-hidden="true"
    className="relative mb-6 h-36 overflow-hidden rounded-xl border border-border bg-background/60"
  >
    <div className="px-slow absolute -right-6 -top-10 size-40 rounded-full bg-brand/25 blur-3xl" />
    <svg
      viewBox="0 0 240 144"
      className="px-fast absolute inset-0 size-full"
      fill="none"
    >
      {id === "web-development" && (
        <g>
          <rect x="30" y="22" width="180" height="104" rx="10" className="fill-surface-elevated stroke-foreground/20" />
          <path d="M30 44h180" className="stroke-foreground/20" />
          <circle cx="44" cy="33" r="3" className="fill-brand" />
          <circle cx="55" cy="33" r="3" className="fill-foreground/25" />
          <circle cx="66" cy="33" r="3" className="fill-foreground/25" />
          <rect x="46" y="58" width="84" height="10" rx="5" className="fill-brand" />
          <rect x="46" y="76" width="120" height="6" rx="3" className="fill-foreground/20" />
          <rect x="46" y="88" width="100" height="6" rx="3" className="fill-foreground/15" />
          <rect x="46" y="104" width="44" height="12" rx="6" className="fill-brand/70" />
          <rect x="146" y="58" width="48" height="58" rx="6" className="fill-brand/15 stroke-brand/40" />
        </g>
      )}
      {id === "ai-automation" && (
        <g>
          <path d="M52 72h46M142 72h46" className="stroke-brand/60" strokeWidth="2" strokeDasharray="4 5" />
          <rect x="28" y="52" width="48" height="40" rx="10" className="fill-surface-elevated stroke-foreground/25" />
          <circle cx="120" cy="72" r="26" className="fill-brand/20 stroke-brand" strokeWidth="2" />
          <circle cx="120" cy="72" r="7" className="fill-brand" />
          <path d="M108 72a12 12 0 0 1 24 0" className="stroke-white/80" strokeWidth="2" strokeLinecap="round" />
          <rect x="164" y="52" width="48" height="40" rx="10" className="fill-surface-elevated stroke-foreground/25" />
          <path d="M40 66h24M40 76h16M176 66h24M176 76h16" className="stroke-foreground/30" strokeWidth="3" strokeLinecap="round" />
        </g>
      )}
      {id === "custom-software-development" && (
        <g>
          <rect x="28" y="20" width="184" height="104" rx="10" className="fill-surface-elevated stroke-foreground/20" />
          <rect x="40" y="32" width="36" height="80" rx="6" className="fill-brand/15" />
          <path d="M48 46h20M48 58h20M48 70h14" className="stroke-brand" strokeWidth="3" strokeLinecap="round" />
          <rect x="88" y="32" width="112" height="22" rx="6" className="fill-foreground/10" />
          <rect x="100" y="94" width="14" height="18" rx="3" className="fill-brand/50" />
          <rect x="122" y="80" width="14" height="32" rx="3" className="fill-brand/70" />
          <rect x="144" y="66" width="14" height="46" rx="3" className="fill-brand" />
          <rect x="166" y="86" width="14" height="26" rx="3" className="fill-brand/60" />
        </g>
      )}
    </svg>
  </div>
);

const SolutionSection = () => {
  return (
    <section
      id="services"
      className="services-section-bg overflow-x-clip py-12 md:py-20 scroll-mt-24"
    >
      <div className="custom-container">
        <div className="flex flex-col items-center gap-3 mb-10 md:mb-14">
          <p className="text-[11px] sm:text-[14px] font-semibold uppercase tracking-[0.15em] text-brand">
            Our Services
          </p>
          <h2 className="text-[32px] sm:text-[48px] font-semibold text-center">
            What We <span className="text-brand">Build</span>
          </h2>
          <p className="text-[13px] sm:text-[18px] font-normal text-muted-foreground text-center max-w-2xl">
            Three services, one team: websites, automation, and software
            that work together instead of living in separate silos.
          </p>
        </div>

        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <li key={service.id} className="flex">
              <Link
                href={service.href}
                className="px-reveal group relative flex w-full flex-col rounded-2xl border border-border bg-surface-elevated p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-[0_20px_50px_-20px_color-mix(in_oklch,var(--brand)_45%,transparent)] focus-visible:outline-2 focus-visible:outline-brand"
              >
                <ServiceVisual id={service.id} />

                <span className="flex size-12 items-center justify-center rounded-xl bg-brand/10 text-brand ring-1 ring-brand/20 transition-colors group-hover:bg-brand group-hover:text-white">
                  <service.icon className="size-6" strokeWidth={1.75} />
                </span>

                <h3 className="mt-5 text-[20px] sm:text-[24px] font-semibold leading-snug">
                  {service.title}
                </h3>
                <p className="mt-2 text-[13px] sm:text-[15px] text-muted-foreground">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3 border-t border-border pt-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-[13px] sm:text-[15px] text-foreground/90"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-brand" strokeWidth={2.5} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                  {service.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-border bg-background/60 px-3 py-1 text-[11px] sm:text-[12px] font-medium text-muted-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 rounded-lg bg-brand/10 px-4 py-3 text-[12px] sm:text-[14px] font-medium text-brand">
                  {service.outcome}
                </p>

                <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[13px] sm:text-[15px] font-semibold text-brand">
                  Explore {service.title}
                  <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
