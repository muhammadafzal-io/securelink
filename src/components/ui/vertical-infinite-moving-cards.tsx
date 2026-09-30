"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const VerticalInfiniteMovingCards = ({
  items,
  direction = "up",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    description: string;
    name: string;
    src: string;
    flag?: string;
  }[];
  direction?: "up" | "down";
  speed?: "fast" | "normal" | "slow";
  className?: string;
  pauseOnHover?: boolean;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  const getFlagEmoji = (countryCode: string) => {
    return countryCode
      .toUpperCase()
      .replace(/./g, (char) =>
        String.fromCodePoint(127397 + char.charCodeAt(0))
      );
  };

  useEffect(() => {
    function getDirection() {
      if (containerRef.current) {
        if (direction === "up") {
          containerRef.current.style.setProperty(
            "--animation-direction",
            "forwards"
          );
        } else {
          containerRef.current.style.setProperty(
            "--animation-direction",
            "reverse"
          );
        }
      }
    }

    function getSpeed() {
      if (containerRef.current) {
        if (speed === "fast") {
          containerRef.current.style.setProperty("--animation-duration", "20s");
        } else if (speed === "normal") {
          containerRef.current.style.setProperty("--animation-duration", "40s");
        } else {
          containerRef.current.style.setProperty("--animation-duration", "80s");
        }
      }
    }

    function addAnimation() {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });

        getDirection();
        getSpeed();
        setStart(true);
      }
    }

    addAnimation();
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 h-full overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] dark:[mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex flex-col gap-4 py-4",
          start && "animate-scroll-vertical",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-full shrink-0 rounded-xl bg-card border border-border p-5 "
            key={idx}
          >
            <div
              aria-hidden="true"
              className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
            ></div>

            <div className="relative z-20 flex flex-row flex-nowrap items-center gap-2">
              <img
                src={item.src}
                alt={item.name}
                width={40}
                height={40}
                className="shrink-0 size-8 rounded-md"
              />

              <h4 className="flex items-center space-x-2 truncate text-lg font-medium text-foreground">
                <span>{item.name}</span>
                {item.flag && <span>{getFlagEmoji(item.flag)}</span>}
              </h4>
            </div>

            <p className="relative z-20 text-sm leading-[1.6] font-normal text-muted-foreground mt-3">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
