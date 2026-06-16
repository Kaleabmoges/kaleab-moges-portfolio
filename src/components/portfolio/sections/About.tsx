import { GraduationCap, HeartHandshake, Lightbulb, Rocket } from "lucide-react";
import { Reveal } from "../Reveal";
import { TiltCard } from "../TiltCard";
import { SectionHeading } from "../SectionHeading";

const CARDS = [
  { icon: GraduationCap, title: "500+ Students Taught", text: "Across local & Cambridge curricula" },
  { icon: HeartHandshake, title: "Community Projects", text: "Charity & youth empowerment led" },
  { icon: Lightbulb, title: "Financial Literacy", text: "Training the next generation of traders" },
  { icon: Rocket, title: "Founder Mindset", text: "Built educational initiatives from scratch" },
];

const STORY = [
  "My teaching journey began while I was a Grade 11 student when classmates regularly sought my help to understand academic concepts. What started as voluntary peer tutoring evolved into a lifelong passion for education, mentorship, and youth development.",
  "Over the years, I have taught more than 500 students across different educational levels, founded educational initiatives, trained learners in financial literacy, led community projects, and built platforms focused on empowering young people through knowledge and practical skills.",
  "I aspire to become a highly impactful university educator and mentor who inspires future generations to think critically, solve problems, and create positive change.",
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="About Me"
          title="The story behind"
          highlight="the educator"
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            {STORY.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-lg leading-relaxed text-foreground/85">{p}</p>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {CARDS.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <TiltCard className="group h-full">
                  <div className="card-elegant flex h-full flex-col gap-3 rounded-2xl p-5">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-gold/20 text-primary">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div className="font-display text-base font-bold">{c.title}</div>
                    <div className="text-sm text-muted-foreground">{c.text}</div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
