import { notFound } from "next/navigation";

async function getPost(slug: string) {
  const res = await fetch(
    `https://codedseo.com/blog/wp-json/wp/v2/posts?slug=${slug}`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();

  return data[0];
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-20 text-black">
      <h1 className="text-5xl font-bold mb-8">
        {post.title.rendered}
      </h1>

      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{
          __html: post.content.rendered,
        }}
      />
    </main>
  );
}