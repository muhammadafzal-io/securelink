"use client";
import Hero from "@/components/sections/web-development/Hero";
import HorizontalScroll from "@/components/HorizontalScrollCards";
import ServiceDetails from "@/components/ServiceDetails";
import { useState } from "react";
import { Globe, ShoppingCart, AppWindow, RefreshCw } from "lucide-react";
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

export default function WebDevelopment() {
  const serviceCards: ServiceDetailData[] = [
    {
      title: "Business & Corporate Websites",
      id: "corporate",
      icon: Globe,
      description:
        "A professional website that represents your business properly, built to load fast on any device.",
      fullDescription:
        "A modern, professional website built around your business, not a template. Designed for clarity, speed, and the impression you actually want to make.",
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
        "Product catalogs, checkout, and payments, built for a smooth path from browsing to purchase.",
      fullDescription:
        "A storefront built to convert, clear product pages, a fast checkout, and payments and inventory connected from day one.",
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
        "We build primarily on React and Next.js for fast, modern front ends, with Node.js on the backend and PostgreSQL or MongoDB for data. For content-heavy sites we also work with WordPress and headless CMS platforms, whichever fits the project best.",
    },
    {
      question: "How long does it take to launch a website?",
      answer:
        "A straightforward business website typically takes 2 to 4 weeks. A larger site, e-commerce store, or custom web application usually runs 2 to 3 months depending on scope. We'll give you a clear timeline after an initial scoping conversation.",
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "Yes, we start with an audit of your current site to identify what's holding it back, then plan a rebuild that protects your existing SEO rankings and content while modernizing the design and performance.",
    },
    {
      question: "Will I be able to update the content myself after launch?",
      answer:
        "Yes. Depending on your needs we set up a custom admin panel or integrate an established CMS, so you can update text, images, and pages without needing a developer for every change.",
    },
    {
      question: "Do your websites support SEO and mobile responsiveness?",
      answer:
        "Every site we build follows SEO fundamentals (semantic HTML, fast load times, and responsive layouts) and is tested across devices before launch.",
    },
    {
      question: "Do you offer support after launch?",
      answer:
        "We offer post-launch support and maintenance, including updates, monitoring, and further development as your business grows.",
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
        title="Websites That Work As Hard As"
        accent="You Do"
        description="From your first landing page to a full e-commerce storefront."
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
        title="Web Development"
        accent="Services"
        description="Design, development, and everything needed to get your site live."
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
        description="Built with technologies chosen for speed, security, and long-term maintainability."
      />

      <Faq faqs={faqs} />

      <MeetingSchedulerSectionServices />
    </div>
  );
}
