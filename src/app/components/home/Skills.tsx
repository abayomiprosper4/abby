"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut", delay: 0.8 },
  },
};

const SkillsSection = () => {
  return (
    <section className="font-space flex flex-col justify-center items-center py-10 px-4 md:px-0">
      <motion.div
        className="w-full max-w-[91%] flex flex-col gap-16 md:gap-12"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        <motion.div
          variants={fadeInUp}
          className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-10 w-full"
        >
          <div className="relative group w-fit">
            <div className="hidden md:block absolute top-0 right-3 w-1.5 h-full bg-[#FF5F1F] z-0 transition-all duration-300 ease-out group-hover:translate-x-8"></div>

            <Link href="/portfolio">
              <button className="relative z-10 bg-[#1a1e20] border border-white/20 hover:border-white/50 text-white text-lg md:text-xl lg:text-2xl rounded-lg py-5 px-6 md:py-9 md:px-14 whitespace-normal md:whitespace-nowrap hover:shadow-neon transition-all duration-500 w-full md:w-fit">
                Product Design
              </button>
            </Link>
          </div>
          <div className="flex gap-4 items-stretch">
            <div className="block md:hidden w-1.5 bg-[#FF5F1F] flex-shrink-0"></div>

            <p className="text-gray-200 tracking-wider font-light text-lg md:text-xl leading-relaxed max-w-full">
              I am a product designer with 5 years of professional work
              experience from creating visually aesthetically pleasing designs.
              My goal is...
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 w-full"
        >
          <div className="relative group w-fit">
            <div className="hidden md:block absolute top-0 right-3 w-1.5 h-full bg-[#FF5F1F] z-0 transition-all duration-500 ease-out group-hover:translate-x-8"></div>

            <Link href="/working">
              <button className="relative z-10 bg-[#1a1e20] border border-white/20 hover:border-white/50 text-white text-lg md:text-xl lg:text-2xl rounded-lg py-5 px-6 md:py-9 md:px-14 whitespace-normal md:whitespace-nowrap hover:shadow-neon transition-all duration-500 w-full md:w-fit">
                Design Thinking Facilitation
              </button>
            </Link>
          </div>

          <div className="flex gap-4 items-stretch">
            <div className="block md:hidden w-1.5 bg-[#FF5F1F] flex-shrink-0"></div>
            <p className="text-gray-200 tracking-wider font-light text-lg md:text-xl leading-relaxed max-w-full">
              I am a self taught design thinking facilitator with over 3 years
              of professional experience.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 w-full"
        >
          <div className="relative group w-fit">
            <div className="hidden md:block absolute top-0 right-3 w-1.5 h-full bg-[#FF5F1F] z-0 transition-all duration-300 ease-out group-hover:translate-x-8"></div>

            <Link href="/motion-design">
              <button className="relative z-10 bg-[#1a1e20] border border-white/20 hover:border-white/50 text-white text-lg md:text-xl lg:text-2xl rounded-lg py-5 px-6 md:py-9 md:px-14 whitespace-normal md:whitespace-nowrap hover:shadow-neon transition-all duration-500 w-full md:w-fit">
                Motion Design
              </button>
            </Link>
          </div>

          <div className="flex gap-4 items-stretch">
            <div className="block md:hidden w-1.5 bg-[#FF5F1F] flex-shrink-0"></div>
            <p className="text-gray-200 tracking-wider font-light text-lg md:text-xl leading-relaxed max-w-full">
              Motion designer with 2 years of experience creating purposeful
              animations that bring digital products and ideas to life.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
