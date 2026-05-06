"use client";

import { useEffect, useMemo, useRef } from "react";
import { Play } from "lucide-react";


type Theme = "dark" | "light";
type MotionItem = {
  title: string;
  description: string;
};

interface MotionCraftProps {
  theme: Theme;
}

const MotionCraft = ({ theme }: MotionCraftProps) => {
  const revealedElements = useRef(new Set<HTMLElement>());
  
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const revealEls = document.querySelectorAll<HTMLElement>("#facilitation .reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
            revealedElements.current.add(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    revealEls.forEach((el) => {
      if (revealedElements.current.has(el)) {
        el.classList.add("opacity-100", "translate-y-0");
        el.classList.remove("opacity-0", "translate-y-8");
      } else {
        const rect = el.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isInViewport) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-8");
          revealedElements.current.add(el);
        } else {
          observer.observe(el);
        }
      }
    });

    return () => observer.disconnect();
  }, [theme]);

  const isDark = theme === "dark";
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
    const motionItems: MotionItem[] = useMemo(
    () => [
      {
        title: "Onboarding Flow Animation",
        description:
          "Micro-interactions guiding users through a fintech onboarding experience",
      },
      {
        title: "Dashboard State Transitions",
        description:
          "Seamless transitions between data views in an analytics platform",
      },
      {
        title: "Component Motion System",
        description: "A systematic approach to motion within a design system",
      },
      {
        title: "Workshop Facilitation Reel",
        description:
          "Behind the scenes of design sprint facilitation and team alignment",
      },
    ],
    [],
  );
  const border = isDark ? "border-white/10" : "border-black/10";
  const secondaryBg = isDark ? "bg-[#111111]" : "bg-[#FFFFFF]";
  const accent = "#FF6A2A";
  const subtle = isDark ? "text-[#A0A0A0]" : "text-[#555555]";

  return (      
      <section
          id="facilitation"
          className={`px-6 py-24 ${themeStyles.secondaryBg}`}
        >
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-14">
              <span
                className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.16em]"
                style={{ color: accent }}
              >
                Motion & Craft
              </span>
              <h2 className="mb-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
                Bringing interfaces to life
              </h2>
              <p
                className={`max-w-2xl text-lg leading-8 ${themeStyles.subtle}`}
              >
                Motion is not decoration — it&apos;s communication. Here are
                some explorations in product animation and interaction design.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {motionItems.map((item) => (
                <div
                  key={item.title}
                  className={`reveal group overflow-hidden rounded-[20px] border transition-all duration-300 hover:-translate-y-1.5 opacity-0 translate-y-8 ${themeStyles.card} ${themeStyles.border} hover:border-[#FF6A2A]/30 ${isDark ? "hover:shadow-[0_20px_50px_rgba(255,106,42,0.1)]" : "hover:shadow-2xl"}`}
                >
                  <div
                    className={`relative aspect-video flex items-center justify-center overflow-hidden ${themeStyles.tertiaryBg}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,106,42,0.08)] to-transparent pointer-events-none" />

                    <div
                      className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: accent,
                        boxShadow: `0 4px 24px rgba(255, 106, 42, 0.4)`,
                      }}
                    >
                      <Play className="ml-1 h-6 w-6 fill-current" />
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="mb-2 text-lg font-semibold tracking-tight">
                      {item.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${themeStyles.muted}`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
};

export default MotionCraft;