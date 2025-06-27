import { blogPosts } from "@/app/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPageProps {
  params: {
    id: string;
  };
}

export default function BlogPage({ params }: BlogPageProps) {
  const post = blogPosts.find((post) => post.id.toString() === params.id);

  if (!post) {
    return notFound();
  }

  return (
    <div className="max-w-3xl mx-auto p-6 min-h-screen">
      <Image
        src={post.image}
        alt={post.title}
        width={800}
        height={500}
        className="rounded-lg w-full h-[600px] object-cover mb-6"
      />
      <h1 className="text-4xl font-bold mb-4 text-black">{post.title}</h1>
      <p className="text-sm text-orange-600 mb-4 uppercase">{post.category}</p>
      <p className="text-black text-lg leading-relaxed">{post.content}</p>

      <Link
        href="/"
        className="mt-8 inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
      >
        Back to Blog
      </Link>
    </div>
  );
}