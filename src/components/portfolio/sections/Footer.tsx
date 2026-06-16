import { motion } from "motion/react";
import { SOCIALS } from "../socials";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:flex-row">
        <div className="flex items-center gap-2 font-display font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-gold text-primary-foreground">
            K
          </span>
          Kaleab Moges
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {SOCIALS.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              whileHover={{ y: -3, scale: 1.1 }}
              className="grid h-10 w-10 place-items-center rounded-lg glass text-muted-foreground transition-colors hover:text-primary"
            >
              <s.icon className="h-4.5 w-4.5" style={{ width: 18, height: 18 }} />
            </motion.a>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Kaleab Moges · Empowering through education.
        </p>
      </div>
    </footer>
  );
}
