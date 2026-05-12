"use client";

import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import Socials from "@/components/Socials";
import BackToTopBtn from "./components/BacktoTopBtn";
import { useEffect, useMemo, useState, useRef } from "react";
import {
  CalendarDays,
  ChartNoAxesCombined,
  ChevronRight,
  CircleDot,
  Mail,
  Play,
  Sparkles,
} from "lucide-react";
import MotionCraft from "./components/MotionCraft";
import Works from "./components/Works";

type Theme = "dark" | "light";


type ServiceItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export default function Page() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mobileOpen, setMobileOpen] = useState(false);
  const revealedElements = useRef(new Set<HTMLElement>());


  useEffect(() => {
    const savedTheme =
      (localStorage.getItem("theme") as Theme | null) || "dark";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const revealEls = document.querySelectorAll<HTMLElement>(".reveal");

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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

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


  const services: ServiceItem[] = useMemo(
    () => [
      {
        title: "Product Design",
        description:
          "From wireframes to high-fidelity prototypes, I craft interfaces that balance aesthetics with usability. I specialize in complex workflows and design systems.",
        icon: <Sparkles className="h-6 w-6" />,
      },
      {
        title: "Product Strategy",
        description:
          "I translate business goals into product direction. Through research and roadmapping, I help teams focus on what moves the needle.",
        icon: <ChartNoAxesCombined className="h-6 w-6" />,
      },
      {
        title: "Design thinking Facilitation",
        description:
          "I lead workshops that align stakeholders, and accelerate decision-making from design sprints to discovery sessions.",
        icon: <UsersIcon />,
      },
      {
        title: "Motion Design",
        description:
          "Thoughtful motion design that guides users and provides feedback. Micro-interactions, transitions, and prototype animations.",
        icon: <Play className="h-6 w-6" />,
      },
    ],
    [],
  );


  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${themeStyles.surface}`}
      style={{
        backgroundImage: isDark
          ? "radial-gradient(ellipse at 30% 20%, rgba(255, 106, 42, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(255, 106, 42, 0.05) 0%, transparent 50%)"
          : "radial-gradient(ellipse at 30% 20%, rgba(255, 106, 42, 0.06) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(255, 106, 42, 0.03) 0%, transparent 50%)",
      }}
    >
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        ::selection {
          background: ${accent};
          color: white;
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: ${isDark ? "#0B0B0B" : "#F8F9FB"};
        }
        ::-webkit-scrollbar-thumb {
          background: ${isDark ? "#666666" : "#aaaaaa"};
          border-radius: 999px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: ${accent};
        }
      `}</style>
      <Header theme={theme} setTheme={setTheme} />

      <main id="top">
        <Introduction theme={theme} />
        <Works theme={theme} />
        <MotionCraft theme={theme} />
        {/* Strategy / Services */}
       <section
  id="strategy"
  className={`px-6 py-24 ${themeStyles.secondaryBg}`}
>
  <div className="mx-auto max-w-[1200px]">
    <div className="reveal mb-14">
      <span
        className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.16em]"
        style={{ color: accent }}
      >
        What I Do
      </span>
      <h2 className="mb-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
        Designing products and helping teams move ideas forward.
      </h2>
      <p className={`max-w-2xl text-lg leading-8 ${themeStyles.subtle}`}>
        I bring a unique blend of design craft, strategic thinking, and
        team enablement to every engagement.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <div key={service.title} className="reveal">
          <ServiceCard
            service={service}
            isDark={isDark}
            accent={accent}
            themeStyles={themeStyles}
          />
        </div>
      ))}
    </div>
  </div>
</section>
        <section id="about" className="px-6 py-24">
          <div className="mx-auto grid max-w-[1200px] gap-20 lg:grid-cols-2 lg:items-center">
            <div className="reveal">
              <div
                className={`relative overflow-hidden rounded-[24px] border p-8 ${themeStyles.card} ${themeStyles.border}`}
              >
                <div
                  className="absolute inset-[-50%] opacity-50"
                  style={{
                    background: isDark
                      ? "radial-gradient(circle, rgba(255,106,42,0.18) 0%, transparent 70%)"
                      : "radial-gradient(circle, rgba(255,106,42,0.14) 0%, transparent 70%)",
                  }}
                />
                <div className="relative aspect-[4/5] rounded-2xl bg-gradient-to-br from-black/5 to-black/10 flex items-center justify-center">
                  <span
                    className="text-7xl font-bold tracking-[-0.04em] opacity-15 sm:text-8xl"
                    style={{ color: accent }}
                  >
                    AJ
                  </span>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  ["8+", "Years Experience"],
                  ["40+", "Products Shipped"],
                  ["15+", "Design Systems"],
                  ["100+", "Workshops Led"],
                ].map(([num, label]) => (
                  <div
                    key={label}
                    className={`rounded-xl border p-5 text-center transition hover:-translate-y-1 ${themeStyles.card} ${themeStyles.borderHover}`}
                  >
                    <div
                      className="mb-1 text-3xl font-bold tracking-tight"
                      style={{ color: accent }}
                    >
                      {num}
                    </div>
                    <div className={`text-xs font-medium ${themeStyles.muted}`}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal opacity-0 translate-y-8">
              <span
                className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.16em]"
                style={{ color: accent }}
              >
                About Me
              </span>
              <h2 className="mb-6 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
                I bridge the gap between vision and execution
              </h2>
              <div
                className={`space-y-5 text-lg leading-8 ${themeStyles.subtle}`}
              >
                <p>
                  I&apos;m{" "}
                  <span className="font-semibold text-inherit">
                    Abisola Jegede
                  </span>{" "}
                  — a product designer and innovation lead with a background in
                  systems thinking. I architect experiences that solve real
                  problems.
                </p>
                <p>
                  My approach combines rigorous research with bold creative
                  vision. I&apos;ve led design for products used by millions and
                  built design systems from scratch.
                </p>
                <p>
                  My goal remains the same:{" "}
                  <span
                    className="font-semibold"
                    style={{ color: isDark ? "#EAEAEA" : "#1A1A1A" }}
                  >
                    build products that matter
                  </span>
                  .
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#E55A1F]"
                  style={{ backgroundColor: accent }}
                >
                  Let&apos;s Work Together
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="px-6 py-28 text-center">
          <div className="mx-auto max-w-[700px]">
            <div className="reveal opacity-0 translate-y-8">
              <h2 className="mb-6 text-3xl font-bold tracking-[-0.03em] sm:text-5xl">
                Let&apos;s build meaningful products together.
              </h2>
              <p className={`mb-10 text-lg leading-8 ${themeStyles.subtle}`}>
                I&apos;m currently open to new opportunities and strategic
                design challenges.
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
                  className={`inline-flex items-center justify-center gap-2 rounded-lg border px-7 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5 hover:text-[#FF6A2A] ${themeStyles.border} ${isDark ? "text-[#EAEAEA] hover:border-[#FF6A2A]" : "text-[#1A1A1A] hover:border-[#FF6A2A]"}`}
                >
                  <CalendarDays className="h-4 w-4" />
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>
        </section>

        <Socials />
        <BackToTopBtn />
      </main>
    </div>
  );
}

// Sub-components
function ServiceCard({
  service,
  isDark,
  accent,
  themeStyles,
}: {
  service: ServiceItem;
  isDark: boolean;
  accent: string;
  themeStyles: any;
}) {
  return (
    <article
      className={`reveal relative overflow-hidden rounded-[20px] border p-10 transition-all duration-300 hover:-translate-y-1 ${themeStyles.card} ${themeStyles.borderHover}`}
    >
      <div
        className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border ${
          isDark ? "border-white/10" : "border-black/5"
        }`}
        style={{
          background: `linear-gradient(135deg, rgba(255,106,42,0.16), transparent)`,
          color: accent,
        }}
      >
        {service.icon}
      </div>
      <h3 className="mb-3 text-2xl font-semibold tracking-tight">
        {service.title}
      </h3>
      <p className={`text-sm leading-7 ${themeStyles.subtle}`}>
        {service.description}
      </p>
      <div className="absolute left-0 right-0 top-0 h-1 scale-x-0 bg-gradient-to-r from-[#FF6A2A] to-[#FF8550] transition-transform duration-300 group-hover:scale-x-100" />
    </article>
  );
}

function UsersIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  );
}
