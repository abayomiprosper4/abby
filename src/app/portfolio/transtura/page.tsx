"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Socials from "@/components/Socials";
import BackToTopBtn from "@/components/BacktoTopBtn";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(TextPlugin, ScrollTrigger);
}
type Theme = "dark" | "light";
const TransturaPage = () => {
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
  const titlePart1Ref = useRef<HTMLSpanElement>(null);
  const titlePart2Ref = useRef<HTMLSpanElement>(null);
  const trustRef = useRef<HTMLHeadingElement>(null);
  const insightRef = useRef<HTMLHeadingElement>(null);
  const reflectionRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 3.8 });
    tl.to(titlePart1Ref.current, {
      text: "Redefining the Ride Booking Experience ",
      duration: 1.5,
      ease: "none",
    }).to(
      titlePart2Ref.current,
      { text: "Through System Feedback", duration: 1, ease: "none" },
      "+=0.5"
    );

    gsap.to(trustRef.current, {
      scrollTrigger: {
        trigger: trustRef.current,
        start: "top 80%",
      },
      text: "The booking experience, therefore, is not just a flow. It is a trust system.",
      duration: 2,
      ease: "none",
    });

    gsap.to(insightRef.current, {
      scrollTrigger: {
        trigger: insightRef.current,
        start: "top 80%",
      },
      text: "When users cannot see what the system is doing, they assume it is not working.",
      duration: 2,
      ease: "none",
    });

    gsap.to(reflectionRef.current, {
      scrollTrigger: {
        trigger: reflectionRef.current,
        start: "top 80%",
      },
      text: "Uncertainty is one of the fastest ways to lose user trust.",
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
        animate={{ backgroundColor: "#FACC15" }} // Transtura Yellow
        transition={{ duration: 1 }}
        className="w-full h-[55vh] md:h-[85vh] flex items-end justify-center overflow-hidden relative px-4"
      >
        <div className="flex items-end justify-center gap-4 md:gap-14 translate-y-1 md:translate-y-2">
          <motion.div
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
          >
            <img
              src="/assets/images/transtura-mock-1.png"
              alt="Transtura Home"
              className="w-24 sm:w-32 md:w-56 object-contain shadow-2xl rounded-[1.5rem] md:rounded-[2rem] transform -rotate-2 translate-y-12 md:translate-y-7"
            />
          </motion.div>

          <motion.div
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            className="z-10"
          >
            <img
              src="/assets/images/transtura-mock-2.png"
              alt="Transtura Trips"
              className="w-28 sm:w-40 md:w-64 object-contain shadow-2xl rounded-[1.5rem] md:rounded-[2rem] scale-110 md:scale-125"
            />
          </motion.div>

          <motion.div
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
          >
            <img
              src="/assets/images/transtura-mock-3.png"
              alt="Transtura Ride"
              className="w-24 sm:w-32 md:w-56 object-contain shadow-2xl rounded-[1.5rem] md:rounded-[2rem] transform rotate-2 translate-y-12 md:translate-y-7"
            />
          </motion.div>
        </div>
      </motion.section>

      <article className="max-w-full mx-auto py-24 font-sans overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...bounceTransition, delay: 2.5 }}
          className="flex justify-between text-center items-baseline mx-auto border-b border-gray-100  max-w-6xl mb-12 px-4 xl:px-0"
        >
          <h2 className="text-2xl font-bold tracking-tight">Transtura</h2>
          <span className="text-gray-800 font-bold">2023</span>
        </motion.div>
        <h1 className="text-3xl md:text-5xl mx-auto max-w-6xl font-bold mb-6 tracking-tight leading-[1.2] text-gray-900 px-4 xl:px-0 min-h-[2.4em]">
          <span ref={titlePart1Ref}></span>
          <br />
          <span ref={titlePart2Ref} className="text-[#FACC15]"></span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...bounceTransition, delay: 4.5 }}
          className="mx-auto max-w-6xl px-4 xl:px-0 mb-32"
        >
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl font-medium">
            Transportation, Mobility | Product Designer | <span className="font-bold text-gray-900">Redefined the booking experience by reducing uncertainty and improving the system feedback</span>
          </p>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={bounceTransition}
            className="max-w-6xl mx-auto px-4 xl:px-0"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Project Context</h2>
            <p className="text-gray-600 text-xl leading-relaxed mb-6">
              Transtura is a mobility platform designed to connect riders with drivers through a shared ride system. The platform aims to provide flexible and accessible transportation, particularly in environments where reliability and responsiveness directly impact user trust.
            </p>
            <p className="text-gray-900 text-xl font-bold leading-relaxed">
              This project focused on redesigning the ride booking experience to eliminate uncertainty and improve how the system communicates with users during critical moments.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={bounceTransition}
            className="max-w-6xl mx-auto px-4 xl:px-0"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Project Overview</h2>
            <p className="text-gray-600 text-xl leading-relaxed mb-6">
              In mobility products, trust is built through feedback. <br />
              When users request a ride, they expect immediate clarity about what is happening. Any delay or lack of communication creates doubt and in high-dependency scenarios like transportation, doubt quickly leads to abandonment.
            </p>
            <h3
              className="text-2xl font-bold text-gray-900 min-h-[1.5em]"
              ref={trustRef}
            ></h3>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={bounceTransition}
            className="max-w-6xl mx-auto px-4 xl:px-0"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Research & Validation</h2>
            <p className="text-gray-900 text-xl font-bold leading-relaxed mb-10">
              Initial insights were gathered from user reviews on the Play Store, where recurring complaints highlighted frustration around unclear ride status and lack of feedback.
            </p>
            <div className="w-full mb-10">
              <img
                src="/assets/images/frame-8740.png"
                alt="Play Store Reviews"
                className="w-full object-contain"
              />
            </div>
            <p className="text-gray-600 text-xl leading-relaxed mb-10">
              To validate these findings, I engaged with the Transtura team to understand the intended system behaviour and constraints.
            </p>
            <div className="w-full">
              <img
                src="/assets/images/research.png"
                alt="Transtura Booking Feedback Problems Board"
                className="w-full max-w-4xl mx-auto object-contain shadow-sm border border-gray-100 rounded-2xl"
              />
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={bounceTransition}
            className="max-w-6xl mx-auto px-4 xl:px-0"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Key Insights</h2>
            <p className="text-gray-600 text-xl leading-relaxed mb-6">
              The system was not failing it was invisible.
            </p>
            <h3
              className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug min-h-[2em]"
              ref={insightRef}
            ></h3>
          </motion.section>
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={bounceTransition}
            className="max-w-6xl mx-auto px-4 xl:px-0"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Design Approach</h2>
            <p className="text-gray-600 text-xl leading-relaxed mb-6">
              The project evolved from addressing a single usability issue into a broader redesign of the booking experience.
            </p>
            <p className="text-gray-600 text-xl leading-relaxed">
              Rather than improving isolated screens, the focus shifted to redefining the booking flow as a system, ensuring that every stage communicates progress and intent.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={bounceTransition}
            className="max-w-6xl mx-auto px-4 xl:px-0"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Redesign Scope</h2>
            <p className="text-gray-600 text-xl leading-relaxed mb-10">
              The redesign focused on three critical areas:
            </p>
            <p className="text-2xl font-bold text-gray-900">
              This ensured the solution addressed the entire experience, not just a single interaction.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={bounceTransition}
            className="max-w-6xl mx-auto px-4 xl:px-0 flex flex-col items-center"
          >
            <div className="w-full text-left mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Understanding the Existing Experience</h2>
              <p className="text-gray-600 text-xl leading-relaxed">
                The project evolved from addressing a single usability issue into a broader redesign of the booking experience.
              </p>
            </div>
            <img
              src="/assets/images/exp-1-1.svg"
              alt="Existing Experience Flow"
              className="w-full max-w-3xl object-contain"
            />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={bounceTransition}
            className="max-w-6xl mx-auto px-4 xl:px-0"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Reframing the Booking Experience</h2>
            <p className="text-gray-600 text-xl leading-relaxed mb-10">
              A new flow was introduced to eliminate uncertainty and guide users through the process.
            </p>
            <div className="w-full flex justify-center mb-16">
              <img
                src="/assets/images/exp-2-2.svg"
                alt="New Booking Flow"
                className="w-full max-w-4xl object-contain rounded-2xl shadow-lg"
              />
            </div>
            
            <p className="text-gray-600 text-xl leading-relaxed mb-8">
              The updated experience ensures that users always know:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-[#FFF9D6] text-gray-900 font-medium py-4 px-6 rounded-md shadow-sm border border-[#FDE047]">
                When the system is processing their request
              </div>
              <div className="bg-[#FFF9D6] text-gray-900 font-medium py-4 px-6 rounded-md shadow-sm border border-[#FDE047]">
                What stage they are in
              </div>
              <div className="bg-[#FFF9D6] text-gray-900 font-medium py-4 px-6 rounded-md shadow-sm border border-[#FDE047]">
                What happens next
              </div>
            </div>

            <p className="text-gray-900 text-xl leading-relaxed">
              This transforms the experience from passive waiting into guided interaction.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={bounceTransition}
            className="max-w-6xl mx-auto px-4 xl:px-0"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Exploration</h2>
            <p className="text-gray-600 text-xl leading-relaxed mb-10">
              Early ideas were explored through sketches to quickly test different approaches to structuring the experience.
            </p>
            <div className="w-full mb-10">
              <img
                src="/assets/images/explore.png"
                alt="Wireframe Sketches"
                className="w-full object-contain"
              />
            </div>
            <p className="text-gray-900 text-xl leading-relaxed font-medium">
              These explorations focused on simplifying decisions and making system actions more visible.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={bounceTransition}
            className="max-w-6xl mx-auto px-4 xl:px-0 flex flex-col items-center"
          >
            <div className="w-full text-left mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Structuring the Experience</h2>
              <p className="text-gray-600 text-xl leading-relaxed">
                The direction was refined through wireframes, defining layout, hierarchy, and interaction flow.
              </p>
            </div>
            <img
              src="/assets/images/structure.svg"
              alt="Digital Wireframes"
              className="w-full max-w-3xl object-contain mb-10"
            />
            <div className="w-full text-left">
              <p className="text-gray-600 text-xl leading-relaxed">
                At this stage, clarity was prioritised over visual detail to ensure the experience remained intuitive.
              </p>
            </div>
          </motion.section>
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={bounceTransition}
            className="max-w-6xl mx-auto px-4 xl:px-0 flex flex-col items-center"
          >
            <div className="w-full text-left mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Visual Direction</h2>
              <p className="text-gray-600 text-xl leading-relaxed">
                A consistent visual system was applied to support usability and reinforce clarity.
              </p>
            </div>
            <img
              src="/assets/images/direction.png"
              alt="Visual Direction Styleguide"
              className="w-full max-w-4xl object-contain mb-10"
            />
            <div className="w-full text-left">
              <p className="text-gray-600 text-xl leading-relaxed">
                The interface uses clear hierarchy and minimal visual noise to keep users focused on key actions and system feedback.
              </p>
            </div>
          </motion.section>
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={bounceTransition}
            className="max-w-full mx-auto"
          >
            <div className="max-w-6xl mx-auto px-4 xl:px-0 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Designing the Booking Flow</h2>
              <p className="text-gray-600 text-xl leading-relaxed">
                The redesigned booking experience introduces continuous feedback at critical moments.
              </p>
            </div>
            <div className="w-full bg-[#fed800] py-16 px-4 flex justify-center mb-10">
              <img
                src="/assets/images/booking-flow.png"
                alt="Booking Flow Screens"
                className="w-full max-w-6xl object-contain"
              />
            </div>
            <div className="max-w-6xl mx-auto px-4 xl:px-0">
              <p className="text-gray-900 text-xl leading-relaxed">
                After requesting a ride, users can now see that the system is actively searching for drivers, reducing uncertainty and reinforcing that the process is ongoing.
              </p>
            </div>
          </motion.section>
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={bounceTransition}
            className="max-w-6xl mx-auto px-4 xl:px-0 flex flex-col items-center"
          >
            <div className="w-full text-left mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Improving Ride Selection</h2>
              <p className="text-gray-600 text-xl leading-relaxed">
                The ride selection experience was redesigned to make options clearer and easier to compare.
              </p>
            </div>
            
            <img
              src="/assets/images/old.png"
              alt="Old Design Screens"
              className="w-full max-w-3xl object-contain mb-6"
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-16">Old design</h3>

            <img
              src="/assets/images/new.png"
              alt="New Design Screens"
              className="w-full max-w-3xl object-contain mb-6"
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-10">New Design</h3>

            <div className="w-full text-left">
              <p className="text-gray-600 text-xl leading-relaxed">
                Users can now make more informed decisions before confirming a ride, reducing friction earlier in the journey.
              </p>
            </div>
          </motion.section>
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={bounceTransition}
            className="max-w-6xl mx-auto px-4 xl:px-0 flex flex-col items-center"
          >
            <div className="w-full text-left mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Enhancing Trip Visibility</h2>
              <p className="text-gray-600 text-xl leading-relaxed">
                Trip management was improved to give users clearer insight into their activity.
              </p>
            </div>
            
            <img
              src="/assets/images/visibility.png"
              alt="Trip Visibility Screens"
              className="w-full max-w-3xl object-contain mb-10"
            />

            <div className="w-full text-left">
              <p className="text-gray-600 text-xl leading-relaxed">
                By clearly separating upcoming and past trips, the experience becomes easier to navigate and understand.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={bounceTransition}
            className="max-w-6xl mx-auto px-4 xl:px-0 flex flex-col items-center"
          >
            <div className="w-full text-left mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">System-Level Thinking</h2>
              <p className="text-gray-600 text-xl leading-relaxed">
                The final design introduces a feedback system that spans the entire booking journey.
              </p>
            </div>
            
            <img
              src="/assets/images/final.png"
              alt="System Level Thinking Screens"
              className="w-full object-contain mb-10"
            />

            <div className="w-full text-left">
              <p className="text-gray-900 font-medium text-xl leading-relaxed">
                Each stage communicates progress, ensuring users are never left guessing. The experience works as a cohesive system rather than disconnected screens.
              </p>
            </div>
          </motion.section>
          <section className="pt-20 px-4 xl:px-0">
            <div className="space-y-16 max-w-4xl mx-auto">
              <motion.section
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={bounceTransition}
              >
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Outcome</h2>
                <p className="text-gray-600 text-xl leading-relaxed">
                  This project demonstrates how redesigning a booking experience as a system rather than a sequence of screens can significantly improve user trust in mobility platforms. Although not implemented, the concept highlights how better communication of system state can transform perceived reliability.
                </p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ ...bounceTransition, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Reflection</h2>
                <p className="text-gray-600 text-xl leading-relaxed mb-6">
                  This project reinforced a critical principle in mobility design:
                </p>
                <h3
                  className="text-2xl font-bold text-gray-900 min-h-[1.5em] mb-6"
                  ref={reflectionRef}
                ></h3>
                <p className="text-gray-600 text-xl leading-relaxed">
                  By making system activity visible and guiding users through each stage of the booking process, the experience shifts from confusion to clarity. Design, in this context, is not just about usability, it is about making systems feel reliable, predictable, and trustworthy.
                </p>
              </motion.section>
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="mt-32 pt-12 border-t border-gray-100 md:flex block justify-between items-center max-w-6xl mx-auto px-4 xl:px-0">
          <div className="text-left mb-8 md:mb-0">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">
              Previous Project
            </p>
            <Link
              href="/spenditure"
              className="group inline-block transition-transform duration-300 hover:scale-110"
            >
              <img
                src="/assets/images/glee-btn.png"
                alt="Previous Project"
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
                src="/assets/images/nit-btn.png"
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

export default TransturaPage;