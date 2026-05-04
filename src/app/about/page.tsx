"use client";
import Image from "next/image";

import Header from "@/components/Header";
import Socials from "@/components/Socials";
import { useState, useEffect } from "react";
import arbyImage from "../../../public/assets/images/arby.png";
import img1 from "../../../public/assets/images/Rectangle 1533.png";
import img2 from "../../../public/assets/images/Rectangle 1534.png";
import img3 from "../../../public/assets/images/Group 119109.png";
import img4 from "../../../public/assets/images/Group 119108.png";
type Theme = "dark" | "light";
const About = () => {
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
    <div className="pt-8 ">
      <div className="w-[90%] mx-auto">
        <Header theme={theme} setTheme={setTheme} />
      </div>
      <main>
        <section className="text-white/60 md:mb-20">
          <blockquote className="group relative text-white italic text-2xl font-extralight mt-8 mx-[5%] mb-10 md:text-4xl md:mb-24">
            “I am a <span className="font-bold">nature</span> loving{" "}
            <span className="font-bold">sweet-tooth</span> human who loves
            teaching, <span className="font-bold">icecream</span> and an
            obsession for coffee. I love anything art, music and{" "}
            <span className="font-bold">games</span>. During my free time, I
            volunteer as a <span className="font-bold">Community Manager</span>{" "}
            for a gaming Community called Bold.” Wanna know what Bold does?{" "}
          </blockquote>
          <div className="flex flex-col items-center my-10 md:flex-row">
            <Image
              src={arbyImage}
              alt="Abisola Jegede"
              className="flex-1 mix-blend-luminosity w-full max-w-[488px] xs:w-[90%] xs:mx-[5%] xs:rounded-[0.875rem]"
            />
            <div className="flex-1 my-10 mx-[5%]">
              <div className="mb-8">
                <h2 className="text-white text-2xl font-medium leading-snug mb-2.5 md:text-[2.5rem]">
                  Design is my self-expression.
                </h2>
                <p className="text-lg md:text-2xl">
                  Design itself to me is a form of self expression, I&apos;ve
                  been able to channel that through some of my work.
                </p>
              </div>
              <div>
                <h2 className="text-white text-2xl font-medium leading-snug mb-2.5 md:text-[2.5rem]">
                  Design Thinking Facilitation
                </h2>
                <p className="text-lg md:text-2xl">
                  I love teaching, my UI/UX Journey first started with the
                  passion to teach others. Click here to view my facilitation
                  Journey.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center sm:flex-row">
            <Image
              src={img1}
              alt=""
              className="mix-blend-luminosity mb-6 w-full xs:w-[90%] xs:mx-[5%] xs:rounded-[0.875rem]"
            />
            <Image
              src={img2}
              alt=""
              className="mix-blend-luminosity mb-10 w-full xs:w-[90%] xs:mx-[5%] xs:rounded-[0.875rem]"
            />
          </div>
        </section>
        <section className="text-white/60 mb-16">
          <header className="mx-[5%] mb-10 max-w-[552px]">
            <h2 className="text-white text-2xl font-bold mb-5 md:text-[2.5rem]">
              Illustrating
            </h2>
            <p className="text-lg md:text-2xl">
              During my free time, I use the opportunity to create
              illustrations. Even though I dont illustrate very often, I try my
              best to do so when I am less busy, click here to view my list of
              illustrations.
            </p>
          </header>
          <div className="flex flex-col items-center sm:flex-row">
            <Image
              src={img3}
              alt=""
              className="mb-8 w-full max-w-[500px] xs:w-[90%] xs:mx-[5%]"
            />
            <Image
              src={img4}
              alt=""
              className="w-full max-w-[500px] xs:w-[90%] xs:mx-[5%]"
            />
          </div>
        </section>
        <section className="text-white/60 mx-[5%]">
          <h2 className="text-white text-[2.5rem] font-bold mb-8">
            Volunteering activities
          </h2>
          <ul className="text-2xl flex flex-col gap-10 mb-20">
            <li className="grid gap-8 md:grid-cols-[calc(100%-200px)_150px]">
              <span className="font-bold">
                Design Tutor and Facilitator Ovralon Digitals
              </span>
              <span>2023-Present</span>
            </li>
            <li className="grid gap-8 md:grid-cols-[calc(100%-200px)_150px]">
              <span className="font-bold">
                Community Manager @Bold-designers
              </span>
              <span>2022-2024</span>
            </li>
            <li className="grid gap-8 md:grid-cols-[calc(100%-200px)_150px]">
              <span className="font-bold">Design Lead Arete</span>
              <span>2020-Present</span>
            </li>
            <li className="grid gap-8 md:grid-cols-[calc(100%-200px)_150px]">
              <span className="font-bold">Design Lead GDSC Unilag</span>
              <span>2021-2022</span>
            </li>
            <li className="grid gap-8 md:grid-cols-[calc(100%-200px)_150px]">
              <span className="font-bold">Design Lead Tutor GDSC Unilag</span>
              <span>2020-2021</span>
            </li>
            <li className="grid gap-8 md:grid-cols-[calc(100%-200px)_150px]">
              <span className="font-bold">
                Design Mentor and Facilitator Mademoiselle Foundation
              </span>
              <span>2020-2021</span>
            </li>
          </ul>
        </section>
        <div className="py-12">
          <Socials />
        </div>
      </main>
    </div>
  );
};

export default About;
