import { animate, useInView, useMotionValue } from "motion/react";
import { useEffect, useRef, useState } from "react";

type CounterProps = {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
};

/** Counts up from 0 to `to` when scrolled into view. */
export function Counter({ to, suffix = "", prefix = "", duration = 2 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration, count]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}
