import { blogPosts } from '@/app/data';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type PageParams = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function Page({ params }: PageParams) {
  const post = blogPosts.find((post) => post.id.toString() === params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto p-6 min-h-screen bg-[#0A0A23] text-white">
      <Image
        src={post.image}
        alt={post.title}
        width={800}
        height={500}
        className="rounded-lg w-full h-[500px] object-cover mb-6"
      />
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-orange-500 mb-4 uppercase">{post.category}</p>
      <p className="text-lg leading-relaxed mb-8">{post.content}</p>
      <Link
        href="/"
        className="inline-block bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600"
      >
        Back to Blog
      </Link>
    </div>
  );
}
