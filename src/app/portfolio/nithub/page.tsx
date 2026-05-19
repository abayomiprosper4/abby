"use client";

import Header from "@/components/Header";
import Socials from "@/components/Socials";
import ProbStatement from "@/components/ProbStatement";
import Link from "next/link";
import BackToTopBtn from "@/components/BacktoTopBtn";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { DotIcon } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(TextPlugin, ScrollTrigger);
}

type Theme = "dark" | "light";

interface NithubWebsiteProps {
  theme: Theme;
}

const NithubWebsitePage = ({}: NithubWebsiteProps) => {
  const titlePart1Ref = useRef<HTMLSpanElement>(null);
  const titlePart2Ref = useRef<HTMLSpanElement>(null);
  const challengeRef = useRef<HTMLHeadingElement>(null);
  const approachRef = useRef<HTMLParagraphElement>(null);
  const quoteRef = useRef<HTMLHeadingElement>(null);
  const [theme, setTheme] = useState<Theme>("dark");

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
  const accent = "#FF6A2A";
  const themeStyles = {
    surface: isDark
      ? "bg-[#0B0B0B] text-[#EAEAEA]"
      : "bg-[#F8F9FB] text-[#1A1A1A]",
    card: isDark
      ? "bg-[#111111] border-[rgba(255,255,255,0.08)] shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
      : "bg-[#FFFFFF] border-[rgba(0,0,0,0.06)] shadow-[0_8px_32px_rgba(0,0,0,0.08)]",
    heading: isDark ? "text-white" : "text-[#1A1A1A]",
    subtle: isDark ? "text-[#A0A0A0]" : "text-[#555555]",
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

  useEffect(() => {
    const tl = gsap.timeline({ delay: 3.8 });
    tl.to(titlePart1Ref.current, {
      text: "Repositioning from a Training Platform to an ",
      duration: 1.5,
      ease: "none",
    }).to(
      titlePart2Ref.current,
      {
        text: "Innovation Ecosystem.",
        duration: 1.3,
        ease: "none",
      },
      "+=0.8",
    );

    gsap.to(challengeRef.current, {
      scrollTrigger: {
        trigger: challengeRef.current,
        start: "top 80%",
      },
      text: "The Design Challenge",
      duration: 1.5,
      ease: "none",
    });

    gsap.to(approachRef.current, {
      scrollTrigger: {
        trigger: approachRef.current,
        start: "top 80%",
      },
      text: "Rather than redesigning page by page, I approached the problem as a chance to restructure the ecosystem.",
      duration: 2.5,
      ease: "none",
    });

    gsap.to(quoteRef.current, {
      scrollTrigger: {
        trigger: quoteRef.current,
        start: "top 80%",
      },
      text: '"The problem was not just how Nithub looked, but how it was understood and managed."',
      duration: 2.5,
      ease: "none",
    });
  }, []);

  const bounceTransition = {
    type: "spring",
    bounce: 0.5,
    duration: 1.8,
  } as const;

  return (
    <>
      <div
        className={`${themeStyles.surface} pt-24 min-h-screen transition-colors duration-300`}
      >
        <Header theme={theme} setTheme={setTheme} />
        <motion.section
          initial={{ backgroundColor: isDark ? "#0B0B0B" : "#F8F9FB" }}
          animate={{ backgroundColor: isDark ? "#0D1830" : "#0D1830" }}
          transition={{ duration: 1 }}
          className="w-full h-[60vh] md:h-[80vh] flex items-end justify-center overflow-hidden relative px-4 pb-12"
        >
          <div className="z-10 flex justify-center">
            <img
              src="/assets/images/nithub-hero.png"
              alt="Nithub Website Redesign Dashboard"
              className="w-64 md:w-[100%] object-cover shadow-xl translate-y-16 block"
            />
          </div>
        </motion.section>
        <article className="max-w-full mx-auto py-24 font-sans overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...bounceTransition, delay: 2.5 }}
            className={`flex justify-between text-center items-baseline mx-auto max-w-6xl mb-12 border-b ${themeStyles.border} pb-6 px-4 xl:px-0 transition-colors duration-300`}
          >
            <h2
              className={`text-xl font-bold tracking-tight ${themeStyles.heading}`}
            >
              Nithub Website Redesign
            </h2>
            <div className="flex items-center gap-4">
              <span className={`${themeStyles.subtle}font-medium`}>2025</span>
              <Link href="#">
                <div className="bg-green-500 rounded p-3">Visit Website</div>
              </Link>
            </div>
          </motion.div>

          {/* 2. Headings use the headingText variable */}
          <h1
            className={`text-3xl md:text-5xl mx-auto max-w-6xl font-extrabold mb-20 tracking-tighter leading-[1.2] ${themeStyles.heading} px-4 xl:px-0 min-h-[3em]`}
          >
            <span ref={titlePart1Ref}></span>
            <span ref={titlePart2Ref} className="text-[#27A810]"></span>
          </h1>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.8, delayChildren: 3.8 },
              },
            }}
            className="space-y-12 mx-auto max-w-6xl mb-32 min-w-2xl px-4 xl:px-0"
          >
            <motion.section
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: bounceTransition },
              }}
            >
              <p
                className={`${themeStyles.subtle} text-xl leading-relaxed max-w-5xl`}
              >
                Transportation, Mobility | Product Designer |{" "}
                <span className="font-bold">
                  {" "}
                  Redefined the booking experience by reducing uncertainty and
                  improving the system feedback
                </span>
              </p>
            </motion.section>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: bounceTransition },
              }}
            >
              <p
                className={`${themeStyles.heading} text-3xl md:text-5xl leading-relaxed mb-6 max-w-5xl`}
              >
                Overview
              </p>
              <p
                className={`${themeStyles.subtle} text-lg leading-relaxed max-w-5xl`}
              >
                Nithub is an innovation hub supporting students, engineers,
                startups, and founders through programs, incubation, and
                community initiatives.
              </p>
              <p
                className={`${themeStyles.subtle} text-lg mt-4 leading-relaxed max-w-5xl`}
              >
                However, its digital presence told a different story.
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: bounceTransition },
              }}
            >
              <p
                className={`${themeStyles.subtle} text-2xl leading-relaxed font-semibold max-w-5xl`}
              >
                This project focused on redesigning the platform to accurately
                reflect Nithub&apos;s evolution while also enabling internal
                teams to manage and scale operations effectively.
              </p>
            </motion.div>
          </motion.div>

          <div className="space-y-24 md:space-y-32">
            <motion.section
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={bounceTransition}
              className="max-w-6xl mx-auto px-4 xl:px-0"
            >
              <h2
                className={`text-2xl md:text-3xl font-bold mb-8 ${themeStyles.heading}`}
              >
                The Situation
              </h2>
              <div className="space-y-8 max-w-6xl">
                <p
                  className={`text-2xl md:text-3xl font-medium ${themeStyles.heading} leading-snug transition-colors duration-300`}
                >
                  <p className="mb-4">
                    Nithub operates around three core pillars:
                  </p>{" "}
                  <p>&ndash; Training & Upskilling,</p>{" "}
                  <p>&ndash; Startup Incubation & Acceleration,</p>{" "}
                  <p>&ndash; Product Innovation.</p>
                </p>
                <p className={`${themeStyles.subtle} text-xl leading-relaxed`}>
                  However, at present, the existing website did not clearly
                  communicate how these pillars connected within the broader
                  ecosystem.
                </p>
                <p className={`${themeStyles.subtle} text-xl leading-relaxed`}>
                  While the platform highlighted some activities such as
                  training programs and coworking, other parts of the
                  organization&apos;s structure and value were less visible or
                  felt disconnected from the overall experience.
                </p>
                <p className={`${themeStyles.subtle} text-xl leading-relaxed`}>
                  Through conversations with users and internal teams, a clear
                  pattern emerged: Many people understood Nithub mainly as a
                  training hub, without fully recognizing its incubation and
                  product innovation capabilities.
                </p>
                <p
                  className={`${themeStyles.heading} text-3xl leading-relaxed`}
                >
                  This created the need for a redesign that could better
                  represent the organization's full structure, clarify its
                  ecosystem, and make it easier for users to understand how
                  different parts of Nithub connect together.
                </p>
              </div>
              <motion.div className="flex mt-20 gap-40 text-center justify-center items-center">
                <div>
                  How Nithub was percieved
                  <img
                    src="/assets/images/percieved.png"
                    alt="Nithub Core Pillars Context"
                    className="mt-10"
                  />
                  <p className="text-xs flex gap-3 justify-center mt-3 items-center text-center">
                    <span className="flex gap-1 items-center">
                      <div className="w-3 h-3 bg-[#78D5B8] rounded-full shrink-0" />
                      Training Hub
                    </span>
                    <span className="flex gap-1 items-center">
                      <div className="w-3 h-3 bg-[#46A770] rounded-full shrink-0" />
                      Co-working space
                    </span>
                    <span className="flex gap-1 items-center">
                      <div className="w-3 h-3 bg-[#7ED3D2] rounded-full shrink-0" />
                      Collaborative space
                    </span>
                  </p>
                </div>
                <div>
                  Reality of Nithub
                  <img
                    src="/assets/images/reality.png"
                    alt="Nithub Core Pillars Context"
                    className="mt-10"
                  />
                  <p className="text-xs flex gap-3 justify-center mt-3 items-center text-center">
                    <span className="flex gap-1 items-center">
                      <div className="w-3 h-3 bg-[#0D1836] rounded-full shrink-0" />
                      Innovation Hub
                    </span>
                    <span className="flex gap-1 items-center">
                      <div className="w-3 h-3 bg-[#78D5B8] rounded-full shrink-0" />
                      Training & Upskilling
                    </span>
                    <span className="flex gap-1 items-center">
                      <div className="w-3 h-3 bg-[#236A54] rounded-full shrink-0" />
                      Incubation & Acceleration
                    </span>
                  </p>
                </div>
              </motion.div>
            </motion.section>
            
            <section className="py-20 px-4 xl:px-0">
              <h2
                className={`max-w-6xl mx-auto text-2xl md:text-3xl font-bold mb-12 ${themeStyles.heading}`}
              >
                Understanding the Problem
              </h2>

              <div className="max-w-6xl mx-auto grid gap-6 items-start mb-16">
                <div>
                  <h3
                    className={`text-xl font-bold ${themeStyles.heading} mb-4`}
                  >
                    To understand this gap, I conducted:
                  </h3>
                  <ul>
                    <li>One-on-one conversations with students and founders</li>
                   <li>Feedback sessions with the Nithub community</li>
                    <li>Working sessions with internal stakeholders across different pillars</li>
                  </ul>
                  <p
                    className={`${themeStyles.subtle} mt-10 text-lg leading-relaxed`}
                  >
                    Through one-on-one conversations and feedback sessions, it
                    became clear that users saw Nithub strictly as a training
                    hub without fully recognizing the incubation and product
                    innovation arms.
                  </p>
                </div>
                <p  className={`${themeStyles.subtle} text-lg leading-relaxed`}>
                  Across all touchpoints, the same issues surfaced:
                </p>
                <p className={`text-xl bg- font-bold ${themeStyles.heading} mt-6`}>
                  Most users mainly associated Nithub with training, while the incubation and product innovation pillars were less visible across the platform experience.
                </p>
                <p className={`${themeStyles.subtle} text-lg leading-relaxed`}>
                  The challenge was not just structural, it was operational. The
                  lack of a unified digital structure meant:
                </p>
                <ul className={`space-y-3 text-lg ${themeStyles.subtle} pl-2`}>
                  <li className="flex items-center gap-3">
                    <DotIcon className="text-[#27A810] shrink-0" /> Programs and
                    initiatives appeared disconnected.
                  </li>
                  <li className="flex items-center gap-3">
                    <DotIcon className="text-[#27A810] shrink-0" />{" "}
                    Opportunities for startups and founders were hidden.
                  </li>
                  <li className="flex items-center gap-3">
                    <DotIcon className="text-[#27A810] shrink-0" /> Content
                    updates across teams were entirely manual.
                  </li>
                  <li className="flex items-center gap-3">
                    <DotIcon className="text-[#27A810] shrink-0" /> Publishing
                    stories and managing events lacked a system.
                  </li>
                </ul>
              </div>

              <div className="max-w-4xl mx-auto text-center mt-12">
                <h1
                  className={`font-bold text-3xl md:text-4xl ${themeStyles.heading} min-h-[3em] italic`}
                  ref={quoteRef}
                ></h1>
              </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 xl:px-0">
              <h2
                className={`text-2xl md:text-4xl font-bold mb-6 ${themeStyles.heading} min-h-[1.5em]`}
                ref={challengeRef}
              ></h2>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={bounceTransition}
                className={`max-w-6xl mx-auto px-4 xl:px-0 ${themeStyles.subtle} text-xl leading-relaxed mb-7`}
              >
                The website showed different activities, programs, and
                initiatives, but it did not clearly communicate how the
                ecosystem connected together. At the operational level,
                different teams also needed a better way to publish programs,
                share updates, manage events, and tell stories through blogs.
              </motion.div>
              <motion.div
                initial={{ borderLeftColor: "transparent" }}
                whileInView={{ borderLeftColor: "#27A810" }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.5 }}
                className={`border-l-8 pl-4 md:pl-8 py-4 mb-12 overflow-hidden rounded-r-2xl ${isDark ? "bg-[#1A1A1A]" : "bg-transparent"}`}
              >
                <motion.h3
                  initial={{ x: "-100%", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ ...bounceTransition, delay: 1 }}
                  className={`text-lg md:text-2xl font-bold ${themeStyles.heading} leading-tight`}
                >
                  "How might we design a platform to accurately reflect Nithub's
                  evolution while enabling internal teams to manage and scale
                  operations effectively?"
                </motion.h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={bounceTransition}
                className="max-w-6xl mx-auto px-4 xl:px-0 mt-16"
              >
              </motion.div>
            </section>

            <section className="mx-auto max-w-6xl pb-12 px-4 xl:px-0">
              <h2
                className={`text-2xl md:text-3xl font-bold mb-8 ${themeStyles.heading}`}
              >
                Approach
              </h2>
              <p
                className={`text-2xl md:text-3xl font-medium ${themeStyles.heading} leading-[1.4] min-h-[3em] mb-10`}
                ref={approachRef}
              ></p>

              <div>
                <p
                  className={`${themeStyles.subtle} text-xl leading-relaxed mb-8`}
                >
                  Key areas of focus driving the redesign:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                  {[
                    "Creating a coherent ecosystem structure.",
                    "Understanding how different users navigate the platform.",
                    "Making it easier to discover programs, startups, and opportunities.",
                    "Aligning the platform experience with daily operations.",
                    "Supporting internal teams with a structured CMS.",
                  ].map((question, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      // 4. Cards use the cardBg variable
                      className={`${themeStyles.card} border rounded-md p-6 flex items-center shadow-sm transition-colors duration-300`}
                    >
                      <p
                        className={`${themeStyles.heading} text-sm md:text-lg leading-snug font-medium`}
                      >
                        {question}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className={`${themeStyles.heading} text-xl md:text-2xl font-semibold leading-relaxed max-w-3xl`}
                >
                  This helped shape the platform into something more flexible,
                  focusing on{" "}
                  <span className="text-[#27A810]">goals and discovery</span>{" "}
                  rather than static pages.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={bounceTransition}
                className="mt-40"
              >
                <p className={`text-2xl font-bold mb-4 ${themeStyles.heading}`}>
                  Old Platform Structure
                </p>
                <img
                  src="/assets/images/nithub-old-flow.png"
                  alt="Original Fragmented Structure"
                  className="w-full rounded-3xl"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={bounceTransition}
                className="mt-20"
              >
                <p className={`text-2xl font-bold mb-4 ${themeStyles.heading}`}>
                  New Ecosystem Structure
                </p>
                <img
                  src="/assets/images/nithub-new-flow.png"
                  alt="New Connected Ecosystem"
                  className="w-full rounded-3xl"
                />
              </motion.div>
            </section>

            {/* 5. Highlight Sections use the sectionBg variable */}
            <section
              className={`${themeStyles.secondaryBg} py-20 px-4 xl:px-0 w-full overflow-hidden transition-colors duration-300`}
            >
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={bounceTransition}
                  className="md:w-1/2 space-y-6"
                >
                  <h3 className={`text-4xl font-bold ${themeStyles.heading}`}>
                    Reframing the Homepage
                  </h3>
                  <p
                    className={`${themeStyles.heading} text-lg pb-4 leading-relaxed font-semibold`}
                  >
                    A Narrative Layer, Not Just an Entry Point
                  </p>
                  <p
                    className={`${themeStyles.subtle} text-lg leading-relaxed`}
                  >
                    The homepage became a narrative tool guiding visitors
                    through the full Nithub story. It ensures that the three
                    core pillars—Training, Incubation, and Innovation—are
                    immediately recognizable and accessible.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={bounceTransition}
                  className="md:w-1/2 flex justify-end"
                >
                  <img
                    src="/assets/images/nithub-homepage-annot.png"
                    alt="Homepage Restructure"
                    className="w-full max-w-xl object-contain shadow-2xl rounded-md"
                  />
                </motion.div>
              </div>
            </section>

            <section className="pt-20 px-4 xl:px-0">
              <div className="space-y-16 max-w-4xl mx-auto">
                <section>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={bounceTransition}
                  >
                    <h1
                      className={`font-bold text-3xl md:text-4xl pb-16 ${themeStyles.heading} leading-tight`}
                    >
                      The final solution is a connected platform that clearly
                      communicates Nithub's identity while providing operational
                      stability.
                    </h1>

                    <h2
                      className={`text-2xl font-bold mb-4 ${themeStyles.heading}`}
                    >
                      Impact & Recognition
                    </h2>
                    <p
                      className={`${themeStyles.subtle} text-lg leading-relaxed mb-6`}
                    >
                      <strong className={themeStyles.heading}>
                        User Experience:
                      </strong>{" "}
                      We saw increased engagement across all ecosystem pillars
                      and significantly improved discovery of opportunities for
                      startups and programs.
                    </p>
                    <p
                      className={`${themeStyles.subtle} text-lg leading-relaxed mb-6`}
                    >
                      <strong className={themeStyles.heading}>
                        Internal Operations:
                      </strong>{" "}
                      Content management became simpler, faster, and more
                      collaborative. Teams can now update the platform without
                      bottlenecks.
                    </p>
                    <div
                      className={`p-6 rounded-xl border border-[#27A810]/30 mt-8 inline-block ${isDark ? "bg-[#122A12]" : "bg-[#EAF5EA]"}`}
                    >
                      <p className="text-[#27A810] font-bold tracking-wide">
                        🏆 Awarded NAIL 2021 Best Innovation Portal
                      </p>
                    </div>
                  </motion.div>
                </section>

                <motion.section
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ ...bounceTransition, delay: 0.2 }}
                  className={`${themeStyles.card} border p-8 md:p-12 rounded-3xl mt-16 transition-colors duration-300`}
                >
                  <h2
                    className={`text-xl font-bold mb-4 ${themeStyles.heading}`}
                  >
                    Reflection
                  </h2>
                  <p
                    className={`${themeStyles.heading} text-lg leading-relaxed mb-4`}
                  >
                    This project fundamentally shifted my approach from
                    designing isolated pages to designing cohesive systems. I
                    learned that visual clarity drives engagement, but
                    structural alignment determines long-term success.
                  </p>
                </motion.section>
              </div>
            </section>
          </div>

          <div
            className={`mt-32 pt-12 border-t flex justify-between items-center max-w-6xl mx-auto px-4 xl:px-0 ${isDark ? "border-white/10" : "border-gray-100"}`}
          >
            <div className="text-left">
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">
                Previous Project
              </p>
              <button className="group transition-transform duration-300 hover:scale-110">
                <img
                  src="/assets/images/gigsecure-btn.png"
                  alt="Previous Project"
                  className="w-40 md:w-60 transition-all duration-300 group-hover:brightness-110 rounded-lg"
                />
              </button>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">
                Next Project
              </p>
              <button className="group transition-transform duration-300 hover:scale-110">
                <img
                  src="/assets/images/spenditure-btn.png"
                  alt="Next Project"
                  className="w-40 md:w-60 transition-all duration-300 group-hover:brightness-110 rounded-lg"
                />
              </button>
            </div>
          </div>
          <BackToTopBtn />
        </article>

        <footer className="mt-10 pt-10">
          <Socials />
        </footer>
      </div>
    </>
  );
};

export default NithubWebsitePage;
