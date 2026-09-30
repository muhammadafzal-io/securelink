"use client";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

const Hero = () => {
    return (
        <div className="hero-zone relative h-[60svh] md:h-[85svh] flex items-center mt-18 md:mt-0">
            <div className="hero-ai-video-filter" />
            <div className="px-8 py-10 md:py-20 xl:py-32">
                <h1 className="relative z-10 font-bold hero-title sm:text-[58px] text-[32px] capitalize">
                    {"SEO & GEO Services — Get Found on Google and in AI"
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
                                {word === "—" && <br />}
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
                    className="relative z-10 py-2 text-[12px] sm:text-[18px] font-normal hero-subtext mt-2 max-w-4xl"
                >
                    Traditional search is no longer the only game in town. We help small businesses rank on Google and show up in ChatGPT, Perplexity, Gemini, Claude, and Google's AI Overviews — so your customers find you wherever they're searching.
                </motion.p>

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 1,
                    }}
                    className="relative z-10 mt-8 flex flex-wrap items-center gap-4"
                >
                    <Link
                        href="https://calendly.com/shershah-kaltech/30min"
                        target="_blank"
                        className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-neutral-200 transition-colors"
                    >
                        Get a Free SEO & GEO Audit
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
