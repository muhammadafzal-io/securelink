interface IProbleCardsInterface {
  problems:{
    icon:any
    title:string
    subtitle:string
  }[]
}

export default function ProblemCards({problems}:IProbleCardsInterface) {

  return (
    <div className="relative bg-background py-12 px-4 overflow-hidden">
      {/* Left fade overlay */}
      <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>

      {/* Right fade overlay */}
      <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

      {/* Cards container */}
      <div className="flex justify-center items-center gap-4 max-w-6xl mx-auto">
        <div className={`grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-${problems.length} gap-4 w-full items-center`}>
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 rounded-lg text-center min-h-[160px]"
                style={{
                  border: "1px solid #252525",
                  background: "#0F0F0F",
                }}
              >
                <div className="mb-4 p-3 rounded-lg bg-surface-muted">
                  <IconComponent className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-foreground font-medium text-[12px] sm:text-[20px] mb-1">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground text-[12px] sm:text-[20px]">
                  {problem.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
