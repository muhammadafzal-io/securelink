import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type HeroArtworkProps = {
  icon: LucideIcon;
  className?: string;
};

/**
 * Decorative hero illustration for the otherwise empty right side of a hero:
 * concentric rings, a slow orbit with nodes and a glowing icon disc.
 * Pure CSS/SVG, no images, hidden below `lg` where the headline needs the room.
 */
export function HeroArtwork({ icon: Icon, className }: HeroArtworkProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute right-[5%] top-1/2 z-[5] hidden size-[340px] -translate-y-1/2 items-center justify-center lg:flex xl:right-[9%] xl:size-[440px]",
        className
      )}
    >
      <span className="absolute inset-16 rounded-full bg-brand/30 blur-3xl" />
      {[0, 1].map((i) => (
        <span
          key={i}
          className="absolute size-32 rounded-full border-2 border-brand/60 motion-safe:animate-ping xl:size-40"
          style={{ animationDuration: "4s", animationDelay: `${i * 2}s` }}
        />
      ))}
      <span className="absolute inset-0 rounded-full border border-white/15" />
      <span className="absolute inset-10 rounded-full border border-dashed border-white/20" />
      <span className="absolute inset-20 rounded-full border border-white/10" />

      {/* orbit with nodes */}
      <span className="absolute inset-0 animate-spin motion-reduce:animate-none [animation-duration:40s]">
        <span className="absolute left-1/2 top-0 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand shadow-[0_0_16px_var(--brand)]" />
        <span className="absolute bottom-[14%] right-[6%] size-2.5 rounded-full bg-white/80" />
        <span className="absolute bottom-[10%] left-[14%] size-2 rounded-full bg-brand/80" />
      </span>
      <span className="absolute inset-10 animate-spin motion-reduce:animate-none [animation-direction:reverse] [animation-duration:60s]">
        <span className="absolute left-1/2 top-0 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70" />
        <span className="absolute right-0 top-1/2 size-2 -translate-y-1/2 rounded-full bg-brand" />
      </span>

      <span className="relative flex size-28 items-center justify-center rounded-full border border-white/30 bg-brand/80 text-white shadow-[0_0_60px_color-mix(in_oklch,var(--brand)_70%,transparent)] xl:size-36">
        <Icon className="size-12 xl:size-16" strokeWidth={1.5} />
      </span>
    </div>
  );
}
