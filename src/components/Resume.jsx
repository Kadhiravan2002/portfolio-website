"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Eye, X, FileText, ChevronRight } from "lucide-react";

export default function Resume() {
  const [showPreview, setShowPreview] = useState(false);

  const handleDownload = () => {
    // Triggers download of public/resume.pdf
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Kadhiravan_A_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 relative bg-[var(--background)] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-[#00D4FF]/5 to-[#4F8CFF]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 w-full relative z-10 text-center space-y-8">
        <div className="space-y-4">
          <span className="text-sm font-mono text-[var(--accent-primary)] tracking-widest uppercase font-semibold block">
            Curriculum Vitae
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--foreground)]">
            Explore My{" "}
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#4F8CFF] bg-clip-text text-transparent">
              Qualifications
            </span>
          </h2>
          <div className="w-16 h-1 bg-[var(--accent-primary)] shadow-[0_0_8px_#00D4FF] rounded-full mx-auto mt-2" />
        </div>

        <p className="text-base sm:text-lg text-[var(--foreground-secondary)] max-w-xl mx-auto leading-relaxed">
          Get a comprehensive overview of my academic background, technical competencies, projects, and internships in a single document.
        </p>

        {/* Action Panel */}
        <motion.div
          whileHover={{ y: -4 }}
          className="glass-panel p-8 sm:p-10 rounded-2xl border border-[var(--card-border)] bg-[rgba(20,20,30,0.3)] max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 transition-all duration-300"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="p-3.5 rounded-xl bg-[var(--accent-glow)] text-[var(--accent-primary)] border border-[var(--card-border)]">
              <FileText size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[var(--foreground)]">
                Kadhiravan_A_Resume.pdf
              </h3>
              <p className="text-xs font-mono text-[var(--foreground-secondary)] mt-0.5">
                Ready for recruiter review • PDF Format
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              onClick={() => setShowPreview(true)}
              className="px-5 py-3 rounded-lg font-mono text-xs font-bold uppercase tracking-wider text-[var(--foreground)] border border-[var(--card-border)] bg-[var(--card-bg)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] hover:shadow-[0_0_12px_var(--accent-glow-subtle)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Eye size={14} />
              Preview
            </button>
            <button
              onClick={handleDownload}
              className="px-5 py-3 rounded-lg font-mono text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#00D4FF] to-[#4F8CFF] hover:shadow-[0_0_15px_var(--accent-glow)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download size={14} />
              Download
            </button>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Preview Modal */}
      <AnimatePresence>
        {showPreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="glass-panel w-full max-w-4xl h-[85vh] rounded-2xl border border-[var(--card-border)] bg-[var(--background)] overflow-hidden flex flex-col relative"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-[var(--card-border)]">
                <div className="flex items-center gap-2">
                  <FileText size={18} className="text-[var(--accent-primary)]" />
                  <span className="font-mono text-sm font-bold text-[var(--foreground)]">
                    Resume Viewer
                  </span>
                </div>
                <button
                  onClick={() => setShowPreview(false)}
                  className="p-1.5 rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--foreground-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all duration-300 cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Modal Content - Embed PDF */}
              <div className="flex-1 bg-zinc-900 overflow-y-auto">
                <iframe
                  src="/resume.pdf"
                  title="Resume Preview"
                  className="w-full h-full border-none"
                  // Fallback content in case iframe fails or resume is empty
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                
                {/* Fallback Display if iframe is not preferred */}
                <div className="absolute inset-x-0 bottom-0 top-14 bg-zinc-950 flex flex-col items-center justify-center text-center p-8 z-0 pointer-events-none">
                  <div className="p-4 rounded-full bg-[var(--accent-glow)] text-[var(--accent-primary)] mb-4">
                    <FileText size={32} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Resume PDF Preview</h4>
                  <p className="text-sm text-zinc-400 max-w-sm mb-6">
                    A local placeholder resume.pdf is configured. Please make sure to place your real resume.pdf inside the public folder.
                  </p>
                  <button
                    onClick={handleDownload}
                    className="pointer-events-auto px-5 py-2.5 rounded-lg font-mono text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#00D4FF] to-[#4F8CFF] hover:shadow-[0_0_15px_var(--accent-glow)] transition-all duration-300 flex items-center gap-2 cursor-pointer"
                  >
                    <Download size={14} />
                    Download File Instead
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
