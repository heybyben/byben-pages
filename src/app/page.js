"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTheme } from "@/context/ThemeContext";
import { useEffect, useState } from "react";

export default function RetroMacPortfolio() {
  const { darkMode } = useTheme();

  // Typewriter words
  const words = ["Ramadhani", "Byben", "Noob"];
  const [wordIndex, setWordIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const current = words[wordIndex];
    const speed = deleting ? 70 : 120;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIndex < current.length) {
          setTyped(current.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setDeleting(true), 700);
        }
      } else {
        if (charIndex > 0) {
          setTyped(current.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words]);

  return (
    <div
      className={`
        flex flex-col min-h-screen font-sans
        border-t-4 border-x-4 border-black
        transition-colors duration-500
        ${darkMode ? "bg-[#1a1a1a] text-white" : "bg-[#F9F9F9] text-black"}
      `}
    >
      <Navbar />

      {/* Main content */}
      <main className="flex-1">
        {/* Hero */}
        <section
          className="
            px-6 py-14
            md:px-10 md:py-20
            grid grid-cols-1 md:grid-cols-2
            gap-10 md:gap-12
            items-center
            text-center md:text-left
          "
        >
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="
                text-4xl sm:text-5xl md:text-6xl
                font-extrabold leading-tight mb-4
              "
            >
              Hello.
              <br />
              I&apos;m{" "}
              <span className="underline decoration-[4px] md:decoration-[6px] decoration-black dark:decoration-white">
                <span>{typed}</span>
                <span className="cursor-blink">|</span>
              </span>
              .
            </h1>

            <p className="text-base sm:text-lg mb-6 max-w-md mx-auto md:mx-0">
              Just someone who’s interested in Android Custom ROMs — purely for
              the fun of passing the time.
            </p>

            <Link
              href="/blog"
              className={`
                border-4 border-black px-5 py-3 font-bold inline-block
                text-sm sm:text-base transition
                ${
                  darkMode
                    ? "bg-black text-white hover:bg-[#EAEAEA] hover:text-black"
                    : "bg-white text-black hover:bg-black hover:text-white"
                }
              `}
            >
              View my latest builds →
            </Link>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div
              className={`
                border-4 border-black rounded-md shadow-[0_4px_0_#000]
                ${darkMode ? "bg-[#2a2a2a]" : "bg-white"}
                w-fit mx-auto
              `}
            >
              {/* Retro window topbar */}
              <div className="flex items-center gap-2 px-3 py-2 border-b-4 border-black bg-[#dcdcdc]">
                <div className="w-3 h-3 bg-red-500 rounded-full border-2 border-black"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full border-2 border-black"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-black"></div>
              </div>

              {/* Portrait */}
              <Image
                src="/byben.jpg"
                alt="portrait"
                width={240}
                height={240}
                className="
                  w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64
                  object-cover border-4 border-black m-3 rounded-md
                  filter grayscale contrast-125 brightness-95 saturate-0
                  hover:grayscale-0 hover:saturate-100 transition
                "
              />
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
