"use client";
import { useState } from "react";
import { CalendarDays, ExternalLink, Mail } from "lucide-react";

type Theme = "dark" | "light";
interface CTAProps {
  theme: Theme;
}

const CTA = ({ theme }: CTAProps) => {

  const accent = "#FF6A2A";

  return (
    <section id="contact" className="px-6 py-28 text-center">
      <div className="mx-auto max-w-[800px]">
        <div className="reveal opacity-0 translate-y-8">
          <h2 className="mb-6 text-3xl font-bold tracking-[-0.03em] sm:text-5xl">
            Let&apos;s create <span style={{ color: accent }}>thoughtful</span> digital experiences together.
          </h2>

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
