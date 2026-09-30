// components/ServiceDetails.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface FeatureItem {
  title: string;
  description: string;
}

interface ServiceDetailsProps {
  title: string;
  description: string;
  imageSrc: string;
  features: FeatureItem[];
  ctaText?: string;
  ctaLink?: string;
  gradient?: string;
  service?: string;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({
  title,
  description,
  imageSrc,
  features,
  ctaText = "Get a Free AI Audit",
  ctaLink = "https://calendly.com/shershah-kaltech/30min",
  gradient = "",
  service = "ai",
}) => {
  return (
    <div className="relative w-full bg-background rounded-lg sm:p-16 pt-8 text-foreground overflow-hidden">
      <div
        className={`relative flex py-8 bg-card px-4 shadow-[0px_-39px_112.8px_0px_rgba(0,0,0,0.08)] dark:shadow-[0px_-39px_112.8px_0px_#00000080] rounded-lg overflow-hidden ${gradient}`}
      >
        <div className="w-full md:w-2/4 z-10 relative px-8">
          <h1 className="text-[18px] sm:text-[28px] font-medium mb-4">
            {title}
          </h1>
          <p className="text-muted-foreground text-[12px] sm:text-[18px] font-[400] mb-12 max-w-3xl">
            {description}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-x-10 gap-y-12 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <h3 className="text-[12px] sm:text-[18px] font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-[12px] tsm:text-[16px] text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href={ctaLink}
              target="_blank"
              className="inline-flex items-center text-foreground hover:text-muted-foreground transition-colors"
            >
              <span className="text-[18px] font-medium hover:text-primary transition-colors">
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
        {service === "ai" && (
          <div
            className={`absolute bottom-0 sm:top-0 right-0 h-1/2 sm:h-full overflow-hidden z-0`}
          >
            <Image
              src={imageSrc}
              alt={title}
              width={542}
              height={559}
              sizes="(max-width: 768px) 50vw, 33vw"
              className={`object-cover opacity-10 sm:opacity-100`}
              priority
            />
          </div>
        )}
        {service === "custom" && (
          <div className={`absolute top-0 right-0 h-full overflow-hidden z-0`}>
            <Image
              src={imageSrc}
              alt={title}
              height={559}
              width={542}
              sizes="(max-width: 768px) 50vw, 33vw"
              className={`object-cover opacity-10 sm:opacity-100`}
              priority
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
