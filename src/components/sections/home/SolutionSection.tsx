import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SolutionSection = () => {
  const solutionBanner = [
    {
      image: "/assets/ai-services-demo.png",
      name: "AI-Powered Solutions",
      description:
        "KalTech helps you unlock the future with cutting-edge AI, innovation, and intelligent solutions tailored for growth.",
      btnLink: "/ai-solutions",
      bg: "",
    },
    {
      image: "/assets/custom-services-demo.png",
      name: "Custom Development Solutions",
      description:
        "Tailored tech. Built to scale with precision and flexibility. Designed to lead in a digital-first, innovation-driven world.",
      btnLink: "/custom-development",
      bg: "",
    },
  ];
  return (
    <div className="py-6 md:py-10">
      <div className="custom-container">
        <div className="flex flex-col items-center gap-1.5 md:gap-3">
          <h2 className="text-[32px] sm:text-[48px] font-semibold text-center">
            Our AI-Enhanced <span className="text-brand">Services</span>
          </h2>

          <div className="flex items-center gap-3">
            {/* <MoveRight className="size-5 mt-1 md:size-9" /> */}
            <p className="text-[12px] sm:text-[18px] font-normal text-muted-foreground text-center flex sm:hidden">
              We engineer future-ready solutions by embedding<br></br>artificial
              intelligence into every layer of product<br></br> development.
            </p>
            <p className="text-[12px] sm:text-[18px] font-normal text-muted-foreground text-center hidden sm:flex">
              We engineer future-ready solutions by embedding artificial
              intelligence <br></br> into every layer of product development.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
          {solutionBanner?.map((item, index) => (
            <div
              className={cn(
                "flex flex-col relative rounded-2xl solution-cards-bg  overflow-hidden"
              )}
              key={index}
            >
              <div
                className={cn(
                  "solution-card-bg-filter",
                  index === 0 ? "left" : "right"
                )}
              />

              <Image
                src={item.image}
                alt="Solution Banner 1"
                width={1000}
                height={1000}
                className={cn(
                  "w-full h-auto aspect-[1/0.6] object-contain relative z-[2]",
                  index === 0 ? "" : "px-2"
                )}
              />

              <div className="flex-1 mt-1 flex flex-col gap-1 relative z-[1] px-3 pb-2.5">
                <h4 className="text-base text-[14px] sm:text-[24px] font-medium text-foreground">
                  {item.name}
                </h4>

                <p className="text-[12px] sm:text-[18px] font-normal text-muted-foreground">
                  {item.description}
                </p>

                <Button
                  variant={"ghost"}
                  className="group w-fit gap-2 mt-auto text-primary hover:text-primary"
                  asChild
                >
                  <Link
                    href={item.btnLink}
                    className="-ms-2 text-[12px] sm:text-[18px]"
                  >
                    Let&apos;s Build Together
                    <MoveUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;
