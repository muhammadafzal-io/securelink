"use client";
import Hero from "@/components/sections/seo-geo-servixe/Hero";
import WhySEOGEO from "@/components/sections/seo-geo-servixe/WhySEOGEO";
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

export default function SEOGEO() {
    const serviceCards: ServiceDetailData[] = [
        {
            title: "Technical SEO",
            id: "technical",
            gradient: "bg-[radial-gradient(66.76%_66.76%_at_50%_50%,_rgba(69,14,87,0.7)_0%,_rgba(0,0,0,0.9)_100%)]",
            fullGradient: "bg-[radial-gradient(86.76%_66.76%_at_95%_50%,_rgba(69,14,87,0.7)_0%,_rgba(0,0,0,0.9)_100%)]",
            description: "Foundational audits and fixes that make your site crawlable, fast, and indexable.",
            fullDescription: "Foundational audits and fixes that make your site crawlable, fast, and indexable. We ensure your site's foundation is built for search engine success.",
            features: [
                { title: "Full Site Audits", description: "Core Web Vitals, crawl errors, and indexation issues." },
                { title: "Performance Optimization", description: "Page speed optimization and mobile responsiveness." },
                { title: "Technical Infrastructure", description: "XML sitemaps, robots.txt, and canonical tags." },
                { title: "Schema Markup", description: "Structured data implementation for rich search results." }
            ],
            imageSrc: "/assets/app.png",
            fullImageSrc: "/assets/app-full.png",
        },
        {
            title: "On-Page SEO",
            id: "on-page",
            gradient: "bg-[radial-gradient(66.76%_66.76%_at_50%_50%,_#282828_0%,_rgba(0,0,0,0.9)_100%)]",
            fullGradient: "bg-[radial-gradient(86.76%_66.76%_at_95%_50%,_#282828_0%,_rgba(0,0,0,0.9)_100%)]",
            description: "Make every page earn its rankings with optimized content and structure.",
            fullDescription: "Make every page earn its rankings. We help you create content that search engines love and users find valuable.",
            features: [
                { title: "Keyword Research & Mapping", description: "Finding the terms that drive business results." },
                { title: "Content Optimization", description: "Title tags, meta descriptions, and on-page copy." },
                { title: "Content Gap Analysis", description: "Identifying and filling opportunities in your niche." },
                { title: "Content Strategy", description: "SEO-optimised briefs and internal linking strategy." }
            ],
            imageSrc: "/assets/mvp.png",
            fullImageSrc: "/assets/mvp-full.png",
        },
        {
            title: "Off-Page SEO & Authority Building",
            id: "off-page",
            gradient: "bg-[radial-gradient(66.76%_66.76%_at_50%_50%,_rgba(42,3,127,0.7)_0%,_rgba(0,0,0,0.6)_100%)]",
            fullGradient: "bg-[radial-gradient(86.76%_66.76%_at_95%_50%,_rgba(42,3,127,0.7)_0%,_rgba(0,0,0,0.6)_100%)]",
            description: "Build the authority that keeps you ranking with strategic backlinks.",
            fullDescription: "Build the authority that keeps you ranking. We build trust and authority through high-quality off-page signals.",
            features: [
                { title: "Backlink Strategy", description: "Ethical outreach and link-building programs." },
                { title: "Digital PR", description: "Guest posting and high-authority brand mentions." },
                { title: "Brand Monitoring", description: "Tracking your brand's reputation and authority." },
                { title: "Competitor Backlink Analysis", description: "Understanding and exceeding your competition's profile." }
            ],
            imageSrc: "/assets/ecom.png",
            fullImageSrc: "/assets/ecom-full.png",
        },
        {
            title: "Local SEO",
            id: "local",
            gradient: "bg-[radial-gradient(66.76%_66.76%_at_50%_50%,_#282828_0%,_rgba(0,0,0,0.9)_100%)]",
            fullGradient: "bg-[radial-gradient(86.76%_66.76%_at_95%_50%,_#282828_0%,_rgba(0,0,0,0.9)_100%)]",
            description: "Win your neighborhood and dominate local search results.",
            fullDescription: "Win your neighbourhood. We ensure your business is the top choice for local customers.",
            features: [
                { title: "Google Business Profile", description: "Full optimization for maximum local exposure." },
                { title: "Local Citation Building", description: "Consistent listings across the web." },
                { title: "Review Management", description: "Building trust and social proof locally." },
                { title: "Multi-Location Support", description: "Custom landing pages for every physical location." }
            ],
            imageSrc: "/assets/devops.png",
            fullImageSrc: "/assets/devops-full.png",
        },
        {
            title: "Generative Engine Optimization (GEO)",
            id: "geo",
            gradient: "bg-[radial-gradient(66.76%_66.76%_at_50%_50%,_#42053C_0%,_rgba(0,0,0,0.9)_100%)]",
            fullGradient: "bg-[radial-gradient(86.76%_66.76%_at_95%_50%,_#42053C_0%,_rgba(0,0,0,0.9)_100%)]",
            description: "Get cited and recommended by AI answer engines like ChatGPT and Perplexity.",
            fullDescription: "Get cited and recommended by AI answer engines. Our specialty — preparing your brand for the future of search.",
            features: [
                { title: "LLM Content Restructuring", description: "Making your content easily digestible for AI models." },
                { title: "Entity-Based SEO", description: "Defining your brand's role in the AI knowledge graph." },
                { title: "Prompt-Behaviour Research", description: "Understanding how AI responses are generated." },
                { title: "AI Visibility Tracking", description: "Monitoring mentions across ChatGPT, Perplexity, and Gemini." }
            ],
            imageSrc: "/assets/augment.png",
            fullImageSrc: "/assets/augment-full.png",
        },
        {
            title: "Analytics & Reporting",
            id: "analytics",
            gradient: "bg-[radial-gradient(66.76%_66.76%_at_50%_50%,_#390C02_0%,_rgba(0,0,0,0.9)_100%)]",
            fullGradient: "bg-[radial-gradient(86.76%_66.76%_at_95%_50%,_#390C02_0%,_rgba(0,0,0,0.9)_100%)]",
            description: "Proof, not promises. Measurable performance you can verify.",
            fullDescription: "Proof, not promises. We provide clear, actionable data that connects search results to business growth.",
            features: [
                { title: "Monthly Performance Dashboards", description: "Clear views of traffic, rankings, and conversions." },
                { title: "AI-Visibility Reporting", description: "Tracking how often your brand is cited by LLMs." },
                { title: "Conversion Attribution", description: "Connecting SEO effort to revenue generation." },
                { title: "Quarterly Strategy Reviews", description: "In-depth reviews to refine our roadmap." }
            ],
            imageSrc: "/assets/app.png",
            fullImageSrc: "/assets/app-full.png",
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
            question: "What is GEO, and how is it different from SEO?",
            answer: "SEO gets you ranked on Google. GEO gets you cited in AI answers on ChatGPT, Perplexity, Gemini, and Google AI Overviews. They use different signals, so both matter now.",
        },
        {
            question: "Will GEO replace SEO?",
            answer: "No. Google still drives most search traffic. But a growing share of buyers ask AI first, so ignoring GEO means losing that audience.",
        },
        {
            question: "How long before I see results?",
            answer: "Technical and on-page fixes show movement in 4 to 8 weeks. Sustained ranking growth and AI citations typically take 3 to 6 months.",
        },
        {
            question: "Which AI platforms do you optimise for?",
            answer: "ChatGPT, Perplexity, Google AI Overviews, Gemini, and Claude. We track brand visibility across all five.",
        },
        {
            question: "Can you work with my existing SEO agency?",
            answer: "Yes. We often run GEO alongside a client's current SEO setup, or audit their work and fill the gaps.",
        },
        {
            question: "Do you guarantee rankings?",
            answer: "No one credible does. We guarantee the work: clear deliverables, monthly reporting, and measurable progress you can verify.",
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
                    SEO & GEO Services — Get Found on Google and in AI
                </h1>
                <p className="relative z-10 py-2 text-[12px] sm:text-[18px] font-normal text-muted-foreground mt-2 text-center px-4 sm:px-0">
                    Traditional search is no longer the only game in town. We help small businesses rank on Google and  show up in ChatGPT, Perplexity, Gemini,<br /> Claude, and Google's AI Overviews — so your customers find you wherever they're searching.
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
            <WhySEOGEO />
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
                                className={`w-1/5 py-2 sm:px-4 px-2 text-[12px] sm:text-[18px] transition-colors duration-300 ${selectedCategory === category
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
                                            className={`transform transition-transform duration-200 ${expandedIndex === index ? "rotate-90" : ""
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
