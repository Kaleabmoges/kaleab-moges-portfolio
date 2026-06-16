import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Briefcase, GraduationCap, Landmark, LineChart } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const ITEMS = [
  {
    icon: GraduationCap,
    role: "Educator & Academic Mentor",
    period: "2017 – Present",
    highlights: [
      "500+ students taught",
      "Local & Cambridge curriculum",
      "Lesson planning",
      "Academic mentoring",
      "Online & physical instruction",
    ],
  },
  {
    icon: Briefcase,
    role: "Co-Founder — Dream Tutorial Center",
    period: "2022 – 2023",
    highlights: [
      "Coordinated 30 tutors",
      "Served 200+ students",
      "Educational leadership",
      "Student support programs",
    ],
  },
  {
    icon: Landmark,
    role: "Customer Service Officer — Awash Bank",
    period: "Banking",
    highlights: ["Customer support", "Banking operations", "Financial services"],
  },
  {
    icon: LineChart,
    role: "Financial Markets Educator",
    period: "2024 – Present",
    highlights: [
      "100+ trainees",
      "Financial literacy",
      "Trading education",
      "Market analysis mentorship",
    ],
  },
];

function TimelineItem({ item, index }: { item: (typeof ITEMS)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const left = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex flex-col gap-4 md:flex-row md:items-center ${
        left ? "" : "md:flex-row-reverse"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, x: left ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="md:w-1/2"
      >
        <div className={`card-elegant rounded-2xl p-6 ${left ? "md:mr-10" : "md:ml-10"}`}>
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-gold/20 text-primary">
              <item.icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold leading-tight">{item.role}</h3>
              <span className="text-xs font-medium text-primary">{item.period}</span>
            </div>
          </div>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {item.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-gold" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* node */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="absolute left-4 top-6 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-gradient-to-br from-primary to-gold shadow-glow md:left-1/2 md:top-1/2 md:-translate-y-1/2"
      />
      <div className="hidden md:block md:w-1/2" />
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Experience"
          title="A journey of"
          highlight="impact"
          description="From peer tutoring to founding educational initiatives and training financial markets learners."
        />

        <div className="relative mt-20 space-y-12 md:space-y-16">
          {/* center line */}
          <div className="absolute left-4 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary/10 via-primary/40 to-gold/20 md:left-1/2" />
          {ITEMS.map((item, i) => (
            <TimelineItem key={item.role} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
