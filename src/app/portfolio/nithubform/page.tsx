"use client";

import Header from "@/components/Header";
import Socials from "@/components/Socials";
import ProbStatement from "@/components/ProbStatement";
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
const NithubFormsPage = () => {
  const titlePart1Ref = useRef<HTMLSpanElement>(null);
  const titlePart2Ref = useRef<HTMLSpanElement>(null);
  const challengeRef = useRef<HTMLHeadingElement>(null);
  const approachRef = useRef<HTMLParagraphElement>(null);
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
      text: "Designing a centralized forms system to unify fragmented applications and ",
      duration: 1.5,
      ease: "none",
    }).to(
      titlePart2Ref.current,
      {
        text: "keep users within the Nithub experience.",
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
      text: "I reframed the work from 'designing forms' to defining how forms should exist within Nithub.",
      duration: 2.5,
      ease: "none",
    });

    gsap.to(quoteRef.current, {
      scrollTrigger: {
        trigger: quoteRef.current,
        start: "top 80%",
      },
      text: '"What looked like a UI problem was actually a missing layer in the Nithub digital system."',
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
    <div className="bg-white pt-24 text-[#1a1a1a] min-h-screen">
      <Header theme={theme} setTheme={setTheme} />
      <motion.section
        initial={{ backgroundColor: "#ffffff" }}
        animate={{ backgroundColor: "#EBF9E5" }}
        transition={{ duration: 1 }}
        className="w-full h-[60vh] md:h-[80vh] flex items-end justify-center overflow-hidden relative px-4 pb-12"
      >
        <div className="z-10 flex justify-center">
          <img
            src="/assets/images/nit-forms-hero.png"
            alt="Nithub Forms Dashboard"
            className="w-64 md:w-[100%] object-cover shadow-xl translate-y-16 block"
          />
        </div>
      </motion.section>
      <article className="max-w-full mx-auto py-24 font-sans overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...bounceTransition, delay: 2.5 }}
          className="flex justify-between text-center items-baseline mx-auto max-w-6xl mb-12 border-b border-gray-100 pb-6 px-4 xl:px-0"
        >
          <h2 className="text-xl font-bold tracking-tight">Nithub Form</h2>
          <span className="text-gray-400 font-medium">August 2025</span>
        </motion.div>

        {/* Main Title (Typewriter) */}
        <h1 className="text-3xl md:text-5xl mx-auto max-w-6xl font-extrabold mb-20 tracking-tighter leading-[1.2] text-gray-900 px-4 xl:px-0 min-h-[3em]">
          <span ref={titlePart1Ref}></span>
          <span ref={titlePart2Ref} className="text-[#03947B]"></span>
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
              <h3 className="text-[13px] uppercase tracking-[0.2em] font-black text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed max-w-4xl">
                {item.desc}
              </p>
            </motion.section>
          ))}
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {/* Context */}
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={bounceTransition}
            className="max-w-6xl mx-auto px-4 xl:px-0"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
              Context
            </h2>
            <div className="space-y-8 max-w-6xl">
              <p className="text-2xl md:text-3xl font-medium text-gray-800 leading-snug">
                At Nithub, forms are a core part of how programs, applications,
                and requests are managed. Different teams created and maintained
                their own Google Forms independently.
              </p>
              <p className="text-gray-600 text-xl leading-relaxed">
                This worked initially, but as activities and programs grew,
                forms became scattered across teams and storage locations. The
                website became the primary entry point for people engaging with
                Nithub, but most applications were completed elsewhere.
              </p>
              <p className="text-gray-600 text-xl leading-relaxed">
                Forms were no longer just tools for collecting information; they
                had become a key part of how people entered and interacted with
                the hub.
              </p>
            </div>
            <img src="/assets/images/context.png" alt="" className="mt-20" />
          </motion.section>

          <section className="max-w-6xl mx-auto px-4 xl:px-0">
            <h2
              className="text-2xl md:text-4xl font-bold mb-6 text-gray-900 min-h-[1.5em]"
              ref={challengeRef}
            ></h2>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={bounceTransition}
              className="max-w-6xl mx-auto px-4 xl:px-0 text-gray-600 text-xl leading-relaxed mb-7"
            >
              At Nithub, forms were a core part of how programs, applications,
              and requests were managed. Different teams such as Programs,
              Innovation, Communications , created and maintained their own
              Google Forms independently. This worked initially, but as
              activities and programs grew, forms became scattered across teams
              and storage locations.
            </motion.div>
            <motion.div
              initial={{ borderLeftColor: "transparent" }}
              whileInView={{ borderLeftColor: "#03947B" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.5 }}
              className="border-l-8 pl-4 md:pl-8 py-4 mb-12 overflow-hidden rounded-r-2xl"
            >
              <motion.h3
                initial={{ x: "-100%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ...bounceTransition, delay: 1 }}
                className="text-lg md:text-2xl font-bold text-gray-800 leading-tight"
              >
                "How might we bring forms into the Nithub experience while
                creating a shared structure for teams to manage them?"
              </motion.h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={bounceTransition}
              className="max-w-6xl mx-auto px-4 xl:px-0 mt-16"
            >
              <img src="/assets/images/design-challenge.png" alt="" />
            </motion.div>
          </section>
          <section className="py-20 px-4 xl:px-0">
            <h2 className="max-w-6xl mx-auto text-2xl md:text-3xl font-bold mb-12 text-gray-900">
              Why This Mattered
            </h2>

            <div className="max-w-6xl mx-auto grid gap-6 items-start mb-16">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  External Impact
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Redirecting people away from the website at the moment of
                  conversion broke continuity and created uncertainty about
                  whether they were still within Nithub.
                </p>
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                Internal Struggle
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                The lack of a central location meant:
              </p>
              <ul className="space-y-3 text-lg text-gray-600 pl-2">
                <li className="flex items-center gap-3">
                  <DotIcon className="text-rose-500 shrink-0" /> Forms were hard
                  to find or track
                </li>
                <li className="flex items-center gap-3">
                  <DotIcon className="text-rose-500 shrink-0" /> Data was
                  scattered
                </li>
                <li className="flex items-center gap-3">
                  <DotIcon className="text-rose-500 shrink-0" /> Duplication
                  happened
                </li>
                <li className="flex items-center gap-3">
                  <DotIcon className="text-rose-500 shrink-0" /> Handover
                  between teams was difficult
                </li>
              </ul>
            </div>

            <div className="max-w-4xl mx-auto text-center mt-12">
              <h1
                className="font-bold text-3xl md:text-4xl text-gray-900 min-h-[3em] italic"
                ref={quoteRef}
              ></h1>
            </div>
            <ProbStatement />
          </section>

          <section className="mx-auto max-w-6xl pb-12 px-4 xl:px-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
              Approach
            </h2>
            <p
              className="text-2xl md:text-3xl font-medium text-gray-800 leading-[1.4] min-h-[3em] mb-10"
              ref={approachRef}
            ></p>

            <div>
              <p className="text-gray-600 text-xl leading-relaxed mb-8">
                Key questions guiding the work:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {[
                  "Where should forms live in the Nithub environment?",
                  "How should teams create and track them over time?",
                  "How does the application journey remain continuous?",
                  "What structure supports this as programs scale?",
                ].map((question, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 border border-gray-200 rounded-md p-6 flex items-center shadow-sm"
                  >
                    <p className="text-gray-800 text-sm md:text-lg leading-snug font-medium">
                      {question}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-gray-900 text-xl md:text-2xl font-semibold leading-relaxed max-w-3xl"
              >
                This shifted the direction from improving individual screens to
                designing a{" "}
                <span className="text-blue-600">holistic forms system.</span>
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={bounceTransition}
              className="mt-40"
            >
              <p className="text-2xl font-bold mb-4">Old User Flow</p>
              <img
                src="/assets/images/old-flow.png"
                alt="Workflow Mapping and Lifecycle"
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
              <p className="text-2xl font-bold mb-4">New User Flow</p>
              <img
                src="/assets/images/new-flow.png"
                alt="Workflow Mapping and Lifecycle"
                className="w-full rounded-3xl"
              />
            </motion.div>
          </section>
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={bounceTransition}
            className="max-w-6xl mx-auto px-4 xl:px-0"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
              Process
            </h2>

            <div className="space-y-6 max-w-5xl">
              <h3 className="text-gray-800 text-lg leading-relaxed font-semibold tracking-wider">
                Experience Mapping
              </h3>
              <p className="text-gray-600 text-xl leading-relaxed">
                I mapped the application journey from website entry to
                submission. The map showed a consistent break: users left the
                Nithub site to complete forms and had no guided return.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-2 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...bounceTransition, delay: 0.2 }}
              >
                <img
                  src="/assets/images/process-1.png"
                  alt="Experience Mapping Part 1"
                  className="w-full rounded-2xl shadow-sm object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...bounceTransition, delay: 0.4 }}
              >
                <img
                  src="/assets/images/process-2.png"
                  alt="Experience Mapping Part 2"
                  className="w-full rounded-2xl shadow-sm object-cover"
                />
              </motion.div>
            </div>
          </motion.section>
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={bounceTransition}
            className="max-w-6xl mx-auto px-4 xl:px-0 py-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
              Internal Workflow Mapping
            </h2>

            <p className="text-gray-600 text-xl leading-relaxed mb-12 max-w-4xl">
              I traced how forms were created, stored, and handed over across
              teams. The patterns were consistent:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {[
                "Forms scattered in personal or team drives",
                "no shared naming or structure",
                "Unclear ownership after form creation",
                "Frequent duplicates and outdated links",
              ].map((issue, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 border border-gray-200 rounded-md p-6 flex items-center shadow-sm"
                >
                  <p className="text-gray-800 text-sm md:text-md leading-snug font-medium">
                    {issue}
                  </p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...bounceTransition, delay: 0.4 }}
              className="w-full"
            >
              <img
                src="/assets/images/mapping.png"
                alt="Internal Workflow Map"
                className="w-full rounded-2xl object-cover"
              />
            </motion.div>
          </motion.section>
          <section className="max-w-6xl mx-auto px-4 xl:px-0 py-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
              Observed Behaviour & Recurring Feedback
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed">
              Across teams, people described difficulty locating or taking over
              existing forms. Users were also known to drop off after leaving
              the website to complete applications.
              <p>
                These signals pointed to fragmentation in both experience and
                management, not isolated usability issues.
              </p>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16">
              {[
                "Forms scattered in personal or team drives",
                "Lack of shared naming or structural standards",
                "Unclear ownership after form creation",
                "Frequent duplicates and outdated links",
              ].map((issue, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 border border-gray-200 rounded-md p-6 flex items-center shadow-sm"
                >
                  <p className="text-gray-800 text-sm md:text-md leading-snug font-medium">
                    {issue}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
          <section className="max-w-6xl mx-auto px-4 xl:px-0 py-16">
            <h1 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
              From Lifecycle Diagram
            </h1>
            <h2 className="text-xl md:text-2xl font-bold mb-8 text-gray-600">
              Key Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16">
              {[
                "Forms scattered in personal or team drives",
                "There was no shared repository or lifecycle structure, making continuity and ownership difficult",
                "The application journey broke at the point of action",
                "Redirecting users outside the website interrupted engagement and weakened trust.",
                "The issue was structural, not visual",
                "Improving individual forms would not resolve fragmentation or continuity gaps.",
              ].map((issue, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 border border-gray-200 rounded-md p-6 flex items-center shadow-sm"
                >
                  <p className="text-gray-800 text-sm md:text-md leading-snug font-medium">
                    {issue}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="items-center text-center">
              <img
                src="/assets/images/form-lifecycle.png"
                alt="Form Lifecycle Diagram"
                className="mx-auto"
              />
              <p className="my-10">Missing shared Repository</p>
              <div>
                <div className="border border-[#27A810] w-9/12 rounded-xl py-8 mb-12 mx-auto">
                  <p className="font-semibold text-md mb-2">
                    User Application Journey
                  </p>
                  <p>Inconsistent experience across programs</p>
                </div>
                <div className="flex items-center text-center justify-center gap-20 mx-auto">
                  <div className="flex items-center">
                    <Check /> Fragmented Teams
                  </div>
                  <div className="flex items-center">
                    <Check /> No shared Repository
                  </div>
                  <div className="flex items-center">
                    <Check /> Inconsistent processes
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="max-w-6xl mx-auto px-4 xl:px-0 py-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
              Solution
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed mb-12 max-w-4xl">
              I designed a centralized forms system integrated directly within
              the website. The system transformed fragmented tools into a
              managed layer that introduced:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {[
                "Standardized form repository and naming conventions",
                "Embedded application experience to maintain continuity",
                "Centralized dashboard for team-wide form tracking",
                "Shared lifecycle governance and ownership structure",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 border border-gray-200 rounded-md p-6 flex items-center shadow-sm"
                >
                  <p className="text-gray-800 text-sm md:text-md leading-snug font-medium">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>

            <p className="text-gray-600 text-xl leading-relaxed mb-12">
              Forms shifted from separate Google tools to a cohesive, managed
              layer within the Nithub platform.
            </p>
            <div className="flex flex-col gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...bounceTransition, delay: 0.2 }}
                className="mb-20"
              >
                <img
                  src="/assets/images/workflow.png"
                  alt="Nithub Forms Workflow"
                  className="w-5/6 mx-auto rounded-md object-cover"
                />
                <p className="text-center font-semibold text-sm">Nithub Forms Workflow</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...bounceTransition, delay: 0.4 }}
              >
                <img
                  src="/assets/images/life-cycle.png"
                  alt="Form Lifecycle Management"
                  className="w-5/6 mx-auto rounded-md object-cover"
                />
                <p className="text-center font-semibold text-sm">Form Life Cycle</p>
              </motion.div>
            </div>
          </section>
          <section className="bg-[#f7f3f3] py-20 px-4 xl:px-0 w-full overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={bounceTransition}
                className="md:w-1/2 space-y-6"
              >
                <h3 className="text-4xl font-bold text-gray-900">
                  Nithub Page: Embedded Form
                </h3>
                <p className="text-gray-800 text-lg pb-4 leading-relaxed font-semibold">
                  Seamless Entry Point
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Application forms were embedded directly within the pages,
                  allowing users to begin and complete submissions without being
                  redirected to external platforms.
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
                  src="/assets/images/embedded.png"
                  alt="Embedded Form"
                  className="w-full max-w-md object-contain shadow-2xl rounded-md"
                />
              </motion.div>
            </div>
          </section>

          <section className="py-20 px-4 xl:px-0 w-full overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={bounceTransition}
                className="md:w-1/2 space-y-6"
              >
                <h3 className="text-4xl font-bold text-gray-900">
                  Full Application Form Page
                </h3>
                <p className="text-gray-800 text-lg pb-4 leading-relaxed font-semibold">
                  Structured Application Experience
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  The application form is presented as a dedicated page to
                  provide focus and reduce distractions. Information is grouped
                  into clear sections, allowing users to complete their
                  submission efficiently without feeling overwhelmed.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={bounceTransition}
                className="md:w-1/2 flex justify-start"
              >
                <img
                  src="/assets/images/app-form.png"
                  alt="Full Application Form"
                  className="w-full max-w-md object-contain shadow-2xl rounded-md"
                />
              </motion.div>
            </div>
          </section>

          <section className="bg-[#f7f3f3] py-20 px-4 xl:px-0 w-full overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={bounceTransition}
                className="md:w-1/2 space-y-6"
              >
                <h3 className="text-4xl font-bold text-gray-900">
                  Annotated Form Structure Header
                </h3>
                <p className="text-gray-800 text-lg pb-4 leading-relaxed font-semibold">
                  Designed for Clarity and Completion
                </p>
                <ul className="text-gray-600 text-lg leading-relaxed space-y-3 pl-2">
                  <li className="flex items-center gap-3">
                    <DotIcon className="text-[#03947B]" /> Centralized hub for
                    all programs
                  </li>
                  <li className="flex items-center gap-3">
                    <DotIcon className="text-[#03947B]" /> Clear ownership and
                    governance
                  </li>
                  <li className="flex items-center gap-3">
                    <DotIcon className="text-[#03947B]" /> Automated handover
                    routing
                  </li>
                </ul>
                <p className="text-gray-800 text-xl font-bold leading-relaxed pt-6">
                  The form is broken into structured sections with a clear step
                  indicator, helping users understand their progress. Key inputs
                  such as founder details, startup information, and pitch
                  uploads are organized to minimize cognitive load and improve
                  completion rates.
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
                  src="/assets/images/annot-1.png"
                  alt="Admin Form Management"
                  className="w-full max-w-lg object-contain shadow-2xl rounded-md"
                />
              </motion.div>
            </div>
          </section>
          <section className="py-20 px-4 xl:px-0 w-full overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={bounceTransition}
                className="md:w-1/2 space-y-6"
              >
                <h3 className="text-4xl font-bold text-gray-900">
                  Annotated Form Structure Header
                </h3>
                <p className="text-gray-800 text-lg pb-4 leading-relaxed font-semibold">
                  Structured Application Experience
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  For complex programs, a dedicated application page provides a
                  clear, distraction-free environment. Annotated headers help
                  users understand their progress and requirements.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={bounceTransition}
                className="md:w-1/2 flex justify-start"
              >
                <img
                  src="/assets/images/annot-2.png"
                  alt="Full Application Form"
                  className="w-full max-w-md object-contain shadow-2xl rounded-md"
                />
              </motion.div>
            </div>
          </section>
          <section className="bg-[#f7f3f3] py-20 px-4 xl:px-0 w-full overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={bounceTransition}
                className="md:w-1/2 space-y-6"
              >
                <h3 className="text-4xl font-bold text-gray-900">
                  Admin Form Management Page
                </h3>
                <p className="text-gray-800 text-lg pb-4 leading-relaxed font-semibold">
                  Efficient Form Management for Internal Operations
                </p>
                <ul className="text-gray-600 text-lg leading-relaxed space-y-1 pl-2">
                  <li className="flex items-center gap-3">
                    <DotIcon className="text-[#03947B]" /> Centralized hub for
                    all programs
                  </li>
                  <li className="flex items-center gap-3">
                    <DotIcon className="text-[#03947B]" /> Clear ownership and
                    governance
                  </li>
                  <li className="flex items-center gap-3">
                    <DotIcon className="text-[#03947B]" /> Automated handover
                    routing
                  </li>
                </ul>
                <p className="text-gray-800 text-xl font-bold leading-relaxed pt-6">
                  An internal interface enables the Nithub team to manage
                  submission forms, review structure, and control availability.
                  This supports operational efficiency by allowing forms to be
                  updated, reused, and monitored without technical dependencies.
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
                  src="/assets/images/admin.png"
                  alt="Admin Form Management"
                  className="w-full max-w-lg object-contain shadow-2xl rounded-md"
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
                  <h1 className="font-bold text-3xl md:text-4xl pb-16 text-gray-900 leading-tight">
                    The system transformed forms from scattered, disconnected
                    tools into a core part of the Nithub experience.
                  </h1>

                  <h2 className="text-2xl font-bold mb-4 text-gray-900">
                    Outcome
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    <strong>Experience:</strong> Applications are completed
                    entirely within the platform, eliminating external
                    redirects. A consistent experience maintains brand
                    continuity throughout the process, and reduced friction
                    leads to lower drop-offs.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    <strong>Internal Operations:</strong> Provides a centralized
                    hub for managing forms in one place, clear ownership, and
                    maintenance across teams, along with improved collaboration
                    and automated handover between programs.
                  </p>
                </motion.div>
              </section>
              <section className="flex items-center justify-between">
                <div>
                  <p className="text-xl text-gray-600 font-semibold text-center">
                    Before Redesign:
                  </p>
                  <img
                    src="/assets/images/redesign.png"
                    alt="Admin Form Management"
                    className="w-full max-w-lg object-contain shadow-2xl rounded-2xl"
                  />
                </div>

                <div>
                  <p className="text-xl text-gray-600 font-semibold text-center">
                    After Redesign:
                  </p>
                  <img
                    src="/assets/images/app-form.png"
                    alt="Admin Form Management"
                    className="w-64 max-w-lg object-contain shadow-2xl"
                  />
                </div>
              </section>

              <motion.section
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ ...bounceTransition, delay: 0.2 }}
                className="bg-gray-50 p-8 md:p-12 rounded-3xl"
              >
                <h2 className="text-xl font-bold mb-4 text-gray-900">
                  Reflection
                </h2>
                <p className="text-gray-800 text-lg leading-relaxed mb-4">
                  This project reinforced a recurring pattern in growing
                  organizations: tools become fragmented when a unifying system
                  layer is absent.
                </p>
                <p className="text-gray-800 text-lg leading-relaxed mb-4">
                  By integrating forms into the Nithub ecosystem and defining
                  how teams create and manage them, the solution improved both
                  user continuity and internal structure.
                </p>
                <p className="text-gray-800 text-lg leading-relaxed font-medium">
                  Designing at this level required moving beyond individual
                  screens into system thinking—considering ownership, lifecycle,
                  and scalability as core parts of the experience.
                </p>
              </motion.section>
            </div>
          </section>
        </div>

        <div className="mt-32 pt-12 border-t border-gray-100 flex justify-between items-center max-w-6xl mx-auto px-4 xl:px-0">
          <div className="text-left">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">
              Previous Project
            </p>
            <button className="group transition-transform duration-300 hover:scale-110">
              <img
                src="/assets/images/glee-btn.png"
                alt="Previous Project"
                className="w-40 md:w-60 transition-all duration-300 group-hover:brightness-110"
              />
            </button>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">
              Next Project
            </p>
            <button className="group transition-transform duration-300 hover:scale-110">
              <img
                src="/assets/images/nit-btn.png"
                alt="Next Project"
                className="w-40 md:w-60 transition-all duration-300 group-hover:brightness-110"
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
  );
};

export default NithubFormsPage;
