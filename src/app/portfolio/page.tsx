"use client";

import Header from "@/components/Header";
import Socials from "@/components/Socials";
import { motion, AnimatePresence } from "framer-motion";
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
    href: "/portfolio/nithub-forms",
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
  const isClipped =
    project.title === "Spenditure" || project.title === "Gleephoria";

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
        className={`mt-auto w-full relative h-48 sm:h-64 transition-all duration-500 
        ${isClipped ? "translate-y-14 scale-110" : "group-hover:scale-105"}`}
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const handleProjectClick = (project: Project) => {
    if (project.title === "Gleephoria" || project.title === "GigSecure") {
      // These require the modal (Password or Coming Soon)
      setSelectedProject(project);
    } else {
      router.push(project.href);
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
    setPassword("");
    setPasswordError(false);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "abisola123") {
      // Redirect to the case study page upon success
      router.push(selectedProject?.href || "/");
      closeModal();
    } else {
      setPasswordError(true);
    }
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

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-16 gap-8 mb-32">
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

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-[#1a1e20] border border-white/10 rounded-3xl p-8 max-w-md w-full relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 text-gray-400 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="flex flex-col items-center text-center mt-4">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedProject.title}
                </h3>

                {selectedProject.title === "GigSecure" ? (
                  <>
                    <div className="w-full h-40 my-6">
                      <img
                        src={selectedProject.image}
                        alt=""
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-[#FFFF00] text-lg font-medium mb-2">
                      Coming soon...
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      GigSecure is currently being documented. Check back
                      shortly for the full case study.
                    </p>
                  </>
                ) : (
                  <form onSubmit={handlePasswordSubmit} className="w-full mt-6">
                    <p className="text-gray-400 mb-6 text-sm">
                      {" "}
                      This project is password protected due to an NDA.{" "}
                    </p>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        if (passwordError) setPasswordError(false);
                      }}
                      placeholder="Enter Password"
                      className="w-full bg-[#2a2f33] border border-white/10 focus:border-[#FFFF00] outline-none text-white rounded-xl px-4 py-3 mb-4 transition-all"
                      autoFocus
                    />
                    <button
                      type="submit"
                      className="w-full bg-white hover:bg-[#FFFF00] text-black font-bold py-3 rounded-xl transition-colors"
                    >
                      View Case Study
                    </button>
                    {passwordError && (
                      <p className="text-red-400 text-xs mt-4 font-medium">
                        Incorrect password. Please reach out for access.
                      </p>
                    )}
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
