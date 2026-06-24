import { motion } from "motion/react";
import { Heart, LineChart, Users } from "lucide-react";
import { Reveal } from "../Reveal";
import { TiltCard } from "../TiltCard";
import { SectionHeading } from "../SectionHeading";
const charity1 = "/images/kindeal-charity-1.jpg";
const charity2 = "/images/kindeal-charity-2.jpg";
const trading1 = "/images/trading-students-1.jpg";
const trading2 = "/images/trading-students-2.jpg";

const PHOTOS = [
  {
    src: trading1.url,
    title: "Mentoring Trading Students",
    caption: "Hands-on sessions guiding students through live financial markets.",
    tag: "Trading",
    icon: LineChart,
  },
  {
    src: trading2.url,
    title: "Trading Study Group",
    caption: "Learning together — charts, strategy and real market practice.",
    tag: "Trading",
    icon: LineChart,
  },
  {
    src: charity1.url,
    title: "Talita Rise Up Outreach",
    caption: "Kindeal Charity Club members on the ground, supporting the community.",
    tag: "Community",
    icon: Heart,
  },
  {
    src: charity2.url,
    title: "Hands-on Community Service",
    caption: "Volunteering together to bring real change to young lives.",
    tag: "Community",
    icon: Heart,
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments that"
          highlight="matter"
          description="From mentoring trading students to serving communities with the Kindeal Charity Club — teaching, leading and giving back in action."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {PHOTOS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <TiltCard className="group h-full">
                <div className="card-elegant relative h-full overflow-hidden rounded-3xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={p.src}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full glass-strong px-3 py-1 text-xs font-medium text-primary">
                      <p.icon className="h-3.5 w-3.5" /> {p.tag}
                    </div>
                  </div>
                  <div className="relative -mt-12 p-6">
                    <h3 className="font-display text-xl font-bold">{p.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{p.caption}</p>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <motion.div className="card-elegant mt-6 flex flex-wrap items-center justify-center gap-3 rounded-2xl p-6 text-center">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-gold/20 text-primary">
              <Users className="h-5 w-5" />
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering students in the markets and serving communities with the{" "}
              <span className="font-semibold text-foreground">Kindeal Charity Club</span> — turning
              education into impact, one person at a time.
            </p>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
