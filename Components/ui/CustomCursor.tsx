"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorVariant, setCursorVariant] = useState<"default" | "impact">(
    "default",
  );

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    setMounted(true); // Required for createPortal to avoid hydration errors
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const path = e.composedPath() as HTMLElement[];

      const isImpact = path.some(
        (el) => el.dataset?.cursorImpact !== undefined,
      );
      const isHoverable = path.some(
        (el) =>
          el.tagName === "A" ||
          el.tagName === "BUTTON" ||
          el.dataset?.cursorHover !== undefined ||
          el.getAttribute?.("role") === "button",
      );

      if (isImpact) {
        setIsHovering(true);
        setCursorVariant("impact");
      } else if (isHoverable) {
        setIsHovering(true);
        setCursorVariant("default");
      } else {
        setIsHovering(false);
        setCursorVariant("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", () => setIsVisible(false));
    document.addEventListener("mouseenter", () => setIsVisible(true));

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!mounted || !isVisible) return null;

  return createPortal(
    <div
      className="custom-cursor-container fixed inset-0 z-[999999] pointer-events-none"
      style={{ pointerEvents: "none" }}
    >
      <motion.div
        className="absolute top-0 left-0 mix-blend-difference pointer-events-none"
        style={{ x: cursorX, y: cursorY }}
      >
        <motion.div
          className="absolute rounded-full bg-white"
          style={{ x: "-50%", y: "-50%" }}
          animate={{
            width: isHovering ? (cursorVariant === "impact" ? 70 : 50) : 20,
            height: isHovering ? (cursorVariant === "impact" ? 70 : 50) : 20,
            backgroundColor: "rgba(255, 91, 0, 0.5)",
            border:
              cursorVariant === "impact"
                ? "1px solid rgba(255,255,255,0.5)"
                : "none",
          }}
          transition={{ duration: 0.2, ease: "backOut" }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            x: "-50%",
            y: "-50%",
            backgroundColor: "rgba(255,255,255,0.5)",
            mixBlendMode: "difference",
          }}
          animate={{
            width: isHovering ? (cursorVariant === "impact" ? 70 : 50) : 10,
            height: isHovering ? (cursorVariant === "impact" ? 70 : 50) : 10,
            border:
              cursorVariant === "impact"
                ? "1px solid rgba(255,255,255,0.5)"
                : "none",
          }}
          transition={{ duration: 0.2, ease: "backOut" }}
        />
      </motion.div>

      <motion.div
        className="absolute top-0 left-0 pointer-events-none"
        style={{ x: cursorX, y: cursorY }}
      >
        <motion.div
          className="absolute rounded-full border border-white/20"
          style={{ x: "-50%", y: "-50%", mixBlendMode: "difference" }}
          animate={{
            width: isHovering ? 90 : 30,
            height: isHovering ? 90 : 30,
            opacity: isHovering ? 1 : 0.4,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
      </motion.div>
    </div>,
    document.body,
  );
}
