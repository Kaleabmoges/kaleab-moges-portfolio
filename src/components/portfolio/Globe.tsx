import { useEffect, useRef } from "react";

/** Rotating 3D wireframe globe rendered on canvas — lightweight, no WebGL.
 *  Pauses when offscreen / tab hidden and respects reduced-motion. */
export function Globe({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(devicePixelRatio || 1, 2);
    const size = canvas.offsetWidth;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const radius = size * 0.4;

    const N = 420;
    const pts: { x: number; y: number; z: number }[] = [];
    for (let i = 0; i < N; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / N);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      pts.push({
        x: Math.sin(phi) * Math.cos(theta),
        y: Math.sin(phi) * Math.sin(theta),
        z: Math.cos(phi),
      });
    }

    let angle = 0;
    const drawFrame = () => {
      ctx.clearRect(0, 0, size, size);
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const tilt = 0.42;

      for (const p of pts) {
        let x = p.x * cos - p.z * sin;
        let z = p.x * sin + p.z * cos;
        const y = p.y * Math.cos(tilt) - z * Math.sin(tilt);
        z = p.y * Math.sin(tilt) + z * Math.cos(tilt);

        const scale = 0.6 + (z + 1) * 0.32;
        const sx = cx + x * radius;
        const sy = cy + y * radius;
        const depth = (z + 1) / 2;

        ctx.beginPath();
        ctx.arc(sx, sy, scale * 1.5, 0, Math.PI * 2);
        const hue = x > 0 ? "110, 231, 220" : "245, 200, 120";
        ctx.fillStyle = `rgba(${hue}, ${0.15 + depth * 0.65})`;
        ctx.fill();
      }

      const grad = ctx.createRadialGradient(cx, cy, radius * 0.6, cx, cy, radius * 1.25);
      grad.addColorStop(0, "rgba(110, 231, 220, 0.08)");
      grad.addColorStop(1, "rgba(110, 231, 220, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, size, size);
    };

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      drawFrame();
      return;
    }

    let raf = 0;
    let visible = true;

    const render = () => {
      angle += 0.0035;
      drawFrame();
      raf = requestAnimationFrame(render);
    };
    const start = () => {
      if (!raf && visible && !document.hidden) render();
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
        else stop();
      },
      { threshold: 0 },
    );
    io.observe(canvas);

    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    start();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden />;
}
