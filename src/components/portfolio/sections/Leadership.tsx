import { Crown, Megaphone, Star, Users } from "lucide-react";
import { Reveal } from "../Reveal";
import { TiltCard } from "../TiltCard";
import { SectionHeading } from "../SectionHeading";

const ROLES = [
  {
    icon: Crown,
    role: "Founder",
    org: "Real Economist Club",
    points: ["Led volunteer educators", "Supported 100+ students"],
  },
  {
    icon: Users,
    role: "President",
    org: "Kindeal Charity Club",
    points: ["Community service", "Student empowerment"],
  },
  {
    icon: Megaphone,
    role: "Speaker",
    org: "Student Council",
    points: ["Represented 1000+ students"],
  },
  {
    icon: Star,
    role: "Class Representative",
    org: "Academic Coordination",
    points: ["Academic coordination", "Student advocacy"],
  },
];

export function Leadership() {
  return (
    <section id="leadership" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Leadership"
          title="Leading from"
          highlight="the front"
          description="Building communities and amplifying student voices through service and advocacy."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ROLES.map((r, i) => (
            <Reveal key={r.role} delay={i * 0.08}>
              <TiltCard className="group h-full" >
                <div className="card-elegant relative h-full overflow-hidden rounded-2xl p-6">
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-xl transition-opacity group-hover:opacity-100" />
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary to-chart-3 text-primary-foreground shadow-glow">
                    <r.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{r.role}</h3>
                  <p className="text-sm font-medium text-primary">{r.org}</p>
                  <ul className="mt-4 space-y-2">
                    {r.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
