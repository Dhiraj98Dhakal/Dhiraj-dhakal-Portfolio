import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function QuickStats() {
  return (
    <section className="container-px mx-auto -mt-6 max-w-6xl pb-16 sm:-mt-10">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {profile.stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="card px-4 py-5 text-center sm:px-6 sm:py-6"
          >
            <div
              className="text-2xl font-semibold sm:text-3xl"
              style={{ fontFamily: "var(--font-display)", color: "var(--accent)" }}
            >
              {stat.value}
            </div>
            <div className="mt-1 text-xs sm:text-sm" style={{ color: "var(--text-muted)" }}>
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
