import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import Link from "next/link";
import React from "react";

const MeetingSchedulerSectionServices = () => {
  const valueChips = [
    "UAE-Focused Delivery",
    "Web, Automation & Software Under One Roof",
    "Clear Scope Before We Start",
    "Modern, Scalable Engineering",
    "Direct Access To The Team Building Your Project",
  ];
  return (
    <div className="custom-container mt-10 md:mt-20">
      <div className="rounded-2xl border border-border py-8 md:py-20 relative overflow-hidden">
        <div className="meeting-scheduler-bg image" />

        <div className="px-6 sm:px-0 sm:max-w-[90%] mx-auto relative z-[5]">
          <h2 className="text-[24px] sm:text-[40px] font-semibold text-foreground capitalize">
            Let’s talk about your business needs
          </h2>

          <p className="text-[12px] sm:text-[18px] font-normal max-w-3xl text-muted-foreground mt-2 sm:mt-4">
            Share a few details about what you're trying to build, and we'll
            follow up with clear next steps — no obligation.
          </p>

          <ul className="flex flex-wrap gap-x-2 sm:gap-x-4 gap-y-2 max-w-3xl mt-4 sm:mt-8">
            {valueChips.map((item, index) => (
              <li
                className="text-[8px] sm:text-[14px] font-normal text-muted-foreground bg-muted py-1 px-3 rounded-full w-fit"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>

          <Button
            className="group icon-btn-ghost-effect sm:h-10 rounded-full text-[12px] sm:text-[16px] gap-4 ps-6 pe-2 relative glowing-effect mt-4 sm:mt-8"
            asChild
          >
            <Link href="/contact-us">
              Start a Project
              <div className="icon size-6 sm:size-7">
                <ArrowRight className="size-4 md:size-5" />
              </div>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MeetingSchedulerSectionServices;
