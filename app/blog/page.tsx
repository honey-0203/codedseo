import BlogClient from "./blog-client"
import { client } from "@/sanity/client"
import imageUrlBuilder from "@sanity/image-url"

const builder = imageUrlBuilder(client)

async function getSanityPosts() {
  try {
    const query = `*[_type == "post"] | order(publishedAt desc){
      _id,
      title,
      excerpt,
      author,
      publishedAt,
      "slug": slug.current,
      coverImage
    }`
    const posts = await client.fetch(query, {}, { next: { revalidate: 60 } })

    return posts.map((post: any) => ({
      id: post._id,
      title: post.title || "",
      excerpt: post.excerpt || "",
      category: "AI SEO",
      author: post.author || "CodedSEO Team",
      date: post.publishedAt
        ? new Date(post.publishedAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        : "",
      readTime: "10 min read",
      slug: post.slug || "",
      image: post.coverImage ? builder.image(post.coverImage).width(800).url() : "",
    }))
  } catch (error) {
    return []
  }
}

export default async function BlogPage() {
  const posts = await getSanityPosts()
  return <BlogClient initialPosts={posts} />
}