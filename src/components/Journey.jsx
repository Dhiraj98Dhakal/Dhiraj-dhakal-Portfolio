import { motion } from "framer-motion";
import { journey } from "../data/journey";
import SectionHeading from "./ui/SectionHeading";

export default function Journey() {
  return (
    <section id="journey" className="container-px mx-auto max-w-6xl py-24">
      <SectionHeading index={5} id="journey" title="Journey" description="How things have progressed so far." />

      <div className="relative mt-14 ml-3 sm:ml-6">
        <div
          className="absolute left-0 top-0 h-full w-px"
          style={{ background: "linear-gradient(var(--accent), var(--accent-2))" }}
          aria-hidden="true"
        />
        <div className="space-y-10">
          {journey.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="relative pl-8 sm:pl-10"
            >
              <span
                className="absolute left-[-5px] top-1.5 h-[10px] w-[10px] rounded-full ring-4"
                style={{
                  background: "var(--accent)",
                  boxShadow: "0 0 0 4px var(--bg)",
                }}
              />
              <p className="text-xs font-medium" style={{ fontFamily: "var(--font-mono)", color: "var(--accent)" }}>
                {step.subtitle}
              </p>
              <h3 className="mt-1 text-lg font-semibold" style={{ color: "var(--text)" }}>
                {step.title}
              </h3>
              <p className="mt-1 max-w-xl text-sm" style={{ color: "var(--text-muted)" }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
