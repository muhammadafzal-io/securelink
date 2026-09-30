import Hero from "@/components/sections/products/Hero";
import ProblemCards from "@/components/sections/products/ProblemCards";
import StakeholderCards from "@/components/sections/products/StakeholderCards";
import ProductConsultation from "@/components/sections/home/ProductConsultation";
import Image from "next/image";
import {
  FileText,
  RotateCcw,
  Search,
  Users,
  MessageSquare,
} from "lucide-react";

const problems = [
    {
      icon: FileText,
      title: "Spreadsheet",
      subtitle: "Chaos",
    },
    {
      icon: RotateCcw,
      title: "Delayed",
      subtitle: "Document Flows",
    },
    {
      icon: Search,
      title: "No Agent",
      subtitle: "Visibility",
    },
    {
      icon: Users,
      title: "Lead",
      subtitle: "Drop-offs",
    },
    {
      icon: MessageSquare,
      title: "Fragmented",
      subtitle: "Communication",
    },
  ];
  
  const stakeholders = [
    {
      number: "01.",
      title: "Discovery Agents",
      description:
        "See, filter, and act on leads in real time. Assign follow-ups, upload documents, update status with 1 click.",
    },
    {
      number: "02.",
      title: "Operations",
      description:
        "Track verification flows, manage documentation, and approve leads using a customizable status engine.",
    },
    {
      number: "03.",
      title: "Management",
      description:
        "Full dashboard insights. Filter by product, city, source, agent, or stage. Export data for reporting or audits.",
    },
  ];

export default function LoanManagementSystem() {
    return (
      <div>
        <Hero
          image="/assets/leads-product.png"
          heading="AI-Powered Lending Platform That Scales With You"
        />
        <div className="flex flex-col sm:flex-row mt-28 sm:mt-42 px-6 w-full">
          <div className="flex sm:w-1/2 w-full justify-center items-center">
            <h1 className="relative z-10 font-bold text-foreground sm:text-[48px] text-[32px] capitalize text-start sm:text-center w-[80%]">
              KalPay LMS Fixes That End to End
            </h1>
          </div>
          <div className="flex items-start flex-start justify-start flex-col w-full sm:w-1/2 pt-2 pb-12">
            <p className="relative z-10 py-2 text-[12px] sm:text-[18px] font-normal text-muted-foreground mt-2 text-start">
              KalPay LMS centralizes, automates, and optimizes your entire
              lending process. Whether you’re offering devices on installment,
              micro-loans, or BNPL, our system is built to keep things moving
              fast — and smart.
            </p>
            <ul className="list-disc list-inside">
              <li className="relative z-10 pt-4 text-[12px] sm:text-[18px] font-normal text-muted-foreground text-start">
                Full lead visibility with filters by city, product, channel
              </li>
              <li className="relative z-10 text-[12px] sm:text-[18px] font-normal text-muted-foreground text-start">
                Doc verification flow with “awaiting”, “shared”, “finalized”
                statuses
              </li>
              <li className="relative z-10 text-[12px] sm:text-[18px] font-normal text-muted-foreground text-start">
                Agent performance tracking and lead ownership
              </li>
              <li className="relative z-10 text-[12px] sm:text-[18px] font-normal text-muted-foreground text-start">
                Built-in drop-off analytics to recover missed opportunities
              </li>
              <li className="relative z-10 text-[12px] sm:text-[18px] font-normal text-muted-foreground text-start">
                Scalable to 10,000+ applications per day
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col pb-12 pt-12 sm:pt-32 flex-col">
          <h1 className="relative z-10 font-bold text-foreground sm:text-[48px] text-[32px] capitalize text-center w-[90%] sm:w-full">
            Why Traditional Lending Systems Fail
          </h1>
          <p className="relative z-10 py-2 text-[12px] sm:text-[18px] font-normal text-muted-foreground mt-2 text-center w-[90%] sm:w-[60%]">
            Manual lending processes are outdated — slow, siloed, and impossible
            to scale. Teams get buried in spreadsheets, lose leads, and struggle
            with poor visibility and disjointed communication.
          </p>
          <ProblemCards problems={problems} />
        </div>
        <div className="flex w-full px-6">
          <StakeholderCards
            stakeholders={stakeholders}
            title={
              <h1 className="text-[32px] sm:text-[48px] font-bold text-foreground leading-tight">
                Built For Every Stakeholder
                <br />
                In The Lending Journey
              </h1>
            }
          />
        </div>
        <div className="flex flex-col w-full pt-18 gap-8 px-6 pb-8 sm:pb-0">
          <div className="flex w-full items-center justify-center">
            <h1 className="relative z-10 font-bold text-foreground sm:text-[48px] text-[32px] capitalize text-center">
              A Closer Look at Key Features
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row w-full sm:justify-between gap-12">
            <div className="flex flex-col">
              <p className="relative z-10 text-[16px] sm:text-[20px] text-foreground font-normal text-center sm:text-start">
                Smart Lead Management
              </p>
              <p className="relative z-10 pt-2 text-[12px] sm:text-[16px] font-normal text-muted-foreground text-center sm:text-start px-8 sm:px-0">
                Segment leads by city, product, source, or status. Add filters,
                track document stages, assign to agents.
              </p>
            </div>
            <div className="flex flex-col">
              <p className="relative z-10 text-[16px] sm:text-[20px] text-foreground font-normal text-center sm:text-start">
                Multi-Agent + Guarantor Support
              </p>
              <p className="relative z-10 pt-2 text-[12px] sm:text-[16px] font-normal text-muted-foreground text-center sm:text-start px-8 sm:px-0">
                Manage individual applicants + linked stakeholders like
                guarantors. View complete data profiles in one screen.
              </p>
            </div>
            <div className="flex flex-col">
              <p className="relative z-10 text-[16px] sm:text-[20px] text-foreground font-normal text-center sm:text-start">
                Channel Attribution
              </p>
              <p className="relative z-10 pt-2 text-[12px] sm:text-[16px] font-normal text-muted-foreground text-center sm:text-start px-8 sm:px-0">
                Know which lead came from where — Facebook, Instagram, WhatsApp,
                referral, or direct.
              </p>
            </div>
          </div>
          <div className="relative max-w-[85%] sm:w-full sm:max-w-6xl mx-auto pt-12">
            {/* First Image */}
            <Image
              src="/assets/feature-img-1.png"
              alt="features"
              width={1072}
              height={500}
              className="w-full h-auto"
            />

            {/* Second Image, overlapping the first */}
            <div className="absolute top-[65%] sm:top-[60%] -translate-y-1/2 -left-15 sm:-left-50 z-10 w-2/3">
              <Image
                src="/assets/feature-img-2.png"
                alt="features"
                width={1072}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="w-full items-center justify-center py-14 flex-col gap-4 hidden sm:flex">
            <div className="quote-icon" />
            <h1 className="relative z-10 font-bold text-foreground text-[32px] capitalize text-center w-[60%]">
              KalTech helped us scale from 100 to 10,000+ leads without changing
              our ops headcount. Their speed, UX, and automation changed the
              game.
            </h1>
            <div className="flex flex-col">
              <p className="relative z-10 font-medium text-muted-foreground text-[24px] capitalize text-center">
                Mr. Alsulaiman 🇸🇦
              </p>
              <p className="relative z-10 font-normal text-muted-foreground text-[12px] capitalize text-center">
                Founder Balloons{" "}
              </p>
            </div>
          </div>
        </div>
        <ProductConsultation
          title={
            <h2 className="text-[24px] sm:text-[40px] font-semibold text-foreground capitalize">
              Let’s Build Your Credit Platform{" "}
              <br className="hidden sm:flex"></br> or Something Smarter
            </h2>
          }
          description={
            <p className="text-[12px] sm:text-[16px] font-normal max-w-3xl text-muted-foreground mt-2 sm:mt-4">
              Whether you're building a BNPL engine, a lending CRM, or embedded
              credit for your product — we’ve done it before. KalTech blends AI,
              product strategy, and full-stack engineering to bring your ideas
              to life, fast.
            </p>
          }
        />
      </div>
    );
}
