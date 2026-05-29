"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

interface PasswordProtectedModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  projectImage: string;
  projectHref: string;
  correctPassword?: string;
}

const PasswordProtectedModal = ({
  isOpen,
  onClose,
  projectTitle,
  projectImage,
  projectHref,
  correctPassword = "abisola123",
}: PasswordProtectedModalProps) => {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const router = useRouter();

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      router.push(projectHref);
      handleClose();
    } else {
      setPasswordError(true);
    }
  };

  const handleClose = () => {
    setPassword("");
    setPasswordError(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="bg-[#1a1e20] border border-white/10 rounded-3xl p-8 max-w-md w-full relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
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
              <h3 className="text-2xl font-bold text-[#FFFF] mb-2">
                {projectTitle}
              </h3>

              <div className="w-full h-40 my-6">
                <img
                  src={projectImage}
                  alt={projectTitle}
                  className="w-full h-full object-contain"
                />
              </div>

              <form onSubmit={handlePasswordSubmit} className="w-full mt-6">
                <p className="text-gray-400 mb-6 text-md">
                  This project is password protected due to an NDA.
                </p>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (passwordError) setPasswordError(false);
                  }}
                  placeholder="Enter Password"
                  className="w-full bg-[#2a2f33] border border-white/10 focus:border-[#FF6A2A] outline-none text-white rounded-xl px-4 py-3 mb-6 transition-all"
                  autoFocus
                />
                <button
                  type="submit"
                  className="w-[16rem] bg-white hover:bg-[#FF6A2A] border border-[#FF6A2A] text-[#FFFF] hover:text-[#FFFF] font-bold py-3 rounded-xl transition-colors"
                >
                  View Case Study
                </button>
                {passwordError && (
                  <p className="text-red-400 text-xs mt-4 font-medium">
                    Incorrect password. Please reach out for access.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PasswordProtectedModal;
