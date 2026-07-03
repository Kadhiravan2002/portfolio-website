"use client";

import { motion } from "framer-motion";
import { Code2, Database, Cpu, BarChart3, Sparkles, Settings } from "lucide-react";
import { SKILL_CATEGORIES } from "@/lib/constants";

const iconMap = {
  Code2: Code2,
  Database: Database,
  Cpu: Cpu,
  BarChart3: BarChart3,
  Sparkles: Sparkles,
  Settings: Settings
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative bg-[var(--background)] overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-gradient-to-tr from-[#4F8CFF]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="text-center space-y-4 mb-16">
          <span className="text-sm font-mono text-[var(--accent-primary)] tracking-widest uppercase font-semibold block">
            Skills &amp; Technologies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--foreground)]">
            My Tech{" "}
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#4F8CFF] bg-clip-text text-transparent">
              Ecosystem
            </span>
          </h2>
          <div className="w-16 h-1 bg-[var(--accent-primary)] shadow-[0_0_8px_#00D4FF] rounded-full mx-auto mt-2" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = iconMap[cat.icon] || Code2;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{
                  y: -6,
                  borderColor: "var(--accent-primary)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.3), 0 0 12px var(--accent-glow)",
                }}
                className="glass-panel p-6 rounded-xl border border-[var(--card-border)] bg-[rgba(20,20,30,0.3)] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2.5 rounded-lg bg-[var(--card-border)] text-[var(--foreground-secondary)] group-hover:text-[var(--accent-primary)] group-hover:bg-[var(--accent-glow)] border border-[var(--card-border)] group-hover:border-[var(--accent-primary)] transition-all duration-300">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-bold font-mono tracking-wide text-[var(--foreground)]">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Skills List as Pills */}
                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "var(--accent-glow)",
                          borderColor: "var(--accent-primary)",
                          color: "var(--accent-primary)",
                          boxShadow: "0 0 8px var(--accent-glow)"
                        }}
                        className="px-3.5 py-1.5 text-xs font-mono font-semibold rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--foreground-secondary)] transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Subtle bottom design bar */}
                <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--card-border)] to-transparent group-hover:via-[var(--accent-primary)] transition-all duration-500 mt-6" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
