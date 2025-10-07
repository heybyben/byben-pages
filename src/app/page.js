"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTheme } from "@/context/ThemeContext";

export default function RetroMacPortfolio() {
  const { darkMode } = useTheme();
  const [posts, setPosts] = useState([]);

  // Ambil data postingan blog dari API
  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <div
      className={`min-h-screen font-sans border-4 border-black transition-colors duration-500 ${
        darkMode ? "bg-[#1a1a1a] text-white" : "bg-[#F9F9F9] text-black"
      }`}
    >
      {/* ✅ Navbar Global */}
      <Navbar />

      {/* 👋 HERO SECTION */}
      <section className="px-10 py-16 border-b-4 border-black grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-extrabold leading-tight mb-4">
            Hello.<br />I'm{" "}
            <span className="underline decoration-[6px] decoration-black dark:decoration-white">
              Ramadhani
            </span>
            .
          </h1>
          <p className="text-lg mb-6 max-w-md">
            Just someone who’s interested in Android Custom ROMs — purely for the fun of passing the time.
          </p>
          <Link
            href="/blog"
            className={`border-4 border-black px-6 py-3 font-bold transition inline-block ${
              darkMode
                ? "bg-black text-white hover:bg-[#EAEAEA] hover:text-black"
                : "bg-white text-black hover:bg-black hover:text-white"
            }`}
          >
            View my latest builds →
          </Link>
        </motion.div>

        {/* 🖼️ FOTO PROFIL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div
            className={`border-4 border-black p-6 rounded-md ${
              darkMode ? "bg-[#2a2a2a]" : "bg-white"
            }`}
          >
            <img
              src="/byben.jpg"
              alt="Ramadhani portrait"
              className="w-64 h-64 object-cover rounded-md border-4 border-black filter grayscale contrast-125 brightness-95 saturate-0 hover:grayscale-0 hover:saturate-100 transition"
            />
          </div>
        </motion.div>
      </section>

      {/* 📰 BLOG PREVIEW */}
      <section className="px-10 py-16 border-b-4 border-black">
        <h2 className="text-4xl font-extrabold mb-8">Latest ROM Builds</h2>

        {posts.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300">Loading posts...</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {posts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`border-4 border-black hover:-translate-y-1 transition transform ${
                  darkMode ? "bg-[#2a2a2a]" : "bg-white"
                }`}
              >
                <div
                  className={`border-b-4 border-black p-2 text-sm font-semibold ${
                    darkMode ? "bg-[#1f1f1f]" : "bg-[#EAEAEA]"
                  }`}
                >
                  {post.device || "Custom ROM"}
                </div>
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

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className={`border-4 border-black px-6 py-3 font-bold transition ${
              darkMode
                ? "bg-black text-white hover:bg-[#EAEAEA] hover:text-black"
                : "bg-[#EAEAEA] text-black hover:bg-black hover:text-white"
            }`}
          >
            View All Builds ↗
          </Link>
        </div>
      </section>

      {/* 👤 ABOUT SECTION */}
      <section
        id="about"
        className={`px-10 py-16 border-t-4 border-black text-center ${
          darkMode ? "bg-[#1f1f1f]" : "bg-[#EAEAEA]"
        }`}
      >
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-6"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-lg leading-relaxed font-medium"
        >
          Hi! I’m <strong>Ramadhani</strong> — a tech enthusiast who loves building and customizing{" "}
        <span className="underline decoration-2 decoration-black dark:decoration-white">
          Android ROMs
        </span>{" "}
          just for fun, performance, and the community.
        <br />
        <br />
          Based in <strong>Indonesia</strong> 🇮🇩 — I enjoy exploring open-source projects and
          spending late nights on coffee-fueled debugging sessions ☕.
        </motion.p>
        </section>

      {/* ✅ FOOTER GLOBAL */}
      <Footer />
    </div>
  );
}
