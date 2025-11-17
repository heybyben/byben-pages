"use client";

import { useTheme } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FaTelegramPlane, FaGithub, FaInstagram } from "react-icons/fa";

export default function ContactPage() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`
        flex flex-col min-h-screen font-sans 
        transition-colors duration-500
        ${darkMode ? "bg-[#1a1a1a] text-white" : "bg-[#F9F9F9] text-black"}
      `}
    >
      {/* Navigation */}
      <Navbar />

      {/* Contact Section */}
      <main className="flex-1 px-10 py-16 text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-6"
        >
          Get in Touch
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Interested in discussing{" "}
          <span className="underline decoration-2 decoration-black dark:decoration-white">
            Android ROMs
          </span>{" "}
          or just want to hang out with fellow tech enthusiasts? Feel free to
          join my Telegram group — it’s a chill place to share ideas, ask
          questions, or just chat about tech stuff.
        </motion.p>

        {/* Telegram CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8"
        >
          <a
            href="https://t.me/rmdnsupport"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              inline-flex items-center gap-3 border-4 border-black 
              font-bold px-8 py-3 rounded-lg transition
              ${
                darkMode
                  ? "bg-black text-white hover:bg-[#EAEAEA] hover:text-black"
                  : "bg-[#EAEAEA] text-black hover:bg-black hover:text-white"
              }
            `}
          >
            <FaTelegramPlane className="text-2xl" />
            Join My Telegram Group
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 space-y-4"
        >
          <p className="font-semibold text-lg">Connect with me:</p>

          <div className="flex justify-center gap-8 text-3xl">
            <a
              href="https://t.me/heybyben"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              <FaTelegramPlane />
            </a>

            <a
              href="https://github.com/heybyben"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 dark:hover:text-gray-300 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://instagram.com/ramaadni"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 dark:hover:text-pink-400 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
