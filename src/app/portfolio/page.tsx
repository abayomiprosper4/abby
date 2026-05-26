"use client";

import Header from "@/components/Header";
import Socials from "@/components/Socials";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Project {
  title: string;
  type: string;
  description: string;
  image: string;
  href: string;
}
type Theme = "dark" | "light";

const projects: Project[] = [
  {
    title: "GigSecure",
    type: "Web application",
    description:
      "Empowering gig workers to manage uncertainty through clear, actionable risk insights.",
    image: "/assets/images/gigsecure.png",
    href: "/portfolio/gigsecure",
  },
  {
    title: "Nithub Website",
    type: "Website",
    description:
      "Reimagining Nithub's digital presence to better communicate its innovation ecosystem.",
    image: "/assets/images/nithub.png",
    href: "/portfolio/nithub",
  },
  {
    title: "Spenditure",
    type: "Mobile application",
    description: "Rethinking Personal Expense Awareness.",
    image: "/assets/images/spenditure.png",
    href: "/portfolio/spenditure",
  },
  {
    title: "Gleephoria",
    type: "Mobile application",
    description:
      "Designing a dating experience that prioritizes meaningful connections over endless swiping.",
    image: "/assets/images/gleephoria.png",
    href: "/portfolio/gleephoria",
  },
  {
    title: "Nithub Forms",
    type: "Web application",
    description:
      "Designing a centralized forms system to unify fragmented applications.",
    image: "/assets/images/forms.png",
    href: "/portfolio/nithubforms",
  },
  {
    title: "Transtura",
    type: "Mobile application",
    description:
      "Redefining the Ride Booking Experience Through System Feedback.",
    image: "/assets/images/transtura.png",
    href: "/portfolio/transtura",
  },
];

const ProjectCard = ({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className="bg-[#484848] rounded-3xl p-8 flex flex-col items-center text-center overflow-hidden border border-white/5 hover:border-white/10 transition-all group cursor-pointer h-full"
    >
      <span className="bg-[#ffff00]/10 text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-widest mb-6 font-medium">
        {project.type}
      </span>
      <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
      <p className="text-gray-400 text-sm mb-10 leading-relaxed max-w-[260px]">
        {project.description}
      </p>

      <div
        className={`mt-auto w-full relative h-48 sm:h-64 transition-all duration-500`}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain object-bottom"
        />
      </div>
    </div>
  );
};

export default function PortfolioPage() {
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
  const router = useRouter();

  const handleProjectClick = (project: Project) => {
    router.push(project.href);
  };

  return (
    <main className="mx-auto py-8 mt-10 font-space min-h-screen relative">
      <Header theme={theme} setTheme={setTheme} />

      <section className="flex flex-col lg:flex-row justify-between items-start gap-12 mx-24 mb-24 mt-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white/80 leading-[1.1] max-w-4xl tracking-tight">
          Product designer with <span>5+ years</span> of experience crafting
          experiences, guiding teams, and building systems that work.
        </h1>
      </section>

      <section className="grid z-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-16 gap-8 mb-32">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={() => handleProjectClick(project)}
          />
        ))}
      </section>

      <footer className="pb-10">
        <Socials />
      </footer>
    </main>
  );
}
