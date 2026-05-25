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
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const lastX = useRef(0);
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

  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.8 });
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
      text: "The Problem",
      duration: 1.5,
      ease: "none",
    });

    gsap.to(approachRef.current, {
      scrollTrigger: {
        trigger: approachRef.current,
        start: "top 80%",
      },
      text: "Rather than redesigning the existing website page by page, I approached the project as a chance to rethink the structure of the platform.",
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

  const carouselImages = [
    {
      src: "/assets/images/slideimg-1.png",
      alt: "Homepage Restructure - View 1",
    },
    {
      src: "/assets/images/slideimg-2.png",
      alt: "Homepage Restructure - View 2",
    },
    {
      src: "/assets/images/slideimg-3.png",
      alt: "Homepage Restructure - View 3",
    },
    {
      src: "/assets/images/slideimg-4.png",
      alt: "Homepage Restructure - View 4",
    },
    {
      src: "/assets/images/slideimg-5.png",
      alt: "Homepage Restructure - View 5",
    },
  ];
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;
    const speed = 0.75; // Baseline speed of the continuous belt

    const autoScroll = () => {
      if (container) {
        // Dynamic width assessment handles lazy-loaded images gracefully
        const singleSetWidth = container.scrollWidth / 3;

        if (singleSetWidth > 0) {
          container.scrollLeft += speed;

          // Instant, seamless layout resetting over loop boundary tracks
          if (container.scrollLeft >= singleSetWidth * 2) {
            container.scrollLeft -= singleSetWidth;
          } else if (container.scrollLeft <= 0) {
            container.scrollLeft += singleSetWidth;
          }
        }
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Desktop Drag Handlers using relative displacement
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    lastX.current = e.pageX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;

    const deltaX = e.pageX - lastX.current;
    // Subtracting delta moves the track naturally with the direction of the hand
    scrollRef.current.scrollLeft -= deltaX * 1.2;
    lastX.current = e.pageX;
  };

  const handleMouseUpOrLeave = () => {
    isDragging.current = false;
  };
  return (
    <>
      <div
        className={`${themeStyles.surface} mx-auto pt-24 min-h-screen transition-colors duration-300`}
      >
        <Header theme={theme} setTheme={setTheme} />
        <motion.section
          initial={{ backgroundColor: isDark ? "#0B0B0B" : "#F8F9FB" }}
          animate={{ backgroundColor: isDark ? "#0D1830" : "#0D1830" }}
          transition={{ duration: 1 }}
          className="w-full h-[60vh] md:h-[80vh] mx-auto flex items-end justify-center overflow-hidden relative px-4 pb-12"
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
              <Link href="https://nithub.unilag.edu.ng/" onClick={() => {}}>
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
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.8, delayChildren: 3.8 },
                },
              }}
              className={`space-y-12 mx-auto max-w-6xl mb-32 min-w-2xl px-4 xl:px-0`}
            >
              {[
                {
                  title: "Sector",
                  desc: "Nonprofit • Education • Youth Programs",
                },
                {
                  title: "Challenge",
                  desc: "As the hub's programs expanded, form creation became fragmented and messy. Applications redirected users away from the website, breaking continuity and making forms difficult to manage internally. The organization needed a way to structure and manage forms within its digital ecosystem.",
                },
                { title: "Role", desc: "Lead Product Designer" },
                {
                  title: "Timeline",
                  desc: "2-week design sprint from discovery to system definition",
                },
              ].map((item, index) => (
                <motion.section
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0, transition: bounceTransition },
                  }}
                >
                  <h3
                    className={`text-[13px] uppercase tracking-[0.2em] font-black ${themeStyles.subtle} mb-3`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-gray-500 text-lg leading-relaxed max-w-4xl ${themeStyles.subtle}`}
                  >
                    {item.desc}
                  </p>
                </motion.section>
              ))}
            </motion.div>
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
                className={`${themeStyles.subtle} text-xl leading-relaxed max-w-5xl`}
              >
                Nithub is an innovation hub supporting students, engineers,
                startups, and founders through programs, incubation, and
                community initiatives.
              </p>
              <p
                className={`${themeStyles.subtle} text-xl mt-4 leading-relaxed max-w-5xl`}
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
                className={`${themeStyles.subtle} border border-[#a8c5a8] rounded-[1rem] py-5 px-7 text-2xl leading-relaxed font-semibold max-w-7xl`}
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
                  className={`text-lg md:text-xl font-medium ${themeStyles.heading} leading-snug transition-colors duration-300`}
                >
                  <p className="mb-4 text-xl md:text-2xl">
                    Nithub operates around three core pillars:
                  </p>{" "}
                  <p>&ndash; Training & Upskilling,</p>{" "}
                  <p>&ndash; Startup Incubation & Acceleration,</p>{" "}
                  <p>&ndash; Product Innovation.</p>
                </p>
                <p className={`${themeStyles.heading} text-xl leading-relaxed`}>
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
                  className={`${themeStyles.heading} border border-[#a8c5a8] rounded-[1rem] py-5 px-7 text-2xl leading-relaxed font-semibold max-w-7xl`}
                >
                  This created the need for a redesign that could better
                  represent the organization's full structure, clarify its
                  ecosystem, and make it easier for users to understand how
                  different parts of Nithub connect together.
                </p>
              </div>
              <motion.div className="flex mt-20 gap-40 text-left justify-center items-center">
                <div>
                  <p className="text-xl font-bold mb-4">
                    How Nithub was perceived
                  </p>
                  <img
                    src="/assets/images/percieved.png"
                    alt="Nithub Core Pillars Context"
                    className="mt-5"
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
                  <p className="text-xl font-bold mb-4">Reality of Nithub</p>
                  <img
                    src="/assets/images/reality.png"
                    alt="Nithub Core Pillars Context"
                    className="mt-5"
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

            <section className="py-16 px-4 xl:px-0">
              <h2
                className={`max-w-6xl mx-auto text-3xl md:text-4xl font-bold mb-12 ${themeStyles.heading}`}
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
                  <ul
                    className={`space-y-3 list-disc text-lg ${themeStyles.subtle} pl-2`}
                  >
                    <li>One-on-one conversations with students and founders</li>
                    <li>Feedback sessions with the Nithub community</li>
                    <li>
                      Working sessions with internal stakeholders across
                      different pillars
                    </li>
                  </ul>
                </div>
                <p className={`${themeStyles.subtle} text-lg leading-relaxed`}>
                  Across all touchpoints, the same issues surfaced:
                </p>
                <p
                  className={`${themeStyles.subtle} border border-[#a8c5a8] rounded-[1rem] py-5 px-7 text-2xl leading-relaxed font-semibold max-w-7xl`}
                >
                  Most users mainly associated Nithub with training, while the
                  incubation and product innovation pillars were less visible
                  across the platform experience.
                </p>
                <p
                  className={`${themeStyles.subtle} border border-[#a8c5a8] rounded-[1rem] py-5 px-7 text-2xl leading-relaxed font-semibold max-w-7xl`}
                >
                  The website showed different activities, programs, and
                  initiatives, but it did not clearly communicate how the
                  ecosystem connected together.
                </p>
                <p
                  className={`${themeStyles.subtle} border border-[#a8c5a8] rounded-[1rem] py-5 px-7 text-2xl leading-relaxed font-semibold max-w-7xl`}
                >
                  At the operational level, different teams also needed a better
                  way to publish programs, share updates, manage events, tell
                  stories through blogs, and showcase activities happening
                  within the hub.
                </p>
              </div>

              <div className="max-w-4xl mx-auto text-center mt-12">
                <h1
                  className={`font-bold text-2xl md:text-3xl ${themeStyles.heading} min-h-[3em] italic`}
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
                className={`border border-[#a8c5a8] rounded-[1rem] py-5 px-7 text-2xl leading-relaxed font-semibold max-w-7xl ${themeStyles.heading} leading-relaxed mb-7`}
              >
                The challenge was not just to redesign the website visually, but
                to create a clearer ecosystem structure that better represented
                Nithub&apos;s three pillars while also supporting how internal
                teams managed and shared content across the platform.
              </motion.div>
              <motion.div
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.5 }}
                className={`pl-4 md:pl-8 py-4 mb-12 overflow-hidden`}
              >
                <motion.h3
                  initial={{ x: "-100%", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  className={`text-lg md:text-2xl mb-4 font-bold ${themeStyles.heading} leading-tight`}
                >
                  Goal
                </motion.h3>
                <div>
                  <p className="mb-4 text-lg font-medium">
                    Redesign the platform to:
                  </p>
                  <ul
                    className={`space-y-3 list-disc text-lg ${themeStyles.subtle} pl-2`}
                  >
                    <li>Better represent Nithub&apos;s three core pillars</li>
                    <li>
                      Create a clearer and more connected ecosystem experience
                    </li>
                    <li>
                      Make programs, startups, events, and opportunities easier
                      to discover
                    </li>
                    <li>
                      Improve how content and activities are structured across
                      the platform
                    </li>
                    <li>
                      Support internal teams in managing and publishing platform
                      content more efficiently
                    </li>
                  </ul>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={bounceTransition}
                className="max-w-6xl mx-auto px-4 xl:px-0 mt-16"
              ></motion.div>
            </section>

            <section className="mx-auto max-w-6xl pb-12 px-4 xl:px-0">
              <h2
                className={`text-2xl md:text-3xl font-bold mb-8 ${themeStyles.heading}`}
              >
                Approach
              </h2>
              <p
                className={`text-lg md:text-xl font-medium ${themeStyles.heading} leading-[1.4] min-h-[3em]`}
                ref={approachRef}
              ></p>
              <p
                className={`text-lg md:text-xl font-normal ${themeStyles.heading} leading-[1.4] min-h-[3em] mb-10`}
              >
                The previous website heavily emphasized training and coworking
                activities, while other parts of the ecosystem were less clearly
                represented across the platform experience.
              </p>
              <div>
                <p className="mb-4 text-lg font-medium">
                  So instead of directly copying the old structure, I focused
                  on:
                </p>
                <ul
                  className={`space-y-3 list-disc text-lg ${themeStyles.subtle} pl-2 mb-7`}
                >
                  <li>Creating a clearer ecosystem structure</li>
                  <li>
                    Understanding how different users would move through the
                    platform
                  </li>
                  <li>
                    Making it easier for people to discover programs, startups,
                    events, and opportunities
                  </li>
                  <li>
                    Improving how content and activities are structured across
                    the platform
                  </li>
                  <li>
                    Aligning the platform experience with how Nithub actually
                    operates today
                  </li>
                </ul>
              </div>
              <p
                className={`text-lg md:text-xl font-normal ${themeStyles.heading} leading-[1.4] min-h-[3em] mb-16`}
              >
                The previous website heavily emphasized training and coworking
                activities, while other parts of the ecosystem were less clearly
                represented across the platform experience.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={bounceTransition}
              >
                <img
                  src="/assets/images/visual-refresh.png"
                  alt="Original Fragmented Structure"
                  className="w-[60%] mx-auto"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={bounceTransition}
                className="mt-32"
              >
                <p className={`text-2xl font-bold mb-4 ${themeStyles.heading}`}>
                  Restructuring the Platform
                </p>
                <p className="text-lg max-w-2xl mb-16">
                  The original structure was fragmented and program-heavy. The
                  redesign introduced a clearer, ecosystem-based structure.
                </p>
                <img
                  src="/assets/images/restructure.png"
                  alt="Original Fragmented Structure"
                  className="w-[60%] mx-auto"
                />
              </motion.div>
            </section>
            <motion.section>
              <h2
                className={`max-w-6xl mx-auto text-3xl md:text-4xl font-bold mb-12 ${themeStyles.heading}`}
              >
                Designing around User Goals
              </h2>

              <div className="max-w-6xl mx-auto grid gap-6 items-start mb-16">
                <div>
                  <p
                    className={`text-lg font-semibold ${themeStyles.heading} mb-4`}
                  >
                    The redesign shifted the experience from navigating through
                    disconnected program categories to clearer ecosystem entry
                    points.
                  </p>
                </div>
                <p
                  className={`text-lg font-semibold ${themeStyles.heading} mb-4`}
                >
                  Users could more easily discover opportunities across:
                </p>
                <ul
                  className={`space-y-3 list-disc text-lg ${themeStyles.subtle} pl-2 mb-7`}
                >
                  <li>Training & Upskilling</li>
                  <li>Startup Incubation & Acceleration</li>
                  <li>Product Innovation</li>
                </ul>
                <p className={`text-lg font-semibold ${themeStyles.heading}`}>
                  This created a more intuitive experience for different
                  audiences entering the platform with different goals.
                </p>
              </div>
              <div className="max-w-6xl mx-auto">
                <h2
                  className={`max-w-6xl mx-auto text-3xl md:text-4xl font-bold mb-4 ${themeStyles.heading}`}
                >
                  Reframing the Homepage
                </h2>
                <p
                  className={`${themeStyles.subtle} text-xl leading-relaxed mb-8`}
                >
                  The homepage became a narrative layer — not just an entry
                  point. This:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                  {[
                    "Establishes Nithub's Identity",
                    "Communicates value immediately",
                    "Guides users into the ecosystem",
                  ].map((question, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      // 4. Cards use the cardBg variable
                      className={`bg-gray-50 border border-gray-200 rounded-md p-6 flex items-center shadow-sm transition-colors duration-300`}
                    >
                      <p
                        className={`text-gray-800 text-sm md:text-lg leading-snug font-medium`}
                      >
                        {question}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
            <section
              className={`py-20 px-4 xl:px-0 w-full bg-[#f7f3f3] overflow-hidden transition-colors duration-300`}
            >
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={bounceTransition}
                  className="md:w-1/2 space-y-6"
                >
                  <img
                    src="/assets/images/nit-hero.png"
                    alt="Homepage Restructure"
                    className="w-full max-w-xl object-contain"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={bounceTransition}
                  className="md:w-1/2 flex flex-col font-light px-6 py-10 rounded-2xl bg-[#0D1830]"
                >
                  <p className={"text-xl pb-3 leading-relaxed text-[#FFFF]"}>
                    Key Improvements
                  </p>
                  <p className="text-lg text-[#FFFF]">Clearer Positioning</p>
                  <p className="text-[#FFFF]">
                    Repositioned Nithub as the central hub for tech innovation
                    and collaboration.
                  </p>
                  <p className="text-lg text-[#FFFF]">Stronger CTAs</p>
                  <p className="text-[#FFFF]">
                    Introduced clear and prominent actions for pitching ideas
                    and partnerships.
                  </p>
                  <p className="text-lg text-[#FFFF]">
                    Improved Visual Hierarchy
                  </p>
                  <p className="text-[#FFFF]">
                    Refined the layout to highlight key messages and drive focus
                    to what matters.
                  </p>
                  <p className="text-lg text-[#FFFF]">
                    Ecosystem Representation
                  </p>
                  <p className="text-[#FFFF]">
                    Used real imagery and impactful messaging to reflect
                    collaboration, innovation, and community.
                  </p>
                  <p className="text-lg text-[#FFFF]">Simplified Navigation</p>
                  <p className="text-[#FFFF]">
                    Streamlined the navigation to improve discoverability across
                    programs and content.
                  </p>
                </motion.div>
              </div>
            </section>

            <section className="w-full relative py-8 overflow-hidden">
              <style>{`
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  `}</style>

              <div
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUpOrLeave}
                onMouseLeave={handleMouseUpOrLeave}
                className="flex gap-6 overflow-x-auto no-scrollbar select-none cursor-grab active:cursor-grabbing"
              >
                {[...carouselImages, ...carouselImages, ...carouselImages].map(
                  (image, index) => (
                    <img
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      draggable="false"
                      className="w-full max-w-xl object-contain flex-shrink-0 pointer-events-none"
                    />
                  ),
                )}
              </div>
            </section>
            <div className="max-w-6xl mx-auto">
              <h2
                className={`max-w-6xl mx-auto text-3xl md:text-4xl font-bold mb-4 ${themeStyles.heading}`}
              >
                Designing for Scale (System Thinking)
              </h2>
              <p
                className={`${themeStyles.subtle} text-xl leading-relaxed mb-8`}
              >
                As the experience improved, a deeper issue became clear: The
                platform could not scale without fixing internal operations.
                Behind the scenes:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {[
                  "Content updates were manual",
                  "Teams had limited visibility into ecosystem activities",
                  "Publishing and updates were handled manually",
                ].map((question, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-gray-50 border border-gray-200 rounded-md p-6 flex items-center shadow-sm transition-colors duration-300`}
                  >
                    <p
                      className={`text-gray-800 text-sm md:text-lg leading-snug font-medium`}
                    >
                      {question}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="max-w-6xl mx-auto">
              <h2
                className={`max-w-6xl mx-auto text-3xl md:text-4xl font-bold mb-4 ${themeStyles.heading}`}
              >
                What Changed
              </h2>
              <p
                className={`${themeStyles.subtle} text-xl leading-relaxed mb-8`}
              >
                To support the growing ecosystem, I designed a centralized admin
                dashboard.
              </p>
              <p className="text-3xl md:text-4xl mb-10">
                The goal was to make content management simpler, faster, and
                more collaborative across teams.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {[
                  "Content updates were manual",
                  "Teams had limited visibility into ecosystem activities",
                  "Publishing and updates were handled manually",
                ].map((question, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    // 4. Cards use the cardBg variable
                    className={`bg-gray-50 border border-gray-200 rounded-md p-6 flex items-center shadow-sm transition-colors duration-300`}
                  >
                    <p
                      className={`text-gray-800 text-sm md:text-lg leading-snug font-medium`}
                    >
                      {question}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <img
                src="/assets/images/what-changed.png"
                alt="newdashboard"
                className="w-[60%] mx-auto"
              />
            </motion.div>
            <section className="pt-20 px-4 xl:px-0">
              <div className="space-y-16 max-w-4xl mx-auto">
                <section>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={bounceTransition}
                  >
                    <h1
                      className={`font-bold text-3xl md:text-4xl pb-5 ${themeStyles.heading} leading-tight`}
                    >
                      Final Outcome
                    </h1>
                    <p className="text-xl ${themeStyles.subtle} mb-5">
                      The final solution is a connected platform
                    </p>
                    <ul className="list-disc">
                      <li className="text-lg">
                        A redesigned user experience that clearly communicates
                        Nithub&apos;s identity
                      </li>
                      <li className="text-lg">
                        An internal system that enables teams to manage and
                        scale it effectively
                      </li>
                    </ul>

                    <div className="max-w-6xl mx-auto mt-16">
                      <h2
                        className={`font-bold text-3xl md:text-4xl ${themeStyles.heading} leading-tight`}
                      >
                        Impact
                      </h2>
                      <p
                        className={`${themeStyles.subtle} text-xl leading-relaxed mb-8`}
                      >
                        User Experience
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        {[
                          "Increased exploration across programs, startups, and community sections",
                          "Reduced early drop-off from the homepage",
                          "Improved discovery of opportunities",
                        ].map((question, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`bg-gray-50 border border-gray-200 rounded-md p-6 flex items-center shadow-sm transition-colors duration-300`}
                          >
                            <p
                              className={`text-gray-800 text-sm md:text-lg leading-snug font-medium`}
                            >
                              {question}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    <div className="max-w-6xl mx-auto">
                      <h2
                        className={`text-xl font-bold mb-4 ${themeStyles.heading}`}
                      >
                        Internally:
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        {[
                          "Teams can update content more efficiently",
                          "Consistency improved across the platform",
                          "Operations became more scalable",
                        ].map((question, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`bg-gray-50 border border-gray-200 rounded-md p-6 flex items-center shadow-sm transition-colors duration-300`}
                          >
                            <p
                              className={`text-gray-800 text-sm md:text-lg leading-snug font-medium`}
                            >
                              {question}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    <div className="max-w-6xl mx-auto">
                      {" "}
                      <h2
                        className={`text-2xl font-bold mb-4 ${themeStyles.heading}`}
                      >
                        Impact
                      </h2>
                      <p>The redesigned platform was awarded:</p>
                      <div
                        className={`p-6 rounded-xl border border-[#27A810]/30 mt-8 inline-block ${isDark ? "bg-[#122A12]" : "bg-[#EAF5EA]"}`}
                      >
                        <p className="text-[#27A810] font-bold tracking-wide">
                          🏆 NAIL 2021 Best Innovation Website/Portal
                        </p>
                      </div>
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
          <div className="max-w-5xl mx-auto mt-16">
              <h2
              className={`font-bold text-3xl md:text-4xl pb-5 ${themeStyles.heading} leading-tight`}
            >
             What&apos;s Next
            </h2>
            <p className="text-lg">
              This work expanded into deeper internal tooling evolving the dashboard into a more robust system for managing Nithub&apos;s operations at scale.
            </p>
          </div>

          <div className="mt-32 pt-12 border-t border-gray-100 flex justify-between items-center max-w-6xl mx-auto px-4 xl:px-0">
            <div className="text-left">
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">
                Previous Project
              </p>
              <Link
                href="/portfolio/nithub"
                className="group flex items-center text-sm bg-gray-200 px-10 py-7 text-gray-800 rounded-lg transition-transform duration-300 hover:scale-110"
              >
                <button className="group transition-transform duration-300 hover:scale-110">
                  <img
                    src="/assets/images/nithub.png"
                    alt="Previous Project"
                    className="w-40 md:w-10 mr-2 transition-all duration-300 group-hover:brightness-110"
                  />
                </button>
                Nithub Website
              </Link>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">
                Next Project
              </p>
              <Link
                href="/portfolio/spenditure"
                className="group flex items-center text-sm bg-gray-200 px-10 py-7 text-gray-800 rounded-lg transition-transform duration-300 hover:scale-110"
              >
                <button className="group transition-transform duration-300 hover:scale-110">
                  <img
                    src="/assets/images/spenditure.png"
                    alt="Next Project"
                    className="w-10 md:w-10 mr-2 transition-all duration-300 group-hover:brightness-110"
                  />
                </button>
                Spenditure
              </Link>
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
