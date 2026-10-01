"use client";
import Hero from "@/components/sections/custom-software-development/Hero";
import HorizontalScroll from "@/components/HorizontalScrollCardsGradient";
import ServiceDetails from "@/components/ServiceDetails";
import { useState } from "react";
import { Layers, Users, Database, Plug } from "lucide-react";
import MeetingSchedulerSectionServices from "@/components/sections/home/MeetingSchedulerSectionServices";
import GradientGridCards from "@/components/GradientGridCards";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TechStack } from "@/components/shared/TechStack";
import { Faq } from "@/components/shared/Faq";

interface ServiceDetailData {
  title: string;
  id: string;
  description: string;
  fullDescription: string;
  icon: LucideIcon;
  gradient: string;
  fullGradient: string;
  features: { title: string; description: string }[];
}

const greenGradient =
  "bg-[radial-gradient(66.76%_66.76%_at_50%_50%,_rgba(11,122,75,0.55)_0%,_rgba(0,0,0,0.9)_100%)]";
const greenGradientFull =
  "bg-[radial-gradient(86.76%_66.76%_at_95%_50%,_rgba(11,122,75,0.55)_0%,_rgba(0,0,0,0.9)_100%)]";
const neutralGradient =
  "bg-[radial-gradient(66.76%_66.76%_at_50%_50%,_#282828_0%,_rgba(0,0,0,0.9)_100%)]";
const neutralGradientFull =
  "bg-[radial-gradient(86.76%_66.76%_at_95%_50%,_#282828_0%,_rgba(0,0,0,0.9)_100%)]";

export default function CustomSoftwareDevelopment() {
  const serviceCards: ServiceDetailData[] = [
    {
      title: "SaaS Platforms & Web Applications",
      id: "saas",
      icon: Layers,
      gradient: greenGradient,
      fullGradient: greenGradientFull,
      description:
        "Multi-tenant platforms built to scale with your user base from day one.",
      fullDescription:
        "A SaaS platform built on solid architecture from the start, subscriptions, permissions, and scale considered upfront, not retrofitted later.",
      features: [
        {
          title: "Multi-Tenant Architecture",
          description: "Built to serve many customers on one reliable platform.",
        },
        {
          title: "Subscription & Billing Logic",
          description: "Plans, billing cycles, and upgrades handled correctly.",
        },
        {
          title: "Role-Based Access Control",
          description: "The right people see the right data, nothing more.",
        },
        {
          title: "Built To Scale",
          description: "Architecture that holds up as your user base grows.",
        },
      ],
    },
    {
      title: "CRM & Business Portals",
      id: "crm",
      icon: Users,
      gradient: neutralGradient,
      fullGradient: neutralGradientFull,
      description:
        "A CRM or client portal shaped around your actual sales process.",
      fullDescription:
        "A CRM or portal built around your actual process, not a generic tool you have to work around, with reporting that reflects how you actually track deals.",
      features: [
        {
          title: "Process-Fit CRM",
          description: "Built around your sales process, not the other way around.",
        },
        {
          title: "Client & Partner Portals",
          description: "A dedicated space for the people you work with.",
        },
        {
          title: "Admin Dashboards",
          description: "Real reporting on the data that actually matters to you.",
        },
        {
          title: "Centralized Data",
          description: "One source of truth instead of data scattered across tools.",
        },
      ],
    },
    {
      title: "Internal Management Systems",
      id: "internal",
      icon: Database,
      gradient: greenGradient,
      fullGradient: greenGradientFull,
      description:
        "Operations and inventory tools that replace the spreadsheet that stopped scaling.",
      fullDescription:
        "When spreadsheets stop scaling, we build the internal system that replaces them, with proper access control and reporting your team can trust.",
      features: [
        {
          title: "Operations & Inventory Tracking",
          description: "Purpose-built tools for tracking what actually matters.",
        },
        {
          title: "Custom Reporting",
          description: "Reports built around the questions you actually ask.",
        },
        {
          title: "Role-Based Dashboards",
          description: "Every team sees the view relevant to their work.",
        },
        {
          title: "Replaces Spreadsheet Workflows",
          description: "A real system where a spreadsheet used to do the job.",
        },
      ],
    },
    {
      title: "API Integrations & System Connectivity",
      id: "integrations",
      icon: Plug,
      gradient: neutralGradient,
      fullGradient: neutralGradientFull,
      description:
        "Connect your CRM, payments, and other systems so data moves automatically.",
      fullDescription:
        "Your CRM, payment provider, and internal tools connected properly, with data flowing automatically instead of being copied by hand.",
      features: [
        {
          title: "System Connectivity",
          description: "Your CRM, ERP, and payment systems working together.",
        },
        {
          title: "Custom API Development",
          description: "APIs built for the specific data your systems need to share.",
        },
        {
          title: "Third-Party Integrations",
          description: "Payments, communications, and data providers connected cleanly.",
        },
        {
          title: "Monitored Data Pipelines",
          description: "Integrations that are watched, not just switched on and forgotten.",
        },
      ],
    },
  ];

  const techStacks = [
    { name: "React", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", category: "Frontend" },
    { name: "Next.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg", category: "Frontend" },
    { name: "Tailwind CSS", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg", category: "Frontend" },
    { name: "Node.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg", category: "Backend" },
    { name: "Express.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg", category: "Backend" },
    { name: "Django", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg", category: "Backend" },
    { name: "Python", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", category: "Backend" },
    { name: "Java", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg", category: "Backend" },
    { name: "PostgreSQL", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg", category: "Databases & Storage" },
    { name: "MySQL", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg", category: "Databases & Storage" },
    { name: "MongoDB", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg", category: "Databases & Storage" },
    { name: "Amazon S3", logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg", category: "DevOps & Hosting" },
    { name: "Vercel", logo: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg", category: "DevOps & Hosting" },
    { name: "Heroku", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/heroku/heroku-original.svg", category: "DevOps & Hosting" },
    { name: "Render", logo: "/assets/tech/render.png", category: "DevOps & Hosting" },
  ];
  const categories = ["Frontend", "Backend", "Databases & Storage", "DevOps & Hosting"];

  const faqs = [
    {
      question: "How is this different from just buying off-the-shelf software?",
      answer:
        "Off-the-shelf tools are built for the average user, so you often end up adapting your process to fit the software. Custom software is built around how your business actually runs, the tradeoff is a longer build time upfront for a better long-term fit.",
    },
    {
      question: "Can you build both the frontend and backend?",
      answer:
        "Yes, we provide full-stack development. One team handles the interface, the server-side logic, the database, and the APIs connecting it all, so nothing gets lost between handoffs.",
    },
    {
      question: "How long does a custom software project take?",
      answer:
        "It depends entirely on scope. A focused internal tool might take 4 to 8 weeks; a full SaaS platform or CRM can take several months. We scope this clearly with you before any development starts.",
    },
    {
      question: "Can you integrate with the tools we already use?",
      answer:
        "In most cases, yes. We regularly connect custom software to existing CRMs, payment providers, and internal systems through their APIs.",
    },
    {
      question: "Will I have a dedicated team for my project?",
      answer:
        "Yes, your project gets a consistent team, so the people who scoped the work are the ones building it, with clear communication throughout.",
    },
    {
      question: "Do you offer ongoing support after launch?",
      answer:
        "Yes, we offer maintenance and continued development after launch, since most custom software keeps evolving as your business does.",
    },
  ];

  const [active, setActive] = useState<string>(serviceCards[0].id);
  const activeService = active
    ? serviceCards.find((service) => service.id === active)
    : null;

  return (
    <div>
      <Hero />
      <SectionHeading
        className="px-4 py-10 sm:py-16"
        eyebrow="Overview"
        title="Full-Cycle"
        accent="Software Engineering"
        description="From scoping to deployment, software built around your process."
      />
      <div className="flex w-[99%] pl-6 hidden lg:flex">
        <HorizontalScroll cards={serviceCards} active={active} setActive={setActive} />
      </div>
      <div className="flex w-[99%] pl-6 flex lg:hidden">
        <GradientGridCards cards={serviceCards} active={active} setActive={setActive} />
      </div>
      <SectionHeading
        className="px-4 py-10 sm:py-16"
        eyebrow="Services"
        title="Build Smarter<br />with Custom"
        accent="Software"
        description="Design, develop, deploy, software built for how your business actually runs."
      />
      {activeService && (
        <div className="sm:mt-16">
          <ServiceDetails
            title={activeService.title}
            description={activeService.fullDescription}
            icon={activeService.icon}
            features={activeService.features}
            gradient={activeService.fullGradient}
          />
        </div>
      )}
      <TechStack
        techStacks={techStacks}
        categories={categories}
        description="Technologies chosen for scalability, security, and long-term maintainability."
      />

      <Faq faqs={faqs} />

      <MeetingSchedulerSectionServices />
    </div>
  );
}
