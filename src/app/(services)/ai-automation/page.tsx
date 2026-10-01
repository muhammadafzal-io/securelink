"use client";
import Hero from "@/components/sections/ai-automation/Hero";
import HorizontalScroll from "@/components/HorizontalScrollCards";
import ServiceDetails from "@/components/ServiceDetails";
import { useState } from "react";
import { Bot, Workflow, UserCheck, Sparkles } from "lucide-react";
import MeetingSchedulerSectionServices from "@/components/sections/home/MeetingSchedulerSectionServices";
import GridCards from "@/components/GridCards";
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
  features: { title: string; description: string }[];
}

export default function AiAutomation() {
  const serviceCards: ServiceDetailData[] = [
    {
      title: "AI Assistants & Chatbots",
      id: "assistants",
      icon: Bot,
      description:
        "Customer-facing and internal assistants trained on your own content, not a generic script.",
      fullDescription:
        "An assistant trained on your actual business content (FAQs, docs, and policies) that answers accurately instead of guessing.",
      features: [
        {
          title: "Customer Support Chatbots",
          description: "Handles FAQs and routing across your website and channels.",
        },
        {
          title: "Internal Assistants",
          description: "Answers your team's day-to-day questions on demand.",
        },
        {
          title: "Trained On Your Content",
          description: "Grounded in your own docs, not generic answers.",
        },
        {
          title: "Multi-Channel",
          description: "Website, WhatsApp, or email, wherever your customers already are.",
        },
      ],
    },
    {
      title: "Workflow & Process Automation",
      id: "workflow",
      icon: Workflow,
      description:
        "Automate the repetitive back-office tasks eating into your team's time.",
      fullDescription:
        "We map your repetitive back-office work and automate it, connecting the tools you already use so information flows without manual re-entry.",
      features: [
        {
          title: "Repetitive Task Automation",
          description: "Removes manual, repeatable work from your team's plate.",
        },
        {
          title: "Connects Your Existing Tools",
          description: "Works with the systems and data sources you already run on.",
        },
        {
          title: "Approvals & Notifications",
          description: "Routed automatically, with the right people looped in.",
        },
        {
          title: "Fewer Manual Errors",
          description: "Less copy-pasting between systems means fewer mistakes.",
        },
      ],
    },
    {
      title: "Lead Qualification & Sales Automation",
      id: "leads",
      icon: UserCheck,
      description:
        "Score, route, and follow up on incoming leads automatically.",
      fullDescription:
        "Incoming leads scored and routed the moment they arrive, with follow-up sequences triggered by what they actually do.",
      features: [
        {
          title: "Automatic Lead Scoring",
          description: "Prioritizes leads based on the signals that matter to you.",
        },
        {
          title: "Behavior-Triggered Follow-Up",
          description: "Sequences that respond to what a lead actually does.",
        },
        {
          title: "CRM-Connected Pipelines",
          description: "Keeps your CRM up to date without manual entry.",
        },
        {
          title: "Faster Response Times",
          description: "Reach leads while they're still interested.",
        },
      ],
    },
    {
      title: "LLM Integrations & Custom AI Tools",
      id: "llm",
      icon: Sparkles,
      description:
        "Embed AI features directly into your existing product or internal tools.",
      fullDescription:
        "AI features built into your existing product, grounded in your own data, deployed under your control.",
      features: [
        {
          title: "Product-Embedded AI",
          description: "AI features built directly into your existing platform.",
        },
        {
          title: "Retrieval-Augmented Answers",
          description: "Responses grounded in your own data, not generic training data.",
        },
        {
          title: "Purpose-Built AI Tools",
          description: "A tool built around one specific task you need solved.",
        },
        {
          title: "Controlled Deployment",
          description: "Deployed with clear boundaries around data and access.",
        },
      ],
    },
  ];

  const techStacks = [
    { name: "Python", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", category: "Backend" },
    { name: "Node.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg", category: "Backend" },
    { name: "Express.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg", category: "Backend" },
    { name: "Flask", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg", category: "Backend" },
    { name: "Django", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg", category: "Backend" },
    { name: "React", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", category: "Frontend" },
    { name: "Next.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg", category: "Frontend" },
    { name: "PostgreSQL", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg", category: "Databases & Storage" },
    { name: "MongoDB", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg", category: "Databases & Storage" },
    { name: "Supabase", logo: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg", category: "Databases & Storage" },
    { name: "Amazon S3", logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg", category: "DevOps & Hosting" },
    { name: "Vercel", logo: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg", category: "DevOps & Hosting" },
    { name: "Render", logo: "/assets/tech/render.png", category: "DevOps & Hosting" },
  ];
  const categories = ["Backend", "Frontend", "Databases & Storage", "DevOps & Hosting"];

  const faqs = [
    {
      question: "What kind of tasks can actually be automated?",
      answer:
        "Anything repetitive and rule-based is a good candidate, lead routing, data entry between systems, follow-up messages, support ticket triage, and report generation are common starting points. During a scoping call, we help identify where automation gives you the most time back.",
    },
    {
      question: "Do you build custom AI, or use existing platforms?",
      answer:
        "Both, depending on the task. Sometimes the right answer is integrating an existing LLM provider into your workflow; other times it's a custom-built agent or automation. We recommend whichever gets you a reliable result, not the most complex option.",
    },
    {
      question: "Will the AI have access to our data?",
      answer:
        "Only what's needed, and only with clear boundaries you approve upfront. We design integrations with access control in mind rather than granting broad, unrestricted access by default.",
    },
    {
      question: "How long does an automation project take?",
      answer:
        "A single automated workflow can often be built in a few weeks. Larger, multi-step automation or a custom AI assistant typically takes longer, depending on how many systems it needs to connect to.",
    },
    {
      question: "What happens if the automation gets something wrong?",
      answer:
        "We build in review steps and fallbacks for anything customer-facing or high-stakes, so a human stays in the loop where it matters, rather than letting automation run unchecked.",
    },
    {
      question: "Do you offer support after launch?",
      answer:
        "Yes, we monitor and refine automations after launch, since real-world usage often reveals edge cases worth handling better.",
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
        title="Automation That Removes"
        accent="The Busywork"
        description="AI agents and automation built around tasks your team already does."
      />
      <div className="flex w-[99%] pl-6 hidden lg:flex">
        <HorizontalScroll cards={serviceCards} active={active} setActive={setActive} />
      </div>
      <div className="flex w-[99%] pl-6 flex lg:hidden">
        <GridCards cards={serviceCards} active={active} setActive={setActive} />
      </div>
      <SectionHeading
        className="px-4 py-10 sm:py-16"
        eyebrow="Services"
        title="AI Automation"
        accent="Services"
        description="From a single automated workflow to a fully embedded AI assistant."
      />
      {activeService && (
        <div className="sm:mt-16">
          <ServiceDetails
            title={activeService.title}
            description={activeService.fullDescription}
            icon={activeService.icon}
            features={activeService.features}
          />
        </div>
      )}
      <TechStack
        techStacks={techStacks}
        categories={categories}
        description="Built with technologies chosen for reliability and clean integration with your existing systems."
      />

      <Faq faqs={faqs} />

      <MeetingSchedulerSectionServices />
    </div>
  );
}
