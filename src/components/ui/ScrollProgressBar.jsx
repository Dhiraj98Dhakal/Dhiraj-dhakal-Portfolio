import { motion } from "framer-motion";
import { useScrollProgress } from "../../hooks/useScrollProgress";

export default function ScrollProgressBar() {
  const { progress } = useScrollProgress();
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent">
      <motion.div
        className="h-full origin-left"
        style={{
          background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
          scaleX: progress,
        }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}
