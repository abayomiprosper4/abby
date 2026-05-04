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
  return (
    <main className="mx-auto py-8 w-[90%]">
  <Header theme={theme} setTheme={setTheme} />
    <div className="flex flex-col h-[70vh] items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-6"
      >
        <p className="font-space text-white/90 text-xl md:text-2xl mb-12 leading-relaxed tracking-wide">
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
      <div className="absolute bottom-28 text-gray-400 text-sm md:text-base tracking-wide">
        I am a Jack of all Trades Master of All.
      </div>
    </div>
          <Socials />
    </main>
  );
}
