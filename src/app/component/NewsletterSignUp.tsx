"use client";
import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <div className="w-full md:w-1/2 mx-auto bg-orange-50 rounded-xl p-8 shadow mt-16">
      <h2 className="text-2xl font-bold text-center mb-4 text-orange-600">Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          required
        />
        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
