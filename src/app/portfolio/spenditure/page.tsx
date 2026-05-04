"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Socials from "@/components/Socials";
import UserUnderstanding from "@/components/UserUnderstanding";
import BackToTopBtn from "@/components/BacktoTopBtn";
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
const SpenditurePage = () => {
  const titlePart1Ref = useRef<HTMLSpanElement>(null);
  const titlePart2Ref = useRef<HTMLSpanElement>(null);
  const problemRef = useRef<HTMLHeadingElement>(null);
  const goalRef = useRef<HTMLParagraphElement>(null);
  const quoteRef = useRef<HTMLHeadingElement>(null);

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

  useEffect(() => {
    const tl = gsap.timeline({ delay: 3.8 });
    tl.to(titlePart1Ref.current, {
      text: "Rethinking Personal ",
      duration: 1,
      ease: "none",
    }).to(
      titlePart2Ref.current,
      { text: "Expense Awareness.", duration: 1, ease: "none" },
      "+=0.8",
    );
    gsap.to(problemRef.current, {
      scrollTrigger: {
        trigger: problemRef.current,
        start: "top 80%",
      },
      text: "The Problem",
      duration: 1.7,
      ease: "none",
    });

    gsap.to(goalRef.current, {
      scrollTrigger: {
        trigger: goalRef.current,
        start: "top 80%",
      },
      text: "The goal was to ensure every interaction contributes to a clearer financial picture.",
      duration: 2.8,
      ease: "none",
    });

    gsap.to(quoteRef.current, {
      scrollTrigger: {
        trigger: quoteRef.current,
        start: "top 80%",
      },
      text: '"Users can see not just what they spend, but how and why their spending evolves."',
      duration: 1.5,
      ease: "none",
    });
  }, []);

  const bounceTransition = {
    type: "spring",
    bounce: 0.5,
    duration: 1.8,
  } as const;

  return (
    <div className="bg-white pt-24 text-[#1a1a1a] min-h-screen">
  <Header theme={theme} setTheme={setTheme} />

      <motion.section
        initial={{ backgroundColor: "#ffffff" }}
        animate={{ backgroundColor: "#03947B" }}
        transition={{ duration: 1 }}
        className="w-full h-[55vh] md:h-[85vh] flex items-end justify-center overflow-hidden relative px-4"
      >
        <div className="flex items-end justify-center gap-4 md:gap-14 translate-y-1 md:translate-y-2">
          <div
          >
            <img
              src="/assets/images/spenditure-3.png"
              alt="Transaction Detail"
              className="w-80 sm:w-32 md:w-56 object-contain shadow-2xl md:rounded-[2rem] rounded-sm transform -rotate-2 translate-y-12 md:translate-y-7"
            />
          </div>

          <div
            className="z-10"
          >
            <img
              src="/assets/images/spenditure-2.png"
              alt="Main Dashboard"
              className="w-96 sm:w-40 md:w-64 object-contain shadow-2xl md:rounded-[2rem] rounded-sm scale-110 md:scale-125"
            />
          </div>

          <div
          >
            <img
              src="/assets/images/spenditure-1.png"
              alt="Add Bill Screen"
              className="w-80 sm:w-32 md:w-56 object-contain shadow-2xl md:rounded-[2rem] rounded-sm transform rotate-2 translate-y-12 md:translate-y-7"
            />
          </div>
        </div>
      </motion.section>
      <article className="max-w-full mx-auto py-24 font-sans overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...bounceTransition, delay: 2.5 }}
          className="flex justify-between text-center items-baseline mx-auto max-w-6xl mb-12 border-b border-gray-100 pb-6 px-4 xl:px-0"
        >
          <h2 className="text-xl font-bold tracking-tight">Spenditure</h2>
          <span className="text-gray-400 font-medium">August 2025</span>
        </motion.div>

        <h1 className="text-4xl md:text-5xl mx-auto max-w-6xl font-extrabold mb-20 tracking-tighter leading-[1.1] text-gray-900 px-4 xl:px-0 min-h-[1.1em]">
          <span ref={titlePart1Ref}></span>
          <span ref={titlePart2Ref}></span>
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
          {[
            {
              title: "Sector",
              desc: "Product Design • Fintech • UX Strategy • Data Visualization",
            },
            {
              title: "Challenge",
              desc: "The challenge was to design a system that not only tracks expenses but transforms raw financial data into clear, actionable insights that improve awareness and decision-making over time.",
            },
            { title: "Role", desc: "Product Designer" },
            { title: "Timeline", desc: "2 months" },
          ].map((item, index) => (
            <motion.section
              key={index}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: bounceTransition },
              }}
            >
              <h3 className="text-[13px] uppercase tracking-[0.2em] font-black text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                {item.desc}
              </p>
            </motion.section>
          ))}
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {/* Overview */}
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={bounceTransition}
            className="max-w-6xl mx-auto px-4 xl:px-0"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
              Overview
            </h2>
            <p className="text-gray-500 text-xl leading-relaxed max-w-4xl">
              Spenditure is a personal finance mobile application designed to
              help users track and understand their daily expenses. While many
              tools make it easy to record transactions, they often stop short
              of helping users interpret what that data actually means.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={bounceTransition}
            className="max-w-6xl mx-auto px-4 xl:px-0"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
              Product Context
            </h2>
            <div className="space-y-8 max-w-6xl">
              <p className="md:text-4xl text-2xl font-medium text-gray-800 leading-snug">
                Personal finance products depend heavily on consistency. Users
                are expected to log expenses regularly, yet many abandon these
                tools not because the interaction is difficult, but because the
                outcome feels unrewarding.
              </p>
              <p className="text-gray-500 text-xl leading-relaxed">
                When someone cannot easily answer a simple question like{" "}
                <span className="italic text-gray-900 font-semibold">
                  "Where is my money going?"
                </span>
                , the act of tracking begins to feel pointless.
              </p>
              <p className="text-gray-500 text-xl leading-relaxed">
                Spenditure is built around closing that gap, ensuring that every
                recorded expense contributes to a clearer understanding of
                financial behavior.
              </p>
            </div>
          </motion.section>

          <section className="max-w-6xl mx-auto px-4 xl:px-0">
            <h2
              className="text-2xl md:text-4xl font-bold mb-6 text-gray-900 min-h-[1.5em]"
              ref={problemRef}
            ></h2>

            <motion.div
              initial={{ borderLeftColor: "transparent" }}
              whileInView={{ borderLeftColor: "#03947B" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.5 }}
              className="border-l-8 pl-4 py-2 mb-8 overflow-hidden"
            >
              <motion.h3
                initial={{ x: "-100%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ...bounceTransition, delay: 2.3 }}
                className="md:text-2xl text-lg font-bold text-gray-800 leading-tight"
              >
                "Most expense tracking tools are optimized for collecting data,
                not explaining it."
              </motion.h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={bounceTransition}
              className="text-gray-600 text-xl leading-relaxed max-w-4xl"
            >
              Users record transactions and build up a history of spending, but
              are often left with long lists and scattered numbers that offer
              little clarity. Over time, this creates a disconnect between
              effort and value.
            </motion.p>
          </section>

          <section className="bg-[#fcf3f6] py-20 px-4 xl:px-0">
            <h2 className="max-w-6xl mx-auto text-2xl md:text-3xl md:text-right text-center font-bold mb-10 text-gray-900">
              From Data Logging to Financial Understanding
            </h2>
            <div className="max-w-6xl mx-auto text-center md:text-right text-gray-800 text-xl leading-relaxed mb-16 min-w-4xl">
              In many products, users are required to manually scan and
              interpret long lists of expenses, making it difficult to identify
              patterns or understand spending behavior.
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-4 overflow-hidden">
              <div className="text-center">
                <p className="text-xs uppercase tracking-widest font-bold text-gray-600 mb-8">
                  Before: Data Without Clarity
                </p>
                <motion.img
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={bounceTransition}
                  src="/assets/images/f-s-4.png"
                  alt="Before: Transaction List"
                  className="md:w-50 w-40 shadow-lg rounded-3xl mb-6 mx-auto"
                />
                <p className="text-gray-500 text-sm">
                  Users manually scan transaction lists to interpret their
                  spending.
                </p>
              </div>
              <div className="text-center">
                <p className="text-xs uppercase tracking-widest font-bold text-gray-600 mb-8">
                  After: Insight at a Glance
                </p>
                <motion.img
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ ...bounceTransition, delay: 0.5 }}
                  src="/assets/images/detail.png"
                  alt="After: Insight Dashboard"
                  className="md:w-50 w-40 shadow-lg rounded-3xl mb-6 mx-auto"
                />
                <p className="text-gray-500 text-sm">
                  Spenditure surfaces key insights instantly for faster
                  understanding.
                </p>
              </div>
            </div>
          </section>

          <section className="max-w-6xl mx-auto">
            <div className="text-gray-800 text-xl leading-relaxed">
              In many products, users are required to manually scan and
              interpret long lists of expenses, making it difficult to identify
              patterns or understand spending behavior.
            </div>
          </section>
          <UserUnderstanding />
          <section className="mx-auto max-w-6xl px-4 xl:px-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              User Journey, Expense Tracking Experience
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              The experience unfolds over time
            </p>
            <div className="w-full bg-[#fcfcfc] rounded-3xl p-4 md:p-12 mb-12 shadow-sm border border-gray-100">
              <img
                src="/assets/images/journey.png"
                alt="User Journey Map"
                className="w-full object-contain"
              />
            </div>
            <p className="text-gray-500 text-xl leading-relaxed max-w-4xl">
              This journey highlights a critical gap — not in recording, but in
              understanding.
            </p>
          </section>

          <section className="mx-auto max-w-6xl px-4 xl:px-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
              Key Insights
            </h2>
            <p className="text-gray-800 text-xl leading-relaxed">
              The problem is not that users fail to track their expenses, it's
              that they struggle to understand what their data reveals. When
              tracking does not translate into clear insight, the experience
              loses its value.
            </p>
          </section>

          <section className="mx-auto max-w-6xl pb-12 px-4 xl:px-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
              Design Approach
            </h2>
            <p className="text-gray-800 text-xl leading-relaxed mb-8">
              The design shifts the product from data collection to insight
              generation. Rather than adding complexity, the focus was on:
            </p>
            <ul className="list-disc list-inside text-gray-800 text-xl space-y-4 mb-16 pl-4">
              <li>Simplifying interactions</li>
              <li>Highlighting meaningful patterns</li>
              <li>Reducing the effort required to interpret data</li>
            </ul>
            <p
              className="text-2xl md:text-3xl font-bold text-gray-900 leading-[1.2] min-h-[3em]"
              ref={goalRef}
            ></p>
          </section>

          <section className="bg-[#fcf3f6] py-20 px-4 xl:px-0 w-full overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={bounceTransition}
                className="md:w-1/2 space-y-6"
              >
                <h3 className="text-4xl font-bold text-gray-900">
                  From Insight to Interface.
                </h3>
                <p className="text-gray-800 text-lg pb-4 leading-relaxed font-semibold">
                  Financial Clarity
                </p>
                <span className="text-gray-800 text-lg leading-relaxed block">
                  The interface surfaces key information at a glance:
                </span>
                <ul className="text-gray-800 text-lg leading-relaxed space-y-2">
                  <li className="flex items-center gap-2">
                    <DotIcon className="text-[#03947B]" /> Total spending
                  </li>
                  <li className="flex items-center gap-2">
                    <DotIcon className="text-[#03947B]" /> Category distribution
                  </li>
                  <li className="flex items-center gap-2">
                    <DotIcon className="text-[#03947B]" /> High-level summaries
                  </li>
                </ul>
                <p className="text-gray-800 text-2xl md:text-3xl font-bold leading-relaxed pt-6">
                  Users can immediately understand their financial position
                  without scanning through transactions.
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
                  src="/assets/images/detail.png"
                  alt="Simplified Transaction Detail"
                  className="md:w-64 w-52 object-contain shadow-2xl"
                />
              </motion.div>
            </div>
          </section>

          <section className="py-0 px-4 xl:px-0 w-full overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={bounceTransition}
                className="md:w-1/2 space-y-6"
              >
                <h3 className="text-4xl font-bold text-gray-900">
                  Quick Add Flow
                </h3>
                <p className="text-gray-800 text-lg pb-4 leading-relaxed">
                  The interface surfaces key information at a glance:
                </p>
                <ul className="text-gray-800 text-lg leading-relaxed space-y-2">
                  <li className="flex items-center gap-2">
                    <DotIcon className="text-[#03947B]" /> Total spending
                  </li>
                  <li className="flex items-center gap-2">
                    <DotIcon className="text-[#03947B]" /> Category distribution
                  </li>
                  <li className="flex items-center gap-2">
                    <DotIcon className="text-[#03947B]" /> High-level summaries
                  </li>
                </ul>
                <p className="text-gray-800 text-2xl md:text-3xl font-bold leading-relaxed pt-6">
                  Users can immediately understand their financial position
                  without scanning through transactions.
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
                  src="/assets/images/f-s-4.png"
                  alt="Main Dashboard"
                  className="md:w-64 w-52 object-contain shadow-2xl"
                />
              </motion.div>
            </div>
          </section>

          {/* 7) "Spending Insights/Analytics" section */}
          <section className="bg-[#fcf3f6] py-20 px-4 xl:px-0 w-full overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={bounceTransition}
                className="md:w-1/2 space-y-6"
              >
                <h3 className="text-4xl font-bold text-gray-900">
                  Spending Insights/Analytics
                </h3>
                <p className="text-gray-800 text-lg pb-4 leading-relaxed">
                  Users can:
                </p>
                <ul className="text-gray-800 text-lg leading-relaxed space-y-2">
                  <li className="flex items-center gap-2">
                    <DotIcon className="text-[#03947B]" /> Identify Spending
                    Habits
                  </li>
                  <li className="flex items-center gap-2">
                    <DotIcon className="text-[#03947B]" /> See Category Trends
                  </li>
                  <li className="flex items-center gap-2">
                    <DotIcon className="text-[#03947B]" /> Understand where
                    Money is Going
                  </li>
                </ul>
                <p className="text-gray-800 text-2xl md:text-3xl font-bold leading-relaxed pt-6">
                  Structured visual summaries transform raw data into
                  recognizable patterns.
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
                  src="/assets/images/insights-1.png"
                  alt="Categorization and Limits"
                  className="md:w-64 w-52 object-contain shadow-2xl"
                />
              </motion.div>
            </div>
          </section>

          <section className="space-y-32 pt-10 px-4 xl:px-0">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl text-center font-bold mb-8 text-gray-900">
                Structuring the Experience
              </h2>
              <p className="text-gray-800 text-xl leading-relaxed mb-6">
                The product is designed as a cohesive system anchored around
                three layers:
              </p>
              <ul className="list-disc list-inside text-gray-500 text-xl space-y-4 mb-8 pl-4">
                <li>
                  <span className="font-bold text-gray-800">Dashboards:</span>{" "}
                  Immediate financial clarity
                </li>
                <li>
                  <span className="font-bold text-gray-800">Transactions:</span>{" "}
                  Organized records
                </li>
                <li>
                  <span className="font-bold text-gray-800">Insights:</span>{" "}
                  Pattern recognition over time
                </li>
              </ul>
              <p className="text-xl font-bold text-gray-900">
                These layers work together to create a continuous loop of
                financial awareness.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl text-center font-bold mb-6 text-gray-900">
                Real-Time Financial Feedback Loop
              </h2>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  visible: { transition: { staggerChildren: 0.2 } },
                }}
                className="w-6xl mx-auto flex justify-center space-x-8 rounded-3xl p-4 md:p-12 mb-8"
              >
                {[
                  "/assets/images/detail.png",
                  "/assets/images/f-s-6.png",
                  "/assets/images/detail.png",
                ].map((src, idx) => (
                  <motion.img
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: bounceTransition,
                      },
                    }}
                    src={src}
                    alt="Real-Time Financial Feedback Loop"
                    className="md:w-[18%] w-[45%] object-contain shadow-xl rounded-3xl"
                  />
                ))}
              </motion.div>
              <p className="text-gray-800 text-xl font-medium leading-relaxed max-w-5xl">
                This real-time response connects user actions directly to
                financial outcomes—making tracking interactive rather than
                passive.
              </p>
            </div>
          </section>

          <section className="pt-20 px-4 xl:px-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-gray-900 text-center">
              Final Solution
            </h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={{
                visible: { transition: { staggerChildren: 0.45 } },
              }}
              className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-32"
            >
              {[
                "f-s-1.png",
                "f-s-2.png",
                "f-s-3.png",
                "f-s-4.png",
                "insights-1.png",                                                                                                                    
                "f-s-6.png",
                "f-s-7.png",
                "f-s-8.png",
                "f-s-9.png",
                "f-s-10.png", 
              ].map((imgSrc, index) => (
                <motion.img
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: -100 },
                    visible: { opacity: 1, y: 0, transition: bounceTransition },
                  }}
                  src={`/assets/images/${imgSrc}`}
                  className="w-full"
                />
              ))}
            </motion.div>

            <div className="space-y-16 max-w-4xl mx-auto">
              <section>
                <h1
                  className="font-bold text-4xl pb-16 text-gray-900 min-h-[3em]"
                  ref={quoteRef}
                ></h1>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={bounceTransition}
                >
                  <h2 className="text-xl font-bold mb-4 text-gray-900">
                    Outcome
                  </h2>
                  <p className="text-gray-500 text-lg leading-relaxed">
                    By simplifying how expenditure is captured and interpreted,
                    the experience encourages consistent tracking, builds
                    clearer financial awareness, and empowers users to make more
                    confident, informed decisions over time.
                  </p>
                </motion.div>
              </section>
              <motion.section
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ ...bounceTransition, delay: 0.2 }}
              >
                <h2 className="text-xl font-bold mb-4 text-gray-900">
                  Reflections
                </h2>
                <p className="text-gray-800 text-lg leading-relaxed">
                  Working on Spenditure highlighted that collecting expenditure
                  data is only the starting point. What truly drives value is
                  transforming that data into clear, actionable insight. When
                  users can instantly understand their financial position, the
                  experience evolves from routine tracking to meaningful
                  awareness—making consistency feel effortless rather than
                  enforced.
                </p>
              </motion.section>
            </div>
          </section>
        </div>

        <div className="mt-32 pt-12 border-t border-gray-100 md:flex block justify-between items-center max-w-6xl mx-auto px-4 xl:px-0">
          <div className="text-right">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">
              Previous Project
            </p>
            <Link
              href="/nithub-forms"
              className="group inline-block transition-transform duration-300 hover:scale-110 mb-2"
            >
              <img
                src="/assets/images/nit-btn.png"
                alt="Next Project"
                className="w-64 transition-all duration-300 group-hover:brightness-110"
              />
            </Link>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">
              Next Project
            </p>
            <Link
              href="/nithub-forms"
              className="group inline-block transition-transform duration-300 hover:scale-110"
            >
              <img
                src="/assets/images/glee-btn.png"
                alt="Next Project"
                className="w-64 transition-all duration-300 group-hover:brightness-110"
              />
            </Link>
          </div>
        </div>
        <BackToTopBtn />
      </article>

      <footer className="md:mt-10 mt-5 pt-10">
        <Socials />
      </footer>
    </div>
  );
};

export default SpenditurePage;
