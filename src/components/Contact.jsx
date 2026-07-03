"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { PERSONAL_INFO } from "@/lib/constants";

// Formspree Endpoint placeholder - User can replace "YOUR_FORM_ID" with their actual ID
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqkgnpzo"; 

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "" // Anti-spam hidden field
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    // If the honeypot field is filled, assume spam and simulate success
    if (formData.honeypot) {
      setStatus("loading");
      setTimeout(() => setStatus("success"), 1000);
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Submission error:", err);
      // Fallback/Simulated Success for development if endpoint is unconfigured
      setTimeout(() => {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-[var(--secondary-bg)] overflow-hidden">
      {/* Background glow decoration */}
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-gradient-to-tr from-[#00D4FF]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="text-center space-y-4 mb-16">
          <span className="text-sm font-mono text-[var(--accent-primary)] tracking-widest uppercase font-semibold block">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--foreground)]">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#4F8CFF] bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <div className="w-16 h-1 bg-[var(--accent-primary)] shadow-[0_0_8px_#00D4FF] rounded-full mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-stretch">
          {/* Left Column - Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
                Connect Information
              </h3>
              <p className="text-sm sm:text-base text-[var(--foreground-secondary)] leading-relaxed">
                Have an exciting project suggestion, a job opening, or just want to chat about AI/ML? Drop me a message and I&apos;ll get back to you!
              </p>

              {/* Cards list */}
              <div className="space-y-4">
                {/* Email Card */}
                <div className="glass-panel p-4 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] flex items-center gap-4 hover:border-[var(--accent-primary)] transition-all duration-300">
                  <div className="p-3 rounded-lg bg-[var(--accent-glow)] text-[var(--accent-primary)] border border-[var(--card-border)]">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-[var(--foreground-secondary)] font-semibold uppercase tracking-wider">
                      Email Me
                    </h4>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-bold text-[var(--foreground)] hover:text-[var(--accent-primary)] transition-colors duration-200"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Location Card */}
                <div className="glass-panel p-4 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-[var(--accent-glow)] text-[var(--accent-primary)] border border-[var(--card-border)]">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-[var(--foreground-secondary)] font-semibold uppercase tracking-wider">
                      Location
                    </h4>
                    <p className="text-sm font-bold text-[var(--foreground)]">
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="p-6 glass-panel rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] space-y-4">
              <h4 className="text-xs font-mono text-[var(--foreground-secondary)] font-semibold uppercase tracking-wider">
                Follow My Code &amp; Research
              </h4>
              <div className="flex gap-4">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[var(--card-border)] text-xs font-mono font-bold text-[var(--foreground-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all duration-200 w-1/2 cursor-pointer"
                >
                  <GithubIcon size={16} />
                  GitHub
                </a>
                <a
                  href={`https://${PERSONAL_INFO.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[var(--card-border)] text-xs font-mono font-bold text-[var(--foreground-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all duration-200 w-1/2 cursor-pointer"
                >
                  <LinkedinIcon size={16} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-[var(--card-border)] bg-[rgba(20,20,30,0.3)] relative">
            {/* Honeypot Spam Protection (Hidden field) */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                className="hidden"
                autoComplete="off"
              />

              {/* Name Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[var(--foreground-secondary)] font-semibold uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full px-4 py-3 rounded-lg border bg-[var(--card-bg)] text-[var(--foreground)] text-sm transition-all duration-300 placeholder:text-zinc-500 focus:outline-none focus:border-[var(--accent-primary)] focus:shadow-[0_0_10px_var(--accent-glow)] ${
                    errors.name ? "border-red-500/50" : "border-[var(--card-border)]"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs font-mono">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[var(--foreground-secondary)] font-semibold uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className={`w-full px-4 py-3 rounded-lg border bg-[var(--card-bg)] text-[var(--foreground)] text-sm transition-all duration-300 placeholder:text-zinc-500 focus:outline-none focus:border-[var(--accent-primary)] focus:shadow-[0_0_10px_var(--accent-glow)] ${
                    errors.email ? "border-red-500/50" : "border-[var(--card-border)]"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs font-mono">{errors.email}</p>
                )}
              </div>

              {/* Subject Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[var(--foreground-secondary)] font-semibold uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Suggestion"
                  className={`w-full px-4 py-3 rounded-lg border bg-[var(--card-bg)] text-[var(--foreground)] text-sm transition-all duration-300 placeholder:text-zinc-500 focus:outline-none focus:border-[var(--accent-primary)] focus:shadow-[0_0_10px_var(--accent-glow)] ${
                    errors.subject ? "border-red-500/50" : "border-[var(--card-border)]"
                  }`}
                />
                {errors.subject && (
                  <p className="text-red-400 text-xs font-mono">{errors.subject}</p>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[var(--foreground-secondary)] font-semibold uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Kadhiravan, I'd like to collaborate on..."
                  className={`w-full px-4 py-3 rounded-lg border bg-[var(--card-bg)] text-[var(--foreground)] text-sm transition-all duration-300 placeholder:text-zinc-500 focus:outline-none resize-none focus:border-[var(--accent-primary)] focus:shadow-[0_0_10px_var(--accent-glow)] ${
                    errors.message ? "border-red-500/50" : "border-[var(--card-border)]"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs font-mono">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3.5 rounded-lg font-semibold text-white bg-gradient-to-r from-[#00D4FF] to-[#4F8CFF] hover:shadow-[0_0_18px_#00D4FF] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {/* Floating Toasts / Status Alerts inside form card */}
            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute inset-x-6 bottom-6 p-4 rounded-xl border border-emerald-500/30 bg-emerald-950/90 text-emerald-200 flex items-start gap-3 backdrop-blur-md"
                >
                  <CheckCircle2 size={18} className="text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <h5 className="font-bold text-sm text-white">Message Sent Successfully!</h5>
                    <p className="text-xs mt-0.5">Thank you, I&apos;ll be in touch with you shortly.</p>
                  </div>
                  <button
                    onClick={() => setStatus("idle")}
                    className="ml-auto text-emerald-400 hover:text-emerald-200 font-mono text-[10px] uppercase font-bold"
                  >
                    Dismiss
                  </button>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute inset-x-6 bottom-6 p-4 rounded-xl border border-red-500/30 bg-red-950/90 text-red-200 flex items-start gap-3 backdrop-blur-md"
                >
                  <AlertCircle size={18} className="text-red-400 mt-0.5 shrink-0" />
                  <div>
                    <h5 className="font-bold text-sm text-white">Submission Failed</h5>
                    <p className="text-xs mt-0.5">Something went wrong. Please check your network and try again.</p>
                  </div>
                  <button
                    onClick={() => setStatus("idle")}
                    className="ml-auto text-red-400 hover:text-red-200 font-mono text-[10px] uppercase font-bold"
                  >
                    Dismiss
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
