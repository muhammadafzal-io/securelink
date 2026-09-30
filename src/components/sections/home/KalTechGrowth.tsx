"use client";
import React from "react";
import CountUp from "react-countup";
import { DollarSign, Clock, Star } from "lucide-react";

type repeatedItem = {
    label: string;
    number: number;
    prefix?: string;
    postfix?: string;
    icon: React.ReactNode;
};

const KalTechGrowth = () => {
    const repeatedItems: repeatedItem[] = [
        {
            label: "Client growth generated",
            number: 5,
            prefix: "$",
            postfix: "M+",
            icon: (
                <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-brand" />
            ),
        },
        {
            label: "Combined team experience",
            number: 30,
            postfix: "+ Years",
            icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-brand" />,
        },
        {
            label: "Ventures built from scratch",
            number: 10,
            postfix: "+",
            icon: <Star className="w-4 h-4 sm:w-5 sm:h-5 text-brand" />,
        },
    ];
    return (
        <div className="custom-container">
            <div className="relative py-10 md:py-20 overflow-hidden rounded-xl">
                <div className="growth-section-bg-image hidden sm:flex" />
                <div className="growth-section-bg-image-mobile overflow-visible flex sm:hidden" />
                {/* <div className="growth-section-bg-filter" /> */}

                <div className="relative z-[3] flex items-center justify-center">
                    <div className="max-w-2xl flex flex-col items-center">
                        <h2 className="text-[32px] sm:text-[48px] font-semibold text-foreground text-center">
                            Accelerating AI <br></br> Innovation at Scale
                        </h2>

                        <p className="text-12 sm:text-[18px] text-muted-foreground/60 mt-4 md:mt-8 text-center">
                            We help startups move from idea to AI-powered
                            reality — without compromise.
                        </p>

                        <div className="grid grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-10">
                            {repeatedItems.map((item, index) => (
                                <div
                                    className="border-t sm:px-2 py-0.5 text-center"
                                    key={index}
                                >
                                    <label className="text-[8px] sm:text-[12px] font-normal text-muted-foreground leading-3 text-center items-center">
                                        {item.label}
                                    </label>

                                    <div className="flex h-[40px] items-center justify-center gap-1.5">
                                        <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-surface-icon border border-border/60">
                                            {item.icon}
                                        </span>
                                        <h3 className="text-[20px] sm:text-[30px] font-medium tracking-wide text-foreground text-center">
                                            <CountUp
                                                end={item.number}
                                                suffix={item.postfix}
                                                duration={10}
                                            />
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KalTechGrowth;
