"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/constants";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative bg-[var(--secondary-bg)] overflow-hidden">
      {/* Background glow decoration */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-gradient-to-bl from-[#4F8CFF]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="text-center space-y-4 mb-16">
          <span className="text-sm font-mono text-[var(--accent-primary)] tracking-widest uppercase font-semibold block">
            Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--foreground)]">
            Certifications &amp;{" "}
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#4F8CFF] bg-clip-text text-transparent">
              Badges
            </span>
          </h2>
          <div className="w-16 h-1 bg-[var(--accent-primary)] shadow-[0_0_8px_#00D4FF] rounded-full mx-auto mt-2" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{
                y: -6,
                borderColor: "var(--accent-primary)",
                boxShadow: "0 12px 24px rgba(0,0,0,0.35), 0 0 15px var(--accent-glow)",
              }}
              className="glass-panel p-6 rounded-2xl border border-[var(--card-border)] bg-[rgba(20,20,30,0.3)] transition-all duration-300 relative group flex flex-col justify-between h-56"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-glow-subtle)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

              <div>
                {/* Header with credential shield */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-[var(--card-border)] text-[var(--foreground-secondary)] group-hover:text-[var(--accent-primary)] group-hover:bg-[var(--accent-glow)] transition-all duration-300">
                    <Award size={20} />
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-[var(--foreground-secondary)] bg-[var(--card-bg)] px-2.5 py-1 rounded-full border border-[var(--card-border)]">
                    <ShieldCheck size={10} className="text-[var(--accent-primary)]" />
                    Verified
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-1 relative z-10">
                  <h3 className="text-lg font-bold tracking-tight text-[var(--foreground)] group-hover:text-[var(--accent-primary)] transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-[var(--foreground-secondary)]">
                    {cert.issuer}
                  </p>
                </div>

                <p className="text-xs text-[var(--foreground-secondary)] mt-3 leading-relaxed relative z-10 line-clamp-2">
                  {cert.description}
                </p>
              </div>

              {/* Verify Link */}
              <div className="pt-4 border-t border-[var(--card-border)] relative z-10">
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-[var(--foreground-secondary)] hover:text-[var(--accent-primary)] transition-colors duration-200 group/btn cursor-pointer"
                >
                  Verify Credentials
                  <ExternalLink size={12} className="transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
