"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { EXPERIENCE } from "@/lib/constants";

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative bg-[var(--background)] overflow-hidden">
      {/* Background glow decoration */}
      <div className="absolute left-0 top-0 w-80 h-80 bg-gradient-to-tr from-[#00D4FF]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="text-center space-y-4 mb-16">
          <span className="text-sm font-mono text-[var(--accent-primary)] tracking-widest uppercase font-semibold block">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--foreground)]">
            Professional{" "}
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#4F8CFF] bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-16 h-1 bg-[var(--accent-primary)] shadow-[0_0_8px_#00D4FF] rounded-full mx-auto mt-2" />
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-[var(--card-border)] lg:border-l-0 lg:before:absolute lg:before:left-1/2 lg:before:top-0 lg:before:h-full lg:before:w-[1px] lg:before:bg-[var(--card-border)] lg:before:-translate-x-1/2 space-y-12 lg:space-y-4 max-w-5xl mx-auto">
          {EXPERIENCE.map((exp, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={exp.role}
                className={`relative flex flex-col lg:flex-row lg:items-center w-full ${
                  isEven ? "lg:justify-start" : "lg:justify-end"
                }`}
              >
                {/* Timeline Dot (Mobile & Desktop) */}
                <div className="absolute left-[-5px] top-1.5 lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 w-[11px] h-[11px] rounded-full bg-gradient-to-tr from-[#00D4FF] to-[#4F8CFF] shadow-[0_0_10px_#00D4FF] z-20" />

                {/* Timeline Card */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  whileHover={{
                    scale: 1.02,
                    borderColor: "var(--accent-primary)",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.3), 0 0 15px var(--accent-glow)",
                  }}
                  className={`w-full lg:w-[45%] glass-panel p-6 rounded-2xl border border-[var(--card-border)] bg-[rgba(20,20,30,0.4)] ml-6 lg:ml-0 transition-all duration-300 relative group`}
                >
                  {/* Subtle hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-glow-subtle)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

                  {/* Role Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4 relative z-10">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-[var(--foreground)] group-hover:text-[var(--accent-primary)] transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-mono text-[var(--foreground-secondary)] font-semibold mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1 rounded-full bg-[var(--card-bg)] text-[var(--foreground-secondary)] border border-[var(--card-border)]">
                      <Calendar size={12} />
                      {exp.duration}
                    </span>
                  </div>

                  {/* Achievements List */}
                  <ul className="space-y-2 mb-6 text-sm text-[var(--foreground-secondary)] list-disc pl-4 relative z-10">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="leading-relaxed">
                        {ach}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[var(--card-border)] relative z-10">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[10px] font-mono font-semibold rounded bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--foreground-secondary)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
