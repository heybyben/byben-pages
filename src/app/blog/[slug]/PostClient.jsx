"use client";

import { useTheme } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PostClient({ post }) {
  const { darkMode } = useTheme();

  return (
    <div
      className={`min-h-screen font-sans border-4 border-black transition-colors duration-500 ${
        darkMode ? "bg-[#1a1a1a] text-white" : "bg-[#F9F9F9] text-black"
      }`}
    >
      {/* ✅ Navbar global */}
      <Navbar />

      {/* 📰 Post container */}
      <main className="px-6 md:px-10 py-16 flex justify-center">
        <div
          className={`max-w-3xl w-full border-4 border-black shadow-[6px_6px_0px_#000] p-8 transition-colors duration-500 ${
            darkMode ? "bg-[#2a2a2a]" : "bg-white"
          }`}
        >
          {/* Judul */}
          <h1 className="text-4xl font-extrabold mb-2 leading-snug">
            {post.title}
          </h1>

          {/* Tanggal */}
          <p
            className={`mb-6 border-b-4 border-dotted border-black pb-2 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            🗓️{" "}
            {new Date(post.date).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>

          {/* Konten Markdown */}
          <article
            className={`prose max-w-none font-mono text-sm leading-relaxed transition-colors duration-500 ${
              darkMode ? "prose-invert" : "prose-neutral"
            }`}
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* Tombol kembali */}
          <div className="mt-10">
            <Link
              href="/blog"
              className={`border-4 border-black px-6 py-2 font-bold inline-block transition ${
                darkMode
                  ? "bg-[#3a3a3a] hover:bg-white hover:text-black"
                  : "bg-[#EAEAEA] hover:bg-black hover:text-white"
              }`}
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </main>

      {/* ✅ Footer global */}
      <Footer />
    </div>
  );
}
