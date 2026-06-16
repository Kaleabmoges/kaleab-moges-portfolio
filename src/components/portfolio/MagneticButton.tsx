import { motion, useMotionValue, useSpring } from "motion/react";
import { type ReactNode, useRef } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  as?: "button" | "a";
  href?: string;
  download?: boolean;
};

/** Button that magnetically follows the cursor on hover. */
export function MagneticButton({
  children,
  className = "",
  onClick,
  as = "button",
  href,
  download,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 250, damping: 15 });
  const y = useSpring(useMotionValue(0), { stiffness: 250, damping: 15 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.35);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.35);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const MotionTag = as === "a" ? motion.a : motion.button;

  return (
    <MotionTag
      // @ts-expect-error ref union across a/button
      ref={ref}
      href={href}
      download={download}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x, y }}
      whileTap={{ scale: 0.96 }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
