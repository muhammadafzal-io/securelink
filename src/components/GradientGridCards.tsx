// components/GradientGridCards.tsx
import React from "react";
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
      className="h-[310px] w-full rounded-lg p-6 flex flex-col justify-end relative overflow-hidden border border-border hover:border-muted-foreground transition-colors duration-300 cursor-pointer"
      onClick={handleActive}
    >
      {/* Gradient overlay - positioned below image with z-[-1] */}
      <div
        className={`absolute inset-0 ${gradient} z-[-1] opacity-60 backdrop-blur-sm`}
      ></div>

      {/* Text content */}
      <div className="z-10 flex flex-col">
        {active === id && <div className={`w-12 h-1 mb-6 bg-primary`}></div>}
        <h2 className="text-[14px] font-bold text-foreground mb-4">{title}</h2>
        <p className="text-muted-foreground text-[10px]">{description}</p>
      </div>

      {/* Image - now has z-[1] to position above gradient but below text */}
      <div className="absolute top-0 right-0 overflow-hidden z-[1]">
        <Image
          src={imageSrc}
          alt={title}
          width={250}
          height={150}
          sizes="100%"
          className="object-cover"
        />
      </div>
    </div>
  );
};

interface GridCardsProps {
  cards: CardProps[];
  active: string;
  setActive: (id: string) => void;
}

const GradientGridCards: React.FC<GridCardsProps> = ({
  cards,
  active,
  setActive,
}) => {
  return (
    <div className="w-full py-4">
      <div className="grid grid-cols-2 gap-2 w-full">
        {cards.map((card, index) => (
          <div key={index}>
            <Card {...card} active={active} setActive={setActive} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GradientGridCards;
