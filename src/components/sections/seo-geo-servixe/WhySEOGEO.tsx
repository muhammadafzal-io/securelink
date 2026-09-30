import React from "react";
import { ThemeAwareIcon } from "@/components/theme-aware-icon";

const WhySEOGEO = () => {
    const valueProps = [
        {
            title: "AI-Native Team",
            description: "We don't just optimise for AI; we build with AI every day.",
            icon: "/assets/benifits/benifits-icon1.png"
        },
        {
            title: "Built for Small Business",
            description: "Transparent pricing, no long lock-ins.",
            icon: "/assets/benifits/benifits-icon6.png"
        },
        {
            title: "Full-Funnel View",
            description: "We connect SEO wins to pipeline and revenue, not just rankings.",
            icon: "/assets/benifits/benifits-icon2.png"
        },
        {
            title: "Proven Engineering Depth",
            description: "Technical SEO done properly by actual engineers.",
            icon: "/assets/benifits/benifits-icon3.png"
        }
    ];

    return (
        <div className="relative py-10 md:py-20 overflow-hidden">
            <div className="custom-container relative z-[5]">
                <h2 className="text-[32px] sm:text-[48px] font-semibold text-foreground text-center mb-10">
                    Why KalTech for <span className="text-brand">SEO & GEO</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-xl border border-border overflow-hidden bg-card/70 backdrop-blur-md divide-x divide-y divide-border">
                    {valueProps.map((item, index) => (
                        <div key={index} className="group px-8 py-10 flex flex-col gap-4 transition-colors duration-300">
                            <div className="icon-tile size-12">
                                <ThemeAwareIcon
                                    src={item.icon}
                                    alt={item.title}
                                    width={28}
                                    height={28}
                                />
                            </div>
                            <div className="space-y-2">
                                <h5 className="text-[20px] font-medium text-foreground">{item.title}</h5>
                                <p className="text-[16px] font-normal text-muted-foreground">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 max-w-4xl mx-auto text-center">
                    <p className="text-[16px] sm:text-[20px] text-muted-foreground leading-relaxed border-t border-border pt-10">
                        Search is changing faster than it has in twenty years. Millions of people now ask ChatGPT, Perplexity, and Gemini instead of typing into Google. If your brand isn't being cited by these AI answer engines, you're invisible to a fast-growing share of your market. KalTech combines proven SEO fundamentals with cutting-edge Generative Engine Optimization (GEO) to make sure you get found — on both traditional and AI search.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhySEOGEO;
