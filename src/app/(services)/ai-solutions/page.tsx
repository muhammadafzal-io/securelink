"use client";
import Hero from "@/components/sections/ai-solutions/Hero";
import HorizontalScroll from "@/components/HorizontalScrollCards";
import ServiceDetails from "@/components/ServiceDetails";
import { useState } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MeetingSchedulerSectionAI from "@/components/sections/home/MeetingSchedulerSectionServices";
import GridCards from "@/components/GridCards";

interface ServiceCard {
  title: string;
  description: string;
  imageSrc: string;
  fullImageSrc: string;
  id: string;
}

interface ServiceDetailData extends ServiceCard {
  features: {
    title: string;
    description: string;
  }[];
  fullDescription: string;
}

export default function AiSolutions() {
  const serviceCards: ServiceDetailData[] = [
    {
      title: "Generative AI Applications",
      id: "gen",
      description:
        "Create content, automate workflows, and boost productivity with intelligent generation.",
      fullDescription:
        "Develop advanced AI solutions that generate content, automate workflows, and enhance productivity. Ideal for streamlining marketing, operations, education, and customer engagement.",
      features: [
        {
          title: "AI-powered Assistants",
          description:
            "Tailored virtual agents for CX, HR, education, and support.",
        },
        {
          title: "Content Generation ",
          description:
            "Use AI to generate media for marketing, blogs, ads, or commerce.",
        },
        {
          title: "Copilots",
          description:
            "Integrated copilots in your CRMs, dashboards, and workflows.",
        },
        {
          title: "Auto-Documentation Tools",
          description:
            "Generate structured content for SOPs, HR manuals, FAQs, and helpdesks.",
        },
      ],
      imageSrc: "/assets/gen.png",
      fullImageSrc: "/assets/gen-full.png",
    },
    {
      title: "Autonomous Agent Development",
      id: "agent",
      description:
        "Deploy self-operating agents to plan, decide, and execute tasks across tools.",
      fullDescription:
        "Deploy autonomous agents capable of planning, decision-making, and execution across systems. Designed to boost operational efficiency with minimal manual intervention.",
      features: [
        {
          title: "Multi-Step Autonomous Workflows",
          description:
            "AutoGPT-style agents that independently plan and execute tasks across tools.",
        },
        {
          title: "Internal AI Agents for Ops",
          description:
            "Agents that interact with APIs, databases, and Slack/Asana to automate business logic.",
        },
        {
          title: "Agent Networks for Business Units",
          description:
            "Teams of interconnected agents (sales + support + finance) acting on your behalf.",
        },
        {
          title: "Memory + Tool Usage Integration",
          description:
            "Agents that recall user history, fetch external data, and use web-based tools automatically.",
        },
      ],
      imageSrc: "/assets/agent.png",
      fullImageSrc: "/assets/agent-full.png",
    },
    {
      title: "LLM Integration & Fine-Tuning",
      id: "llm",
      description:
        "Embed and tailor language models for secure, enterprise-level performance.",
      fullDescription:
        "Integrate and tailor large language models to meet your enterprise needs at scale. Maintain full control over performance, user experience, and data security.",
      features: [
        {
          title: "LLM Embedding in Existing Products",
          description:
            "Enhance apps or customer portals with OpenAI, Claude, Gemini, or Mistral.",
        },
        {
          title: "Custom Fine-Tuning & Prompt Engineering",
          description:
            "Tailor LLMs on your private data for hyper-personalized performance.",
        },
        {
          title: "Retrieval-Augmented Generation (RAG)",
          description:
            "Merge internal databases with LLMs to give accurate and context-aware results.",
        },
        {
          title: "Private LLM Deployment",
          description:
            "Deploy open-source LLMs on-premise or in VPCs for maximum control and security.",
        },
      ],
      imageSrc: "/assets/llm.png",
      fullImageSrc: "/assets/llm-full.png",
    },
    {
      title: "AI-Based Customer Experience (CX)",
      id: "cx",
      description:
        "Deliver smart, personalized experiences across all channels.",
      fullDescription:
        "Transform customer support with always-on, AI-powered assistants — available across all channels. Enhance every interaction with intelligent, real-time engagement that adapts to customer needs.",
      features: [
        {
          title: "Conversational Chatbots",
          description:
            "AI-driven support bots that handle FAQs, ticketing, and onboarding across platforms.",
        },
        {
          title: "Personalized Recommender Systems",
          description:
            "Real-time product, content, or service recommendations using behavior and profile.",
        },
        {
          title: "Voice AI Assistants",
          description:
            "Voice-activated agents that help customers place orders, resolve queries, or track progress.",
        },
        {
          title: "AI for Feedback & Sentiment Analysis",
          description:
            "Understand what your customers feel — at scale — and act on it instantly.",
        },
      ],
      imageSrc: "/assets/cx.png",
      fullImageSrc: "/assets/cx-full.png",
    },
    {
      title: "AI-Powered Sales & Marketing",
      id: "sales",
      description:
        "Supercharge your growth with intelligent targeting, scoring, and automation.",
      fullDescription:
        "Accelerate growth with AI that strategizes, creates, scores, and converts — all in real time. Turn leads into revenue faster, with smarter targeting and seamless automation.",
      features: [
        {
          title: "AI SEO & Content Engines",
          description:
            "Generate high-performing blogs, landing pages, and meta content with AI-powered keyword.",
        },
        {
          title: "Ad Creative Optimization",
          description:
            "Dynamically generate and test visuals and ad copies using performance data.",
        },
        {
          title: "Predictive Lead Scoring",
          description:
            "Identify high-intent users early with ML-based scoring models that optimize conversion funnel.",
        },
        {
          title: "Sales Funnel Automation",
          description:
            "Automate follow-ups, retargeting, and personalized sales sequences using AI triggers.",
        },
      ],
      imageSrc: "/assets/sales.png",
      fullImageSrc: "/assets/sales-full.png",
    },
    {
      title: "Machine Learning, Analytics & Computer Vision",
      id: "ml",
      description:
        "Turn raw data into insights and automation with powerful ML and vision tools.",
      fullDescription:
        "Transform raw data into real-time intelligence with advanced analytics and automation. Enable use cases from fraud detection to visual inspection — all tailored to your business.",
      features: [
        {
          title: "Custom ML Model Development",
          description:
            "Build models for classification, forecasting, recommendations, fraud detection, and more.",
        },
        {
          title: "OCR & Facial Recognition",
          description:
            "Automate verification and form-filling processes using advanced AI-powered scanning.",
        },
        {
          title: "AI-Powered Dashboards & Visualization",
          description:
            "Real-time analytics dashboards that translate raw data into decision-ready insights.",
        },
        {
          title: "Computer Vision Applications",
          description:
            "From object detection in retail to image moderation and security alerts.",
        },
      ],
      imageSrc: "/assets/ml.png",
      fullImageSrc: "/assets/ml-full.png",
    },
    {
      title: "Enterprise AI Strategy & Automation",
      id: "automation",
      description:
        "Align AI with your business goals to scale smarter and operate faster.",
      fullDescription:
        "Align AI capabilities with strategic goals to drive enterprise-wide transformation. Automate processes, optimize operations, and scale intelligently across functions.",
      features: [
        {
          title: "AI & Data Strategy Consulting",
          description:
            "Create an actionable roadmap for AI transformation from data governance Business.",
        },
        {
          title: "OCR & Facial Recognition",
          description:
            "Automate verification and form-filling processes using advanced AI-powered scanning.",
        },
        {
          title: "AI-Powered Dashboards & Visualization",
          description:
            "Real-time analytics dashboards that translate raw data into decision-ready insights.",
        },
        {
          title: "Computer Vision Applications",
          description:
            "From object detection in retail to image moderation and security alerts.",
        },
      ],
      imageSrc: "/assets/automation.png",
      fullImageSrc: "/assets/automation-full.png",
    },
  ];
  const techStacks = [
    {
      name: "React",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      category: "Frontend",
    },
    {
      name: "Next.js",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
      category: "Frontend",
    },
    {
      name: "Vue.js",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg",
      category: "Frontend",
    },
    {
      name: "Express.js",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
      category: "Backend",
    },
    {
      name: "Node.js",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      category: "Backend",
    },
    {
      name: "Django",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg",
      category: "Backend",
    },
    {
      name: "Python",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      category: "Backend",
    },
    {
      name: "Tailwind CSS",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
      category: "Frontend",
    },
    {
      name: "CSS3",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
      category: "Frontend",
    },
    {
      name: "Bootstrap",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
      category: "Frontend",
    },
    {
      name: "HTML5",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
      category: "Frontend",
    },
    {
      name: "Java",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      category: "Backend",
    },
    {
      name: "MySQL",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
      category: "Databases & Storage",
    },
    {
      name: "MongoDB",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      category: "Databases & Storage",
    },
    {
      name: "Firebase",
      logo: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      category: "Databases & Storage",
    },
    {
      name: "Flask",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg",
      category: "Backend",
    },
    {
      name: "PostgreSQL",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
      category: "Databases & Storage",
    },
    {
      name: "Amazon S3",
      logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
      category: "DevOps & Hosting",
    },
    {
      name: "Supabase",
      logo: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg",
      category: "Databases & Storage",
    },
    {
      name: "Cloud Firestore",
      logo: "https://www.gstatic.com/devrel-devsite/prod/ve761bca974e16662f27aa8810df6d144acde5bdbeeca0dfd50e25f86621eaa19/firebase/images/lockup.svg",
      category: "DevOps & Hosting",
    },
    {
      name: "WordPress",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-plain.svg",
      category: "CMS & Website Builders",
    },
    {
      name: "Webflow",
      logo: "https://www.vectorlogo.zone/logos/webflow/webflow-icon.svg",
      category: "CMS & Website Builders",
    },
    {
      name: "Headless CMS",
      logo: "/assets/tech/headless.png",
      category: "CMS & Website Builders",
    },
    {
      name: "Netlify",
      logo: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
      category: "DevOps & Hosting",
    },
    {
      name: "Vercel",
      logo: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
      category: "DevOps & Hosting",
    },
    {
      name: "Heroku",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/heroku/heroku-original.svg",
      category: "DevOps & Hosting",
    },
    {
      name: "Render",
      logo: "/assets/tech/render.png",
      category: "DevOps & Hosting",
    },
  ];
  const categories = [
    "Frontend",
    "Backend",
    "Databases & Storage",
    "CMS & Website Builders",
    "DevOps & Hosting",
  ];
  const faqs = [
    {
      question: "What technologies do you use to build websites and web apps?",
      answer:
        "We utilize the latest technologies to ensure optimal performance and user experience. Our tech stack includes React.js and Next.js for frontend development, Node.js and Express for backend services, and databases like MongoDB and PostgreSQL. We also implement modern CSS frameworks such as Tailwind CSS for responsive design.",
    },
    {
      question: "Can you build both the frontend and backend?",
      answer:
        "Yes, we provide full-stack development services. Our team has expertise in both frontend and backend technologies, allowing us to deliver comprehensive solutions. We handle everything from user interface design to server-side logic, database architecture, and API development, ensuring a seamless integration between all components.",
    },
    {
      question: "Do you offer industry-specific solutions?",
      answer:
        "Absolutely. We specialize in creating tailored solutions for various industries including e-commerce, healthcare, finance, education, and more. Our team takes the time to understand your industry's unique requirements and compliance standards to deliver solutions that address your specific business needs and challenges.",
    },
    {
      question: "How long does it take to launch a web project?",
      answer:
        "Project timelines vary depending on complexity and scope. Simple websites typically take 2-4 weeks, while more complex web applications may require 2-3 months or more. During our initial consultation, we'll provide a detailed timeline based on your specific requirements, features, and desired launch date.",
    },
    {
      question: "Can you help redesign or improve my existing site?",
      answer:
        "Yes, we offer website redesign and improvement services. Our process begins with a comprehensive audit of your current site to identify opportunities for enhancement in terms of design, performance, user experience, and functionality. We then develop a strategy to implement these improvements while minimizing disruption to your business.",
    },
    {
      question: "Do your websites support SEO and mobile responsiveness?",
      answer:
        "Definitely. All our websites are built with SEO best practices and mobile responsiveness as core principles. We implement semantic HTML, optimized page loading speeds, responsive layouts, and other technical SEO elements. Our mobile-first approach ensures your site performs flawlessly across all devices and screen sizes.",
    },
    {
      question: "Can I manage content on my site after launch?",
      answer:
        "Yes, we implement user-friendly content management systems that allow you to easily update and manage your website content without technical knowledge. Depending on your needs, we can set up custom admin panels or integrate established CMS platforms like WordPress, giving you full control over your content post-launch.",
    },
    {
      question: "Do you offer post-launch support and maintenance?",
      answer:
        "We provide comprehensive post-launch support and maintenance packages to ensure your website continues to perform optimally. Our services include regular updates, security monitoring, performance optimization, content updates, and technical support. We offer flexible maintenance plans tailored to your specific needs and budget.",
    },
    {
      question: "What's your pricing model?",
      answer:
        "We offer flexible pricing models to accommodate different project needs and budgets. This includes fixed-price quotes for well-defined projects, hourly rates for ongoing development work, and retainer options for continuous support. During our initial consultation, we'll discuss your requirements and provide transparent pricing information based on your project scope.",
    },
    {
      question: "Will I have a dedicated team for my project?",
      answer:
        "Yes, we assign a dedicated team to your project based on its requirements. Your team typically includes a project manager, UI/UX designer, frontend and backend developers, and QA specialists. This ensures consistent communication and accountability throughout the development process, with team members who understand your project's unique goals and challenges.",
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
          Smart systems. Intelligent results. 
        </h1>
        <p className="relative z-10 py-2 text-[12px] sm:text-[18px] font-normal text-muted-foreground mt-2 text-center">
          KalTech helps you unlock the future with AI and innovation.
        </p>
      </div>
      <div className="flex w-[99%] pl-6 hidden lg:flex">
        <HorizontalScroll
          cards={serviceCards}
          active={active}
          setActive={setActive}
        />
      </div>
      <div className="flex w-[99%] pl-6 flex lg:hidden">
        <GridCards cards={serviceCards} active={active} setActive={setActive} />
      </div>
      <div className="flex flex-col items-center justify-center mt-22">
        <h1 className="relative z-10 font-bold text-foreground sm:text-[48px] text-[32px] capitalize text-center">
          AI Capabilities & Services
        </h1>
        <p className="relative z-10 py-2 text-[12px] sm:text-[18px] font-normal text-muted-foreground mt-2 text-center pl-4 sm:pl-0">
          Harness the Power of AI to Accelerate Growth, Enhance Productivity,
          and Transform Your Enterprise
        </p>
      </div>
      {activeService && (
        <div className="sm:mt-16">
          <ServiceDetails
            title={activeService.title}
            description={activeService.fullDescription}
            imageSrc={activeService.fullImageSrc}
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
            We use cutting-edge technologies to build scalable, secure, and
            high-performance web <br></br> platforms tailored to your needs.
          </p>
        </div>
        <div className="flex flex-col items-center h-full text-foreground px-6 pb-18 sm:pb-0">
          {/* Filter tabs */}
          <div className="bg-surface-panel rounded-lg flex justify-center sm:space-x-4 mb-12 w-full max-w-full sm:max-w-4xl">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setSelectedCategory(
                    category === selectedCategory ? null : category
                  )
                }
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

          {/* Tech stack grid */}
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3 w-[90%]">
            {filteredTechStacks.map((tech) => (
              <div
                key={tech.name}
                className="bg-surface-panel rounded-lg p-6 flex flex-col items-center justify-center transition-transform hover:transform hover:scale-105 max-w-[188px] max-h-[100px]"
              >
                <div className="relative flex items-center justify-center">
                  {/* Using a div with background image as fallback since we don't have the actual images */}
                  <div
                    className="w-12 h-12 bg-contain bg-center bg-no-repeat opacity-80 filter grayscale hover:grayscale-0 transition-all duration-300"
                    style={{
                      backgroundImage: `url(${tech.logo})`,
                    }}
                  />
                </div>
                <p className="mt-2 text-center text-xs text-muted-foreground">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-background flex sm:hidden pb-10">
          <MeetingSchedulerSectionAI />
        </div>
        <div className="flex flex-col md:flex-row bg-surface-elevated text-foreground p-8 gap-8 sm:mt-26">
          {/* Left Section */}
          <div className="md:w-1/2 flex flex-col">
            <div className="flex flex-col gap-2 sm:mb-18 mb-8">
              <h1 className="relative z-10 font-medidum text-foreground sm:text-[48px] text-[32px] capitalize text-center sm:text-left">
                Frequently Asked Questions
              </h1>
              <p className="text-foreground z-10 text-[12px] sm:text-[16px] font-[400] text-center sm:text-left">
                Still have questions?{" "}
                <span className="sm:underline">Drop us a line</span>
              </p>
            </div>
            <div className="flex flex-col items-center bg-surface-muted rounded-lg py-8 max-w-[767px] max-h-[235px]">
              <div className="mb-6">
                <h2 className="text-[16px] sm:text-4xl font-bold mb-4 text-center">
                  Short on time?
                </h2>
                <p className="text-[12px] sm:text-[18px] text-muted-foreground text-center">
                  Let's get started with a brief intro call.
                </p>
              </div>
              <Button
                className="group icon-btn-ghost-effect text-[12px] sm:text-[18px] md:h-11 rounded-full gap-2 pe-2"
                asChild
              >
                <Link
                  href={"https://calendly.com/shershah-kaltech/30min"}
                  target="_blank"
                >
                  Contact Us
                  <div className="icon">
                    <ArrowRight className="size-4 md:size-5" />
                  </div>
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Section - FAQ Accordion */}
          <div className="md:w-1/2">
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-surface-muted rounded-lg min-h-[64px]"
                >
                  <button
                    className="w-full text-left py-5 px-2 flex justify-between items-center hover:bg-neutral-900 transition-all duration-200"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="pl-2 text-[12px] sm:text-[18px] font-[400] text-muted-foreground">
                      {faq.question}
                    </span>
                    <ChevronRight
                      className={`transform transition-transform duration-200 ${
                        expandedIndex === index ? "rotate-90" : ""
                      }`}
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
        <MeetingSchedulerSectionAI />
      </div>
    </div>
  );
}
