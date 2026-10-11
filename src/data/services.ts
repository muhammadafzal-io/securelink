import {
  Bot,
  Code2,
  Layers,
  Plug,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type SubService = { title: string; text: string };
export type Faq = { question: string; answer: string };

export type Service = {
  slug: string;
  name: string;
  icon: LucideIcon;
  /** Existing hand-built pages keep their URL; new ones live at /{slug} via the shared template. */
  href: string;
  summary: string;
  headline: string;
  subServices: SubService[];
  tech: string[];
  faqs: Faq[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    name: "Web Development",
    icon: Code2,
    href: "/web-development",
    summary:
      "Business websites, landing pages and web applications built to load fast and represent your company properly.",
    headline: "Websites Built To Do Their Job",
    subServices: [
      { title: "Business & Corporate Websites", text: "Custom-designed sites that load fast on any device." },
      { title: "Custom Web Applications", text: "Portals, booking tools and dashboards built around your workflow." },
      { title: "CMS & WordPress Sites", text: "Content your team can update without a developer." },
      { title: "Website Redesign", text: "A faster, modern rebuild that protects your SEO." },
    ],
    tech: ["Next.js", "React", "TypeScript", "WordPress", "Node.js", "PostgreSQL"],
    faqs: [],
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    icon: Smartphone,
    href: "/mobile-app-development",
    summary:
      "iOS, Android and cross-platform apps with a clean interface, solid performance and a backend that scales.",
    headline: "Mobile Apps People Actually Keep Using",
    subServices: [
      { title: "iOS & Android Apps", text: "Native-quality apps for both major platforms." },
      { title: "Cross-Platform Apps", text: "One codebase, two stores, lower cost to maintain." },
      { title: "App UI/UX Design", text: "Flows tested with real users before development begins." },
      { title: "Backend & API for Apps", text: "Secure servers, push notifications and admin panels." },
      { title: "Store Launch & Support", text: "App Store and Google Play submission, then ongoing updates." },
    ],
    tech: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Node.js"],
    faqs: [
      {
        question: "Should I build for iOS, Android or both?",
        answer:
          "It depends on where your customers are. We usually recommend a cross-platform build to reach both at a lower cost, and go fully native when the app needs heavy device features or maximum performance.",
      },
      {
        question: "How long does it take to build a mobile app?",
        answer:
          "A focused first version typically takes 2 to 4 months. Larger apps with accounts, payments and admin tools take longer. We give you a clear timeline after scoping.",
      },
      {
        question: "Do you handle App Store and Google Play publishing?",
        answer:
          "Yes. We prepare the listings, handle the review process and stay on for fixes and updates after launch.",
      },
    ],
  },
  {
    slug: "ai-automation",
    name: "AI Automation",
    icon: Workflow,
    href: "/ai-automation",
    summary:
      "Workflow automation that takes repetitive work off your team, from lead routing to document processing.",
    headline: "Automation That Removes The Busywork",
    subServices: [
      { title: "Workflow & Process Automation", text: "Connect the tools you already use so data flows on its own." },
      { title: "n8n, Make & Zapier Workflows", text: "Reliable automations built on the right platform for the job." },
      { title: "AI Document & Data Processing", text: "Extract, classify and file information from forms and documents." },
      { title: "Lead & Sales Automation", text: "Scoring, routing and follow-up without manual steps." },
    ],
    tech: ["n8n", "Make", "Zapier", "OpenAI", "Python", "Webhooks"],
    faqs: [],
  },
  {
    slug: "ai-agents",
    name: "AI Agents",
    icon: Bot,
    href: "/ai-agents",
    summary:
      "Chatbots, voice agents and AI assistants trained on your own content to handle customers around the clock.",
    headline: "AI Agents That Work While You Sleep",
    subServices: [
      { title: "Chatbots & Support Agents", text: "Answer routine questions accurately and hand off the rest." },
      { title: "Voice Agents & AI Receptionists", text: "Pick up calls, book appointments and take messages." },
      { title: "AI Calling Agents", text: "Outbound follow-up and reminders at scale." },
      { title: "Internal AI Assistants", text: "Staff tools trained on your documents, policies and data." },
    ],
    tech: ["OpenAI", "Claude", "RAG", "Vector Databases", "WhatsApp API", "Twilio"],
    faqs: [
      {
        question: "Will the AI agent make things up?",
        answer:
          "We ground agents in your own content and set clear limits on what they may answer. Anything outside those limits is handed to a person.",
      },
      {
        question: "Which channels can an AI agent work on?",
        answer:
          "Your website, WhatsApp, email and phone, depending on the project. Most clients start with one channel and expand.",
      },
      {
        question: "Can it speak Arabic and English?",
        answer: "Yes. Agents can be built to handle both languages in the same conversation.",
      },
    ],
  },
  {
    slug: "custom-software-development",
    name: "Custom Software Development",
    icon: Layers,
    href: "/custom-software-development",
    summary:
      "Internal systems, portals and platforms built around how your business actually operates.",
    headline: "Software Built Around Your Business",
    subServices: [
      { title: "SaaS Platforms & Web Apps", text: "Subscriptions, permissions and scale planned from day one." },
      { title: "CRM & Business Portals", text: "Tools that match your real process, not a template." },
      { title: "Internal Management Systems", text: "Replace spreadsheets with a proper system." },
      { title: "Dashboards & Reporting", text: "Live numbers your team can trust." },
    ],
    tech: ["TypeScript", "React", "Node.js", "Python", "PostgreSQL", "AWS"],
    faqs: [],
  },
  {
    slug: "ai-saas-crm-automation",
    name: "AI SaaS & CRM Automation",
    icon: Sparkles,
    href: "/ai-saas-crm-automation",
    summary:
      "AI-powered SaaS products and CRM setups that capture leads, follow up automatically and keep your pipeline moving.",
    headline: "A CRM That Follows Up For You",
    subServices: [
      { title: "AI SaaS Product Development", text: "From idea to a subscription product with AI built in." },
      { title: "GoHighLevel & HubSpot Setup", text: "Pipelines, forms and dashboards configured for your sales process." },
      { title: "Lead Follow-Up Sequences", text: "SMS and email sequences triggered by what a lead actually does." },
      { title: "Appointment & Booking Automation", text: "Calendars, reminders and no-show recovery." },
      { title: "Custom CRM Development", text: "A CRM built from scratch when off-the-shelf won't fit." },
    ],
    tech: ["GoHighLevel", "HubSpot", "Salesforce", "OpenAI", "Stripe", "PostgreSQL"],
    faqs: [
      {
        question: "Do you build on an existing CRM or create a new one?",
        answer:
          "Both. If a platform like GoHighLevel or HubSpot fits, we configure it. If your process is unusual, we build a custom CRM instead.",
      },
      {
        question: "Can you migrate our existing contacts?",
        answer:
          "Yes. We clean, map and import your current contacts and deals so you don't start from zero.",
      },
      {
        question: "What does AI add to a CRM?",
        answer:
          "Lead scoring, automatic replies, call and email summaries, and suggested next steps, so your team spends time selling instead of typing.",
      },
    ],
  },
  {
    slug: "api-integration",
    name: "API Integration",
    icon: Plug,
    href: "/api-integration",
    summary:
      "Connect your software, payment providers and third-party tools so data moves between them without manual entry.",
    headline: "Systems That Talk To Each Other",
    subServices: [
      { title: "REST & Webhook Integrations", text: "Reliable, documented connections between your systems." },
      { title: "Third-Party Integrations", text: "Payments, shipping, accounting, messaging and more." },
      { title: "Data Synchronization", text: "Keep records consistent across every tool you run." },
      { title: "Custom API Development", text: "Secure APIs that let partners and apps use your data." },
    ],
    tech: ["REST", "GraphQL", "Webhooks", "OAuth", "Node.js", "Python"],
    faqs: [
      {
        question: "Can you integrate with software we already use?",
        answer:
          "Almost certainly. If a tool has an API or webhooks, we can connect it. We confirm what is possible during scoping.",
      },
      {
        question: "What happens if an integration breaks?",
        answer:
          "We build in logging and alerts, so failures are caught and retried instead of silently losing data.",
      },
      {
        question: "Is our data kept secure in transit?",
        answer:
          "Yes. We use encrypted connections, scoped credentials and stored secrets, never keys in code.",
      },
    ],
  },
  {
    slug: "shopify-ecommerce",
    name: "Shopify & E-commerce",
    icon: ShoppingBag,
    href: "/shopify-ecommerce",
    summary:
      "Shopify and WooCommerce stores designed to convert, with payments, inventory and shipping connected.",
    headline: "Online Stores Built To Sell",
    subServices: [
      { title: "Custom Shopify Stores", text: "Themes and apps tailored to your brand and catalog." },
      { title: "WooCommerce Stores", text: "Flexible WordPress-based shops with full control." },
      { title: "Payments, Shipping & Tax", text: "Local and international gateways and carriers connected." },
      { title: "Store Migration", text: "Move to a new platform without losing products or SEO." },
      { title: "Conversion Optimization", text: "Faster pages and cleaner checkouts that lose fewer customers." },
    ],
    tech: ["Shopify", "WooCommerce", "Liquid", "Stripe", "Klaviyo", "Next.js"],
    faqs: [
      {
        question: "Shopify or WooCommerce: which should I choose?",
        answer:
          "Shopify is faster to launch and easier to run. WooCommerce gives more control and suits unusual requirements. We'll recommend one after hearing about your products and plans.",
      },
      {
        question: "Can you sell to customers in other countries?",
        answer:
          "Yes. We set up multi-currency pricing, international shipping rules, taxes and language options.",
      },
      {
        question: "Do you migrate an existing store?",
        answer: "Yes. Products, customers and orders move across with redirects that protect your search rankings.",
      },
    ],
  },
];

/** Services that use the shared /{slug} template (the other three have bespoke pages). */
export const templatedServices = services.filter(
  (s) => !["web-development", "ai-automation", "custom-software-development"].includes(s.slug)
);

export const getService = (slug: string) => services.find((s) => s.slug === slug);
