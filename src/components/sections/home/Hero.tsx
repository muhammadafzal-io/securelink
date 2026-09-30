"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="hero-zone relative min-h-[75svh] md:min-h-[85svh] flex items-center mt-18 md:mt-0 overflow-hidden">
      <Image
        src="/assets/hero/hero-ai-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_center] grayscale"
      />
      {/* Recolors the (now-desaturated) image toward brand green, keeping its original shape, highlights and shadows */}
      <div
        aria-hidden="true"
        className="absolute inset-0 mix-blend-color"
        style={{
          background: "linear-gradient(135deg, var(--brand) 0%, color-mix(in oklch, var(--brand) 40%, black) 100%)",
        }}
      />
      {/* Overlay: guarantees text contrast regardless of viewport crop */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#05070a] via-[#05070a]/85 to-[#05070a]/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-[#05070a]/30" />
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
          Secure Link builds websites, custom software, and AI-powered
          automation for businesses in the UAE. We handle the technology so
          you can focus on running your business — from your first website
          to the systems that keep your operations moving.
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
