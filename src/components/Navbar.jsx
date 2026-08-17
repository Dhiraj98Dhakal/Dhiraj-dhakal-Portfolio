import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { useScrollProgress } from "../hooks/useScrollProgress";
import { useActiveSection } from "../hooks/useActiveSection";
import { socials } from "../config/socials";
import ThemeToggle from "./ui/ThemeToggle";
import { cn } from "../utils/cn";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const { scrolled } = useScrollProgress();
  const active = useActiveSection(NAV_ITEMS.map((i) => i.id));
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass py-3" : "bg-transparent py-5"
      )}
    >
      <nav className="container-px mx-auto flex max-w-6xl items-center justify-between">
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2 font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
          aria-label="Go to top"
        >
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold"
            style={{
              background: "linear-gradient(120deg, var(--accent), var(--accent-2))",
              color: "#0A0D12",
            }}
          >
            DD
          </span>
          <span className="hidden sm:inline">Dhiraj Dhakal</span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className="relative px-3 py-2 text-sm font-medium transition-colors"
                style={{
                  color: active === item.id ? "var(--text)" : "var(--text-muted)",
                }}
              >
                {item.label}
                {active === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full"
                    style={{ background: "var(--accent)" }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            style={{ color: "var(--text-muted)" }}
            className="transition-colors hover:opacity-80"
          >
            <Github size={18} />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            style={{ color: "var(--text-muted)" }}
            className="transition-colors hover:opacity-80"
          >
            <Linkedin size={18} />
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full border"
            style={{ borderColor: "var(--border-c)", color: "var(--text)" }}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="glass mt-3 overflow-hidden md:hidden"
          >
            <ul className="container-px flex flex-col gap-1 py-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="block w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium"
                    style={{
                      color: active === item.id ? "var(--accent)" : "var(--text)",
                      background: active === item.id ? "var(--accent-soft)" : "transparent",
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="mt-2 flex items-center gap-4 px-3">
                <a href={socials.github} target="_blank" rel="noreferrer" style={{ color: "var(--text-muted)" }}>
                  <Github size={18} />
                </a>
                <a href={socials.linkedin} target="_blank" rel="noreferrer" style={{ color: "var(--text-muted)" }}>
                  <Linkedin size={18} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
