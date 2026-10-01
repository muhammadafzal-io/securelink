"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, MoveUpRight, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type StackedCarouselItem = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  href?: string;
};

interface StackedCarouselProps {
  items: StackedCarouselItem[];
}

// Shortest signed distance between two indices on a circular array,
// keeps exactly one item centered, one to each side, regardless of count.
function cyclicOffset(index: number, active: number, length: number) {
  let diff = index - active;
  if (diff > length / 2) diff -= length;
  if (diff < -length / 2) diff += length;
  return diff;
}

const AUTOPLAY_MS = 4500;

export function StackedCarousel({ items }: StackedCarouselProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const length = items.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = (dir: 1 | -1) => {
    setActive((prev) => (prev + dir + length) % length);
  };

  useEffect(() => {
    if (paused || length <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Depending on `active` means any manual navigation (click, arrow, dot)
    // restarts this timer, so the carousel doesn't jump again moments
    // after someone just picked a card themselves.
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % length);
    }, AUTOPLAY_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, length, active]);

  return (
    <div
      className="w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative h-[440px] sm:h-[480px] w-full overflow-hidden">
        {items.map((item, index) => {
          const offset = cyclicOffset(index, active, length);
          if (Math.abs(offset) > 2) return null;
          const isActive = offset === 0;

          return (
            <motion.div
              key={item.id}
              className="absolute left-1/2 top-1/2 w-[280px] sm:w-[400px]"
              initial={false}
              animate={{
                x: `calc(-50% + ${offset * 78}%)`,
                y: "-50%",
                scale: isActive ? 1 : Math.abs(offset) === 1 ? 0.86 : 0.74,
                opacity: isActive ? 1 : Math.abs(offset) === 1 ? 0.45 : 0.2,
                zIndex: 30 - Math.abs(offset) * 10,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              onClick={() => !isActive && setActive(index)}
            >
              {isActive && (
                <div
                  aria-hidden="true"
                  className="absolute -inset-10 -z-10 rounded-full blur-3xl opacity-60"
                  style={{
                    background:
                      "radial-gradient(closest-side, color-mix(in oklch, var(--brand) 45%, transparent), transparent)",
                  }}
                />
              )}
              <div
                className={cn(
                  "rounded-2xl border bg-neutral-950 px-6 py-7 sm:px-8 sm:py-8 shadow-2xl transition-colors",
                  isActive
                    ? "border-brand/40 cursor-default"
                    : "border-white/10 cursor-pointer"
                )}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-brand/15">
                    <item.icon className="size-5 text-brand" strokeWidth={1.75} />
                  </span>
                  <h3 className="text-white text-[18px] sm:text-[22px] font-semibold">
                    {item.title}
                  </h3>
                </div>
                <p className="text-neutral-400 text-[12px] sm:text-[14px] mb-5">
                  {item.description}
                </p>
                <div className="space-y-2.5">
                  {item.features.map((feature) => (
                    <div
                      key={feature}
                      className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[12px] sm:text-[14px] text-neutral-200"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
                {isActive && item.href && (
                  <Link
                    href={item.href}
                    className="group mt-5 inline-flex items-center gap-2 text-[12px] sm:text-[14px] font-medium text-brand hover:text-brand/80 transition-colors"
                  >
                    Explore {item.title}
                    <MoveUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </Link>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-6 mt-6">
        <button
          onClick={() => go(-1)}
          aria-label="Previous"
          className="flex size-10 items-center justify-center rounded-full border border-border text-foreground hover:bg-muted transition-colors"
        >
          <ChevronLeft className="size-5" />
        </button>

        <div className="flex items-center gap-2">
          {items.map((item, index) => (
            <button
              key={item.id}
              aria-label={`Show ${item.title}`}
              onClick={() => setActive(index)}
              className={cn(
                "size-2 rounded-full transition-all",
                index === active ? "w-6 bg-brand" : "bg-muted-foreground/30"
              )}
            />
          ))}
        </div>

        <button
          onClick={() => go(1)}
          aria-label="Next"
          className="flex size-10 items-center justify-center rounded-full border border-border text-foreground hover:bg-muted transition-colors"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
