"use client";

import { useEffect, useMemo, useRef } from "react";
import {
  ChartNoAxesCombined,
  ChevronRight,
  CircleDot,
  Mail,
  Play,
  Sparkles,
} from "lucide-react";

type Theme = "dark" | "light";
type WorkItem = {
  tags: string[];
  title: string;
  description: string;
  icon: React.ReactNode;
};

interface WorksProps {
  theme: Theme;
}
const workItems: WorkItem[] = useMemo(
  () => [
    {
      tags: ["Product Design", "Strategy"],
      title: "Enterprise Dashboard Platform",
      description:
        "Redesigned a complex analytics dashboard used by 50K+ users, improving task completion rates by over 40% through strategic UX restructuring.",
      icon: <ChartNoAxesCombined className="h-7 w-7" />,
    },
    {
      tags: ["Mobile", "UX Research"],
      title: "Fintech Mobile Experience",
      description:
        "Led end-to-end design for a fintech app serving emerging markets, focusing on accessibility and trust-building patterns.",
      icon: <Sparkles className="h-7 w-7" />,
    },
    {
      tags: ["Design System", "Systems"],
      title: "Component Library & Tokens",
      description:
        "Built a scalable design system with 200+ components and token architecture, reducing design-to-dev handoff time by 60%.",
      icon: <CircleDot className="h-7 w-7" />,
    },
    {
      tags: ["Facilitation", "Workshop"],
      title: "Cross-Functional Alignment",
      description:
        "Designed and facilitated a 3-day product strategy workshop aligning 5 teams on roadmap priorities for a B2B SaaS platform.",
      icon: <ChevronRight className="h-7 w-7 rotate-90" />,
    },
  ],
  [],
);
const Works = ({ theme }: WorksProps) => {
  const revealedElements = useRef(new Set<HTMLElement>());

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const revealEls = document.querySelectorAll<HTMLElement>("#work .reveal");

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

  const border = isDark ? "border-white/10" : "border-black/10";
  const secondaryBg = isDark ? "bg-[#111111]" : "bg-[#FFFFFF]";
  const accent = "#FF6A2A";
  const subtle = isDark ? "text-[#A0A0A0]" : "text-[#555555]";

  return (
    <section id="work" className="px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="reveal mb-14">
          <span
            className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.16em]"
            style={{ color: accent }}
          >
            Selected Work
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
            Projects that define craft and impact
          </h2>
          <p className={`max-w-2xl text-lg leading-8 ${themeStyles.subtle}`}>
            A curated selection of product design work spanning enterprise
            platforms, consumer apps, and design systems.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {workItems.map((item) => (
            <article
              key={item.title}
              className={`reveal group overflow-hidden rounded-[20px] border transition-all duration-300 hover:-translate-y-2 ${themeStyles.card} ${themeStyles.borderHover} opacity-0 translate-y-8`}
            >
              <div className="relative flex h-[240px] items-center justify-center overflow-hidden bg-gradient-to-br from-transparent to-black/5">
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,106,42,0.1)] to-transparent" />
                <div
                  className={`relative flex h-16 w-16 items-center justify-center rounded-2xl border ${themeStyles.border} ${themeStyles.secondaryBg}`}
                  style={{ color: accent }}
                >
                  {item.icon}
                </div>
              </div>
              <div className="p-7">
                <div className="mb-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-md px-3 py-1 text-[0.75rem] font-semibold ${themeStyles.tertiaryBg} ${themeStyles.subtle}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mb-2 text-xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className={`text-sm leading-7 ${themeStyles.subtle}`}>
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Works;
