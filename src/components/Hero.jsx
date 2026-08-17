import { motion } from "framer-motion";
import { ArrowDown, Download, Send } from "lucide-react";
import { profile } from "../data/profile";
import TerminalRotator from "./ui/TerminalRotator";
import ProfileImage from "./ui/ProfileImage";
import TopographyBackground from "./ui/TopographyBackground";
import MagneticButton from "./ui/MagneticButton";

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <TopographyBackground />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, var(--accent-soft), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="container-px relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-4"
          >
            {"// hello world"}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
          >
            Hi, I'm <span className="text-gradient">{profile.name}</span>.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-5"
          >
            <TerminalRotator roles={profile.roles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="mt-6 max-w-lg text-base sm:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <MagneticButton as="button" variant="primary" onClick={() => scrollTo("projects")}>
              View My Work
            </MagneticButton>
            <MagneticButton
              as="a"
              href={profile.resumeUrl}
              download
              variant="secondary"
              className="border"
            >
              <Download size={15} />
              Download CV
            </MagneticButton>
            <MagneticButton as="button" variant="ghost" onClick={() => scrollTo("contact")}>
              <Send size={15} />
              Let's Connect
            </MagneticButton>
          </motion.div>
        </div>

        <ProfileImage />
      </div>

      <motion.button
        onClick={() => scrollTo("about")}
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:flex"
        style={{ color: "var(--text-faint)" }}
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  );
}
