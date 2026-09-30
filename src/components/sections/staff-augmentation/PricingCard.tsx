import React from "react";
import Link from "next/link";

type PricingCardProps = {
  title: string;
  href: string;
};

const PricingCard = ({ title, href }: PricingCardProps) => {
  return (
    <Link
      href={href}
      className="bg-surface-panel rounded-xl px-2 py-2 flex items-center justify-center hover:text-primary transition-colors duration-200 sm:w-64"
    >
      <span className="flex flex-row items-center gap-2">
        <span className="text-[12px] sm:text- font-medium">{title}</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-200 group-hover:translate-x-1"
        >
          <path d="M7 17l9.2-9.2M17 17V7H7" />
        </svg>
      </span>
    </Link>
  );
};

const PricingCards = () => {
  const pricingOptions = [
    { title: "Hourly", href: "#" },
    { title: "Monthly Retainer", href: "#" },
    { title: "Sprint-Based", href: "#" },
    { title: "Fully Managed Teams", href: "#" },
  ];

  return (
    <div className="w-full py-8">
      <div className="flex flex-wrap justify-center gap-6">
        {pricingOptions.map((option, index) => (
          <PricingCard key={index} title={option.title} href={option.href} />
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
