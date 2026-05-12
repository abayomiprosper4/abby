"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type Theme = "dark" | "light";

interface Project {
  title: string;
  types: string[]; 
  description: string;
  image: string;
  href: string;
}

interface WorksProps {
  theme: Theme;
}

const Works = ({ theme }: WorksProps) => {
  const router = useRouter();
  const revealedElements = useRef(new Set<HTMLElement>());
  
  const isDark = theme === "dark";
  const accent = "#FF6A2A";
  const themeStyles = {
    subtle: isDark ? "text-[#A0A0A0]" : "text-[#555555]",
  };

  const projects: Project[] = [
    {
      title: "GigSecure",
      types: ["Product Design", "Insurence"],
      description: "Designed a scalable insurance platform that simplifies onboarding, policy underwriting, and claims experiences for Gig workers.",
      image: "/assets/images/gigsecure.png",
      href: "/portfolio/gigsecure",
    },
    {
      title: "Nithub Website",
      types: ["Product Design", "Ecosystem Platform"],
      description: "Redesigned NITHUB's digital ecosystem contributing to Linkedin growth from 8k+ to 20k+ followers, while improving engagement by 30%.",
      image: "/assets/images/nithub.png",
      href: "/portfolio/nithub",
    },
    {
      title: "Spenditure",
      types: ["UI/UX", "Mobile App"],
      description: "Rethinking Personal Expense Awareness.",
      image: "/assets/images/spenditure.png",
      href: "/portfolio/spenditure",
    },
    {
      title: "Gleephoria",
      types: ["Product Design", "Web and Mobile App", "Dating App"],
      description: "Designing a dating experience that prioritizes meaningful connections over endless swiping.",
      image: "/assets/images/gleephoria.png",
      href: "/portfolio/gleephoria",
    },
    {
      title: "Nithub Forms",
      types: ["Web App", "System Design"],
      description: "Built a centralized applicatinon system that reduced submission dropoff rates by 50% and improved application management across teams.",
      image: "/assets/images/forms.png",
      href: "/portfolio/nithub-forms",
    },
    {
      title: "Transtura",
      types: ["Web App", "Mobility", "UI/UX"],
      description: "Redefined the Ride Booking Experience with clearer System Feedback and more seamless booking transactions.",
      image: "/assets/images/transtura.png",
      href: "/portfolio/transtura",
    },
  ];

  // ... (Keep your existing useEffects for the IntersectionObserver)

  return (
    <section id="work" className="px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="reveal mb-14 opacity-0 translate-y-8 transition-all duration-700">
          <span
            className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.16em]"
            style={{ color: accent }}
          >
            Selected Work
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
            Projects that define craft and impact
          </h2>
          <p className={`max-w-2xl text-lg leading-8 ${themeStyles.subtle}`}>
            A curated selection of product design work spanning enterprise
            platforms, consumer apps, and design systems.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="reveal opacity-0 translate-y-8 transition-all duration-700">
              <ProjectCard
                project={project}
                onClick={() => router.push(project.href)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => {
  return (
    <div
      onClick={onClick}
      className="bg-[#160e0d] rounded-3xl p-8 flex flex-col overflow-hidden border border-white/5 hover:border-white/10 transition-all group cursor-pointer h-full"
    >
      <div className="mt-auto w-full relative h-48 sm:h-64 mb-6 transition-all duration-500">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain object-top group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
      
      <p className="text-gray-400 text-sm leading-relaxed mb-6">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.types.map((type, i) => (
          <span 
            key={i}
            className="bg-[#ffff00]/10 text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-widest font-medium"
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Works;