import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import Link from "next/link";
import React from "react";

const MeetingSchedulerSection = () => {
  const valueChips = [
    "UAE-Focused Delivery",
    "Web, Automation & Software Under One Roof",
    "Clear Scope Before We Start",
    "Modern, Scalable Engineering",
    "Direct Access To The Team Building Your Project",
  ];
  return (
    <div className="custom-container mt-10 md:mt-20">
      <div className="rounded-2xl border border-white/10 py-8 md:py-20 relative overflow-hidden">
        <Image
          src="/assets/hero/cta-abstract-bg.png"
          alt=""
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover object-center grayscale"
        />
        {/* Recolors the (now-desaturated) image toward brand green/navy, keeping its original shape, highlights and shadows */}
        <div
          aria-hidden="true"
          className="absolute inset-0 mix-blend-color"
          style={{
            background: "linear-gradient(135deg, var(--brand) 0%, color-mix(in oklch, var(--brand) 40%, black) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05070a] via-[#05070a]/85 to-[#05070a]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-[#05070a]/20" />

        <div className="px-6 sm:px-0 sm:max-w-[90%] mx-auto relative z-[5]">
          <h2 className="text-[24px] sm:text-[40px] font-semibold text-white capitalize">
            Let’s talk about your project
          </h2>

          <p className="text-[12px] sm:text-[18px] font-normal max-w-3xl text-neutral-300 mt-2 sm:mt-4">
            Tell us what you're trying to build — a website, an automation,
            or a piece of custom software — and we'll get back to you with
            clear next steps.
          </p>

          <ul className="flex flex-wrap gap-x-2 sm:gap-x-4 gap-y-2 max-w-3xl mt-4 sm:mt-8">
            {valueChips.map((item, index) => (
              <li
                className="text-[8px] sm:text-[14px] font-normal text-neutral-200 bg-white/10 border border-white/10 py-1 px-3 rounded-full w-fit"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>

          <Button
            className="group icon-btn-ghost-effect hero-primary-btn sm:h-10 rounded-full text-[12px] sm:text-[16px] gap-4 ps-6 pe-2 relative glowing-effect mt-4 sm:mt-8"
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

export default MeetingSchedulerSection;
