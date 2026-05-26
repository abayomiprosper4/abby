"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import Socials from "@/components/Socials";
import driveIcon from "../../../public/assets/icons/drive.svg";

type Theme = "dark" | "light";
const Facilitation = () => {
  const [theme, setTheme] = useState<Theme>("dark");

  // 1. Theme Persistence Logic
  useEffect(() => {
    const savedTheme =
      (localStorage.getItem("theme") as Theme | null) || "dark";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
      // --- Dynamic Theme Variables ---
  const isDark = theme === "dark";
  const accent = "#27A810";
  const themeStyles = {
    surface: isDark
      ? "bg-[#0B0B0B] text-[#EAEAEA]"
      : "bg-[#F8F9FB] text-[#1A1A1A]",
    card: isDark
      ? "bg-[#111111] border-[rgba(255,255,255,0.08)] shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
      : "bg-[#FFFFFF] border-[rgba(0,0,0,0.06)] shadow-[0_8px_32px_rgba(0,0,0,0.08)]",
    heading: isDark ? "text-white" : "text-[#1A1A1A]",
    subtle: isDark ? "text-[#9b9b9b]" : "text-[#1f1f1f]",
    muted: isDark ? "text-[#666666]" : "text-[#888888]",
    border: isDark
      ? "border-[rgba(255,255,255,0.08)]"
      : "border-[rgba(0,0,0,0.06)]",
    borderHover: isDark
      ? "hover:border-[rgba(255,255,255,0.15)]"
      : "hover:border-[rgba(0,0,0,0.12)]",
    secondaryBg: isDark ? "bg-[#111111]" : "bg-[#FFFFFF]",
    tertiaryBg: isDark ? "bg-[#1A1A1A]" : "bg-[#F0F1F3]",
  };
  // -------------------------------
  return (
    <div className={`${themeStyles.surface} min-h-screen flex flex-col pt-8`}>
      <div className="w-full mx-auto">
        <Header theme={theme} setTheme={setTheme} />
        <main>
          <div>
            <Introduction theme={theme} />
            <p className={`w-[90%] mx-auto text-lg md:text-2xl leading-8 ${themeStyles.subtle} mb-24`}>
              I am a self taught design thinking facilitator with over a year of
              professional experience.
            </p>
          </div>
          <section className="mx-auto w-[90%] grid gap-y-20 gap-x-40 md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">
            <article className="md:min-w-96">
              <header>
                <h2 className="text-2xl border-b-2 border-[hsl(15deg,100%,50%)] pb-3 mb-4">
                  Orvalon Digital
                </h2>
                <p className="italic font-light text-lg mb-6">
                  Startup Incubation - Design Thinking Facilitator
                </p>
              </header>
              <p className="italic font-extralight text-lg mb-10">
                I worked with designers engineers, project managers and team
                leads across Nithub to develop start-up ideas and turn them into
                products.
              </p>
              <ol className="list-decimal list-inside font-extralight italic text-lg text-gray-700 bg-gray-300/[0.21] rounded-3xl py-10 px-5">
                <li>
                  Led and facilitated collaborative design thinking workshops,
                  guiding participants through the entire process, from problem
                  definition to testing.
                </li>
                <li>
                  Promoted teamwork by closely collaborating with
                  cross-functional teams, uniting individuals with diverse
                  expertise and perspectives.
                </li>
              </ol>
            </article>
            <article className="md:min-w-96">
              <header>
                <h2 className="text-2xl border-b-2 border-[hsl(208deg,82%,45%)] pb-3 mb-4">
                  Nithub Design
                </h2>
                <p className="italic font-light text-lg mb-6">
                  UX Strategist - Design Thinking Facilitator
                </p>
              </header>
              <p className="italic font-extralight text-lg mb-10">
                I worked with designers engineers, project managers and team
                leads across Nithub to develop start-up ideas and turn them into
                products.
              </p>
              <ol className="list-decimal list-inside font-extralight italic text-lg text-gray-700 bg-gray-300/[0.21] rounded-3xl py-10 px-5">
                <li>
                  Led and facilitated collaborative design thinking workshops,
                  guiding participants through the entire process, from problem
                  definition to testing.
                </li>
                <li>
                  Promoted teamwork by closely collaborating with
                  cross-functional teams, uniting individuals with diverse
                  expertise and perspectives.
                </li>
              </ol>
            </article>
            <article className="md:min-w-96">
              <header>
                <h2 className="text-2xl border-b-2 border-[hsl(169deg,94%,31%)] pb-3 mb-4">
                  ODJ Tech
                </h2>
                <p className="italic font-light text-lg mb-6">
                  Start-Up Incubation - Design Thinking Facilitator
                </p>
              </header>
              <p className="italic font-extralight text-lg mb-10">
                I worked with designers engineers, project managers and team
                leads across ithub to develop start-up ideas and turn them into
                products.
              </p>
              <ol className="list-decimal list-inside font-extralight italic text-lg text-gray-700 bg-gray-300/[0.21] rounded-3xl py-10 px-5">
                <li>
                  Led and facilitated collaborative design thinking workshops,
                  guiding participants through the entire process, from problem
                  definition to testing.
                </li>
                <li>
                  Promoted teamwork by closely collaborating with
                  cross-functional teams, uniting individuals with diverse
                  expertise and perspectives.
                </li>
              </ol>
            </article>
            <a
              href="https://drive.google.com/drive/folders/1oV1DZzaO0hQViWnUjT_XbfOjZ_ZfpYWc?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
              className="self-end bg-gray-300/[0.21] rounded-3xl grid gap-6 place-content-center place-items-center p-6 md:h-[317px]"
            >
              <Image src={driveIcon} alt="" />
              <p className="italic font-extralight text-base leading-6 max-w-[370px]">
                Check out links to some of the slides and images from several
                design thinking workshops I have hosted.
              </p>
            </a>
          </section>

          <div className="pt-40 pb-8">
            <Socials />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Facilitation;
