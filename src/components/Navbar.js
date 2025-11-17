"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`w-full border-b-4 border-black px-6 py-3 sticky top-0 z-50 
      flex justify-between items-center
      ${darkMode ? "bg-[#2a2a2a] text-white" : "bg-[#EAEAEA] text-black"}`}
    >
      {/* Brand */}
      <div className="font-bold tracking-widest">
        <Link href="/">Byben</Link>
      </div>

      {/* RIGHT SIDE (Desktop Menu + Toggle + Mobile Button) */}
      <div className="flex items-center space-x-6">
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6 font-semibold text-sm">
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>

        {/* Toggle */}
        <div
          onClick={() => setDarkMode(!darkMode)}
          className={`relative w-14 h-7 rounded-full border-2 border-black cursor-pointer transition 
          ${darkMode ? "bg-black" : "bg-white"}`}
        >
          <div
            className={`absolute top-1/2 -translate-y-1/2 left-1 w-5 h-5 rounded-full border-2 border-black 
            transition-transform duration-300
            ${darkMode ? "translate-x-6 bg-white" : "translate-x-0 bg-black"}`}
          ></div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-3xl font-bold"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`absolute left-0 top-16 w-full border-b-4 border-black 
          flex flex-col items-center space-y-6 py-6 text-base font-semibold
          ${darkMode ? "bg-[#2a2a2a] text-white" : "bg-[#EAEAEA] text-black"}`}
        >
          <Link
            href="/blog"
            onClick={() => setOpen(false)}
            className="hover:underline"
          >
            Blog
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="hover:underline"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="hover:underline"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
