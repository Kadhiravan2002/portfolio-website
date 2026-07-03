"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { PERSONAL_INFO } from "@/lib/constants";

export default function Footer() {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="w-full bg-[#0A0A0A] border-t border-[var(--card-border)] relative overflow-hidden py-12">
      {/* Top Border Glow Accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent shadow-[0_0_10px_#00D4FF] opacity-40" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Brand/Monogram */}
        <div className="flex items-center space-x-3">
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="w-8 h-8 rounded bg-gradient-to-tr from-[#00D4FF] to-[#4F8CFF] font-bold text-white flex items-center justify-center font-mono text-sm cursor-pointer shadow-[0_0_8px_var(--accent-glow)]"
          >
            {PERSONAL_INFO.monogram}
          </a>
          <span className="font-bold text-sm tracking-widest text-[var(--foreground)] uppercase">
            {PERSONAL_INFO.name}
          </span>
        </div>

        {/* Made with */}
        <p className="text-xs text-[var(--foreground-secondary)] font-mono text-center md:text-left">
          Made with <span className="text-[var(--accent-primary)]">❤️</span> using Next.js &amp; Tailwind CSS
        </p>

        {/* Social & Top Nav */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--foreground-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={`https://${PERSONAL_INFO.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--foreground-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Send Email"
              className="p-2 rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--foreground-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <Mail size={16} />
            </a>
          </div>

          <p className="text-[10px] font-mono text-[var(--foreground-secondary)]">
            &copy; 2026 Kadhiravan Arasu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
