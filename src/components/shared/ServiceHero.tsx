import type { LucideIcon } from "lucide-react";
import { HeroArtwork } from "@/components/shared/HeroArtwork";

type ServiceHeroProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

/** Hero for the templated service pages; matches the look of the hand-built service heroes. */
export function ServiceHero({ title, description, icon }: ServiceHeroProps) {
  return (
    <div className="hero-zone relative mt-18 flex h-[60svh] items-center overflow-hidden md:mt-0 md:h-[85svh]">
      <div className="hero-web-dev-video-filter" />
      <HeroArtwork icon={icon} />
      <div className="relative z-10 px-8 py-10 md:py-20 xl:py-32">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-brand sm:text-[14px]">
          Integrating Technology with Security
        </p>
        <h1 className="hero-title max-w-3xl text-[32px] font-bold capitalize sm:text-[58px]">{title}</h1>
        <p className="hero-subtext mt-2 max-w-2xl py-2 text-[13px] font-normal sm:text-[18px]">
          {description}
        </p>
      </div>
    </div>
  );
}
