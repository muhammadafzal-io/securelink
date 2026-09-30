"use client";
import Hero from "@/components/sections/web-development/Hero";
import HorizontalScroll from "@/components/HorizontalScrollCards";
import ServiceDetails from "@/components/ServiceDetails";
import { useState } from "react";
import { ArrowRight, ChevronRight, Globe, ShoppingCart, AppWindow, RefreshCw } from "lucide-react";
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

export default function WebDevelopment() {
  const serviceCards: ServiceDetailData[] = [
    {
      title: "Business & Corporate Websites",
      id: "corporate",
      icon: Globe,
      description:
        "A professional website that represents your business properly, built to load fast on any device.",
      fullDescription:
        "A modern, professional website built around your business — not a template. Designed for clarity, speed, and the impression you actually want to make.",
      features: [
        {
          title: "Custom Design",
          description: "A site built to your brand, not a reused theme.",
        },
        {
          title: "Easy-To-Update Content",
          description: "A CMS your team can actually use without a developer.",
        },
        {
          title: "Multi-Language Ready",
          description: "Structured to support Arabic and English content from the start.",
        },
        {
          title: "Fast, Modern Foundations",
          description: "Built on current frameworks for speed and reliability.",
        },
      ],
    },
    {
      title: "E-Commerce Websites",
      id: "ecommerce",
      icon: ShoppingCart,
      description:
        "Product catalogs, checkout, and payments — built for a smooth path from browsing to purchase.",
      fullDescription:
        "A storefront built to convert — clear product pages, a fast checkout, and payments and inventory connected from day one.",
      features: [
        {
          title: "Product Catalogs & Checkout",
          description: "Clear browsing and a checkout flow that doesn't lose customers.",
        },
        {
          title: "Payment Gateway Integration",
          description: "Secure, reliable payment processing built in.",
        },
        {
          title: "Inventory-Aware Storefronts",
          description: "Stock levels that stay accurate across your catalog.",
        },
        {
          title: "Mobile-First Shopping",
          description: "Designed for the device most of your customers actually use.",
        },
      ],
    },
    {
      title: "Custom Web Applications",
      id: "webapp",
      icon: AppWindow,
      description:
        "Client portals, booking tools, and dashboards built around a specific workflow.",
      fullDescription:
        "When a template can't do what you need, we build a web application around the exact workflow your business runs on.",
      features: [
        {
          title: "Client Portals & Dashboards",
          description: "A private space for customers or partners to see what they need.",
        },
        {
          title: "Booking & Scheduling Systems",
          description: "Custom booking flows built around your actual availability rules.",
        },
        {
          title: "Internal Tools",
          description: "Purpose-built tools for the workflow your team already has.",
        },
        {
          title: "API-Connected Front Ends",
          description: "Interfaces that pull from the systems you already run on.",
        },
      ],
    },
    {
      title: "Website Redesign & Modernization",
      id: "redesign",
      icon: RefreshCw,
      description:
        "Rebuild a dated or slow site without losing the SEO and traffic it's already earned.",
      fullDescription:
        "An outdated website costs you credibility and customers. We rebuild it on modern foundations while protecting the SEO value it's already built up.",
      features: [
        {
          title: "Performance Audit",
          description: "A clear look at what's slowing your current site down.",
        },
        {
          title: "Modern Responsive Rebuild",
          description: "A faster, cleaner site that works properly on every device.",
        },
        {
          title: "SEO-Safe Migration",
          description: "URLs and content structure preserved so rankings don't reset.",
        },
        {
          title: "Incremental Rollout",
          description: "Launched in a way that minimizes disruption to your business.",
        },
      ],
    },
  ];

  const techStacks = [
    { name: "React", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", category: "Frontend" },
    { name: "Next.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg", category: "Frontend" },
    { name: "Vue.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg", category: "Frontend" },
    { name: "Tailwind CSS", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg", category: "Frontend" },
    { name: "CSS3", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg", category: "Frontend" },
    { name: "HTML5", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg", category: "Frontend" },
    { name: "Node.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg", category: "Backend" },
    { name: "Express.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg", category: "Backend" },
    { name: "PostgreSQL", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg", category: "Databases & Storage" },
    { name: "MongoDB", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg", category: "Databases & Storage" },
    { name: "Supabase", logo: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg", category: "Databases & Storage" },
    { name: "WordPress", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-plain.svg", category: "CMS & Website Builders" },
    { name: "Webflow", logo: "https://www.vectorlogo.zone/logos/webflow/webflow-icon.svg", category: "CMS & Website Builders" },
    { name: "Headless CMS", logo: "/assets/tech/headless.png", category: "CMS & Website Builders" },
    { name: "Vercel", logo: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg", category: "DevOps & Hosting" },
    { name: "Netlify", logo: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg", category: "DevOps & Hosting" },
  ];
  const categories = ["Frontend", "Backend", "Databases & Storage", "CMS & Website Builders", "DevOps & Hosting"];

  const faqs = [
    {
      question: "What technologies do you use to build websites?",
      answer:
        "We build primarily on React and Next.js for fast, modern front ends, with Node.js on the backend and PostgreSQL or MongoDB for data. For content-heavy sites we also work with WordPress and headless CMS platforms — whichever fits the project best.",
    },
    {
      question: "How long does it take to launch a website?",
      answer:
        "A straightforward business website typically takes 2–4 weeks. A larger site, e-commerce store, or custom web application usually runs 2–3 months depending on scope. We'll give you a clear timeline after an initial scoping conversation.",
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "Yes — we start with an audit of your current site to identify what's holding it back, then plan a rebuild that protects your existing SEO rankings and content while modernizing the design and performance.",
    },
    {
      question: "Will I be able to update the content myself after launch?",
      answer:
        "Yes. Depending on your needs we set up a custom admin panel or integrate an established CMS, so you can update text, images, and pages without needing a developer for every change.",
    },
    {
      question: "Do your websites support SEO and mobile responsiveness?",
      answer:
        "Every site we build follows SEO fundamentals — semantic HTML, fast load times, and responsive layouts — and is tested across devices before launch.",
    },
    {
      question: "Do you offer support after launch?",
      answer:
        "We offer post-launch support and maintenance, including updates, monitoring, and further development as your business grows.",
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
          Websites That Work As Hard As You Do
        </h1>
        <p className="relative z-10 py-2 text-[12px] sm:text-[18px] font-normal text-muted-foreground mt-2 text-center px-4 sm:px-0">
          From your first landing page to a full e-commerce storefront.
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
          Web Development Services
        </h1>
        <p className="relative z-10 py-2 text-[12px] sm:text-[18px] font-normal text-muted-foreground mt-2 text-center pl-4 sm:pl-0">
          Design, development, and everything needed to get your site live.
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
            Built with technologies chosen for speed, security, and long-term
            maintainability.
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
