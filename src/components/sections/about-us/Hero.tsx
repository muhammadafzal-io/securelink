"use client";
import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const Hero = () => {
  const reduceMotion = useReducedMotion();
  return (
    <div className="hero-zone relative h-[60svh] md:h-[85svh] flex items-center mt-18 md:mt-0 overflow-hidden">
      <Image
        src="/assets/about-us-hero-network.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-right"
      />
      {/* Brand-colour overlay: recolours the blue artwork to the site's brand hue */}
      <div className="absolute inset-0 z-[2] bg-brand mix-blend-color" />
      {/* Dark scrim keeps the headline readable over the artwork */}
      <div className="absolute inset-0 z-[3] bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      {/* Brand emblem, sits where the artwork's focal glow is */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="pointer-events-none absolute z-[4] hidden md:flex flex-col items-center gap-5 right-[7%] top-1/2 -translate-y-1/2 lg:right-[10%]"
      >
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex items-center justify-center size-40 lg:size-52"
        >
          {/* Soft glow + ripples spreading outward from the mark (transform/opacity only) */}
          <span className="absolute inset-0 rounded-full bg-brand/40 blur-3xl" />
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="absolute inset-0 rounded-full border-2 border-brand/70 animate-ping motion-reduce:hidden"
              style={{ animationDuration: "4s", animationDelay: `${i}s` }}
            />
          ))}
          <span className="absolute -inset-6 rounded-full border border-brand/25" />
          <span className="absolute -inset-12 rounded-full border border-brand/15" />
          <svg
            viewBox="0 0 120 120"
            className="relative size-full drop-shadow-[0_0_28px_color-mix(in_oklch,var(--brand)_75%,transparent)]"
            fill="none"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="sl-tile" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--brand)" />
                <stop offset="100%" stopColor="color-mix(in oklch, var(--brand) 55%, black)" />
              </linearGradient>
            </defs>
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="url(#sl-tile)"
              stroke="rgba(255,255,255,0.45)"
              strokeWidth="1.5"
            />
            {/* signal arcs radiating from the centre node, left and right */}
            <g stroke="#fff" strokeWidth="6">
              <path d="M44 46a20 20 0 0 0 0 28" />
              <path d="M76 46a20 20 0 0 1 0 28" />
              <path d="M33 36a36 36 0 0 0 0 48" opacity="0.7" />
              <path d="M87 36a36 36 0 0 1 0 48" opacity="0.7" />
              <path d="M22 27a52 52 0 0 0 0 66" opacity="0.4" />
              <path d="M98 27a52 52 0 0 1 0 66" opacity="0.4" />
            </g>
            <circle cx="60" cy="60" r="9" fill="#fff" />
          </svg>
        </motion.div>
        <div className="text-center">
          <span className="block text-3xl lg:text-5xl font-bold tracking-tight text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.6)]">
            SecureLink
          </span>
          <span className="mt-1 block text-[11px] lg:text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
            Technology · Security
          </span>
        </div>
      </motion.div>
      <div className="px-8 py-10 md:py-20 xl:py-32">
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 mb-3 text-[11px] sm:text-[14px] font-semibold uppercase tracking-[0.15em] text-brand"
        >
          Integrating Technology with Security
        </motion.p>
        <h1 className="relative z-10 font-bold hero-title text-[32px] sm:text-[58px] capitalize">
          {"A Technology Partner Built For Your Business"
            .split(" ")
            .map((word, index) => (
              <React.Fragment key={index}>
                <motion.span
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }} 
                  className="mr-2 inline-block"
                >
                  {word}
                </motion.span>
                {word === "For" && <br className="hidden sm:block" />}
              </React.Fragment>
            ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="relative z-10 py-2 text-[12px] sm:text-[18px] font-normal hero-subtext mt-2 max-w-2xl"
        >
          SecureLink is a UAE-based technology company serving clients
          worldwide, building websites, automating workflows, and
          developing custom software for companies that want technology that
          actually fits how they work.
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
