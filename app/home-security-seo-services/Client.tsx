"use client";

import IndustryPage from "@/components/industry/IndustryPage";
import type { RelatedPost } from "@/lib/related-posts";
import { CFG } from "./config";

// Config me icons (functions) hain, isliye client side pe import – server se prop me nahi bhejte.
export default function Client({ posts }: { posts: RelatedPost[] }) {
  return <IndustryPage cfg={CFG} posts={posts} />;
}
