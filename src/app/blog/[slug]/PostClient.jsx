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
      {/* ✅ Navbar Global */}
      <Navbar />

      <main className="px-6 md:px-10 py-16 flex justify-center">
        <div
          className={`max-w-3xl w-full border-4 border-black ${
            darkMode ? "bg-[#2a2a2a]" : "bg-white"
          } shadow-[6px_6px_0px_#000] p-8`}
        >
          <h1 className="text-4xl font-extrabold mb-3 leading-snug">
            {post.title}
          </h1>

          <p
            className={`text-sm mb-6 border-b-4 border-dotted border-black pb-2 ${
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

          {/* ✨ Markdown Content */}
          <article
            className={`max-w-none text-[15px] leading-relaxed space-y-4
              [&_h1]:text-3xl [&_h1]:font-extrabold
              [&_h2]:text-2xl [&_h2]:font-bold
              [&_ul]:list-disc [&_ul]:ml-5
              [&_ol]:list-decimal [&_ol]:ml-5
              [&_a]:underline [&_a]:decoration-dotted [&_a]:font-medium
              [&_code]:bg-gray-200 dark:[&_code]:bg-gray-800 [&_code]:px-1 [&_code]:rounded-sm
              [&_pre]:bg-gray-100 dark:[&_pre]:bg-gray-900 [&_pre]:p-3 [&_pre]:rounded-md [&_pre]:overflow-x-auto
              [&_blockquote]:border-l-4 [&_blockquote]:border-gray-400 [&_blockquote]:pl-4 [&_blockquote]:italic
              ${darkMode ? "text-gray-100" : "text-gray-800"}
            `}
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* 🔙 Back Button */}
          <div className="mt-10">
            <Link
              href="/blog"
              className={`border-4 border-black px-6 py-2 font-bold transition ${
                darkMode
                  ? "bg-black text-white hover:bg-[#EAEAEA] hover:text-black"
                  : "bg-[#EAEAEA] text-black hover:bg-black hover:text-white"
              }`}
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </main>

      {/* ✅ Footer Global */}
      <Footer />
    </div>
  );
}
