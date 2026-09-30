"use client";
import React from "react";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="hero-zone relative h-[60svh] md:h-[85svh] flex items-center mt-6">
      <div className="hero-staff-augment-video-filter" />
      <div className="px-8 py-10 md:py-20 xl:py-32">
        <h1 className="relative z-10 font-bold hero-title text-[32px] sm:text-[58px] capitalize">
          {"Scale Your Team with AI-Native Experts — On Demand"
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
                {word === "AI-Native" && <br />}
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
          At KalTech, we plug top AI talent into your team fast — from engineers
          to ML experts — <br></br> helping you scale, build, or launch without
          the overhead.
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
        ></motion.div>
      </div>
    </div>
  );
};

export default Hero;
