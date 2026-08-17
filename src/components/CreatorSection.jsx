import { motion } from "framer-motion";
import { Github, Instagram, Facebook, Video } from "lucide-react";
import { socials } from "../config/socials";
import SectionHeading from "./ui/SectionHeading";

const TOPICS = [
  "Tech tips",
  "Computer troubleshooting",
  "Software tutorials",
  "Product reviews",
  "Digital content",
  "Social media reels",
];

const SOCIAL_LINKS = [
  { key: "github", label: "GitHub", icon: Github, url: socials.github },
  { key: "instagram", label: "Instagram", icon: Instagram, url: socials.instagram },
  { key: "facebook", label: "Facebook", icon: Facebook, url: socials.facebook },
];

export default function CreatorSection() {
  return (
    <section className="container-px mx-auto max-w-6xl py-24">
      <div className="card grid gap-10 overflow-hidden px-6 py-10 sm:px-10 sm:py-12 md:grid-cols-[1fr_auto]">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <Video size={16} style={{ color: "var(--accent-2)" }} />
            <span className="eyebrow">{"// creator mode"}</span>
          </div>
          <h2
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
            style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
          >
            Creating With Technology
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed sm:text-base" style={{ color: "var(--text-muted)" }}>
            Alongside development, I make technology-related content — from quick tech tips and
            troubleshooting walkthroughs to product reviews and short-form social content.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {TOPICS.map((topic) => (
              <span
                key={topic}
                className="rounded-full border px-3 py-1.5 text-xs"
                style={{ borderColor: "var(--border-c)", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-start gap-3 md:flex-col md:items-end md:justify-center"
        >
          {SOCIAL_LINKS.filter((s) => s.url && s.url !== "#").map((s) => (
            <a
              key={s.key}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="flex h-11 w-11 items-center justify-center rounded-full border transition-colors hover:opacity-80"
              style={{ borderColor: "var(--border-c)", color: "var(--text)" }}
            >
              <s.icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
