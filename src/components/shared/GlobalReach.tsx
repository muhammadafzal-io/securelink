import Link from "next/link";
import { ArrowRight, Clock, Languages, Video } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const points = [
  {
    icon: Video,
    title: "Remote-first delivery",
    text: "Calls, shared boards, and regular demos, the same quality of collaboration whether you're next door or across an ocean.",
  },
  {
    icon: Clock,
    title: "Time-zone friendly",
    text: "We agree overlapping working hours and response times up front, so nothing stalls between time zones.",
  },
  {
    icon: Languages,
    title: "English & Arabic",
    text: "Websites and communication in both languages, with right-to-left layouts handled properly.",
  },
];

// Hub-and-spoke map: UAE at the centre, regions around it (angles in degrees).
const regions = [
  { label: "Europe", angle: -60 },
  { label: "Americas", angle: -10 },
  { label: "Asia", angle: 40 },
  { label: "Africa", angle: 120 },
  { label: "Middle East", angle: 190 },
  { label: "Oceania", angle: 240 },
];

const R = 150;
const C = 200;

function polar(angle: number, r: number) {
  const a = (angle * Math.PI) / 180;
  return { x: C + r * Math.cos(a), y: C + r * Math.sin(a) };
}

export function GlobalReach() {
  return (
    <section className="custom-container my-12 md:my-24">
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 overflow-hidden rounded-3xl border border-border bg-surface-elevated p-6 sm:p-10 lg:grid-cols-2 lg:gap-14 lg:p-14">
        <div className="relative z-[1]">
          <SectionHeading
            align="left"
            eyebrow="Global Reach"
            title="Based in the UAE."
            accent="Working worldwide."
            description="Secure Link is headquartered in the UAE and builds for clients wherever they are. Distance doesn't change how we work. It just changes the time on the clock."
          />
          <ul className="mt-8 space-y-5">
            {points.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand ring-1 ring-brand/25">
                  <Icon className="size-5" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-[15px] sm:text-[18px] font-semibold text-foreground">{title}</h3>
                  <p className="mt-0.5 text-[13px] sm:text-[15px] text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ul>
          <Link
            href="/contact-us"
            className="group mt-8 inline-flex items-center gap-2 text-[14px] sm:text-[16px] font-semibold text-brand"
          >
            Talk to our team
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-[460px]" aria-hidden="true">
          <svg viewBox="-50 0 500 400" className="w-full text-foreground" fill="none">
            {[60, 105, 150].map((r) => (
              <circle key={r} cx={C} cy={C} r={r} className="stroke-brand/25" strokeDasharray="3 6" />
            ))}
            {regions.map(({ label, angle }, i) => {
              const p = polar(angle, R);
              const lp = polar(angle, R + 28);
              return (
                <g key={label}>
                  <line x1={C} y1={C} x2={p.x} y2={p.y} className="stroke-brand/50" strokeWidth="1.5" strokeDasharray="4 5" />
                  <circle cx={p.x} cy={p.y} r="7" className="fill-brand" />
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r="7"
                    className="fill-brand/60 motion-safe:animate-ping"
                    style={{ transformOrigin: `${p.x}px ${p.y}px`, animationDuration: "3s", animationDelay: `${i * 0.5}s` }}
                  />
                  <text
                    x={lp.x}
                    y={lp.y}
                    textAnchor={Math.cos((angle * Math.PI) / 180) > 0.3 ? "start" : Math.cos((angle * Math.PI) / 180) < -0.3 ? "end" : "middle"}
                    dominantBaseline="middle"
                    className="fill-current text-[12px] font-semibold"
                  >
                    {label}
                  </text>
                </g>
              );
            })}
            <circle cx={C} cy={C} r="34" className="fill-brand" />
            <circle cx={C} cy={C} r="34" className="stroke-white/50" strokeWidth="2" />
            <text x={C} y={C} textAnchor="middle" dominantBaseline="middle" className="fill-white text-[16px] font-bold">
              UAE
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
