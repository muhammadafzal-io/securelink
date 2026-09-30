"use client";
import Hero from "@/components/sections/ai-automation/Hero";
import HorizontalScroll from "@/components/HorizontalScrollCards";
import ServiceDetails from "@/components/ServiceDetails";
import { useState } from "react";
import { ArrowRight, ChevronRight, Bot, Workflow, UserCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MeetingSchedulerSectionServices from "@/components/sections/home/MeetingSchedulerSectionServices";
import GridCards from "@/components/GridCards";
import type { LucideIcon } from "lucide-react";

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
        "Customer-facing and internal assistants trained on your own content — not a generic script.",
      fullDescription:
        "An assistant trained on your actual business content — FAQs, docs, and policies — that answers accurately instead of guessing.",
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
          description: "Website, WhatsApp, or email — wherever your customers already are.",
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
        "We map your repetitive back-office work and automate it — connecting the tools you already use so information flows without manual re-entry.",
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
        "AI features built into your existing product — grounded in your own data, deployed under your control.",
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
        "Anything repetitive and rule-based is a good candidate — lead routing, data entry between systems, follow-up messages, support ticket triage, and report generation are common starting points. During a scoping call, we help identify where automation gives you the most time back.",
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
        "Yes — we monitor and refine automations after launch, since real-world usage often reveals edge cases worth handling better.",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [active, setActive] = useState<string>(serviceCards[0].id);
  const activeService = active
    ? serviceCards.find((service) => service.id === active)
    : null;
  const filteredTechStacks = selectedCategory
    ? techStacks.filter((tech) => tech.category === selectedCategory)
    : techStacks;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div>
      <Hero />
      <div className="flex flex-col items-center justify-center py-8 sm:pb-8">
        <h1 className="relative z-10 font-bold text-foreground sm:text-[48px] text-[32px] capitalize text-center">
          Automation That Removes The Busywork
        </h1>
        <p className="relative z-10 py-2 text-[12px] sm:text-[18px] font-normal text-muted-foreground mt-2 text-center">
          AI agents and automation built around tasks your team already does.
        </p>
      </div>
      <div className="flex w-[99%] pl-6 hidden lg:flex">
        <HorizontalScroll cards={serviceCards} active={active} setActive={setActive} />
      </div>
      <div className="flex w-[99%] pl-6 flex lg:hidden">
        <GridCards cards={serviceCards} active={active} setActive={setActive} />
      </div>
      <div className="flex flex-col items-center justify-center mt-22">
        <h1 className="relative z-10 font-bold text-foreground sm:text-[48px] text-[32px] capitalize text-center">
          AI Automation Services
        </h1>
        <p className="relative z-10 py-2 text-[12px] sm:text-[18px] font-normal text-muted-foreground mt-2 text-center pl-4 sm:pl-0">
          From a single automated workflow to a fully embedded AI assistant.
        </p>
      </div>
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
      <div className="bg-surface-elevated py-1 sm:py-4 sm:mx-16 mt-18 sm:mt-0 rounded-lg">
        <div className="flex flex-col items-center justify-center sm:mt-22 mt-12 pb-8 px-4 sm:px-0">
          <h1 className="relative z-10 font-bold text-foreground text-[32px] sm:text-[48px] capitalize text-center">
            Modern Tools. Reliable Performance.
          </h1>
          <p className="relative z-10 py-2 text-[12px] sm:text-[18px] font-normal text-muted-foreground mt-2 text-center">
            Built with technologies chosen for reliability and clean
            integration with your existing systems.
          </p>
        </div>
        <div className="flex flex-col items-center h-full text-foreground px-6 pb-18 sm:pb-0">
          <div className="bg-surface-panel rounded-lg flex justify-center sm:space-x-4 mb-12 w-full max-w-full sm:max-w-4xl">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                className={`w-1/5 py-2 sm:px-4 px-2 text-[12px] sm:text-[18px] transition-colors duration-300 ${
                  selectedCategory === category
                    ? "text-foreground border-b-2 border-foreground max-w-full overflow-hidden"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3 w-[90%]">
            {filteredTechStacks.map((tech) => (
              <div
                key={tech.name}
                className="bg-surface-panel rounded-lg p-6 flex flex-col items-center justify-center transition-transform hover:transform hover:scale-105 max-w-[188px] max-h-[100px]"
              >
                <div className="relative flex items-center justify-center">
                  <div
                    className="w-12 h-12 bg-contain bg-center bg-no-repeat opacity-80 filter grayscale hover:grayscale-0 transition-all duration-300"
                    style={{ backgroundImage: `url(${tech.logo})` }}
                  />
                </div>
                <p className="mt-2 text-center text-xs text-muted-foreground">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-background flex sm:hidden pb-10">
          <MeetingSchedulerSectionServices />
        </div>
        <div className="flex flex-col md:flex-row bg-surface-elevated text-foreground p-8 gap-8 sm:mt-26">
          <div className="md:w-1/2 flex flex-col">
            <div className="flex flex-col gap-2 sm:mb-18 mb-8">
              <h1 className="relative z-10 font-medium text-foreground sm:text-[48px] text-[32px] capitalize text-center sm:text-left">
                Frequently Asked Questions
              </h1>
              <p className="text-foreground z-10 text-[12px] sm:text-[16px] font-[400] text-center sm:text-left">
                Still have questions? <span className="sm:underline">Drop us a line</span>
              </p>
            </div>
            <div className="flex flex-col items-center bg-surface-muted rounded-lg py-8 max-w-[767px] max-h-[235px]">
              <div className="mb-6">
                <h2 className="text-[16px] sm:text-4xl font-bold mb-4 text-center">Short on time?</h2>
                <p className="text-[12px] sm:text-[18px] text-muted-foreground text-center">
                  Let's get started with a brief intro call.
                </p>
              </div>
              <Button className="group icon-btn-ghost-effect text-[12px] sm:text-[18px] md:h-11 rounded-full gap-2 pe-2" asChild>
                <Link href="/contact-us">
                  Contact Us
                  <div className="icon">
                    <ArrowRight className="size-4 md:size-5" />
                  </div>
                </Link>
              </Button>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-surface-muted rounded-lg min-h-[64px]">
                  <button
                    className="w-full text-left py-5 px-2 flex justify-between items-center hover:bg-muted transition-all duration-200"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="pl-2 text-[12px] sm:text-[18px] font-[400] text-muted-foreground">
                      {faq.question}
                    </span>
                    <ChevronRight
                      className={`transform transition-transform duration-200 ${expandedIndex === index ? "rotate-90" : ""}`}
                      size={20}
                    />
                  </button>
                  {expandedIndex === index && (
                    <div className="py-4 px-2 text-muted-foreground transition-all text-[12px] sm:text-[18px]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:flex">
        <MeetingSchedulerSectionServices />
      </div>
    </div>
  );
}
