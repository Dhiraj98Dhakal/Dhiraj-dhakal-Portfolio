import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "../../utils/cn";

/**
 * A button/link with a subtle magnetic hover pull. Falls back to a plain
 * static element when the user prefers reduced motion (handled globally
 * via the CSS prefers-reduced-motion override in index.css, which also
 * neutralizes the spring transition duration).
 */
export default function MagneticButton({
  as: Component = "button",
  children,
  className,
  variant = "primary",
  ...props
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.25);
    y.set(relY * 0.25);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 whitespace-nowrap";
  const variants = {
    primary: "text-[#0A0D12]",
    secondary: "border",
    ghost: "",
  };

  const style =
    variant === "primary"
      ? { background: "linear-gradient(120deg, var(--accent), var(--accent-2))" }
      : variant === "secondary"
      ? { borderColor: "var(--border-c)", color: "var(--text)" }
      : { color: "var(--text-muted)" };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY, display: "inline-block" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Component className={cn(base, variants[variant], className)} style={style} {...props}>
        {children}
      </Component>
    </motion.div>
  );
}
