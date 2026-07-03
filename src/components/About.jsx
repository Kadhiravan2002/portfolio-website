"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { PERSONAL_INFO, STATS } from "@/lib/constants";
import { Sparkles, Trophy } from "lucide-react";

function Counter({ value, suffix, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseFloat(value);
      if (start === end) return;

      const totalMiliseconds = duration * 1000;
      const intervalTime = 30;
      const totalSteps = totalMiliseconds / intervalTime;
      const stepIncrement = (end - start) / totalSteps;

      const timer = setInterval(() => {
        start += stepIncrement;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(start);
        }
      }, intervalTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  // Format decimals (like CGPA 8.54) correctly, else integers
  const displayVal = value % 1 === 0 ? Math.round(count) : count.toFixed(2);

  return (
    <span ref={ref} className="font-mono">
      {displayVal}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 relative bg-[var(--secondary-bg)] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-80 h-80 bg-gradient-to-bl from-[#00D4FF]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column - Professional Narrative (60%) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="space-y-2">
              <span className="text-sm font-mono text-[var(--accent-primary)] tracking-widest uppercase font-semibold block">
                About Me
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--foreground)]">
                Transforming Data into{" "}
                <span className="bg-gradient-to-r from-[#00D4FF] to-[#4F8CFF] bg-clip-text text-transparent">
                  Intelligence
                </span>
              </h2>
              <div className="w-16 h-1 bg-[var(--accent-primary)] shadow-[0_0_8px_#00D4FF] rounded-full mt-2" />
            </div>

            <div className="space-y-4 text-[var(--foreground-secondary)] leading-relaxed font-normal text-base sm:text-lg">
              <p>
                I am a final year <strong>B.Tech Information Technology</strong> student with a deep passion for 
                Data Science, Machine Learning, and Artificial Intelligence. My journey in technology is driven 
                by the excitement of discovering hidden patterns in data and using them to build smart, automated applications.
              </p>
              <p>
                With hands-on experience in training machine learning models, creating visual dashboards, and implementing 
                smarter systems with Large Language Models (LLMs), I bridge the gap between complex algorithms and 
                practical software engineering.
              </p>
              <p>
                I actively seek opportunities to apply my technical skills to solve actual business challenges, automate 
                tedious processes, and make digital systems more intuitive.
              </p>
            </div>

            {/* Fun Fact Callout */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="glass-panel p-5 rounded-xl border border-[var(--card-border)] bg-[rgba(20,20,30,0.4)] flex items-start gap-4"
            >
              <div className="p-2.5 rounded-lg bg-[var(--accent-glow)] text-[var(--accent-primary)] border border-[var(--card-border)]">
                <Sparkles size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-[var(--foreground)] text-sm uppercase tracking-wider font-mono">
                  Fun Fact
                </h3>
                <p className="text-sm text-[var(--foreground-secondary)] mt-1">
                  {PERSONAL_INFO.funFact}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Stats Grid (40%) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {STATS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{
                  y: -6,
                  borderColor: "var(--accent-primary)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.3), 0 0 12px var(--accent-glow)",
                }}
                className="glass-panel p-6 rounded-xl border border-[var(--card-border)] flex flex-col justify-between h-36 relative overflow-hidden group transition-all duration-300"
              >
                {/* Background glow hover effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-glow)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex justify-between items-center relative z-10">
                  <div className="p-2 rounded-lg bg-[var(--card-border)] text-[var(--foreground-secondary)] group-hover:text-[var(--accent-primary)] group-hover:bg-[var(--accent-glow)] transition-all duration-300">
                    <Trophy size={16} />
                  </div>
                </div>

                <div className="mt-4 relative z-10">
                  <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--foreground)]">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-[var(--foreground-secondary)] tracking-wider mt-1 uppercase">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
