/**
 * Site-wide animated background. Sits fixed behind all content so the
 * page never feels static while scrolling. Pure CSS transforms + blur,
 * so it stays cheap on the main thread.
 */
export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base wash */}
      <div className="absolute inset-0 bg-background" />

      {/* drifting aurora blobs */}
      <div className="animate-aurora absolute -left-40 top-[-10%] h-[42rem] w-[42rem] rounded-full bg-primary/12 blur-[130px]" />
      <div className="animate-aurora absolute right-[-15%] top-[25%] h-[38rem] w-[38rem] rounded-full bg-gold/10 blur-[130px] [animation-delay:4s]" />
      <div className="animate-aurora absolute left-[20%] top-[60%] h-[34rem] w-[34rem] rounded-full bg-chart-3/12 blur-[130px] [animation-delay:8s]" />
      <div className="animate-aurora absolute right-[10%] bottom-[-10%] h-[36rem] w-[36rem] rounded-full bg-primary/10 blur-[130px] [animation-delay:11s]" />

      {/* subtle moving grid sheen */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* vignette to keep text readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />
    </div>
  );
}
