import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";

const STATUS_STYLE = {
  Completed: { color: "var(--accent)", bg: "var(--accent-soft)" },
  "In Development": { color: "var(--accent-2)", bg: "var(--accent-2-soft)" },
  Prototype: { color: "var(--text-muted)", bg: "var(--surface-hover)" },
  "Learning Project": { color: "var(--text-muted)", bg: "var(--surface-hover)" },
};

export default function ProjectCard({ project }) {
  const [imgFailed, setImgFailed] = useState(false);
  const statusStyle = STATUS_STYLE[project.status] || STATUS_STYLE.Prototype;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.35 }}
      className="card group flex flex-col overflow-hidden"
    >
      <div
        className="relative h-44 w-full overflow-hidden"
        style={{ background: "var(--surface-hover)" }}
      >
        {!imgFailed ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            onError={() => setImgFailed(true)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center" style={{ color: "var(--text-faint)" }}>
            <Layers size={32} strokeWidth={1.25} />
          </div>
        )}
        <span
          className="absolute right-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-medium"
          style={{ color: statusStyle.color, background: statusStyle.bg, fontFamily: "var(--font-mono)" }}
        >
          {project.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold" style={{ color: "var(--text)" }}>
            {project.title}
          </h3>
          <span className="shrink-0 text-xs" style={{ color: "var(--text-faint)" }}>
            {project.year}
          </span>
        </div>

        <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {project.description}
        </p>

        {project.group && (
          <ul className="mt-3 grid grid-cols-1 gap-1 text-xs sm:grid-cols-2" style={{ color: "var(--text-muted)" }}>
            {project.group.map((g) => (
              <li key={g} className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full" style={{ background: "var(--accent)" }} />
                {g}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md px-2 py-1 text-[11px]"
              style={{
                background: "var(--surface-hover)",
                color: "var(--text-muted)",
                fontFamily: "var(--font-mono)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4 pt-1">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium transition-colors hover:opacity-80"
              style={{ color: "var(--text)" }}
            >
              <Github size={14} /> Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium transition-colors hover:opacity-80"
              style={{ color: "var(--accent)" }}
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
