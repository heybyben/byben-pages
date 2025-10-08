import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function GET() {
  const postsDir = path.join(process.cwd(), "src/posts");
  const files = fs.readdirSync(postsDir);

  const posts = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(postsDir, filename), "utf-8");
    const { data } = matter(fileContent);

    return {
      slug: filename.replace(".md", ""),
      title: data.title || "Untitled Post",
      date: data.date || null,
      device: data.device || "",
      summary: data.summary || "",
    };
  });

  // ✅ Urutkan dari tanggal terbaru
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return Response.json(posts);
}
