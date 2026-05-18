"use client";
import { useState } from "react";
import { CalendarDays, ExternalLink, Mail } from "lucide-react";

type Theme = "dark" | "light";
interface CTAProps {
  theme: Theme;
}

const CTA = ({ theme }: CTAProps) => {

  const isDark = theme === "dark";
  const accent = "#FF6A2A";

  const themeStyles = {
    surface: isDark
      ? "bg-[#0B0B0B] text-[#EAEAEA]"
      : "bg-[#F8F9FB] text-[#1A1A1A]",
    card: isDark
      ? "bg-[#111111] border-white/10 shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
      : "bg-white border-black/5 shadow-[0_8px_32px_rgba(0,0,0,0.08)]",
    subtle: isDark ? "text-[#A0A0A0]" : "text-[#555555]",
    muted: isDark ? "text-[#666666]" : "text-[#888888]",
    border: isDark ? "border-white/10" : "border-black/10",
    borderHover: isDark ? "hover:border-white/15" : "hover:border-black/20",
    secondaryBg: isDark ? "bg-[#111111]" : "bg-[#FFFFFF]",
    tertiaryBg: isDark ? "bg-[#1A1A1A]" : "bg-[#F0F1F3]",
  };

  return (
    <section id="contact" className="px-6 py-28 text-center">
      <div className="mx-auto max-w-[700px]">
        <div className="reveal opacity-0 translate-y-8">
          <h2 className="mb-6 text-3xl font-bold tracking-[-0.03em] sm:text-5xl">
            Let&apos;s build meaningful products together.
          </h2>
          <p className={`mb-10 text-lg leading-8 ${themeStyles.subtle}`}>
            I&apos;m currently open to new opportunities and strategic design
            challenges.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@abisolajegede.com"
              className="inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#E55A1F]"
              style={{ backgroundColor: accent }}
            >
              <Mail className="h-4 w-4" />
              Get In Touch
            </a>
            <a
              href="#"
              className={`inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#FF6A2A]`}
              style={{ backgroundColor: accent }}
            >
              <CalendarDays className="h-4 w-4" />
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
