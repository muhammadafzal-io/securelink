"use client";
import { Code2, Bot, Layers } from "lucide-react";
import { StackedCarousel, type StackedCarouselItem } from "@/components/StackedCarousel";

const services: StackedCarouselItem[] = [
  {
    id: "web-development",
    icon: Code2,
    title: "Web Development",
    description:
      "Business websites, landing pages, and e-commerce stores — designed and built to load fast and represent your business properly.",
    href: "/web-development",
    features: [
      "Business & Corporate Websites",
      "E-Commerce Websites",
      "Custom Web Applications",
      "Website Redesign & Modernization",
    ],
  },
  {
    id: "ai-automation",
    icon: Bot,
    title: "AI Automation",
    description:
      "AI agents and workflow automation that take repetitive work off your team's plate — from support chatbots to lead routing.",
    href: "/ai-automation",
    features: [
      "AI Assistants & Chatbots",
      "Workflow & Process Automation",
      "Lead Qualification & Sales Automation",
      "LLM Integrations & Custom AI Tools",
    ],
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
  },
];

const SolutionSection = () => {
  return (
    <div id="services" className="services-section-bg py-6 md:py-10 scroll-mt-24 overflow-hidden">
      <div className="custom-container">
        <div className="flex flex-col items-center gap-1.5 md:gap-3 mb-8">
          <h2 className="text-[32px] sm:text-[48px] font-semibold text-center">
            What We <span className="text-brand">Build</span>
          </h2>

          <p className="text-[12px] sm:text-[18px] font-normal text-muted-foreground text-center max-w-2xl">
            Three services, one team — websites, automation, and software
            that work together instead of living in separate silos. Click a
            card, or use the arrows, to browse.
          </p>
        </div>

        <StackedCarousel items={services} />
      </div>
    </div>
  );
};

export default SolutionSection;
