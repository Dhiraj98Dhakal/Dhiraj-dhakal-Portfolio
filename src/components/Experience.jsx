import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "../data/experience";
import SectionHeading from "./ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="container-px mx-auto max-w-6xl py-24">
      <SectionHeading index={4} id="experience" title="Experience" />

      <div className="mt-12 space-y-5">
        {experience.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="card px-6 py-6 sm:px-8 sm:py-7"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                >
                  <Briefcase size={16} />
                </span>
                <div>
                  <h3 className="text-base font-semibold" style={{ color: "var(--text)" }}>
                    {item.role}
                  </h3>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                    {item.org}
                  </p>
                </div>
              </div>
              <span
                className="rounded-full px-3 py-1 text-xs"
                style={{
                  background: "var(--surface-hover)",
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {item.period}
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {item.summary}
            </p>

            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {item.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2 text-sm"
                  style={{ color: "var(--text-muted)" }}
                >
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full"
                    style={{ background: "var(--accent-2)" }}
                  />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
