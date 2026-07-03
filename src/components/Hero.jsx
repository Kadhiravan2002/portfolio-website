"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, FileText, MessageSquare, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { PERSONAL_INFO } from "@/lib/constants";
import Image from "next/image";

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const roleTimer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
    }, 3000);
    return () => clearInterval(roleTimer);
  }, []);

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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden hero-bg"
    >
      {/* Floating Ambient Particles */}
      <div className="particle-container">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column - Content (60%) */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2"
          >
            <span className="h-[1px] w-8 bg-[var(--accent-primary)] shadow-[0_0_8px_#00D4FF]" />
            <span className="text-sm font-mono text-[var(--accent-primary)] tracking-widest uppercase font-semibold">
              {PERSONAL_INFO.greeting}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--foreground)]"
          >
            <span className="block">{PERSONAL_INFO.name.split(" ")[0]}</span>
            <span className="block bg-gradient-to-r from-[#00D4FF] to-[#4F8CFF] bg-clip-text text-transparent glow-cyan">
              {PERSONAL_INFO.name.split(" ").slice(1).join(" ")}
            </span>
          </motion.h1>

          {/* Animated Role Rotator */}
          <div className="h-10 sm:h-12 flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRoleIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-2xl sm:text-3xl font-bold font-mono text-[var(--foreground-secondary)]"
              >
                {PERSONAL_INFO.roles[currentRoleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-[var(--foreground-secondary)] max-w-xl leading-relaxed font-normal"
          >
            {PERSONAL_INFO.description}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, "projects")}
              className="px-6 py-3.5 rounded-lg font-semibold text-white bg-gradient-to-r from-[#00D4FF] to-[#4F8CFF] hover:shadow-[0_0_20px_var(--accent-glow)] transform hover:scale-[1.02] flex items-center gap-2 group transition-all duration-300 cursor-pointer"
            >
              View My Work
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <a
              href="#resume"
              onClick={(e) => handleScrollTo(e, "resume")}
              className="px-6 py-3.5 rounded-lg font-semibold text-[var(--foreground)] border border-[var(--card-border)] bg-[var(--card-bg)] hover:border-[var(--accent-primary)] hover:shadow-[0_0_15px_var(--accent-glow-subtle)] transform hover:scale-[1.02] flex items-center gap-2 transition-all duration-300 cursor-pointer"
            >
              <FileText size={18} />
              Resume
            </a>

            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="px-6 py-3.5 rounded-lg font-semibold text-[var(--foreground-secondary)] hover:text-[var(--accent-primary)] flex items-center gap-2 transition-all duration-300 group cursor-pointer"
            >
              <MessageSquare size={18} className="text-[var(--foreground-secondary)] group-hover:text-[var(--accent-primary)] transition-colors duration-300" />
              Let&apos;s Connect
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center space-x-6 pt-4"
          >
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--foreground-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={`https://${PERSONAL_INFO.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--foreground-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Send Email"
              className="p-2.5 rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--foreground-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        {/* Right Column - Custom Illustration (40%) */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-[450px] aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden glass-panel p-2 shadow-2xl group border border-[var(--card-border)]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00D4FF]/20 to-[#4F8CFF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src="/images/hero_illustration.webp"
                alt="AI Workstation Mockup"
                fill
                priority
                sizes="(max-w-7xl) 100vw, 400px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Ambient cyber lights */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#4F8CFF] rounded-full blur-[50px] opacity-40 pointer-events-none" />
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#00D4FF] rounded-full blur-[50px] opacity-40 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
