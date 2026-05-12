"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { Moon, SunMedium, X } from "lucide-react";

type Theme = "dark" | "light";

interface HeaderProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export default function Header({ theme, setTheme }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const revealedElements = useRef(new Set<HTMLElement>());

  useEffect(() => {
    const savedTheme =
      (localStorage.getItem("theme") as Theme | null) || "dark";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  const surface = isDark
    ? "bg-[#0B0B0B] text-[#EAEAEA]"
    : "bg-[#F8F9FB] text-[#1A1A1A]";
  const subtle = isDark ? "text-[#A0A0A0]" : "text-[#555555]";
  const border = isDark ? "border-white/10" : "border-black/10";
  const secondaryBg = isDark ? "bg-[#111111]" : "bg-[#FFFFFF]";
  const tertiaryBg = isDark ? "bg-[#1A1A1A]" : "bg-[#F0F1F3]";
  const accent = "#FF6A2A";

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`mx-auto font-space fixed top-0 left-0 right-0 z-[100] flex justify-between px-6 md:px-16 items-center py-6 transition-colors duration-300`}
    >
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? `${secondaryBg}/80 backdrop-blur-xl` : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[93%] items-center justify-between px-6 py-5">
          <a
            href="#top"
            className={`text-xl font-bold tracking-tight transition-colors ${
              isDark
                ? "text-[#EAEAEA] hover:text-[#FF6A2A]"
                : "text-[#1A1A1A] hover:text-[#FF6A2A]"
            }`}
          >
            Abisola Jegede
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {["work", "about", "Blog", "Facilitation", "Playground"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={`${subtle} relative text-sm font-medium transition-colors hover:text-[var(--accent)]`}
                  style={{ ["--accent" as never]: accent }}
                >
                  {item[0].toUpperCase() + item.slice(1)}
                  <span
                    className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full"
                    style={{ ["--accent" as never]: accent }}
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className={`relative hidden h-[26px] w-12 rounded-full ${tertiaryBg} p-[3px] transition hover:border-[var(--accent)] sm:flex`}
            >
              <span
                className={`absolute left-[3px] top-[3px] flex h-5 w-5 items-center justify-center rounded-full text-white shadow-md transition-transform duration-500 ${
                  isDark ? "translate-x-0" : "translate-x-[22px]"
                }`}
                style={{
                  backgroundColor: accent,
                  boxShadow: `0 2px 8px rgba(255, 106, 42, 0.3)`,
                }}
              >
                {isDark ? (
                  <Moon className="h-3 w-3" />
                ) : (
                  <SunMedium className="h-3 w-3" />
                )}
              </span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(255,106,42,0.3)] transition hover:-translate-y-0.5 hover:bg-[#E55A1F]"
              style={{ backgroundColor: accent }}
            >
              Contact Me
            </a>

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="inline-flex flex-col gap-1.5 p-1 md:hidden"
            >
              <span
                className={`h-0.5 w-6 ${isDark ? "bg-[#EAEAEA]" : "bg-[#1A1A1A]"}`}
              />
              <span
                className={`h-0.5 w-6 ${isDark ? "bg-[#EAEAEA]" : "bg-[#1A1A1A]"}`}
              />
              <span
                className={`h-0.5 w-6 ${isDark ? "bg-[#EAEAEA]" : "bg-[#1A1A1A]"}`}
              />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 transition-opacity duration-300 md:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        } ${surface}`}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
          className={`absolute right-6 top-6 rounded-full p-2 ${secondaryBg} ${border} border`}
        >
          <X
            className={`h-7 w-7 ${isDark ? "text-[#EAEAEA]" : "text-[#1A1A1A]"}`}
          />
        </button>

        {["work", "strategy", "facilitation", "about", "contact"].map(
          (item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMobileOpen(false)}
              className={`text-2xl font-semibold tracking-tight transition-colors ${isDark ? "text-[#EAEAEA]" : "text-[#1A1A1A]"} hover:text-[#FF6A2A]`}
            >
              {item[0].toUpperCase() + item.slice(1)}
            </a>
          ),
        )}

        <a
          href="#contact"
          onClick={() => setMobileOpen(false)}
          className="inline-flex items-center rounded-lg px-6 py-3 text-sm font-semibold text-white"
          style={{ backgroundColor: accent }}
        >
          Contact Me
        </a>
      </div>
    </motion.header>
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
