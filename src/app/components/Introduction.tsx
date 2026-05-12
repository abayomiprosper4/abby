"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import { ArrowRight, Volume2Icon, ExternalLink } from "lucide-react";

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
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayAudio = () => {
    if (!audioRef.current) return;
    audioRef.current.paused ? audioRef.current.play() : audioRef.current.pause();
  };

  return (
    <div className={isDark ? "text-[#EAEAEA]" : "text-[#1A1A1A]"}>
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        className="flex items-center max-w-[93%] mx-auto"
      >
        <section className="relative min-h-screen flex flex-col justify-center 
                          overflow-hidden text-left px-6 py-20 w-full">
          <div className="mx-auto w-full">
            <div className="relative z-10 flex flex-col md:flex-row 
                          justify-between items-start gap-8">

              <div className="flex-1">
                <motion.div className="mb-2 text-lg font-medium opacity-80">
                  I am Abisola Jegede
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="mb-6 max-w-5xl text-4xl font-bold leading-[1.05] 
                           tracking-[-0.08em] sm:text-4xl lg:text-5xl"
                >
                  Product designer focused on innovation,
                  <br />
                  <span className="relative" style={{ color: accent }}>
                    facilitation
                    <span
                      className="absolute bottom-1 left-0 right-0 -z-10 h-2 
                               rounded-sm opacity-30"
                      style={{ backgroundColor: accent }}
                    />
                  </span>
                  , and scalable solutions.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className={`reveal mb-10 max-w-4xl md:text-xl text-md leading-8 ${subtle}`}
                >
                  I use product design, design thinking, and facilitation to 
                  help organizations build solutions that are practical, 
                  human-centered, and aligned with strategic goals.
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
                    className="inline-flex items-center justify-center gap-2 
                             rounded-lg px-7 py-3.5 text-sm font-semibold 
                             text-white shadow-[0_4px_16px_rgba(255,106,42,0.3)] 
                             transition hover:-translate-y-0.5 
                             hover:bg-[#E55A1F]"
                    style={{ backgroundColor: accent }}
                  >
                    View Portfolio <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className={`inline-flex items-center justify-center gap-2 
                               rounded-lg border px-7 py-3.5 text-sm 
                               font-semibold transition hover:-translate-y-0.5 
                               hover:text-[#FF6A2A] ${border} ${
                                 isDark 
                                   ? "text-[#EAEAEA] hover:border-[#FF6A2A]" 
                                   : "text-[#1A1A1A] hover:border-[#FF6A2A]"
                               }`}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Download Resume
                  </a>
                </motion.div>
              </div>

              <div className="flex flex-col md:text-center items-start md:items-start gap-1 pt-1">
                <div className="flex items-center gap-2">
                  <label className={`text-lg font-medium tracking-tight ${
                    isDark ? 'text-neutral-100' : 'text-neutral-900'
                  }`}>
                    Pronunciation
                  </label>
                  <button
                    onClick={handlePlayAudio}
                    className="w-fit rounded-full bg-white p-2 shadow-sm 
                             transition-colors hover:bg-neutral-50 
                             active:bg-neutral-200"
                  >
                    <Volume2Icon className="h-4 w-4 text-white" />
                  </button>
                </div>
                <audio
                  ref={audioRef}
                  src="/assets/audio/Pronunciation.mp3"
                  className="hidden"
                />
                <p className="text-lg text-neutral-500 font-mono 
                           tracking-widest uppercase">
                  /Ah: bi: soh: la/
                </p>
              </div>

            </div>
          </div>
        </section>
      </motion.section>
    </div>
  );
};

export default Introduction;