"use client";

import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <nav
      className={`w-full border-b-4 border-black flex justify-between items-center px-6 py-3 sticky top-0 z-50 ${
        darkMode ? "bg-[#2a2a2a] text-white" : "bg-[#EAEAEA] text-black"
      }`}
    >
      {/* ➤ Nama di kiri */}
      <div className="font-bold tracking-widest">
        ➤ <Link href="/">Byben</Link>
      </div>

      {/* 🔗 Menu kanan */}
      <div className="flex items-center space-x-6 font-semibold text-sm">
        <Link href="/blog" className="hover:underline">
          Blog
        </Link>
        <Link href="#about" className="hover:underline">
          About
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>

        {/* 🌙 Toggle Switch */}
        <div
          onClick={() => setDarkMode(!darkMode)}
          className={`relative w-14 h-7 rounded-full border-2 border-black cursor-pointer transition ${
            darkMode ? "bg-black" : "bg-white"
          }`}
        >
          <div
            className={`absolute top-1/2 -translate-y-1/2 left-1 w-5 h-5 rounded-full border-2 border-black transition-transform duration-300 ${
              darkMode ? "translate-x-6 bg-white" : "translate-x-0 bg-black"
            }`}
          ></div>
        </div>
      </div>
    </nav>
  );
}
