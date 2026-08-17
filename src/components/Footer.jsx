import { Github, Linkedin, Instagram, Facebook, Mail } from "lucide-react";
import { profile } from "../data/profile";
import { socials } from "../config/socials";

const LINKS = [
  { key: "github", label: "GitHub", icon: Github, url: socials.github },
  { key: "linkedin", label: "LinkedIn", icon: Linkedin, url: socials.linkedin },
  { key: "instagram", label: "Instagram", icon: Instagram, url: socials.instagram },
  { key: "facebook", label: "Facebook", icon: Facebook, url: socials.facebook },
  { key: "email", label: "Email", icon: Mail, url: `mailto:${socials.email}` },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t" style={{ borderColor: "var(--border-c)" }}>
      <div className="container-px mx-auto flex max-w-6xl flex-col items-center gap-4 py-10 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold" style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}>
            {profile.name}
          </p>
          <p className="text-xs" style={{ color: "var(--text-faint)" }}>
            Building. Learning. Creating.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {LINKS.filter((l) => l.url && !l.url.endsWith("#") && l.url !== "mailto:").map((l) => (
            <a
              key={l.key}
              href={l.url}
              target={l.key === "email" ? undefined : "_blank"}
              rel={l.key === "email" ? undefined : "noreferrer"}
              aria-label={l.label}
              className="transition-colors hover:opacity-80"
              style={{ color: "var(--text-muted)" }}
            >
              <l.icon size={16} />
            </a>
          ))}
        </div>

        <p className="text-xs" style={{ color: "var(--text-faint)" }}>
          © {year} {profile.name}
        </p>
      </div>
    </footer>
  );
}
