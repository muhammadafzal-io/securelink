export type CaseStudy = {
  title: string;
  service: string;
  category: string;
  description: string;
};

// Illustrative example projects showing the kind of work Secure Link takes on.
// Not attributed to specific named clients.
export const caseStudies: CaseStudy[] = [
  {
    title: "Corporate Website Redesign",
    service: "Web Development",
    category: "Web Development",
    description:
      "A dated business website rebuilt from scratch — modern design, faster load times, and a CMS the team can actually update themselves.",
  },
  {
    title: "Support Chatbot for a Service Business",
    service: "AI Automation",
    category: "AI Automation",
    description:
      "A website chatbot trained on a company's own FAQs and service pages, handling routine questions and routing the rest to the right person.",
  },
  {
    title: "Internal CRM for a Sales Team",
    service: "Custom Software Development",
    category: "Custom Software",
    description:
      "A lightweight CRM built around one team's actual sales process, replacing a spreadsheet that had stopped scaling.",
  },
  {
    title: "E-Commerce Storefront Launch",
    service: "Web Development",
    category: "Web Development",
    description:
      "A product catalog and checkout flow built for a growing retail brand, with inventory and payments connected from day one.",
  },
  {
    title: "Lead Routing & Follow-Up Automation",
    service: "AI Automation",
    category: "AI Automation",
    description:
      "Incoming leads automatically scored and routed to the right sales rep, with follow-up sequences triggered by activity.",
  },
  {
    title: "Client Portal for a Professional Services Firm",
    service: "Custom Software Development",
    category: "Custom Software",
    description:
      "A private portal where clients can track project status and documents, cutting down on back-and-forth email.",
  },
];
