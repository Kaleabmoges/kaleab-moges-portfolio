import { motion } from "motion/react";
import { Dribbble, Music2, Sparkles } from "lucide-react";
import { Reveal } from "../Reveal";
import { TiltCard } from "../TiltCard";
import { SectionHeading } from "../SectionHeading";

const INTERESTS = [
  {
    icon: Dribbble,
    title: "Playing Basketball",
    desc: "On the court for the teamwork, discipline and energy — a passion that keeps me sharp on and off the game.",
    accent: "from-primary/25 to-chart-3/15",
  },
  {
    icon: Music2,
    title: "St. Yared Melodies",
    desc: "An admirer and student of the sacred Ethiopian Orthodox Zema of Saint Yared — timeless melodies rooted in faith and heritage.",
    accent: "from-gold/25 to-primary/15",
  },
];

export function Hobbies() {
  return (
    <section id="hobbies" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Beyond Work"
          title="Hobbies &"
          highlight="interests"
          description="What I love outside the classroom and the markets — keeping balance through sport, culture and faith."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {INTERESTS.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.1}>
              <TiltCard className="group h-full">
                <div className="card-elegant relative h-full overflow-hidden rounded-3xl p-7">
                  <div
                    className={`absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gradient-to-br ${it.accent} blur-2xl`}
                  />
                  <div className="relative flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary to-chart-3 text-primary-foreground shadow-glow">
                      <it.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-xl font-bold">{it.title}</h3>
                  </div>
                  <p className="relative mt-4 text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <motion.div className="card-elegant mt-6 flex flex-wrap items-center justify-center gap-3 rounded-2xl p-6 text-center">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-gold/20 to-primary/20 text-gold">
              <Sparkles className="h-5 w-5" />
            </div>
            <p className="text-sm text-muted-foreground">
              Curiosity beyond the desk — sport for discipline, and{" "}
              <span className="font-semibold text-foreground">St. Yared&apos;s melodies</span> for the
              soul.
            </p>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
