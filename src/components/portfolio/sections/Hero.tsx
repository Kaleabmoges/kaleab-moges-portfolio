import { motion, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import portrait from "@/assets/kaleab-portrait.jpg";
import cvAsset from "@/assets/kaleab-moges-cv.pdf.asset.json";
import { useMounted } from "../useMounted";
import { ParticleField } from "../ParticleField";
import { Globe } from "../Globe";
import { Counter } from "../Counter";
import { MagneticButton } from "../MagneticButton";

const STATS = [
  { value: 6, suffix: "+", label: "Years Teaching" },
  { value: 500, suffix: "+", label: "Students Mentored" },
  { value: 200, suffix: "+", label: "Tutorial Center" },
  { value: 100, suffix: "+", label: "Financial Trainees" },
];

const ROLES = [
  "Educator",
  "Economics Graduate",
  "Youth Leader",
  "Entrepreneur",
  "Financial Markets Educator",
];

export function Hero() {
  const mounted = useMounted();
  const { scrollY } = useScroll();
  const yPortrait = useTransform(scrollY, [0, 600], [0, 80]);
  const yText = useTransform(scrollY, [0, 600], [0, -40]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  // mouse parallax
  const mx = useSpring(useMotionValue(0), { stiffness: 60, damping: 20 });
  const my = useSpring(useMotionValue(0), { stiffness: 60, damping: 20 });
  const handleMove = (e: React.MouseEvent) => {
    mx.set((e.clientX / window.innerWidth - 0.5) * 40);
    my.set((e.clientY / window.innerHeight - 0.5) * 40);
  };
  const globeX = useTransform(mx, (v) => v * 1.4);
  const globeY = useTransform(my, (v) => v * 1.4);

  return (
    <section
      id="hero"
      onMouseMove={handleMove}
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* aurora background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-aurora absolute -left-32 top-10 h-[40rem] w-[40rem] rounded-full bg-primary/20 blur-[120px]" />
        <div className="animate-aurora absolute -right-20 bottom-0 h-[36rem] w-[36rem] rounded-full bg-gold/15 blur-[120px] [animation-delay:3s]" />
        <div className="animate-aurora absolute left-1/3 top-1/3 h-[28rem] w-[28rem] rounded-full bg-chart-3/15 blur-[120px] [animation-delay:6s]" />
      </div>

      {mounted && (
        <ParticleField className="pointer-events-none absolute inset-0 -z-10 h-full w-full" />
      )}

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr]">
        {/* left: copy */}
        <motion.div style={{ y: yText, opacity }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-primary"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Educator · Economist · Changemaker
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            Kaleab <span className="text-gradient">Moges</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-5 flex flex-wrap gap-x-2 gap-y-1 text-sm font-medium text-muted-foreground sm:text-base"
          >
            {ROLES.map((r, i) => (
              <span key={r} className="inline-flex items-center gap-2">
                {i > 0 && <span className="text-primary/60">|</span>}
                {r}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80"
          >
            "I believe education is the most powerful tool for transforming lives, communities,
            and future generations."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <MagneticButton
              as="a"
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-chart-3 px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </MagneticButton>
            <MagneticButton
              as="a"
              href="#about"
              download
              className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-semibold text-foreground"
            >
              <Download className="h-4 w-4" /> Download CV
            </MagneticButton>
            <MagneticButton
              as="a"
              href="#experience"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/50"
            >
              View Portfolio
            </MagneticButton>
          </motion.div>

          {/* stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {STATS.map((s) => (
              <div key={s.label} className="card-elegant rounded-2xl p-4">
                <div className="font-display text-3xl font-bold text-gradient-gold">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* right: portrait + globe */}
        <motion.div style={{ y: yPortrait }} className="relative mx-auto w-full max-w-md">
          <motion.div style={{ x: globeX, y: globeY }} className="absolute inset-0 -z-10">
            {mounted && <Globe className="h-full w-full opacity-80" />}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ x: mx, y: my }}
            className="relative"
          >
            <div className="animate-float relative overflow-hidden rounded-[2rem] border border-white/10 shadow-elegant">
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <img
                src={portrait}
                alt="Portrait of Kaleab Moges"
                width={896}
                height={1152}
                className="h-full w-full object-cover"
              />
            </div>

            {/* floating glass chips */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="glass-strong absolute -left-6 top-12 rounded-2xl px-4 py-3 shadow-elegant"
            >
              <div className="text-xs text-muted-foreground">Teaching since</div>
              <div className="font-display text-lg font-bold">2017</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
              className="glass-strong absolute -right-4 bottom-16 rounded-2xl px-4 py-3 shadow-gold"
            >
              <div className="text-xs text-muted-foreground">Based in</div>
              <div className="font-display text-lg font-bold">Addis Ababa</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted-foreground md:flex"
      >
        Scroll
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.a>
    </section>
  );
}
