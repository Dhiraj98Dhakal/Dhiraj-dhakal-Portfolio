import { useState } from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { profile } from "../../data/profile";

export default function ProfileImage() {
  const [failed, setFailed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative mx-auto h-56 w-56 sm:h-64 sm:w-64"
    >
      <div
        className="absolute inset-0 rounded-3xl blur-2xl opacity-40"
        style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2))" }}
        aria-hidden="true"
      />
      <div
        className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl"
        style={{
          border: "1px solid var(--border-c)",
          background: "var(--surface)",
        }}
      >
        {!failed ? (
          <img
            src={profile.photo}
            alt={profile.name}
            onError={() => setFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center gap-2" style={{ color: "var(--text-faint)" }}>
            <User size={56} strokeWidth={1.25} />
            <span className="text-xs" style={{ fontFamily: "var(--font-mono)" }}>
              {profile.initials}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
