"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTheme } from "@/context/ThemeContext";

export default function AboutPage() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`
        flex flex-col min-h-screen font-sans  
        transition-colors duration-500
        ${darkMode ? "bg-[#1a1a1a] text-white" : "bg-[#F9F9F9] text-black"}
      `}
    >
      <Navbar />

      {/* Main content */}
      <main className="flex-1 px-10 py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-6"
        >
          About Me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Hi, I&apos;m Ramadhani — someone who enjoys exploring Android systems,
          especially custom ROMs and kernels. I spend a lot of time learning,
          experimenting, and building things purely out of curiosity.
          <br />
          <br />
          I&apos;m based in Indonesia and I enjoy working on open-source
          projects, developing features, and sometimes breaking things just to
          fix them again. I always aim for clean UI, simple UX, and stable
          software.
          <br />
          <br />
          This page is simply a little space to share who I am outside of the
          projects I work on.
        </motion.p>
      </main>

      <Footer />
    </div>
  );
}
