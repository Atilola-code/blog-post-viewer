"use client";

import { useState } from "react";
import BlogCard from "./BlogCard";
import Sidebar from "./SideBar";
import { BlogPost, blogPosts } from "../data";

const PostList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredPosts = blogPosts.filter((post: BlogPost) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory
      ? post.category === selectedCategory
      : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-8 py-16 flex flex-col md:flex-row gap-x-8">
      <Sidebar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-16 flex-1">
        {filteredPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
        {filteredPosts.length === 0 && (
          <p className="text-gray-500 text-center col-span-full">
            No posts found.
          </p>
        )}
      </div>
    </div>
  );
};

export default PostList;