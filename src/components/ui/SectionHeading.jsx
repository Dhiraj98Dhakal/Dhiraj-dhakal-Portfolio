import { motion } from "framer-motion";

export default function SectionHeading({ index, id, title, description, align = "left" }) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
        className="eyebrow mb-3"
      >
        {"// "}
        {String(index).padStart(2, "0")} {id}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="text-3xl md:text-4xl font-semibold tracking-tight"
        style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className={`mt-3 max-w-xl text-base ${align === "center" ? "mx-auto" : ""}`}
          style={{ color: "var(--text-muted)" }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
