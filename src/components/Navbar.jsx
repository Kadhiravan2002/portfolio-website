"use client";

import { useState, useEffect } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Sun, Moon, Menu, X } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";

export default function Navbar() {
  const [theme, setTheme] = useState("dark");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Certifications", id: "certifications" },
    { name: "Contact", id: "contact" }
  ];

  const activeSection = useActiveSection(navLinks.map((link) => link.id));

  // Handle light/dark mode toggle
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    if (savedTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  };

  // Handle scroll events (progress and opacity)
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll helper
  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for sticky nav
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
    <>
      {/* Scroll Progress Indicator */}
      <div
        id="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "glass-panel shadow-lg py-4 border-b border-[var(--card-border)] bg-[rgba(10,10,10,0.8)] backdrop-blur-md"
            : "bg-transparent py-6 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="flex items-center space-x-2 group focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-tr from-[#00D4FF] to-[#4F8CFF] font-bold text-white shadow-[0_0_10px_var(--accent-glow)] font-mono text-lg transition-transform group-hover:scale-105 duration-300">
              {PERSONAL_INFO.monogram}
              <div className="absolute inset-0 rounded-lg border border-white/20" />
            </div>
            <span className="font-bold text-lg tracking-[0.1em] text-[var(--foreground)] hidden sm:block">
              {PERSONAL_INFO.name.split(" ")[0]}
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`relative py-1 text-sm font-semibold tracking-wider uppercase transition-colors duration-300 hover:text-[var(--accent-primary)] focus:outline-none ${
                    isActive ? "text-[var(--accent-primary)] font-bold" : "text-[var(--foreground-secondary)]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-gradient-to-r from-[#00D4FF] to-[#4F8CFF] shadow-[0_0_8px_#00D4FF] rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Action buttons (Theme and Mobile Toggle) */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2.5 rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--foreground-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all duration-300 focus:outline-none cursor-pointer"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile Hamburger Menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="md:hidden p-2.5 rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--foreground-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all duration-300 focus:outline-none cursor-pointer"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {isOpen && (
          <div className="md:hidden glass-panel border-b border-[var(--card-border)] w-full py-6 px-6 absolute top-full left-0 bg-[rgba(10,10,10,0.95)] shadow-2xl transition-all duration-300">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`py-2 text-sm font-semibold tracking-wider uppercase transition-colors duration-300 border-l-2 pl-3 ${
                      isActive
                        ? "text-[var(--accent-primary)] border-[var(--accent-primary)] bg-[var(--accent-glow-subtle)] font-bold"
                        : "text-[var(--foreground-secondary)] border-transparent hover:text-[var(--accent-primary)]"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
