"use client";

import { useTheme } from "@/context/ThemeContext";

export default function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer
      className={`px-10 py-6 border-t-4 border-black text-center font-semibold text-sm transition-colors duration-500 ${
        darkMode ? "bg-[#1f1f1f] text-white" : "bg-[#EAEAEA] text-black"
      }`}
    >
      © 2025 Ramadhani — WakacaW Project 🍉
    </footer>
  );
}
