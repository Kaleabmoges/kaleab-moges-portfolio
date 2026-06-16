import { motion } from "motion/react";
import { useState } from "react";
import { Linkedin, Mail, MapPin, Phone, Send, Youtube } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { MagneticButton } from "../MagneticButton";

const DETAILS = [
  { icon: MapPin, label: "Location", value: "Addis Ababa, Ethiopia", href: undefined },
  { icon: Phone, label: "Phone", value: "+251 987 076 125", href: "tel:+251987076125" },
  { icon: Mail, label: "Email", value: "kaleabmoges.eth@gmail.com", href: "mailto:kaleabmoges.eth@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "Connect with me", href: "#" },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent!", { description: "Thanks for reaching out — I'll reply soon." });
    }, 900);
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          highlight="meaningful"
          description="Whether it's education, mentorship or collaboration — I'd love to hear from you."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* details + map */}
          <div className="space-y-4">
            {DETAILS.map((d, i) => (
              <Reveal key={d.label} delay={i * 0.06}>
                <a
                  href={d.href}
                  className="card-elegant flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-primary/40"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-gold/20 text-primary">
                    <d.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">
                      {d.label}
                    </div>
                    <div className="font-medium">{d.value}</div>
                  </div>
                </a>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <div className="card-elegant overflow-hidden rounded-2xl">
                <iframe
                  title="Addis Ababa map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=38.68%2C8.95%2C38.86%2C9.06&layer=mapnik&marker=9.005%2C38.763"
                  className="h-56 w-full grayscale-[0.3] [filter:invert(0.9)_hue-rotate(180deg)]"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>

          {/* form */}
          <Reveal delay={0.15}>
            <form onSubmit={handleSubmit} className="card-elegant rounded-3xl p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Your name" />
                <Field label="Email" name="email" type="email" placeholder="you@email.com" />
              </div>
              <div className="mt-4">
                <Field label="Subject" name="subject" placeholder="What's this about?" />
              </div>
              <div className="mt-4">
                <label className="mb-1.5 block text-sm font-medium text-muted-foreground">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Tell me more..."
                  className="w-full resize-none rounded-xl border border-input bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
              <MagneticButton
                as="button"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-chart-3 px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow disabled:opacity-60"
              >
                {sending ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4" />
              </MagneticButton>
            </form>
          </Reveal>
        </div>

        <div className="mt-12 flex justify-center gap-3">
          {[Youtube, Linkedin, Mail].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ y: -4, scale: 1.1 }}
              className="grid h-12 w-12 place-items-center rounded-xl glass text-muted-foreground transition-colors hover:text-primary"
            >
              <Icon className="h-5 w-5" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-muted-foreground">{label}</label>
      <input
        required
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}
