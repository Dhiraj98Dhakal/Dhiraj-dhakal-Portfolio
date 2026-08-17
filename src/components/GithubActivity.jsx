import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Star, GitFork, Loader2 } from "lucide-react";
import { siteConfig } from "../config/site";

export default function GithubActivity() {
  const [state, setState] = useState("idle"); // idle | loading | success | error | unconfigured
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (!siteConfig.githubUsername || siteConfig.githubUsername === "YOUR_GITHUB_USERNAME") {
      setState("unconfigured");
      return;
    }

    let cancelled = false;
    setState("loading");

    fetch(
      `https://api.github.com/users/${siteConfig.githubUsername}/repos?sort=updated&per_page=6`
    )
      .then((res) => {
        if (!res.ok) throw new Error("GitHub API error");
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        setRepos(Array.isArray(data) ? data : []);
        setState("success");
      })
      .catch(() => {
        if (!cancelled) setState("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  // Nothing meaningful to show — the manually curated Projects grid above
  // already covers this, so we simply omit the section rather than showing
  // a broken/empty block.
  if (state === "unconfigured" || state === "error" || (state === "success" && repos.length === 0)) {
    return null;
  }

  return (
    <div className="mt-16">
      <div className="mb-6 flex items-center gap-2">
        <Github size={16} style={{ color: "var(--accent)" }} />
        <h3 className="text-sm font-semibold uppercase tracking-wide" style={{ color: "var(--text)" }}>
          Latest on GitHub
        </h3>
      </div>

      {state === "loading" && (
        <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
          <Loader2 size={14} className="animate-spin" />
          Fetching repositories…
        </div>
      )}

      {state === "success" && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo, i) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="card block px-5 py-4"
            >
              <p className="truncate text-sm font-semibold" style={{ color: "var(--text)" }}>
                {repo.name}
              </p>
              <p className="mt-1 line-clamp-2 text-xs" style={{ color: "var(--text-muted)" }}>
                {repo.description || "No description provided."}
              </p>
              <div className="mt-3 flex items-center gap-4 text-[11px]" style={{ color: "var(--text-faint)" }}>
                {repo.language && <span>{repo.language}</span>}
                <span className="flex items-center gap-1">
                  <Star size={12} /> {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork size={12} /> {repo.forks_count}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      )}
    </div>
  );
}
