import React from "react";

interface SlidingBtnProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  text: string;
  variant?: "solid" | "outline";
  accent?: string; // e.g., "#FF6A2A"
  isDark?: boolean;
  borderClass?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export default function SlidingBtn({
  href,
  text,
  variant = "solid",
  accent = "#FF6A2A",
  isDark = true,
  borderClass = "border-white/10",
  icon,
  iconPosition,
  className = "",
  ...props
}: SlidingBtnProps) {
  const isSolid = variant === "solid";
  const finalIconPosition = iconPosition || (isSolid ? "right" : "left");

  // Base style tokens
  const solidClasses = "text-white hover:bg-[#E55A1F] shadow-[0_4px_16px_rgba(255,106,42,0.3)]";
  const outlineClasses = `border ${borderClass} hover:text-[#FF6A2A] hover:border-[#FF6A2A] ${
    isDark ? "text-[#EAEAEA]" : "text-[#1A1A1A]"
  }`;

  // Determine the correct gradient sheen based on variant and theme
  let sheenGradient = "";
  if (isSolid) {
    sheenGradient = isDark 
      ? "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)" // White overlay for dark mode
      : "linear-gradient(90deg, transparent, rgba(0,0,0,0.2), transparent)";      // Dark overlay for light mode
  } else {
    sheenGradient = "linear-gradient(90deg, transparent, rgba(255,106,42,0.3), transparent)"; // Accent for outline
  }

  return (
    <a
      href={href}
      className={`relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 group ${
        isSolid ? solidClasses : outlineClasses
      } ${className}`}
      style={isSolid ? { backgroundColor: accent } : undefined}
      {...props}
    >
      {/* THE DIAGONAL OVERLAY 
        - Switched from translate-x to left/right absolute positioning to prevent CSS transform conflicts.
        - Starts fully off-screen (-left-[150%]) and slides all the way across (group-hover:left-[150%]).
        - Injected the gradient via the style prop so it bypasses any Tailwind config limitations.
      */}
      <div 
        className="absolute top-0 -left-[150%] h-full w-[120%] skew-x-[-30deg] group-hover:left-[150%] transition-all duration-700 ease-in-out pointer-events-none z-0"
        style={{ background: sheenGradient }}
      />

      {/* Button Content Wrapper */}
      <span className="relative z-10 flex items-center gap-2 pointer-events-none">
        {icon && finalIconPosition === "left" && icon}
        {text}
        {icon && finalIconPosition === "right" && icon}
      </span>
    </a>
  );
}