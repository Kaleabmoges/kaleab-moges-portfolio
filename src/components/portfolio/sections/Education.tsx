import { GraduationCap } from "lucide-react";
import { Reveal } from "../Reveal";
import { TiltCard } from "../TiltCard";
import { SectionHeading } from "../SectionHeading";

const SCHOOLS = [
  {
    school: "Addis Ababa University",
    degree: "Master of Business Administration",
    detail: "Expected Graduation: 2027",
    status: "In Progress",
  },
  {
    school: "Hawassa University",
    degree: "Bachelor of Arts in Economics",
    detail: "CGPA: 3.63 · Graduated September 2021",
    status: "Completed",
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-28">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading eyebrow="Education" title="Academic" highlight="foundation" />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {SCHOOLS.map((s, i) => (
            <Reveal key={s.school} delay={i * 0.1}>
              <TiltCard className="group h-full">
                <div className="card-elegant flex h-full flex-col rounded-2xl p-7">
                  <div className="flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-gold/20 text-primary">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary">
                      {s.status}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{s.school}</h3>
                  <p className="mt-1 text-base font-medium text-foreground/85">{s.degree}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{s.detail}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
