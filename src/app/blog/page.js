"use client";

import { useTheme } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BlogPage() {
  const { darkMode } = useTheme();
  const [posts, setPosts] = useState([]);

  // Ambil data postingan dari /api/posts
  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Failed to load posts:", err));
  }, []);

  return (
    <div
      className={`min-h-screen font-sans border-4 border-black transition-colors duration-500 ${
        darkMode ? "bg-[#1a1a1a] text-white" : "bg-[#F9F9F9] text-black"
      }`}
    >
      {/* ✅ Navbar global */}
      <Navbar />

      {/* 📘 BLOG CONTENT */}
      <main className="px-10 py-16">
        <h1 className="text-4xl font-extrabold mb-10">ROM Build Updates</h1>

        {posts.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300">Loading posts...</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`border-4 border-black hover:-translate-y-1 transition transform ${
                  darkMode ? "bg-[#2a2a2a]" : "bg-white"
                }`}
              >
                {/* Header kecil di atas tiap card */}
                <div
                  className={`border-b-4 border-black p-2 text-sm font-semibold ${
                    darkMode ? "bg-[#1f1f1f]" : "bg-[#EAEAEA]"
                  }`}
                >
                  {post.device || "Custom ROM"}
                </div>

                {/* Isi card */}
                <div className="p-5">
                  <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                  <p
                    className={`text-sm mb-4 ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {new Date(post.date).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                  <p className="text-sm">{post.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Tombol Back to Home */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className={`border-4 border-black px-6 py-3 font-bold transition ${
              darkMode
                ? "bg-black text-white hover:bg-[#EAEAEA] hover:text-black"
                : "bg-[#EAEAEA] text-black hover:bg-black hover:text-white"
            }`}
          >
            ← Back to Home
          </Link>
        </div>
      </main>

      {/* ✅ Footer global */}
      <Footer />
    </div>
  );
}
