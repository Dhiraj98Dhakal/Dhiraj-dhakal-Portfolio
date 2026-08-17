import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Facebook, Instagram, Copy, Send, Loader2 } from "lucide-react";
import { socials } from "../config/socials";
import SectionHeading from "./ui/SectionHeading";
import MagneticButton from "./ui/MagneticButton";
import { useToast } from "../hooks/useToast";

const LINKS = [
  { key: "github", label: "GitHub", icon: Github, url: socials.github },
  { key: "linkedin", label: "LinkedIn", icon: Linkedin, url: socials.linkedin },
  { key: "facebook", label: "Facebook", icon: Facebook, url: socials.facebook },
  { key: "instagram", label: "Instagram", icon: Instagram, url: socials.instagram },
];

function ContactForm() {
  const { showToast } = useToast();
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const usingProvider = Boolean(socials.formspreeEndpoint || socials.web3formsAccessKey);

  if (!usingProvider) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const formData = new FormData(form);

    try {
      let endpoint = socials.formspreeEndpoint;
      if (socials.web3formsAccessKey) {
        endpoint = "https://api.web3forms.com/submit";
        formData.append("access_key", socials.web3formsAccessKey);
      }
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      showToast("Message sent — thanks!");
      form.reset();
    } catch {
      setStatus("error");
      showToast("Something went wrong. Try emailing directly.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card mt-8 space-y-4 px-6 py-6 sm:px-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="name"
          required
          placeholder="Your name"
          className="rounded-lg border bg-transparent px-4 py-3 text-sm outline-none"
          style={{ borderColor: "var(--border-c)", color: "var(--text)" }}
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Your email"
          className="rounded-lg border bg-transparent px-4 py-3 text-sm outline-none"
          style={{ borderColor: "var(--border-c)", color: "var(--text)" }}
        />
      </div>
      <textarea
        name="message"
        required
        rows={4}
        placeholder="Your message"
        className="w-full resize-none rounded-lg border bg-transparent px-4 py-3 text-sm outline-none"
        style={{ borderColor: "var(--border-c)", color: "var(--text)" }}
      />
      <MagneticButton as="button" type="submit" variant="primary" disabled={status === "sending"}>
        {status === "sending" ? <Loader2 size={15} className="animate-spin" /> : <Send size={15} />}
        {status === "sending" ? "Sending…" : "Send Message"}
      </MagneticButton>
    </form>
  );
}

export default function Contact() {
  const { showToast } = useToast();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(socials.email);
      showToast("Email copied to clipboard");
    } catch {
      showToast("Couldn't copy — email is " + socials.email);
    }
  };

  return (
    <section id="contact" className="container-px mx-auto max-w-6xl py-24">
      <SectionHeading
        index={7}
        id="contact"
        title="Have an idea? Let's build something."
        align="center"
      />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto mt-10 max-w-xl text-center"
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <MagneticButton as="a" href={`mailto:${socials.email}`} variant="primary">
            <Mail size={15} />
            Email Me
          </MagneticButton>
          <MagneticButton as="button" variant="secondary" onClick={copyEmail}>
            <Copy size={15} />
            Copy Email
          </MagneticButton>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          {LINKS.filter((l) => l.url && l.url !== "#").map((l) => (
            <a
              key={l.key}
              href={l.url}
              target="_blank"
              rel="noreferrer"
              aria-label={l.label}
              className="flex h-11 w-11 items-center justify-center rounded-full border transition-colors hover:opacity-80"
              style={{ borderColor: "var(--border-c)", color: "var(--text)" }}
            >
              <l.icon size={18} />
            </a>
          ))}
        </div>

        <ContactForm />
      </motion.div>
    </section>
  );
}
