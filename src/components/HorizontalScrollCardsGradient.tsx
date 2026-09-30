// components/HorizontalCards.tsx
import React, { useRef } from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  id: string;
  gradient: string;
}

interface CardComponentProps extends CardProps {
  active: string;
  setActive: (id: string) => void;
}

const Card: React.FC<CardComponentProps> = ({
  title,
  description,
  imageSrc,
  id,
  active,
  gradient,
  setActive,
}) => {
  const handleActive = () => setActive(id);
  return (
    <div
      className="min-w-[397px] h-[480px] rounded-lg p-6 flex flex-col justify-end relative overflow-hidden border border-border hover:border-muted-foreground transition-colors duration-300 cursor-pointer"
      onClick={handleActive}
    >
      {/* Gradient overlay - positioned below image with z-[-1] */}
      <div
        className={`absolute inset-0 ${gradient} z-[-1] opacity-60 backdrop-blur-sm`}
      ></div>

      {/* Text content */}
      <div className="z-10 flex flex-col">
        {active === id && <div className={`w-12 h-1 mb-6 bg-primary`}></div>}
        <h2 className="text-[24px] font-bold text-foreground mb-4">{title}</h2>
        <p className="text-muted-foreground text-[18px]">{description}</p>
      </div>

      {/* Image - now has z-[1] to position above gradient but below text */}
      <div className="absolute top-0 right-0 overflow-hidden z-[1]">
        <Image
          src={imageSrc}
          alt={title}
          width={397}
          height={319}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
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
