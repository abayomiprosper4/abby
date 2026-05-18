"use client";
import { useState } from "react";
import { ExternalLink } from "lucide-react";


const Socials = () => {
  const [theme] = useState("dark");

  const isDark = theme === "dark";
  const muted = isDark ? "text-[#666666]" : "text-[#888888]";
  const border = isDark ? "border-white/10" : "border-black/10";
  const secondaryBg = isDark ? "bg-[#111111]" : "bg-[#FFFFFF]";

  // Unified structured column data for simple editing
  const footerColumns = [
    {
      title: "Navigation",
      links: [
        { name: "Work", target: "#work" },
        { name: "About", target: "#about" },
        { name: "Facilitation", target: "#strategy" },
        { name: "Blog", target: "#contact" },
        { name: "Playground", target: "#contact" },
      ],
      isExternal: false,
    },
    {
      title: "Connect",
      links: [
        { name: "LinkedIn", target: "https://www.linkedin.com/in/abisola-jegede" },
        { name: "Twitter / X", target: "https://x.com/arby981" },
        { name: "Dribbble", target: "https://dribbble.com/AbisolaJegede" },
        { name: "Behance", target: "https://www.behance.net/abisolajegede" },
        { name: "Instagram", target: "https://www.instagram.com/rbyinmotion/" },
      ],
      isExternal: true,
    },
  ];

  return (
    <footer className="py-16">
      <div className="mx-auto">
        <div className="max-w-[1200px] mx-auto flex flex-col justify-between gap-12 lg:flex-row lg:items-start px-6">
          
          <div className="max-w-sm">
            <h3 className="mb-3 text-2xl font-bold tracking-tight">
              Abisola Jegede
            </h3>
            <p className={`text-sm leading-7 ${muted}`}>
              Product Designer and Facilitator crafting thoughtful digital experiences, 
              motion systems, and product interactions.
            </p>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 md:gap-24">
            {footerColumns.map((col) => (
              <div key={col.title} className="lg:min-w-[150px]">
                <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.08em]">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.target}
                        target={col.isExternal ? "_blank" : undefined}
                        rel={col.isExternal ? "noopener noreferrer" : undefined}
                        className={`text-sm transition hover:text-[#FF6A2A] ${muted}`}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
        <div
          className={`mt-12 mx-6 flex flex-col items-center justify-between gap-6 border-t pt-8 md:flex-row ${border}`}
        >
          <p className={`text-sm ${muted}`}>
            &copy; {new Date().getFullYear()} Abisola Jegede. All rights reserved.
          </p>
          <div className="flex gap-3">
            {[
              { label: "LinkedIn", href: "https://linkedin.com/in/YOUR_USERNAME" },
              { label: "Twitter", href: "https://x.com/YOUR_USERNAME" },
              { label: "Dribbble", href: "https://dribbble.com/YOUR_USERNAME" },
              { label: "Behance", href: "https://behance.net/YOUR_USERNAME" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex h-10 w-10 items-center justify-center rounded-xl border transition hover:-translate-y-0.5 hover:bg-[#FF6A2A] hover:text-white ${secondaryBg} ${border} ${muted}`}
              >
                <ExternalLink className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Socials;