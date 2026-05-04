"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import Socials from "@/components/Socials";

import shoppieImg from "../../../public/assets/images/shoppie.png";
import gleephoriaImg from "../../../public/assets/images/gleephoria.png";
import transturaImg from "../../../public/assets/images/transtura.png";
import orvalonDigitalImg from "../../../public/assets/images/orvalon-digital.png";
import uxResearchPaperImg from "../../../public/assets/images/ux-research-paper.png";

type Theme = "dark" | "light";
const ProductDesignPage = () => {
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

        <p className="text-xl leading-8">
          I am a <span className="font-extrabold">Product designer</span> with 3
          years of professional work experience from creating visually
          aesthetically pleasing designs my goal is to ensure that I am able to
          provide the best user experience for users and ensure business growth.
        </p>
      </div>
      <section className="mb-24">
        <h2 className="font-extralight italic text-2xl lg:text-[2rem] mb-10">
          My works
        </h2>
        <ul className="grid gap-x-16 gap-y-8 lg:grid-cols-[repeat(auto-fill,minmax(450px,1fr))]">
          <li className="max-w-[550px] border border-white rounded-3xl bg-gray-100 py-8 px-5">
            <article className="flex flex-col items-center text-center relative">
              <div className="max-w-[340px]">
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
                    Shoppie
                  </h3>
                </header>
                <p className="text-gray-700 text-lg leading-8 mb-4">
                  Redesigning a mobility application to ease user
                  transportation.
                </p>
              </div>
              <Image src={shoppieImg} alt="Shoppie" />
            </article>
          </li>
          <li className="max-w-[550px] rounded-3xl py-8 px-5 bg-gray-300">
            <article className="flex flex-col items-center text-center relative">
              <div className="max-w-[340px]">
                <header>
                  <a
                    href="https://pyrite-seagull-63a.notion.site/Gleephoria-A-dating-website-f7f4361823174763b4479f40293ec87f"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow/15 font-medium text-sm mb-4 py-1.5 px-3 rounded-2xl before:content-[''] before:absolute before:inset-0 before:z-10"
                  >
                    Gleephoria NDA Bound
                  </a>
                  <h3 className="italic font-light text-2xl mb-6 leading-8">
                    An online dating application.
                  </h3>
                </header>
                <p className="text-gray-700 text-lg leading-8 mb-4">
                  Redesigning a mobility application to ease user
                  transportation.
                </p>
              </div>
              <Image src={gleephoriaImg} alt="Gleephoria" />
            </article>
          </li>
          <li className="max-w-[550px] rounded-3xl py-8 px-5 bg-gray-300">
            <article className="flex flex-col items-center text-center relative">
              <div className="max-w-[340px]">
                <header>
                  <a
                    href="https://pyrite-seagull-63a.notion.site/Transtura-Revamp-6aa0c110f5394af088cda49f75fff5bc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow/15 font-medium text-sm mb-4 py-1.5 px-3 rounded-2xl before:content-[''] before:absolute before:inset-0 before:z-10"
                  >
                    Transtura
                  </a>
                  <h3 className="italic font-light text-2xl mb-6 leading-8">
                    Order buses at cheap and convenient prices.
                  </h3>
                </header>
                <p className="text-gray-700 text-lg leading-8 mb-4">
                  Redesigning a mobility application to ease user
                  transportation.
                </p>
              </div>
              <Image src={transturaImg} alt="Transtura" />
            </article>
          </li>
          <li className="max-w-[550px] border border-white bg-gray-300/[0.26] rounded-3xl py-8 px-5">
            <article className="flex flex-col items-center text-center">
              <div className="max-w-[340px]">
                <header>
                  <span className="inline-block bg-yellow/15 font-medium text-sm mb-4 py-1.5 px-3 rounded-2xl">
                    Orvalon Digital
                  </span>
                  <h3 className="italic font-light text-2xl mb-6 leading-8">
                    Order buses at cheap and convenient prices.
                  </h3>
                </header>
                <p className="text-gray-700 text-lg leading-8 mb-4">
                  Redesigning a mobility application to ease user
                  transportation.
                </p>
              </div>
              <Image src={orvalonDigitalImg} alt="Orvalon Digital" />
            </article>
          </li>
          <li className="max-w-[550px] border border-white bg-gray-100 rounded-3xl py-8 px-5">
            <article className="flex flex-col items-center text-center">
              <div className="max-w-[340px]">
                <header>
                  <span className="inline-block bg-yellow/15 font-medium text-sm mb-4 py-1.5 px-3 rounded-2xl">
                    UX Research Paper
                  </span>
                  <h3 className="italic font-light text-2xl mb-6 leading-8">
                    Understanding why students take time to{" "}
                  </h3>
                </header>
                <p className="text-gray-700 text-lg leading-8 mb-4">
                  Redesigning a mobility application to ease user
                  transportation.
                </p>
              </div>
              <Image src={uxResearchPaperImg} alt="UX Research Paper" />
            </article>
          </li>
        </ul>
      </section>

      <Socials />
    </div>
  );
};

export default ProductDesignPage;
