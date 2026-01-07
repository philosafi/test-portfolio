"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-6 lg:px-8 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="text-sm font-medium text-[var(--muted)] uppercase tracking-wider">
            Sr. Product Designer at Microsoft
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] tracking-tight mb-8"
        >
          <span className="block">Designing experiences for</span>
          <span className="block mt-2">
            <AnimatedText
              words={["human-AI interfaces", "writing assistance", "data visualization"]}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg lg:text-xl text-[var(--muted)] max-w-2xl mb-12"
        >
          I&apos;m Tashfeen Ahmed, a product designer shaping the future of digital experiences.
          Currently at Microsoft, working on Microsoft 365 Copilot.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <motion.button
            onClick={scrollToProjects}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--foreground)] text-[var(--background)] rounded-full font-medium text-sm hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Work
            <ArrowDown className="w-4 h-4" />
          </motion.button>
          <motion.a
            href="/bio"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] rounded-full font-medium text-sm hover:bg-[var(--card)] transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            About Me
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-[var(--muted)]"
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Animated text component that cycles through words
function AnimatedText({ words }: { words: string[] }) {
  return (
    <span className="relative inline-block">
      {words.map((word, index) => (
        <motion.span
          key={word}
          className="absolute left-0 text-[var(--muted)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [20, 0, 0, -20],
          }}
          transition={{
            duration: 4,
            delay: index * 4,
            repeat: Infinity,
            repeatDelay: (words.length - 1) * 4,
            times: [0, 0.1, 0.9, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
      {/* Static fallback for first render */}
      <span className="opacity-0">{words[0]}</span>
    </span>
  );
}
