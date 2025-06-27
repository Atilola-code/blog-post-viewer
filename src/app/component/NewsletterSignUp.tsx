"use client";

import { useState } from "react";

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <div className="w-full px-6">
        <div className="bg-amber-50 py-16 px-8 text-center rounded-lg shadow mt-16 max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Join our Newsletter</h2>
      <p className="text-gray-600 mb-6 text-lg">Get the latest wellness tips, workouts, and recipes delivered to your inbox!</p>
      <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="p-3 rounded-lg border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
        >
          Subscribe
        </button>
      </form>
        </div>
    </div>
  );
};

export default NewsletterSignup