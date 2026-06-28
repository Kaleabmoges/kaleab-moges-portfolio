import { motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";
import { type ReactNode, useRef } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  glare?: boolean;
};

/** 3D tilt + mouse-follow glare card. */
export function TiltCard({ children, className = "", glare = true }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 });
  const ry = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 });
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    ry.set((px - 0.5) * 16);
    rx.set((0.5 - py) * 16);
    gx.set(px * 100);
    gy.set(py * 100);
  };

  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  const glareBg = useMotionTemplate`radial-gradient(circle at ${gx}% ${gy}%, color-mix(in oklch, var(--primary) 22%, transparent), transparent 55%)`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d", transformPerspective: 900 }}
      className={`relative ${className}`}
    >
      {glare && (
        <motion.div
          aria-hidden
          style={{ background: glareBg }}
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      )}
      {children}
    </motion.div>
  );
}
