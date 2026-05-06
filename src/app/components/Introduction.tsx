"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut", delay: 0.2 },
  },
};
type Theme = "dark" | "light";

interface IntroductionProps {
  theme: Theme;
}
const Introduction = ({ theme }: IntroductionProps) => {
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const isDark = theme === "dark";

  const border = isDark ? "border-white/10" : "border-black/10";
  const secondaryBg = isDark ? "bg-[#111111]" : "bg-[#FFFFFF]";
  const accent = "#FF6A2A";
  const subtle = isDark ? "text-[#A0A0A0]" : "text-[#555555]";

  return (
    <div className={isDark ? "text-[#EAEAEA]" : "text-[#1A1A1A]"}>
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        className="mb-10 flex max-w-[93%] mx-auto"
      >
        <section className="relative min-h-screen overflow-hidden text-left px-6 pb-10 pt-32 sm:pt-36">
          <div className="mx-auto block gap-5">
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7 }}
                className={`mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] ${secondaryBg} ${border}`}
                style={{ color: accent }}
              >
                <span
                  className=" h-1.5 w-1.5 animate-pulse rounded-full"
                  style={{ backgroundColor: accent }}
                />
                Available for new projects
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mb-6 max-w-6xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl"
              >
                <div className="max-w-3xl">
                  Product designer shaping
                  <br />
                  scalable digital products through{" "}
                  <span className="relative" style={{ color: accent }}>
                    strategy
                    <span
                      className="absolute bottom-1 left-0 right-0 -z-10 h-2 rounded-sm opacity-30"
                      style={{ backgroundColor: accent }}
                    />
                  </span>
                  ,{" "}
                  <span className="relative" style={{ color: accent }}>
                    systems
                    <span
                      className="absolute bottom-1 left-0 right-0 -z-10 h-2 rounded-sm opacity-30"
                      style={{ backgroundColor: accent }}
                    />
                  </span>
                  , and{" "}
                  <span className="relative" style={{ color: accent }}>
                    execution
                    <span
                      className="absolute bottom-1 left-0 right-0 -z-10 h-2 rounded-sm opacity-30"
                      style={{ backgroundColor: accent }}
                    />
                  </span>
                  .
                </div>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className={`reveal mb-10 max-w-[520px] text-lg leading-8 ${subtle}`}
              >
                I design and lead product experiences from idea to launch —
                combining product thinking, design execution, and facilitation
                to help teams build solutions that deliver real impact.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <a
                  href="#work"
                  className="inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(255,106,42,0.3)] transition hover:-translate-y-0.5 hover:bg-[#E55A1F]"
                  style={{ backgroundColor: accent }}
                >
                  View Portfolio <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className={`inline-flex items-center justify-center gap-2 rounded-lg border px-7 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5 hover:text-[#FF6A2A] ${border} ${isDark ? "text-[#EAEAEA] hover:border-[#FF6A2A]" : "text-[#1A1A1A] hover:border-[#FF6A2A]"}`}
                >
                  <ExternalLink className="h-4 w-4" />
                  Download Resume
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.section>
    </div>
  );
};

export default Introduction;

function FloatingCard({
  className,
  delay,
  isDark,
  accent,
  title,
  subtitle,
  badgeList,
  progress,
  avatar = "AJ",
  avatarColor,
}: {
  className?: string;
  delay: string;
  isDark: boolean;
  accent: string;
  title: string;
  subtitle: string;
  badgeList: string[];
  progress: number[];
  avatar?: string;
  avatarColor?: string;
}) {
  const card = isDark
    ? "bg-[rgba(17,17,17,0.7)] border-white/8 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
    : "bg-[rgba(255,255,255,0.75)] border-black/5 shadow-[0_8px_32px_rgba(0,0,0,0.08)]";

  return (
    <div
      className={`animate-[float_6s_ease-in-out_infinite] rounded-2xl border p-6 backdrop-blur-xl ${card} ${className ?? ""}`}
      style={{ animationDelay: delay }}
    >
      <div className="mb-4 flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white"
          style={{
            background:
              avatarColor ?? `linear-gradient(135deg, ${accent}, #FF8550)`,
          }}
        >
          {avatar}
        </div>
        <div>
          <h4 className="mb-0.5 text-sm font-semibold">{title}</h4>
          <span className="text-xs text-[#666666]">{subtitle}</span>
        </div>
      </div>

      {progress.map((value, index) => (
        <div
          key={index}
          className={`mb-2 h-1.5 rounded-full ${isDark ? "bg-[#1A1A1A]" : "bg-[#F0F1F3]"}`}
        >
          <div
            className="h-full rounded-full"
            style={{
              width: `${value}%`,
              background: `linear-gradient(90deg, ${accent}, #FF8550)`,
              boxShadow: `0 0 24px rgba(255, 106, 42, 0.15)`,
            }}
          />
        </div>
      ))}

      <div className="mt-4 flex flex-wrap gap-2">
        {badgeList.map((badge) => (
          <span
            key={badge}
            className={`rounded-md px-2.5 py-1 text-[0.7rem] font-medium ${
              isDark
                ? "bg-[#1A1A1A] text-[#A0A0A0]"
                : "bg-[#F0F1F3] text-[#666666]"
            }`}
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}
