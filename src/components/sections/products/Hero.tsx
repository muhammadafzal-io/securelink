"use client";
import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Play } from "lucide-react";
import Image from "next/image";

interface IHeroProps {
  image:string
  heading:string
}

const Hero = ({image,heading}:IHeroProps) => {
  return (
    <div className="hero-zone relative flex items-center mt-52 md:mt-6 justify-center flex-col">
      <div className="hero-products-video-filter" />
      <div className="px-8 md:py-20 xl:pb-16 xl:pt-32 w-full">
        <h1 className="relative z-10 font-bold hero-title sm:text-[58px] text-[32px] text-center capitalize hidden sm:block">
          {heading
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
                {word === "Platform" && <br />}
              </React.Fragment>
            ))}
        </h1>
        <h1 className="relative z-10 font-bold hero-title sm:text-[58px] text-[32px] text-center capitalize block sm:hidden">
          {"AI-Powered Lending Platform".split(" ").map((word, index) => (
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
          className="relative z-10 py-2 text-[12px] sm:text-[18px] font-normal hero-subtext mt-2 text-center"
        >
          KalTech is a leading AI venture studio, building intelligent digital
          products that combine <br className="hidden sm:flex"></br> deep tech
          with business outcomes. From generative AI to autonomous agents, we
          power <br className="hidden sm:flex"></br> growth across FinTech,
          HealthTech, Web3, and beyond.
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
          className="relative z-10 mt-6 flex flex-wrap items-center gap-4 justify-center pb-8 sm:pb-0"
        >
          <Button
            className="group icon-btn-ghost-effect hero-primary-btn text-[12px] sm:text-[18px] sm:h-14 rounded-full sm:text-xl gap-4 ps-6 pe-2 relative glowing-effect"
            asChild
          >
            <Link href={`/contact-us`}>
              Book A Demo
              <div className="icon size-7 sm:size-9">
                <Play className="size-4 md:size-5" />
              </div>
            </Link>
          </Button>
          <Button
            className="group hero-primary-btn border border-white/30 text-[12px] sm:text-[18px] icon-btn-ghost-effect sm:h-14 rounded-full gap-4 relative glowing-effect hover:bg-white/90"
            variant={"custom"}
            asChild
          >
            <Link
              href={`https://calendly.com/shershah-kaltech/30min`}
              target="_blank"
            >
              Let&apos;s Build Yours
            </Link>
          </Button>
        </motion.div>
      </div>
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
        className="z-10 flex items-center justify-center px-4 sm:px-0"
      >
        <Image
          src={image}
          width={1050}
          height={745}
          alt="leads-product"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
