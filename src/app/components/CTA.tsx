"use client";
import { useState } from "react";
import { CalendarDays, ExternalLink, Mail } from "lucide-react";
import SlidingBtn from "./SlidingBtn";

type Theme = "dark" | "light";
interface CTAProps {
  theme: Theme;
}

const CTA = ({ theme }: CTAProps) => {
  const isDark = theme === "dark";
  const accent = "#FF6A2A";

  return (
    <section id="contact" className="px-6 py-28 text-center">
      <div className="mx-auto max-w-[800px]">
        <div className="reveal opacity-0 translate-y-8">
          <h2 className="mb-6 text-3xl font-bold tracking-[-0.03em] sm:text-5xl">
            Let&apos;s create <span style={{ color: accent }}>thoughtful</span>{" "}
            digital experiences together.
          </h2>

          <div className="flex flex-col justify-center mt-10 gap-4 sm:flex-row">
            <div
              className="inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#E55A1F]"
              style={{ backgroundColor: accent }}
            >
              <SlidingBtn
                href="mailto:hello@abisolajegede.com"
                variant="solid"
                accent={accent}
                isDark={isDark}
                text="View more works"
                icon={<Mail className="h-4 w-4" />}
                iconPosition="right"
              />
            </div>
            <div
              className={`inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#FF6A2A]`}
              style={{ backgroundColor: accent }}
            >
              <SlidingBtn
                href="#"
                variant="solid"
                accent={accent}
                isDark={isDark}
                text="Book a Call"
                icon={<CalendarDays className="h-4 w-4" />}
                iconPosition="right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
