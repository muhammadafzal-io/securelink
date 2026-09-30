"use client";
import Hero from "@/components/sections/custom-development/Hero";
import HorizontalScroll from "@/components/HorizontalScrollCardsGradient";
import ServiceDetails from "@/components/ServiceDetails";
import { useState } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MeetingSchedulerSectionAI from "@/components/sections/home/MeetingSchedulerSectionServices";
import GradientGridCards from "@/components/GradientGridCards";

interface ServiceCard {
  title: string;
  description: string;
  imageSrc: string;
  id: string;
  gradient: string;
  fullGradient: string;
}

interface ServiceDetailData extends ServiceCard {
  features: {
    title: string;
    description: string;
  }[];
  fullDescription: string;
  fullImageSrc: string;
}

export default function CustomDevelopment() {
  const serviceCards: ServiceDetailData[] = [
    {
      title: "Web & Mobile App Development",
      id: "app",
      gradient:
        "bg-[radial-gradient(66.76%_66.76%_at_50%_50%,_rgba(69,14,87,0.7)_0%,_rgba(0,0,0,0.9)_100%)]",
      fullGradient:
        "bg-[radial-gradient(86.76%_66.76%_at_95%_50%,_rgba(69,14,87,0.7)_0%,_rgba(0,0,0,0.9)_100%)]",
      description:
        "Build fast, scale smart, and deliver seamless cross-platform experiences.",
      fullDescription:
        "Tailored, scalable tech built for performance and longevity. We deliver seamless, cross-platform experiences that grow with your business.",
      features: [
        {
          title: "Full-Stack Web Applications",
          description:
            "Built using React, MERN, Laravel, or MEAN with powerful admin panels and dynamic UIs.",
        },
        {
          title: "Custom CMS & Website Portals ",
          description:
            "WordPress, custom PHP builds, or headless CMS tailored to your business goals.",
        },
        {
          title: "Cross-Platform Mobile Apps",
          description:
            " Flutter, Android & iOS apps designed for speed, security, and scale.",
        },
        {
          title: "Progressive Web Apps (PWAs)",
          description:
            "Mobile-first, app-like web experiences that load fast and work offline.",
        },
      ],
      imageSrc: "/assets/app.png",
      fullImageSrc: "/assets/app-full.png",
    },
    {
      title: "Product Strategy & MVP Development",
      id: "mvp",
      gradient:
        "bg-[radial-gradient(66.76%_66.76%_at_50%_50%,_#282828_0%,_rgba(0,0,0,0.9)_100%)]",
      fullGradient:
        "bg-[radial-gradient(86.76%_66.76%_at_95%_50%,_#282828_0%,_rgba(0,0,0,0.9)_100%)]",
      description:
        "Validate ideas, move fast, and launch with confidence from day one.",
      fullDescription:
        "From idea to MVP, we help you launch faster and smarter. Our lean, agile process ensures your product is user-validated and scalable.",
      features: [
        {
          title: "Product Scoping & Feature Mapping",
          description:
            "We help you translate business ideas into dev-ready blueprints.",
        },
        {
          title: "MVP Launch Support",
          description:
            "Launch lean versions fast, test with users, and iterate based on real feedback.",
        },
        {
          title: "Rapid Prototyping & UX Design",
          description:
            "High-conversion user journeys and intuitive UX/UI design.",
        },
        {
          title: "Go-to-Market Tech Enablement",
          description:
            "Backend tools, analytics, and support systems for a powerful launch.",
        },
      ],
      imageSrc: "/assets/mvp.png",
      fullImageSrc: "/assets/mvp-full.png",
    },
    {
      title: "E-commerce & Plugin Development",
      id: "ecom",
      gradient:
        "bg-[radial-gradient(66.76%_66.76%_at_50%_50%,_rgba(42,3,127,0.7)_0%,_rgba(0,0,0,0.6)_100%)]",
      fullGradient:
        "bg-[radial-gradient(86.76%_66.76%_at_95%_50%,_rgba(42,3,127,0.7)_0%,_rgba(0,0,0,0.6)_100%)]",
      description:
        "Drive sales, enhance flexibility, and streamline online operations.",
      fullDescription:
        "Build powerful e-commerce platforms and custom plugins that convert. Designed for speed, flexibility, and operational efficiency.",
      features: [
        {
          title: "Shopify / WooCommerce Plugin Builds",
          description:
            "Custom checkout, payment flows, loyalty modules, and APIs.",
        },
        {
          title: "Inventory & Order Management Systems",
          description:
            "Custom dashboards and tracking tools built for your operations.",
        },
        {
          title: "Tailored E-commerce Stores",
          description:
            "Secure, fast, and conversion-optimized platforms for retail, services, and B2B sales.",
        },
        {
          title: "Multi-Vendor Marketplaces",
          description:
            "From frontend UI to commission logic — we’ve built marketplaces that scale.",
        },
      ],
      imageSrc: "/assets/ecom.png",
      fullImageSrc: "/assets/ecom-full.png",
    },
    {
      title: "DevOps, Integrations & Infrastructure",
      id: "devops",
      gradient:
        "bg-[radial-gradient(66.76%_66.76%_at_50%_50%,_#282828_0%,_rgba(0,0,0,0.9)_100%)]",
      fullGradient:
        "bg-[radial-gradient(86.76%_66.76%_at_95%_50%,_#282828_0%,_rgba(0,0,0,0.9)_100%)]",
      // gradient:
      //   "bg-[radial-gradient(66.76%_66.76%_at_50%_50%,_#390C02_0%,_rgba(0,0,0,0.9)_100%)]",
      // fullGradient:
      //   "bg-[radial-gradient(86.76%_66.76%_at_95%_50%,_#390C02_0%,_rgba(0,0,0,0.9)_100%)]",
      description:
        "Automate deployment, scale reliably, and unify backend systems.",
      fullDescription:
        "Robust cloud infrastructure and CI/CD pipelines for reliable scaling. We integrate tools and services to streamline your backend operations.",
      features: [
        {
          title: "AWS / GCP Infrastructure Setup",
          description:
            "Cloud environments with load balancing, monitoring, and backups.",
        },
        {
          title: "Microservices Architecture",
          description:
            "Modular backend logic to help you scale fast and adapt faster.",
        },
        {
          title: "3rd-Party API Integrations",
          description:
            "Payments, CRMs, SMS/email, maps — connected seamlessly.",
        },
        {
          title: "CI/CD & Deployment Pipelines",
          description:
            "Get your product into production faster with automated, secure deployment cycles.",
        },
      ],
      imageSrc: "/assets/devops.png",
      fullImageSrc: "/assets/devops-full.png",
    },
    {
      title: "Staff Augmentation & Dedicated Teams",
      id: "augment",
      gradient:
        "bg-[radial-gradient(66.76%_66.76%_at_50%_50%,_#42053C_0%,_rgba(0,0,0,0.9)_100%)]",
      fullGradient:
        "bg-[radial-gradient(86.76%_66.76%_at_95%_50%,_#42053C_0%,_rgba(0,0,0,0.9)_100%)]",
      description:
        "Expand your team, accelerate delivery, and stay lean at scale.",
      fullDescription:
        "Get expert developers embedded into your workflow — on demand. Flexible, transparent models to scale your team without overhead.",
      features: [
        {
          title: "Dedicated Developers & Project Managers",
          description:
            "Work directly with our team via Slack, Asana, Jira, or Trello.",
        },
        {
          title: "Fully Managed Teams",
          description:
            "From design to QA — we build and manage the entire tech crew for your project.",
        },
        {
          title: "Flexible Hiring Models",
          description:
            "Hourly, monthly retainer, or sprint-based — choose what fits your scale.",
        },
        {
          title: "Technical Consulting & Oversight",
          description:
            "Strategic guidance on stack, architecture, and scalability.",
        },
      ],
      imageSrc: "/assets/augment.png",
      fullImageSrc: "/assets/augment-full.png",
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
          Full-Cycle Software Engineering
        </h1>
        <p className="relative z-10 py-2 text-[12px] sm:text-[18px] font-normal text-muted-foreground mt-2 text-center px-4 sm:px-0">
          Agile development, robust infrastructure, and dedicated talent — all
          in one place.
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
        <GradientGridCards
          cards={serviceCards}
          active={active}
          setActive={setActive}
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-22">
        <h1 className="relative z-10 font-bold text-foreground sm:text-[48px] text-[32px] capitalize text-center">
          Build Smarter<br></br>with Custom Development
        </h1>
        <p className="relative z-10 py-2 text-[12px] sm:text-[18px] font-normal text-muted-foreground mt-2 text-center pl-4 sm:pl-0">
          Design. Develop. Deploy. We build full-cycle digital products tailored
          for <br></br> performance, agility, and growth.
        </p>
      </div>
      {activeService && (
        <div className="sm:mt-16">
          <ServiceDetails
            title={activeService.title}
            description={activeService.fullDescription}
            imageSrc={activeService.fullImageSrc}
            features={activeService.features}
            gradient={activeService.fullGradient}
            service="custom"
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
