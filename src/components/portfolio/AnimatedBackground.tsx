/**
 * Site-wide animated background. Sits fixed behind all content so the
 * page never feels static while scrolling. Keeps the original deep, dark
 * tone — the motion comes from slow, low-opacity drifting glows rather
 * than bright washes. Pure CSS transforms + blur, cheap on the main thread.
 */
export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* deep base wash (matches the original static dark background) */}
      <div className="absolute inset-0 bg-background" />

      {/* drifting aurora glows — kept dim so the page stays dark */}
      <div className="animate-aurora absolute -left-40 top-[-10%] h-[42rem] w-[42rem] rounded-full bg-primary/[0.06] blur-[150px]" />
      <div className="animate-aurora absolute right-[-15%] top-[25%] h-[38rem] w-[38rem] rounded-full bg-gold/[0.05] blur-[150px] [animation-delay:4s]" />
      <div className="animate-aurora absolute left-[20%] top-[60%] h-[34rem] w-[34rem] rounded-full bg-chart-3/[0.06] blur-[150px] [animation-delay:8s]" />
      <div className="animate-aurora absolute right-[10%] bottom-[-10%] h-[36rem] w-[36rem] rounded-full bg-primary/[0.05] blur-[150px] [animation-delay:11s]" />

      {/* subtle moving grid sheen */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* dark vignette to preserve the original deep tone and keep text readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/80" />
    </div>
  );
}
