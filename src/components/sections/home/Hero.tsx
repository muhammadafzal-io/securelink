"use client";
import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Bot, Code2, Globe } from "lucide-react";

const ORBIT = [
  { Icon: Globe, label: "Web Development", angle: 0 },
  { Icon: Code2, label: "Custom Software", angle: 120 },
  { Icon: Bot, label: "AI Automation", angle: 240 },
];

const Hero = () => {
  const reduceMotion = useReducedMotion();
  return (
    <div className="hero-zone relative min-h-[75svh] md:min-h-[85svh] flex items-center mt-18 md:mt-0 overflow-hidden">
      <Image
        src="/assets/hero/hero-ai-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_center]"
      />
      {/* Brand-colour overlay: same treatment as the About Us hero */}
      <div aria-hidden="true" className="absolute inset-0 z-[2] bg-brand mix-blend-color" />
      {/* Dark scrim keeps the headline readable over the artwork */}
      <div className="absolute inset-0 z-[3] bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-[3] h-1/3 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Animated emblem: services orbiting the SecureLink signal mark */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        aria-hidden="true"
        className="pointer-events-none absolute z-[5] hidden lg:flex items-center justify-center right-[6%] xl:right-[10%] top-1/2 -translate-y-1/2 size-[340px] xl:size-[420px]"
      >
        <span className="absolute inset-16 rounded-full bg-brand/30 blur-3xl" />
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="absolute size-32 xl:size-40 rounded-full border-2 border-brand/70 animate-ping motion-reduce:hidden"
            style={{ animationDuration: "4s", animationDelay: `${i * 1.3}s` }}
          />
        ))}
        <span className="absolute inset-0 rounded-full border border-brand/25" />
        <span className="absolute inset-12 rounded-full border border-dashed border-brand/30" />

        {/* Orbit ring rotates slowly; each icon counter-rotates to stay upright */}
        <motion.div
          className="absolute inset-0"
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          {ORBIT.map(({ Icon, label, angle }) => (
            <div
              key={label}
              className="absolute inset-0"
              style={{ transform: `rotate(${angle}deg)` }}
            >
              <motion.div
                initial={{ rotate: -angle }}
                animate={reduceMotion ? undefined : { rotate: -angle - 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 rounded-full border border-brand/50 bg-[#05070a]/80 py-2.5 ps-2.5 pe-5 text-white shadow-[0_0_24px_color-mix(in_oklch,var(--brand)_45%,transparent)]"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-brand text-white">
                  <Icon className="size-5 xl:size-6" />
                </span>
                <span className="whitespace-nowrap text-sm xl:text-base font-bold tracking-tight">{label}</span>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Centre mark: same signal logo as the About page */}
        <svg
          viewBox="0 0 120 120"
          className="relative size-28 xl:size-36 drop-shadow-[0_0_28px_color-mix(in_oklch,var(--brand)_75%,transparent)]"
          fill="none"
          strokeLinecap="round"
        >
          <defs>
            <linearGradient id="home-sl-disc" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--brand)" />
              <stop offset="100%" stopColor="color-mix(in oklch, var(--brand) 55%, black)" />
            </linearGradient>
          </defs>
          <circle cx="60" cy="60" r="54" fill="url(#home-sl-disc)" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" />
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

      <div className="relative z-10 w-full px-8 py-10 md:py-20 xl:py-32 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-4 text-[11px] sm:text-[14px] font-semibold uppercase tracking-[0.15em] text-brand"
        >
          Integrating Technology with Security
        </motion.p>

        <h1 className="font-bold hero-title text-[38px] sm:text-[64px] leading-[1.05] tracking-tight capitalize">
          {"Build. Automate.".split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1, ease: "easeInOut" }}
              className="mr-3 inline-block"
            >
              {word}
            </motion.span>
          ))}
          <br />
          {"Scale.".split(" ").map((word, index) => (
            <motion.span
              key={`l2-${index}`}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + index * 0.1, ease: "easeInOut" }}
              className="mr-3 inline-block text-brand"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="py-2 text-[13px] sm:text-[19px] font-normal hero-subtext mt-4 max-w-2xl"
        >
          SecureLink builds websites, custom software, and AI-powered
          automation for businesses worldwide, from our base in the UAE. We
          handle the technology so you can focus on running your business,
          from your first website to the systems that keep your operations
          moving.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.9 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <Button
            className="group icon-btn-ghost-effect hero-primary-btn sm:h-14 rounded-full sm:text-xl gap-4 ps-6 pe-2 relative glowing-effect"
            asChild
          >
            <Link href="/contact-us">
              Start a Project
              <div className="icon size-7 sm:size-9">
                <ArrowRight className="size-4 md:size-5" />
              </div>
            </Link>
          </Button>

          <Button
            variant="outline"
            className="sm:h-14 rounded-full sm:text-xl border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            asChild
          >
            <Link href="/#services">Explore Services</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
