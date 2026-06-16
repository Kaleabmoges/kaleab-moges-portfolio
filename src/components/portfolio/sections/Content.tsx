import { ExternalLink, LineChart, Play, Youtube } from "lucide-react";
import { Reveal } from "../Reveal";
import { TiltCard } from "../TiltCard";
import { Counter } from "../Counter";
import { SectionHeading } from "../SectionHeading";
import { MagneticButton } from "../MagneticButton";
import { BROKERS } from "../socials";

const CHANNELS = [
  {
    platform: "YouTube",
    name: "KB Tech",
    desc: "Technology, tutorials & digital skills",
    metric: 12,
    metricLabel: "K+ Views",
    accent: "from-chart-4/30 to-destructive/20",
  },
  {
    platform: "YouTube",
    name: "Kaleab Moges",
    desc: "Education, economics & personal growth",
    metric: 8,
    metricLabel: "K+ Views",
    accent: "from-primary/30 to-chart-3/20",
  },
];

const TIKTOK = ["Business", "Trading", "Technology", "Personal Development"];

export function Content() {
  return (
    <section id="content" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Content Creation"
          title="Teaching beyond"
          highlight="the classroom"
          description="Reaching thousands through video content across education, technology and finance."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {CHANNELS.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.1}>
              <TiltCard className="group h-full">
                <div className="card-elegant relative h-full overflow-hidden rounded-2xl p-6">
                  <div
                    className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${c.accent} blur-2xl`}
                  />
                  <div className="relative flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="grid h-12 w-12 place-items-center rounded-xl bg-destructive/15 text-destructive">
                        <Youtube className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-widest text-muted-foreground">
                          {c.platform}
                        </div>
                        <h3 className="font-display text-xl font-bold">{c.name}</h3>
                      </div>
                    </div>
                    <Play className="h-5 w-5 text-primary transition-transform group-hover:scale-125" />
                  </div>
                  <p className="relative mt-4 text-sm text-muted-foreground">{c.desc}</p>
                  <div className="relative mt-6 font-display text-3xl font-bold text-gradient-gold">
                    <Counter to={c.metric} suffix={c.metricLabel} />
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="card-elegant mt-6 rounded-2xl p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  TikTok
                </div>
                <h3 className="font-display text-xl font-bold">Short-form education</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {TIKTOK.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-4 py-1.5 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
