import { getPostData } from "@/lib/posts";
import PostClient from "./PostClient";

export default async function PostPage({ params }) {
  const post = await getPostData(params.slug);
  return <PostClient post={post} />;
}
