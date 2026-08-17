import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";
import SectionHeading from "./ui/SectionHeading";

const LEVEL_STYLE = {
  "Working With": { color: "var(--accent)", bg: "var(--accent-soft)" },
  Familiar: { color: "var(--text-muted)", bg: "var(--surface-hover)" },
  Learning: { color: "var(--accent-2)", bg: "var(--accent-2-soft)" },
};

export default function Skills() {
  return (
    <section id="skills" className="container-px mx-auto max-w-6xl py-24">
      <SectionHeading
        index={2}
        id="skills"
        title="Skills & Tools"
        description="Technologies I'm actively working with, and a few I'm still leveling up on."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
            className="card px-6 py-6"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide" style={{ color: "var(--text)" }}>
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => {
                const style = LEVEL_STYLE[item.level];
                return (
                  <span
                    key={item.name}
                    title={item.level}
                    className="rounded-full border px-3 py-1.5 text-xs font-medium"
                    style={{
                      color: style.color,
                      background: style.bg,
                      borderColor: "var(--border-c)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {item.name}
                  </span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
