"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative bg-[var(--secondary-bg)] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-gradient-to-tr from-[#00D4FF]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="text-center space-y-4 mb-16">
          <span className="text-sm font-mono text-[var(--accent-primary)] tracking-widest uppercase font-semibold block">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--foreground)]">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#4F8CFF] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-16 h-1 bg-[var(--accent-primary)] shadow-[0_0_8px_#00D4FF] rounded-full mx-auto mt-2" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{
                y: -6,
                borderColor: "var(--accent-primary)",
                boxShadow: "0 15px 30px rgba(0,0,0,0.4), 0 0 15px var(--accent-glow)",
              }}
              className="glass-panel rounded-2xl border border-[var(--card-border)] bg-[rgba(20,20,30,0.4)] overflow-hidden flex flex-col justify-between group transition-all duration-300 h-full"
            >
              <div>
                {/* Visual Image Mockup */}
                <div className="relative w-full h-48 overflow-hidden bg-zinc-950 border-b border-[var(--card-border)]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-w-7xl) 100vw, 400px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold tracking-tight text-[var(--foreground)] group-hover:text-[var(--accent-primary)] transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-[var(--foreground-secondary)] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((techItem) => (
                      <span
                        key={techItem}
                        className="px-2.5 py-1 text-[10px] font-mono font-semibold rounded bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--foreground-secondary)]"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer with links */}
              <div className="p-6 pt-0">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[var(--foreground-secondary)] hover:text-[var(--accent-primary)] transition-colors duration-200 group/link cursor-pointer"
                >
                  GitHub
                  <ExternalLink size={12} className="transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
