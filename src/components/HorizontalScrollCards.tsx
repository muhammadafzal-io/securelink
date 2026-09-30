// components/HorizontalScrollCards.tsx
import React, { useRef } from "react";
import type { LucideIcon } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  id: string;
}

interface CardComponentProps extends CardProps {
  active: string;
  setActive: (id: string) => void;
}

const Card: React.FC<CardComponentProps> = ({
  title,
  description,
  icon: Icon,
  id,
  active,
  setActive,
}) => {
  const handleActive = () => setActive(id);
  return (
    <div
      className="min-w-[397px] h-[480px] rounded-lg p-6 flex flex-col justify-between relative overflow-hidden bg-card border border-border hover:border-muted-foreground transition-colors duration-300 cursor-pointer"
      onClick={handleActive}
    >
      <div className="z-10">
        {active === id && <div className={`w-12 h-1 mb-6 bg-primary`}></div>}
        <h2 className="text-[24px] font-bold text-foreground mb-4">{title}</h2>
        <p className="text-muted-foreground text-[18px]">{description}</p>
      </div>
      <div className="absolute bottom-6 right-6 flex size-24 items-center justify-center rounded-2xl bg-brand/10">
        <Icon className="size-12 text-brand" strokeWidth={1.5} />
      </div>
    </div>
  );
};

interface HorizontalScrollProps {
  cards: CardProps[];
  active: string;
  setActive: (id: string) => void;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({
  cards,
  active,
  setActive,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right"): void => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">
      <div className="absolute top-1/2 left-4 z-20 -translate-y-1/2">
        <button
          onClick={() => scroll("left")}
          className="bg-muted hover:bg-accent p-3 rounded-full text-foreground"
          aria-label="Scroll left"
        >
          ←
        </button>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-2 py-8 w-[90%] ml-16 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {cards.map((card, index) => (
          <div key={index} className="snap-start">
            <Card {...card} active={active} setActive={setActive} />
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 right-4 z-20 -translate-y-1/2">
        <button
          onClick={() => scroll("right")}
          className="bg-muted hover:bg-accent p-3 rounded-full text-foreground"
          aria-label="Scroll right"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default HorizontalScroll;
