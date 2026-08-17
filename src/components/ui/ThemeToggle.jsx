import { useState, useRef, useEffect } from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import { cn } from "../../utils/cn";

const OPTIONS = [
  { key: "light", label: "Light", icon: Sun },
  { key: "dark", label: "Dark", icon: Moon },
  { key: "system", label: "System", icon: Monitor },
];

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const CurrentIcon = resolvedTheme === "light" ? Sun : Moon;

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Change theme"
        aria-expanded={open}
        className="flex h-9 w-9 items-center justify-center rounded-full border transition-colors"
        style={{ borderColor: "var(--border-c)", color: "var(--text)" }}
      >
        <CurrentIcon size={16} />
      </button>
      {open && (
        <div
          role="menu"
          className="glass absolute right-0 mt-2 w-36 rounded-xl p-1 shadow-lg"
        >
          {OPTIONS.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              role="menuitem"
              onClick={() => {
                setTheme(key);
                setOpen(false);
              }}
              className={cn(
                "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors"
              )}
              style={{
                color: theme === key ? "var(--accent)" : "var(--text-muted)",
                background: theme === key ? "var(--accent-soft)" : "transparent",
              }}
            >
              <Icon size={14} />
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
