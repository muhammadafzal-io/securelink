interface IStakeholderCardsProps {
  stakeholders: { number: string; title: string; description: string }[];
  title: React.ReactNode
}
export default function StakeholderCards({
  stakeholders,
  title
}: IStakeholderCardsProps) {
  return (
    <div className="bg-background py-6 sm:py-16 px-4">
      <div className="w-full">
        {/* Header */}
        <div className="text-center mb-12">
          {title}
        </div>

        {/* Desktop/Tablet Layout - 2 columns */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 h-[600px]">
          {/* Left Column - 2 cards */}
          <div className="flex flex-col gap-6">
            {stakeholders.slice(0, 2).map((item, index) => (
              <div
                key={index}
                className="flex-1 p-8 rounded-2xl relative overflow-hidden"
                style={{
                  background: "#0D0D0D",
                  backdropFilter: "blur(20.2px)",
                }}
              >
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 opacity-60"
                  style={{
                    background:
                      "linear-gradient(331.11deg, #000000 12.09%, #5A5A5A 80.67%)",
                  }}
                ></div>

                {/* Content */}
                <div
                  className={`relative z-10 ${
                    index === 1 ? "text-center" : ""
                  }`}
                >
                  <div className="text-primary text-[14px] sm:text-[24px] font-medium mb-4">
                    {item.number}
                  </div>
                  <h3 className="text-foreground text-[16px] sm:text-[28px] font-bold mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-[12px] sm:text-[18px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - 1 tall card */}
          <div className="flex">
            <div
              className="flex-1 p-8 rounded-2xl relative overflow-hidden"
              style={{
                background: "#0D0D0D",
                backdropFilter: "blur(20.2px)",
              }}
            >
              {/* Gradient overlay */}
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  background:
                    "linear-gradient(331.11deg, #000000 12.09%, #5A5A5A 80.67%)",
                }}
              ></div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end">
                <div className="text-primary text-[14px] sm:text-[24px] font-medium mb-6">
                  {stakeholders[2].number}
                </div>
                <h3 className="text-foreground text-[16px] sm:text-[28px] font-bold mb-6">
                  {stakeholders[2].title}
                </h3>
                <p className="text-muted-foreground text-[12px] sm:text-[18px] leading-relaxed">
                  {stakeholders[2].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - 3 equal cards in column */}
        <div className="md:hidden flex flex-col gap-6">
          {stakeholders.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl relative overflow-hidden min-h-[200px]"
              style={{
                background: "#0D0D0D",
                backdropFilter: "blur(20.2px)",
              }}
            >
              {/* Gradient overlay */}
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  background:
                    "linear-gradient(331.11deg, #000000 12.09%, #5A5A5A 80.67%)",
                }}
              ></div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <div className="text-primary text-[14px] sm:text-[24px] font-medium mb-3">
                  {item.number}
                </div>
                <h3 className="text-foreground text-[16px] sm:text-[28px] font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-[12px] sm:text-[18px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
