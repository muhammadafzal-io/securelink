// components/GridCards.tsx
import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  id: string;
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
  setActive,
}) => {
  const handleActive = () => setActive(id);
  return (
    <div
      className="h-[310px] w-full rounded-lg p-3 flex flex-col justify-between relative overflow-hidden bg-card border border-border hover:border-muted-foreground transition-colors duration-300 cursor-pointer"
      onClick={handleActive}
    >
      <div className="z-10">
        {active === id && <div className={`w-8 h-1 mb-2 bg-primary`}></div>}
        <h2 className="text-[14px] font-bold text-foreground mb-2">{title}</h2>
        <p className="text-[10px] text-muted-foreground">{description}</p>
      </div>
      <div className="absolute bottom-0 right-0 overflow-hidden">
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

const GridCards: React.FC<GridCardsProps> = ({ cards, active, setActive }) => {
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

export default GridCards;
