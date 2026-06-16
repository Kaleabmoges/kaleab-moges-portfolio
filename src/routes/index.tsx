import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useSpring } from "motion/react";
import { Toaster } from "sonner";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/sections/Hero";
import { About } from "@/components/portfolio/sections/About";
import { Experience } from "@/components/portfolio/sections/Experience";
import { Leadership } from "@/components/portfolio/sections/Leadership";
import { Gallery } from "@/components/portfolio/sections/Gallery";
import { Skills } from "@/components/portfolio/sections/Skills";
import { Content } from "@/components/portfolio/sections/Content";
import { Education } from "@/components/portfolio/sections/Education";
import { Certifications } from "@/components/portfolio/sections/Certifications";
import { Contact } from "@/components/portfolio/sections/Contact";
import { Footer } from "@/components/portfolio/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kaleab Moges — Educator & Financial Markets Educator" },
      {
        name: "description",
        content:
          "Kaleab Moges — educator, economics graduate, youth leader and financial markets educator. 6+ years teaching, 500+ students mentored.",
      },
      { property: "og:title", content: "Kaleab Moges — Educator & Financial Markets Educator" },
      {
        property: "og:description",
        content:
          "Premium portfolio: education, leadership, financial literacy and youth empowerment.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <div className="relative min-h-screen bg-background">
      {/* scroll progress */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[101] h-1 origin-left bg-gradient-to-r from-primary via-chart-3 to-gold"
      />

      <CustomCursor />
      <Navbar />

      <main className="md:cursor-none">
        <Hero />
        <About />
        <Experience />
        <Leadership />
        <Gallery />
        <Skills />
        <Content />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}
