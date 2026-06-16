import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";

/** Dynamic cursor: a precise dot plus a lagging glow ring. */
export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 180, damping: 18 });
  const ringY = useSpring(y, { stiffness: 180, damping: 18 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="absolute -ml-5 -mt-5 h-10 w-10 rounded-full border border-primary/50"
      />
      <motion.div
        style={{ x, y }}
        className="absolute -ml-1 -mt-1 h-2 w-2 rounded-full bg-primary"
      />
    </div>
  );
}
