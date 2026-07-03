"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const duration = 2500; // 2.5 seconds
    const intervalTime = 25;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 500); // Allow fadeout animation to finish
          }, 400);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A0A0A] overflow-hidden"
        >
          {/* Subtle Cyberpunk Background Particles */}
          <div className="absolute inset-0 opacity-20">
            {Array.from({ length: 40 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-[3px] h-[3px] bg-[#00D4FF] rounded-full animate-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${1.5 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          <div className="relative flex flex-col items-center z-10">
            {/* Glowing Pulsing Circle Loader */}
            <div className="relative w-32 h-32 flex items-center justify-center mb-8">
              <motion.div
                animate={{
                  rotate: 360,
                  borderColor: ["#00D4FF", "#4F8CFF", "#00D4FF"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#00D4FF] border-b-[#4F8CFF] blur-[1px]"
              />
              <motion.div
                animate={{
                  scale: [0.95, 1.05, 0.95],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                className="absolute w-28 h-28 rounded-full bg-gradient-to-tr from-[#00D4FF]/10 to-[#4F8CFF]/10 blur-[8px]"
              />
              <span className="text-xl font-mono font-bold bg-gradient-to-r from-[#00D4FF] to-[#4F8CFF] bg-clip-text text-transparent">
                {Math.round(progress)}%
              </span>
            </div>

            {/* Title Emergence from Blur */}
            <motion.h1
              initial={{ filter: "blur(10px)", opacity: 0, y: 15 }}
              animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-2xl font-bold tracking-[0.2em] text-white font-sans text-center"
            >
              KADHIRAVAN A
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xs font-mono text-[#00D4FF] mt-2 tracking-widest uppercase"
            >
              Initializing Portfolio Core...
            </motion.p>

            {/* Glowing Progress Line */}
            <div className="w-48 h-[2px] bg-white/10 rounded-full mt-6 overflow-hidden relative">
              <div
                className="h-full bg-gradient-to-r from-[#00D4FF] to-[#4F8CFF] shadow-[0_0_8px_#00D4FF] transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
