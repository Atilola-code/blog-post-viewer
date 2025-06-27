import Link from "next/link";
import { BlogPost } from "../data";
import Image from "next/image";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Link href={`/blogContent/${post.id}`} className="block">
      <div className="cursor-pointer bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition">
        <Image src={post.image} alt={post.title} width={400} height={250} className="w-full rounded-t-lg h-78 object-cover" />
        <div className="p-4">
          <h2 className="font-bold text-xl mb-2 font-serif text-black">{post.title}</h2>
          <p className="text-lg text-orange-600 mb-1 font-sans uppercase">{post.category}</p>
          <p className="text-gray-600 text-lg font-sans">{post.snippet}</p>
        <button className="text-blue-400 hover:underline text-lg font-serif">Read more</button>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
