import BlogClient from "./blog-client"

async function getWordPressPosts() {
  try {
    const res = await fetch(
      "https://codedseo.com/wp-json/wp/v2/posts?per_page=100&_embed",
      { next: { revalidate: 3600 } }
    )
    const posts = await res.json()
    return posts.map((post: any) => ({
      id: post.id,
      title: post.title.rendered,
      excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, ""),
      category: "SEO",
      author: post._embedded?.author?.[0]?.name || "CodedSEO Team",
      date: new Date(post.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      readTime: `${Math.ceil(
        post.content.rendered.split(" ").length / 200
      )} min read`,
      featured: post.sticky || false,
      slug: post.slug,
      image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
    }))
  } catch (error) {
    return []
  }
}

export default async function BlogPage() {
  const posts = await getWordPressPosts()
  return <BlogClient initialPosts={posts} />
}