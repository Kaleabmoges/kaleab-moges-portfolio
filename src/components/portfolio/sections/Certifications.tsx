import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import {
  Award,
  Building2,
  ExternalLink,
  HeartHandshake,
  Mic,
  Terminal,
  Users,
  X,
} from "lucide-react";
import { Reveal } from "../Reveal";
import { TiltCard } from "../TiltCard";
import { SectionHeading } from "../SectionHeading";

type Cert = {
  icon: typeof Award;
  title: string;
  issuer: string;
  role?: string;
  year: string;
  link?: string;
};

const CERTS: Cert[] = [
  {
    icon: Terminal,
    title: "Certificate of Completion",
    issuer: "Hey Day",
    role: "Python Training",
    year: "Jan 2022",
    link: "https://drive.google.com/file/d/1LB0m8t3Qco8XDQfHRrYe9ffMAz6cF1k-/view",
  },
  {
    icon: Mic,
    title: "Certificate of Service",
    issuer: "Hawassa University",
    role: "The Speaker",
    year: "Sep 2022",
    link: "https://drive.google.com/file/d/1LDpl00O9yZadZNIEBNu8Dsr0UVX2k6py/view",
  },
  {
    icon: Users,
    title: "Certificate of Appreciation",
    issuer: "Hawassa University",
    role: "Class Representative",
    year: "Sep 2022",
    link: "https://drive.google.com/file/d/1LCGZv_Nm7Mt36II4sDAqmNhIo3fwXiUS/view",
  },
  {
    icon: HeartHandshake,
    title: "Certificate of Appreciation",
    issuer: "Hawassa University",
    role: "Kindeal Charity Club",
    year: "Sep 2022",
    link: "https://drive.google.com/file/d/1LNLkJsyg5JO-Qz5iIokah5LXxIaF8A4R/view",
  },
  {
    icon: Building2,
    title: "Certificate of Service",
    issuer: "Awash Bank",
    year: "Aug 2022",
  },
  {
    icon: Award,
    title: "Certificate of Completion",
    issuer: "Dereja",
    year: "Oct 2022",
    link: "https://drive.google.com/file/d/1wnBZ9_z47sLwrc8JjMfrlWpPs3KSpBGB/view",
  },
];

export function Certifications() {
  const [active, setActive] = useState<Cert | null>(null);

  return (
    <section id="certifications" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials &"
          highlight="continuous learning"
          description="A commitment to growth across finance, technology and professional development."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CERTS.map((c, i) => {
            const inner = (
              <>
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-gold/20 text-primary">
                  <c.icon className="h-6 w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-display text-base font-bold">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {c.issuer}
                    {c.role ? ` · ${c.role}` : ""}
                  </p>
                </div>
                {c.link ? (
                  <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                ) : null}
              </>
            );

            return (
              <Reveal key={`${c.title}-${c.issuer}-${c.role ?? ""}`} delay={i * 0.06}>
                <TiltCard className="group h-full">
                  {c.link ? (
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-elegant flex h-full w-full items-center gap-4 rounded-2xl p-5 text-left transition-colors hover:border-primary/40"
                    >
                      {inner}
                    </a>
                  ) : (
                    <button
                      onClick={() => setActive(c)}
                      className="card-elegant flex h-full w-full items-center gap-4 rounded-2xl p-5 text-left transition-colors hover:border-primary/40"
                    >
                      {inner}
                    </button>
                  )}
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[90] grid place-items-center bg-background/70 p-5 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong relative w-full max-w-md overflow-hidden rounded-3xl p-8 shadow-elegant"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-lg glass text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-primary to-gold text-primary-foreground shadow-glow">
                <active.icon className="h-8 w-8" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold">{active.title}</h3>
              <p className="mt-1 text-primary">
                {active.issuer}
                {active.role ? ` · ${active.role}` : ""}
              </p>
              <div className="mt-6 flex items-center gap-3 rounded-xl border border-dashed border-border p-4 text-sm text-muted-foreground">
                <Award className="h-5 w-5 text-gold" />
                Certificate awarded · {active.year}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                A verified credential reflecting hands-on training and demonstrated competency in
                this field.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
