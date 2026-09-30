export type CaseStudy = {
  title: string;
  client: string;
  category: string;
  description: string;
  flag: string;
};

export const caseStudies: CaseStudy[] = [
  {
    title: "AI-Enhanced Loan Management Platform",
    client: "Muawin",
    category: "Fintech",
    description:
      "KalTech developed a robust, AI-enhanced loan management platform with intelligent automation to streamline decision-making and accelerate launch.",
    flag: "PK",
  },
  {
    title: "AI-Powered QA Automation",
    client: "Balloons",
    category: "Quality Assurance",
    description:
      "Automated QA for both front and backend using AI-powered testing — resulting in zero critical bugs on launch.",
    flag: "SA",
  },
  {
    title: "AI-Powered MVP for KSA Market",
    client: "VLUE",
    category: "Product Development",
    description:
      "Delivered an MVP fast with personalized AI features, tailored to KSA market dynamics and user expectations.",
    flag: "SA",
  },
  {
    title: "Scalable AI Automation Solutions",
    client: "Yousaf Ali",
    category: "Automation",
    description:
      "From automation to data-driven UX, delivered AI-powered solutions that were cost-effective and scalable.",
    flag: "US",
  },
  {
    title: "Intelligent Website Build",
    client: "Cloud Employees",
    category: "Web Development",
    description:
      "Built a beautiful, intelligent website where every element was optimized using real-time data and AI insights.",
    flag: "GB",
  },
];
