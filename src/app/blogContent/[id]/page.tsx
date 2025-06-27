import { blogPosts } from '@/app/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

type PageProps = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default function Page({ params }: PageProps) {
  const post = blogPosts.find((post) => post.id.toString() === params.id);

  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto p-6 min-h-screen">
      <Image
        src={post.image}
        alt={post.title}
        width={800}
        height={500}
        className="rounded-lg w-full h-[500px] object-cover mb-6"
      />
      <h1 className="text-4xl font-bold mb-4 text-black">{post.title}</h1>
      <p className="text-sm text-orange-600 mb-4 uppercase">{post.category}</p>
      <p className="text-black text-lg leading-relaxed mb-8">{post.content}</p>

      <Link
        href="/"
        className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
      >
        Back to Blog
      </Link>
    </div>
  );
}


