import React from "react";

export default function ProcessCards() {
  const cards = [
    {
      number: "01",
      title: "Discovery & Scoping",
      description:
        "We dive into your goals, tech stack, and roadmap to define clear roles and engagement needs.",
    },
    {
      number: "02",
      title: "Curated Talent Match",
      description:
        "Receive AI-vetted, culturally aligned developer profiles within 48–72 hours—ready to hit the ground running.",
    },
    {
      number: "03",
      title: "Seamless Onboarding",
      description:
        "Developers plug directly into your workflow using your preferred tools (Slack, Jira, GitHub, etc.).",
    },
    {
      number: "04",
      title: "Delivery, Optimization & Flexibility",
      description:
        "We manage deliverables, resolve blockers, and adapt to your needs—scale up or down anytime, hassle-free.",
    },
  ];

  return (
    <div className="flex flex-col items-center py-16 px-6 w-full bg-surface-elevated">
      <h1 className="relative z-10 font-bold text-foreground text-[32px] sm:text-[48px] mb-16 capitalize text-center">
        Our Augmentation Process
      </h1>
      <div className="flex flex-wrap sm:justify-center gap-6 w-full">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col p-8 rounded-xl bg-surface-panel backdrop-blur-lg flex-1 min-w-[200px] sm:min-w-[280px] max-w-sm"
          >
            <span className="text-primary mb-4 text-[12px] sm:text-[24px] font-[500]">
              {card.number}.
            </span>
            <h3 className="text-foreground text-[14px] sm:text-[28px] font-medium mb-4">
              {card.title}
            </h3>
            <p className="text-muted-foreground text-[12px] sm:text-[16px] font-normal">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
