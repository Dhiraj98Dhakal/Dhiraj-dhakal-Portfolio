import { motion } from "framer-motion";
import { Hammer } from "lucide-react";
import { projects } from "../data/projects";
import { profile } from "../data/profile";
import SectionHeading from "./ui/SectionHeading";

// Qualitative progress only — never a fabricated exact percentage.
const PROGRESS_FRACTION = 0.6;

export default function CurrentlyBuilding() {
  const billSathi = projects.find((p) => p.id === "billsathi");

  return (
    <section className="container-px mx-auto max-w-6xl py-24">
      <SectionHeading index={6} id="currently building" title="Currently Building" />

      <div className="mt-12 grid gap-6 md:grid-cols-[1.3fr_1fr]">
        {billSathi && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="card px-6 py-7 sm:px-8"
          >
            <div className="flex items-center gap-3">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
              >
                <Hammer size={18} />
              </span>
              <div>
                <h3 className="text-lg font-semibold" style={{ color: "var(--text)" }}>
                  {billSathi.title}
                </h3>
                <p className="text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--text-faint)" }}>
                  {billSathi.status}
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {billSathi.description}
            </p>

            <div className="mt-6">
              <div className="mb-2 flex items-center justify-between text-xs" style={{ color: "var(--text-faint)" }}>
                <span>Build progress</span>
                <span>In progress</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full" style={{ background: "var(--surface-hover)" }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${PROGRESS_FRACTION * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, var(--accent), var(--accent-2))" }}
                />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {billSathi.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md px-2 py-1 text-[11px]"
                  style={{ background: "var(--surface-hover)", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card h-fit px-6 py-6"
        >
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide" style={{ color: "var(--text)" }}>
            Currently Learning
          </h3>
          <div className="flex flex-wrap gap-2">
            {profile.currentlyLearning.map((item) => (
              <span
                key={item}
                className="rounded-full border px-3 py-1.5 text-xs"
                style={{ borderColor: "var(--border-c)", color: "var(--accent-2)", fontFamily: "var(--font-mono)" }}
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
