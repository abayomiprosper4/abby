"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Socials from "@/components/Socials";
import { motion } from "framer-motion";
type Theme = "dark" | "light";
export default function ManagementPage() {
    const [theme, setTheme] = useState<Theme>("dark");
    const [mobileOpen, setMobileOpen] = useState(false);
  
    // 1. Theme Persistence Logic
    useEffect(() => {
      const savedTheme =
        (localStorage.getItem("theme") as Theme | null) || "dark";
      setTheme(savedTheme);
    }, []);
  
    useEffect(() => {
      localStorage.setItem("theme", theme);
    }, [theme]);
      const isDark = theme === "dark";

  const surface = isDark
    ? "bg-[#0B0B0B] text-[#EAEAEA]"
    : "bg-[#F8F9FB] text-[#1A1A1A]";
  const subtle = isDark ? "text-[#A0A0A0]" : "text-[#555555]";
  const border = isDark ? "border-white/10" : "border-black/10";
  const secondaryBg = isDark ? "bg-[#111111]" : "bg-[#FFFFFF]";
  const tertiaryBg = isDark ? "bg-[#1A1A1A]" : "bg-[#F0F1F3]";
  const icon = isDark ? "text-[#EAEAEA]" : "text-[#FFFF]";
  const accent = "#FF6A2A";

  return (
    <main className={`mx-auto ${surface} py-8`}>
  <Header theme={theme} setTheme={setTheme} />
    <div className="flex flex-col h-[70vh] items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-6"
      >
        <p className={`font-space ${subtle} text-xl md:text-2xl my-12 leading-relaxed tracking-wide`}>
          Hii, we are currently working on this page.
          <br />
          Kindly check back in another time.
        </p>

        <div className="flex justify-center gap-4">
          {[0, 1, 2].map((index) => (
            <motion.span
              key={index}
              className="w-14 h-14 bg-[#FF5F1F] rounded-full"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>
      <div className={`mt-20 ${subtle} text-sm md:text-base tracking-wide`}>
        I am a Jack of all Trades Master of All.
      </div>
    </div>
          <Socials />
    </main>
  );
}
