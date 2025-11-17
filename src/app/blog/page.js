"use client";

import { useTheme } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BlogPage() {
  const { darkMode } = useTheme();
  const [posts, setPosts] = useState([]);

  // Load posts from /api/posts
  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Failed to load posts:", err));
  }, []);

  return (
    <div
      className={`
        flex flex-col min-h-screen font-sans
        transition-colors duration-500
        ${darkMode ? "bg-[#1a1a1a] text-white" : "bg-[#F9F9F9] text-black"}
      `}
    >
      <Navbar />

      {/* Blog Section */}
      <main className="flex-1 px-10 py-16">
        {/* Centered Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-10 text-center"
        >
          ROM Build Updates
        </motion.h1>

        {/* Post List */}
        {posts.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-600 dark:text-gray-300 text-center"
          >
            Loading posts...
          </motion.p>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className={`
                    border-4 border-black block 
                    hover:-translate-y-1 transition transform
                    ${darkMode ? "bg-[#2a2a2a]" : "bg-white"}
                  `}
                >
                  {/* Card Header */}
                  <div
                    className={`
                      border-b-4 border-black p-2 text-sm font-semibold
                      ${darkMode ? "bg-[#1f1f1f]" : "bg-[#EAEAEA]"}
                    `}
                  >
                    {post.device || "Custom ROM"}
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    <h3 className="text-2xl font-bold mb-2">{post.title}</h3>

                    <p
                      className={`
                        text-sm mb-4 
                        ${darkMode ? "text-gray-300" : "text-gray-600"}
                      `}
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
              </motion.div>
            ))}
          </div>
        )}

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            href="/"
            className={`
              border-4 border-black px-6 py-3 font-bold transition
              ${
                darkMode
                  ? "bg-black text-white hover:bg-[#EAEAEA] hover:text-black"
                  : "bg-[#EAEAEA] text-black hover:bg-black hover:text-white"
              }
            `}
          >
            ← Back to Home
          </Link>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
