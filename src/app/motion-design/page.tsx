"use client";

import Image from "next/image";

import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import Socials from "@/components/Socials";
import { useState, useEffect } from "react";
import flyingPlaneImg from "../../../public/assets/images/flying-plane.png";
import countdownTimerImg from "../../../public/assets/images/countdown-timer.png";
import textAnimationImg from "../../../public/assets/images/text-animation.png";

import driveIcon from "../../../public/assets/icons/drive.svg";

type Theme = "dark" | "light";
const MotionDesignPage = () => {
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
  return (
    <div className="pt-8 mx-[5%]">
      <Header theme={theme} setTheme={setTheme} />

      <div className="mt-8 mb-24">
        <Introduction theme={theme} />

        <p className="text-xl leading-8 text-gray-700 max-w-[957px]">
          I will call myself a beginner motion designer with over a year of
          experience. My passion for motion design stems from the fact that I
          love animation. This is the reason I ventured into motion design in
          order to make my designs stand out.
        </p>
      </div>
      <section className="mb-24">
        <h2 className="font-extralight italic text-2xl lg:text-[2rem] mb-10">
          My works
        </h2>
        <ul className="grid gap-16 lg:grid-cols-[repeat(auto-fill,minmax(450px,1fr))]">
          <li className="max-w-[550px] rounded-3xl bg-gray-300 py-8 px-5">
            <article className="flex flex-col items-center text-center">
              <div className="max-w-[340px] mb-16">
                <header>
                  <span className="inline-block bg-yellow/15 font-medium text-sm mb-4 py-1.5 px-3 rounded-2xl">
                    Animation
                  </span>
                  <h3 className="italic font-light text-2xl mb-6 leading-8">
                    Flying Plane
                  </h3>
                </header>
                <p className="text-gray-700 text-lg leading-8 mb-4">
                  A simple animation of a flying plane.
                </p>
              </div>
              <Image src={flyingPlaneImg} alt="Flying plane" />
            </article>
          </li>
          <li className="max-w-[550px] border border-white bg-gray-100 rounded-3xl py-10 px-5">
            <article className="flex flex-col items-center text-center">
              <div className="max-w-[340px] mb-16">
                <header>
                  <span className="inline-block bg-yellow/15 font-medium text-sm mb-4 py-1.5 px-3 rounded-2xl">
                    Animation
                  </span>
                  <h3 className="italic font-light text-2xl mb-6 leading-8">
                    Countdown Timer
                  </h3>
                </header>
                <p className="text-gray-700 text-lg leading-8 mb-4">
                  A simple clock animation timer.
                </p>
              </div>
              <Image src={countdownTimerImg} alt="Countdown timer" />
            </article>
          </li>
          <li className="max-w-[550px] border border-white bg-gray-100 rounded-3xl py-10 px-5">
            <article className="flex flex-col items-center text-center relative">
              <div className="max-w-[340px] mb-16">
                <header>
                  <a
                    href="https://pyrite-seagull-63a.notion.site/Shoppie-2a636820fb2a4b019b47e4d27790e1a9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow/15 font-medium text-sm mb-4 py-1.5 px-3 rounded-2xl before:content-[''] before:absolute before:inset-0 before:z-10"
                  >
                    Shoppie
                  </a>
                  <h3 className="italic font-light text-2xl mb-6 leading-8">
                    Text Animation
                  </h3>
                </header>
                <p className="text-gray-700 text-lg leading-8 mb-4">
                  A simple text animation.
                </p>
              </div>
              <Image src={textAnimationImg} alt="Text animation" />
            </article>
          </li>
          <li className="max-w-[550px] rounded-3xl py-8 px-5 bg-gray-300">
            <a
              href="https://drive.google.com/drive/folders/1Q0lKQDQ1oWi2jImA-Arpr8bDMr873Xr-?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <article className="flex flex-col items-center text-center h-full">
                <header className="max-w-[340px] mb-16">
                  <span className="inline-block bg-yellow/15 font-medium text-sm mb-4 py-1.5 px-3 rounded-2xl">
                    More Work
                  </span>
                  <h3 className="italic font-light text-2xl mb-6 leading-8">
                    Other Projects
                  </h3>
                </header>
                <figure className="flex-1 grid place-items-center max-w-[300px]">
                  <Image src={driveIcon} alt="Google Drive icon" />
                  <figcaption className="text-gray-700 text-lg leading-8 mb-4">
                    This is a Google slide presentation showing the motion I
                    have done.
                  </figcaption>
                </figure>
              </article>
            </a>
          </li>
        </ul>
      </section>

      <Socials />
    </div>
  );
};

export default MotionDesignPage;
