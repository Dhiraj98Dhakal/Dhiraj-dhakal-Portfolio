import { motion } from "framer-motion";
import { GraduationCap, Sparkles } from "lucide-react";
import { profile } from "../data/profile";
import SectionHeading from "./ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="container-px mx-auto max-w-6xl py-24">
      <SectionHeading index={1} id="about" title="About Me" />

      <div className="mt-12 grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="card flex items-center gap-3 px-5 py-4"
          >
            <GraduationCap size={20} style={{ color: "var(--accent)" }} />
            <div>
              <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
                BICTE — {profile.semester}
              </p>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                {profile.semesterStatus} · Tribhuvan University, {profile.location}
              </p>
            </div>
          </motion.div>

          <div className="mt-6 space-y-4">
            {profile.about.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="text-base leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card h-fit px-6 py-6"
        >
          <div className="mb-4 flex items-center gap-2">
            <Sparkles size={16} style={{ color: "var(--accent-2)" }} />
            <h3 className="text-sm font-semibold uppercase tracking-wide" style={{ color: "var(--text)" }}>
              Currently Learning
            </h3>
          </div>
          <ul className="space-y-2.5">
            {profile.currentlyLearning.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: "var(--accent-2)" }}
                />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
