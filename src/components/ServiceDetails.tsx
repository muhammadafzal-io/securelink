// components/ServiceDetails.tsx
import React from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface FeatureItem {
  title: string;
  description: string;
}

interface ServiceDetailsProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: FeatureItem[];
  ctaText?: string;
  ctaLink?: string;
  gradient?: string;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({
  title,
  description,
  icon: Icon,
  features,
  ctaText = "Start a Project",
  ctaLink = "/contact-us",
  gradient = "",
}) => {
  return (
    <div className="relative w-full bg-background rounded-lg sm:p-16 pt-8 text-foreground overflow-hidden">
      <div
        className={`relative flex py-8 ${gradient ? "" : "bg-card"} px-4 shadow-[0px_-39px_112.8px_0px_rgba(0,0,0,0.08)] dark:shadow-[0px_-39px_112.8px_0px_#00000080] rounded-lg overflow-hidden ${gradient}`}
      >
        <div className="w-full md:w-2/4 z-10 relative px-8">
          <h1
            className={`text-[18px] sm:text-[28px] font-medium mb-4 ${gradient ? "text-white" : ""}`}
          >
            {title}
          </h1>
          <p
            className={`text-[12px] sm:text-[18px] font-[400] mb-12 max-w-3xl ${gradient ? "text-white/70" : "text-muted-foreground"}`}
          >
            {description}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-x-10 gap-y-12 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <h3
                  className={`text-[12px] sm:text-[18px] font-semibold mb-3 ${gradient ? "text-white" : ""}`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-[12px] tsm:text-[16px] ${gradient ? "text-white/70" : "text-muted-foreground"}`}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href={ctaLink}
              className={`inline-flex items-center transition-colors ${gradient ? "text-white hover:text-white/80" : "text-foreground hover:text-muted-foreground"}`}
            >
              <span className="text-[18px] font-medium">
                {ctaText}
              </span>
              <svg
                className="ml-2 w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="absolute -bottom-10 -right-10 sm:top-1/2 sm:right-12 sm:-translate-y-1/2 flex size-48 sm:size-56 items-center justify-center rounded-3xl bg-brand/10 z-0 opacity-40 sm:opacity-100">
          <Icon className="size-24 sm:size-28 text-brand" strokeWidth={1.2} />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
