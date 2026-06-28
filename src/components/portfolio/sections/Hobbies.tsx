import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Dribbble, Music2, Pause, Play, Sparkles } from "lucide-react";
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

// Sacred Ethiopian Orthodox Zema (Geez chant) — audio only
const YARED_AUDIO_SRC = "/audio/st-yared-zema.mp3";

function fmt(t: number) {
  if (!isFinite(t)) return "0:00";
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function YaredPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onTime = () => setCurrent(a.currentTime);
    const onMeta = () => setDuration(a.duration);
    const onEnd = () => setPlaying(false);
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("loadedmetadata", onMeta);
    a.addEventListener("ended", onEnd);
    return () => {
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("loadedmetadata", onMeta);
      a.removeEventListener("ended", onEnd);
    };
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      void a.play();
      setPlaying(true);
    } else {
      a.pause();
      setPlaying(false);
    }
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const a = audioRef.current;
    if (!a) return;
    const t = Number(e.target.value);
    a.currentTime = t;
    setCurrent(t);
  };

  const pct = duration ? (current / duration) * 100 : 0;

  return (
    <div className="card-elegant relative overflow-hidden rounded-3xl p-6">
      <div className="absolute -left-12 -top-12 h-48 w-48 rounded-full bg-gradient-to-br from-gold/25 to-primary/15 blur-2xl" />
      <div className="relative flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-gold/20 to-primary/20 text-gold">
          <Music2 className="h-6 w-6" />
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Listen</div>
          <h3 className="font-display text-xl font-bold">St. Yared Zema</h3>
        </div>
      </div>

      <audio ref={audioRef} src={YARED_AUDIO_SRC} preload="metadata" />

      <div className="relative mt-5 flex items-center gap-4 rounded-2xl border border-border bg-secondary/40 p-4">
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause St. Yared Zema" : "Play St. Yared Zema"}
          className="group grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary to-chart-3 text-primary-foreground shadow-glow transition-transform hover:scale-110"
        >
          {playing ? (
            <Pause className="h-6 w-6" />
          ) : (
            <Play className="ml-0.5 h-6 w-6" />
          )}
        </button>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="truncate font-medium text-foreground">Sacred Geez Zema</span>
            <span className="tabular-nums">
              {fmt(current)} / {fmt(duration)}
            </span>
          </div>
          <div className="relative mt-2">
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-foreground/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary via-chart-3 to-gold transition-[width]"
                style={{ width: `${pct}%` }}
              />
            </div>
            <input
              type="range"
              min={0}
              max={duration || 0}
              step={0.1}
              value={current}
              onChange={seek}
              aria-label="Seek audio"
              className="absolute inset-0 h-1.5 w-full cursor-pointer opacity-0"
            />
          </div>
        </div>
      </div>
      <p className="relative mt-3 text-xs text-muted-foreground/80">
        Sacred Ethiopian Orthodox Zema attributed to Saint Yared — press play to listen.
      </p>
    </div>
  );
}


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
          <div className="mt-6">
            <YaredPlayer />
          </div>
        </Reveal>

        <Reveal delay={0.25}>
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
