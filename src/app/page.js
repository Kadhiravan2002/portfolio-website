"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ArrowUp } from "lucide-react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <div className="flex flex-col min-h-screen">
          {/* Sticky Header Navigation */}
          <Navbar />

          {/* Main Sections */}
          <main className="flex-grow">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Certifications />
            <Resume />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />

          {/* Back to Top Floating Button */}
          {showBackToTop && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 z-45 p-3 rounded-lg bg-gradient-to-tr from-[#00D4FF] to-[#4F8CFF] text-white shadow-lg hover:shadow-[0_0_15px_#00D4FF] hover:scale-105 transition-all duration-300 focus:outline-none cursor-pointer"
              aria-label="Back to Top"
            >
              <ArrowUp size={18} />
            </button>
          )}
        </div>
      )}
    </>
  );
}
