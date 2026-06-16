import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, highlight, description, className = "" }: Props) {
  return (
    <div className={`mx-auto max-w-2xl text-center ${className}`}>
      <Reveal>
        <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-5 text-4xl font-extrabold sm:text-5xl">
          {title} {highlight && <span className="text-gradient">{highlight}</span>}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
