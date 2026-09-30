import Image from "next/image";
import Hero from "@/components/sections/products/Hero";
import ProblemCards from "@/components/sections/products/ProblemCards";
import StakeholderCards from "@/components/sections/products/StakeholderCards";
import ProductConsultation from "@/components/sections/home/ProductConsultation";
import {
  FileText,
  EyeOff,
  AlertTriangle,
  ClipboardCheck,
  GitBranch,
  Clock,
  WifiOff,
  Pencil,
  Network,
} from "lucide-react";

const stakeholders = [
  {
    number: "01.",
    title: "Donor & Registration Teams",
    description:
      "Simplify donor registration with automated registration cards, labels, barcodes, and receipts ready for printing. Streamline the front-desk process and ensure accurate donor documentation with minimal manual effort.",
  },
  {
    number: "02.",
    title: "Lab & Screening Operations",
    description:
      "Manage full screening workflows including infection markers, blood grouping, and medical clearance. Track screening status with structured compliance checkpoints.",
  },
  {
    number: "03.",
    title: "Management & Compliance",
    description:
      "Full dashboard visibility across donations, screening results, inventory health, and issuance trends. Export audit-ready reports for regulatory compliance and hospital reporting.",
  },
];

const problems = [
  {
    icon: AlertTriangle,
    title: "Spreadsheet",
    subtitle: "Errors & Data Loss",
  },
  {
    icon: Clock,
    title: "Delayed",
    subtitle: "Screening Documentation",
  },
  {
    icon: WifiOff,
    title: "No Real-Time",
    subtitle: "Inventory Visibility",
  },
  {
    icon: Pencil,
    title: "Manual",
    subtitle: "Issuance Tracking",
  },
  {
    icon: Network,
    title: "Fragmented",
    subtitle: "Department Coordination",
  },
];

export default function BecsPage() {
  return (
    <div>
      <Hero
        image="/assets/becs4.jpeg"
        heading="Smart Blood Bank Management System"
      />
      <div className="flex flex-col sm:flex-row mt-28 sm:mt-42 px-6 w-full">
        <div className="flex sm:w-1/2 w-full justify-center items-center">
          <h1 className="relative z-10 font-bold text-foreground sm:text-[48px] text-[32px] capitalize text-start sm:text-center w-[80%]">
            What is BECS?
          </h1>
        </div>
        <div className="flex items-start flex-start justify-start flex-col w-full sm:w-1/2 pt-2 pb-12">
          <p className="relative z-10 py-2 text-[12px] sm:text-[18px] font-normal text-muted-foreground mt-2 text-start">
            BECS centralizes donor management, screening workflows, inventory
            tracking, and issuance monitoring into one real-time platform.
          </p>
          <p className="relative z-10 py-2 text-[12px] sm:text-[18px] font-normal text-muted-foreground mt-2 text-start">
            Whether you’re managing hospital blood banks, regional blood
            centers, or multi-location donation networks — BECS keeps operations
            accurate, compliant, and scalable.
          </p>
          <ul className="list-disc list-inside">
            <li className="relative z-10 pt-4 text-[12px] sm:text-[18px] font-normal text-muted-foreground text-start">
              Real-time donor registration & history tracking
            </li>
            <li className="relative z-10 text-[12px] sm:text-[18px] font-normal text-muted-foreground text-start">
              Automated screening workflow with medical compliance checkpoints
            </li>
            <li className="relative z-10 text-[12px] sm:text-[18px] font-normal text-muted-foreground text-start">
              Live blood inventory by group, component, and storage status
            </li>
            <li className="relative z-10 text-[12px] sm:text-[18px] font-normal text-muted-foreground text-start">
              Issuance tracking with audit-ready reporting
            </li>
            <li className="relative z-10 text-[12px] sm:text-[18px] font-normal text-muted-foreground text-start">
              Scalable for multi-branch blood bank networks
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col pb-12 pt-12 sm:pt-32 flex-col">
        <h1 className="relative z-10 font-bold text-foreground sm:text-[48px] text-[32px] capitalize text-center w-[90%] sm:w-full">
          Why Traditional Systems Fail
        </h1>
        <p className="relative z-10 py-2 text-[12px] sm:text-[18px] font-normal text-muted-foreground mt-2 text-center w-[90%] sm:w-[60%]">
          Manual or legacy blood bank systems create risk — slow data entry,
          missing records, compliance gaps, and poor inventory visibility.
        </p>
        <ProblemCards problems={problems} />
      </div>
      <div className="flex w-full px-6">
        <StakeholderCards
          stakeholders={stakeholders}
          title={
            <h1 className="text-[32px] sm:text-[48px] font-bold text-foreground leading-tight">
              Built For Every Hospital
            </h1>
          }
        />
      </div>
      <div className="flex flex-col w-full pt-18 gap-8 px-6 pb-8 sm:pb-0">
        <div className="flex w-full items-center justify-center">
          <h1 className="relative z-10 font-bold text-foreground sm:text-[48px] text-[32px]  text-center">
            A Closer Look at Key Features
          </h1>
        </div>
        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col">
            <p className="relative z-10 text-[16px] sm:text-[20px] text-foreground font-normal text-center sm:text-start">
              Smart Donor Lifecycle Management
            </p>
            <p className="relative z-10 pt-2 text-[12px] sm:text-[16px] font-normal text-muted-foreground text-center sm:text-start px-8 sm:px-0">
              Track donor registration, donation history, deferrals, screening
              records, and eligibility status — all in one unified profile.
            </p>
          </div>
          <div className="flex flex-col">
            <p className="relative z-10 text-[16px] sm:text-[20px] text-foreground font-normal text-center sm:text-start">
              Real-Time Blood Inventory Intelligence
            </p>
            <p className="relative z-10 pt-2 text-[12px] sm:text-[16px] font-normal text-muted-foreground text-center sm:text-start px-8 sm:px-0">
              Monitor blood units by group, component (RCC, PLT, FFP, CRYO),
              screened status, reserved units, and availability.
            </p>
          </div>
          <div className="flex flex-col">
            <p className="relative z-10 text-[16px] sm:text-[20px] text-foreground font-normal text-center sm:text-start">
              Screening & Compliance Automation
            </p>
            <p className="relative z-10 pt-2 text-[12px] sm:text-[16px] font-normal text-muted-foreground text-center sm:text-start px-8 sm:px-0">
              Digitize infection screening workflows (HBsAg, HCV, HIV, Syphilis,
              ABO/Rh) with timestamp tracking and result validation.
            </p>
          </div>
          <div className="flex flex-col">
            <p className="relative z-10 text-[16px] sm:text-[20px] text-foreground font-normal text-center sm:text-start">
              Issuance & Utilization Tracking
            </p>
            <p className="relative z-10 pt-2 text-[12px] sm:text-[16px] font-normal text-muted-foreground text-center sm:text-start px-8 sm:px-0">
              Track issued units by department, hospital, or emergency request
              with full traceability.
            </p>
          </div>
          <div className="flex flex-col">
            <p className="relative z-10 text-[16px] sm:text-[20px] text-foreground font-normal text-center sm:text-start">
              Reporting & Decision Intelligence
            </p>
            <p className="relative z-10 pt-2 text-[12px] sm:text-[16px] font-normal text-muted-foreground text-center sm:text-start px-8 sm:px-0">
              Generate donation trends, screening deferrals, component
              utilization, and shortage prediction reports instantly.
            </p>
          </div>
        </div>
        <div className="relative max-w-[85%] sm:w-full sm:max-w-6xl mx-auto pt-12">
          {/* First Image */}
          <Image
            src="/assets/becs3.jpeg"
            alt="features"
            width={1072}
            height={500}
            className="w-full h-auto"
          />
        </div>
        <div className="w-full items-center justify-center py-14 flex-col gap-4 hidden sm:flex">
          <div className="quote-icon" />
          <h1 className="relative z-10 font-bold text-foreground text-[32px] capitalize text-center custom-container">
            BECS has transformed our blood bank into a modern, data-driven
            transfusion service. Fully aligned with ICCBBA ISBT 128 standards,
            it streamlines everything from donor registration to transfusion on
            one integrated platform. With real-time monitoring, accurate
            matching, and reliable inventory management, it has significantly
            improved safety, efficiency, and patient care at P First Solutions
            Blood Bank. Its scalable, locally developed system is perfectly
            suited for the evolving needs of Pakistan’s healthcare sector.
          </h1>
          <div className="flex flex-col">
            <p className="relative z-10 font-medium text-muted-foreground text-[24px] capitalize text-center">
              Shamshad Aslam Hospital Blood Bank Wah Cantt
            </p>
            {/* <p className="relative z-10 font-normal text-muted-foreground text-[12px] capitalize text-center">
              Founder Balloons{" "}
            </p> */}
          </div>
        </div>
      </div>
      <ProductConsultation
        title={
          <h2 className="text-[24px] sm:text-[40px] font-semibold text-foreground capitalize">
            Let’s Build Your Healthcare Operations Platform
          </h2>
        }
        description={
          <p className="text-[12px] sm:text-[16px] font-normal max-w-3xl text-muted-foreground mt-2 sm:mt-4">
            Whether you're building a national blood management network,
            hospital blood bank system, or healthcare operations platform — BECS
            provides the intelligence, automation, and reliability required for
            critical healthcare environments.
          </p>
        }
      />
    </div>
  );
}
