import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import Link from "next/link";
import React from "react";

interface IProductConsultationProps {
  title: React.ReactNode;
  description: React.ReactNode;
}

const ProductConsultation = ({title,description}:IProductConsultationProps) => {
  return (
    <div className="custom-container mt-10 md:mt-20">
      <div className="rounded-2xl border border-[#1B1B1B] py-8 md:py-20 relative overflow-hidden">
        <div className="meeting-scheduler-product-bg image" />
        <div className="meeting-scheduler-bg bg-filter" />

        <div className="px-6 sm:px-0 sm:max-w-[90%] mx-auto relative z-[5]">
         {title}

          {description}

          <Button
            className="group icon-btn-ghost-effect sm:h-10 rounded-full sm:text-[16px] text-[12px] gap-4 ps-6 pe-2 relative glowing-effect mt-4 sm:mt-8"
            asChild
          >
            <Link
              href={`https://calendly.com/shershah-kaltech/30min`}
              target="_blank"
            >
              Schedule a Free Consultation
              <div className="icon size-6 sm:size-7">
                <ArrowRight className="size-4 md:size-5" />
              </div>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductConsultation;
