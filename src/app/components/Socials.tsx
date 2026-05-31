"use client";
import { useEffect, useState } from "react";
import {
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaDribbble,
  FaBehance,
} from "react-icons/fa6";

const Socials = () => {
  const [theme] = useState("dark");

  const isDark = theme === "dark" ? true : false;
  const muted = isDark ? "text-[#888888]" : "text-[#555555]";
  const border = isDark ? "border-white/10" : "border-black/10";
  const iconBg = isDark
    ? "text-[#888888] border-white/10"
    : "text-[#555555] border-black/10";
  const footerColumns = [
    {
      title: "Navigation",
      links: [
        { name: "Work", target: "#work" },
        { name: "About", target: "#about" },
        { name: "Facilitation", target: "/facilitation" },
        { name: "Blog", target: "/blog" },
        { name: "Playground", target: "#facilitation" },
      ],
      isExternal: false,
    },
    {
      title: "Connect",
      links: [
        {
          name: "LinkedIn",
          target: "https://www.linkedin.com/in/abisola-jegede",
        },
        { name: "Twitter / X", target: "https://x.com/arby981" },
        { name: "Dribbble", target: "https://dribbble.com/AbisolaJegede" },
        { name: "Behance", target: "https://www.behance.net/abisolajegede" },
        { name: "Instagram", target: "https://www.instagram.com/rbyinmotion/" },
      ],
      isExternal: true,
    },
  ];

  return (
    <footer className="py-16 max-w-full mx-auto">
      <div className="mx-auto">
        <div className="max-w-[1250px] mx-auto flex flex-col justify-between gap-20 lg:flex-row lg:items-start px-6">
          <div className="max-w-sm">
            <h3 className="mb-3 text-2xl font-bold tracking-tight">
              Abisola Jegede
            </h3>
            <p className={`text-sm leading-7 ${muted}`}>
              Product Designer and Facilitator crafting thoughtful digital
              experiences, motion systems, and product interactions.
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
          className={`mt-12 mx-10 gap-6 border-t ${border}`}
        >
          <div className={`flex flex-col mx-7 md:flex-row items-center pt-8 justify-between`}>
          <p className={`text-sm ${muted}`}>
            &copy; {new Date().getFullYear()} Abisola Jegede. All rights
            reserved.
          </p>
          <div className="flex gap-3">
            {[
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/abisola-jegede",
                icon: FaLinkedin,
              },
              {
                label: "Twitter",
                href: "https://x.com/arby981",
                icon: FaXTwitter,
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/rbyinmotion/",
                icon: FaInstagram,
              },
              {
                label: "Dribbble",
                href: "https://dribbble.com/AbisolaJegede",
                icon: FaDribbble,
              },
              {
                label: "Behance",
                href: "https://www.behance.net/abisolajegede",
                icon: FaBehance,
              },
            ].map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border transition hover:-translate-y-0.5 hover:bg-[#FF6A2A] hover:text-white ${iconBg}`}
                  title={item.label}
                >
                  {IconComponent ? (
                    <IconComponent className="h-[18px] w-[18px]" />
                  ) : (
                    <span className="text-xs font-bold">
                      {item.label.slice(0, 1)}
                    </span>
                  )}
                </a>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Socials;
