"use client";

import React from "react";
import { categories } from "../data";

interface SidebarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategorySelect,
}) => {
  return (
    <aside className="w-full md:w-1/4 mb-8 md:mb-0">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search posts..."
        className="w-full p-3 bg-gray-300 rounded-lg mb-6 text-black focus:outline-none focus:ring-1"
      />

      <h3 className="text-xl font-bold mb-4 text-black">Categories</h3>
      <div className="flex flex-wrap md:flex-col gap-3">
        <button
          onClick={() => onCategorySelect("")}
          className={`text-left text-base px-4 py-2 rounded transition ${
            selectedCategory === ""
              ? "bg-orange-600 text-black"
              : "bg-gray-100 text-gray-800 hover:bg-orange-100"
          }`}
        >
          View All
        </button>

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategorySelect(category)}
            className={`text-left text-base px-4 py-2 rounded transition ${
              selectedCategory === category
                ? "bg-orange-600 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-orange-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
