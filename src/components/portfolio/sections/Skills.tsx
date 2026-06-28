import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { BookOpen, Briefcase, Cpu, Users } from "lucide-react";
import { Reveal } from "../Reveal";
import { TiltCard } from "../TiltCard";
import { SectionHeading } from "../SectionHeading";

const CATEGORIES = [
  {
    icon: BookOpen,
    name: "Education",
    score: 95,
    skills: ["Teaching", "Mentoring", "Curriculum Support", "Student Development"],
  },
  {
    icon: Users,
    name: "Leadership",
    score: 90,
    skills: ["Public Speaking", "Team Management", "Community Engagement"],
  },
  {
    icon: Cpu,
    name: "Technology",
    score: 82,
    skills: ["Web Development", "Cybersecurity", "AI Tools", "Digital Literacy"],
  },
  {
    icon: Briefcase,
    name: "Business",
    score: 88,
    skills: ["Economics", "Entrepreneurship", "Financial Literacy", "Market Analysis"],
  },
];

function Radial({ score }: { score: number }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true });
  const R = 42;
  const C = 2 * Math.PI * R;

  return (
    <svg ref={ref} viewBox="0 0 100 100" className="h-24 w-24 -rotate-90">
      <circle cx="50" cy="50" r={R} fill="none" stroke="var(--muted)" strokeWidth="8" />
      <motion.circle
        cx="50"
        cy="50"
        r={R}
        fill="none"
        stroke="url(#skillGrad)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={C}
        initial={{ strokeDashoffset: C }}
        animate={inView ? { strokeDashoffset: C - (C * score) / 100 } : {}}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      />
      <defs>
        <linearGradient id="skillGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.78 0.13 195)" />
          <stop offset="100%" stopColor="oklch(0.82 0.13 78)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Skills"
          title="A multidisciplinary"
          highlight="toolkit"
          description="Blending education, leadership, technology and business into real-world impact."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08}>
              <TiltCard className="group h-full">
                <div className="card-elegant flex h-full flex-col items-center rounded-2xl p-6 text-center">
                  <div className="relative grid place-items-center">
                    <Radial score={c.score} />
                    <div className="absolute flex flex-col items-center">
                      <c.icon className="h-5 w-5 text-primary" />
                      <span className="mt-0.5 font-display text-sm font-bold">{c.score}%</span>
                    </div>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">{c.name}</h3>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {c.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
