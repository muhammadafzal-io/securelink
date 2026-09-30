"use client";
import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="hero-zone relative h-[60svh] md:h-[85svh] flex items-center mt-18 md:mt-0">
      <div className="hero-video-filter" />
      <div className="px-8 py-10 md:py-20 xl:py-32">
        <h1 className="relative z-10 font-bold hero-title sm:text-[58px] text-[32px] capitalize">
          {"We build fast, scalable AI solutions for small businesses"
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
                {word === "scalable" && <br />}
              </React.Fragment>
            ))}
        </h1>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 py-2 text-[12px] sm:text-[18px] font-normal hero-subtext mt-2"
        >

          Founded by serial entrepreneurs who have shipped products across four continents, KalTech is the AI
          venture studio small businesses trust to go from idea to launch. Generative AI, autonomous agents, and custom software — built with founder-grade thinking.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-6 flex flex-wrap items-center gap-4"
        >
          <Button
            className="group icon-btn-ghost-effect hero-primary-btn sm:h-14 rounded-full sm:text-xl gap-4 ps-6 pe-2 relative glowing-effect"
            asChild
          >
            <Link
              href={`https://calendly.com/shershah-kaltech/30min`}
              target="_blank"
            >
              Get a Free AI Audit
              <div className="icon size-7 sm:size-9">
                <ArrowRight className="size-4 md:size-5" />
              </div>
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
