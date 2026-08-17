import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { categories, projects } from "../data/projects";
import SectionHeading from "./ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import GithubActivity from "./GithubActivity";
import { cn } from "../utils/cn";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="projects" className="container-px mx-auto max-w-6xl py-24">
      <SectionHeading
        index={3}
        id="projects"
        title="Projects"
        description="A mix of personal builds, work in progress, and academic projects."
      />

      <div className="mt-10 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-xs font-medium transition-colors"
            )}
            style={{
              borderColor: filter === cat ? "var(--accent)" : "var(--border-c)",
              color: filter === cat ? "var(--accent)" : "var(--text-muted)",
              background: filter === cat ? "var(--accent-soft)" : "transparent",
              fontFamily: "var(--font-mono)",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm" style={{ color: "var(--text-muted)" }}>
          No projects in this category yet.
        </p>
      )}

      <GithubActivity />
    </section>
  );
}
