"use client";
import React from "react";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="hero-zone relative h-[50svh] md:h-[60svh] flex items-center mt-18 md:mt-0">
      <div className="hero-portfolio-video-filter" />
      <div className="px-8 py-10 md:py-16">
        <h1 className="relative z-10 font-bold hero-title sm:text-[58px] text-[32px] capitalize">
          {"Our Work".split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1, ease: "easeInOut" }}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="relative z-10 py-2 text-[12px] sm:text-[18px] font-normal hero-subtext mt-2 max-w-2xl"
        >
          A look at the kind of web development, AI automation, and custom
          software projects we take on.
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
