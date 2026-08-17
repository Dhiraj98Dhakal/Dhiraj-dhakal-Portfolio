import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const TYPE_SPEED = 55;
const DELETE_SPEED = 30;
const HOLD_MS = 1400;

export default function TerminalRotator({ roles }) {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(prefersReducedMotion ? roles[0] : "");
  const [phase, setPhase] = useState("typing"); // typing | holding | deleting

  useEffect(() => {
    if (prefersReducedMotion) return;
    const current = roles[index];
    let timeout;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), TYPE_SPEED);
      } else {
        timeout = setTimeout(() => setPhase("holding"), HOLD_MS);
      }
    } else if (phase === "holding") {
      timeout = setTimeout(() => setPhase("deleting"), HOLD_MS / 2);
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), DELETE_SPEED);
      } else {
        setIndex((i) => (i + 1) % roles.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, index, roles, prefersReducedMotion]);

  return (
    <span
      className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm sm:text-base"
      style={{
        fontFamily: "var(--font-mono)",
        background: "var(--surface)",
        border: "1px solid var(--border-c)",
        color: "var(--accent)",
      }}
    >
      <span aria-hidden="true" style={{ color: "var(--text-faint)" }}>
        &gt;_
      </span>
      <span style={{ color: "var(--text)" }}>{text}</span>
      {!prefersReducedMotion && (
        <span
          aria-hidden="true"
          className="inline-block h-4 w-[2px] animate-pulse"
          style={{ background: "var(--accent)" }}
        />
      )}
      <span className="sr-only">{roles.join(", ")}</span>
    </span>
  );
}
