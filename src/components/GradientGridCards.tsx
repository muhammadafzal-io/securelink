// components/GradientGridCards.tsx
import React from "react";
import type { LucideIcon } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  icon: LucideIcon;
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
  icon: Icon,
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
      {/* Gradient overlay - positioned below content with z-[-1] */}
      <div className={`absolute inset-0 ${gradient} z-[-1]`}></div>

      {/* Icon */}
      <div className="absolute top-4 right-4 z-[1] flex size-14 items-center justify-center rounded-xl bg-white/10">
        <Icon className="size-7 text-white" strokeWidth={1.5} />
      </div>

      {/* Text content — gradient backdrop is always dark, so text stays white regardless of site theme */}
      <div className="z-10 flex flex-col">
        {active === id && <div className={`w-12 h-1 mb-6 bg-brand`}></div>}
        <h2 className="text-[14px] font-bold text-white mb-4">{title}</h2>
        <p className="text-white/70 text-[10px]">{description}</p>
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
