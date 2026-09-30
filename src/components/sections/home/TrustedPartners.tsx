import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import React from "react";

const TrustedPartners = () => {
  return (
    <div>
      <InfiniteMovingLogos
        items={trustedPartners}
        direction="right"
        speed="slow"
        pauseOnHover={false}
      />
    </div>
  );
};

export default TrustedPartners;

const trustedPartners = [
  {
    src: "/assets/trusted-partners/g4.png",
    className: "w-[4rem] h-auto",
  },
  {
    src: "/assets/trusted-partners/bolt_icon.png",
    className: "w-[4rem] h-auto",
  },
  {
    src: "/assets/trusted-partners/ahw_global-custom.png",
    className: "w-[4rem] h-auto",
  },
  {
    src: "/assets/trusted-partners/chemlab-white.png",
    className: "w-[3rem] h-auto",
  },
  {
    src: "/assets/trusted-partners/mayfair-transparent.png",
    className: "w-[5rem] h-auto",
  },
  {
    src: "/assets/trusted-partners/shyppr-white.png",
    className: "w-[5rem] h-auto",
  },
  {
    src: "/assets/trusted-partners/mayfairtech_ai-white.png",
    className: "w-[5rem] h-auto",
  },
  {
    src: "/assets/trusted-partners/graana-white.png",
    className: "w-[6rem] h-auto",
  },
  {
    src: "/assets/trusted-partners/crytical-logo.png",
    className: "w-[6rem] h-auto",
  },

  {
    src: "/assets/trusted-partners/hyring-logo.png",
    className: "w-[6rem] h-auto",
  },

  {
    src: "/assets/trusted-partners/kalpay-khareedo-logo.png",
    className: "w-[6rem] h-auto",
  },

  {
    src: "/assets/trusted-partners/khodrah-logo.png",
    className: "w-[5rem] h-auto",
  },

  {
    src: "/assets/trusted-partners/mile-logo.png",
    className: "w-[6rem] h-auto",
  },

  {
    src: "/assets/trusted-partners/the-guild-logo.png",
    className: "w-[6rem] h-auto",
  },

  {
    src: "/assets/trusted-partners/vlue-logo.png",
    className: "w-[6rem] h-auto",
  },
];
