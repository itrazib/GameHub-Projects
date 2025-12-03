import React from "react";
import { Link } from "react-router";
import { Gamepad2, Sword, Puzzle, Rocket, Ghost, Crown } from "lucide-react";

export default function Categories() {
  const categories = [
    { id: 1, title: "Action", icon: <Sword size={28} /> },
    { id: 2, title: "Adventure", icon: <Rocket size={28} /> },
    { id: 3, title: "Puzzle", icon: <Puzzle size={28} /> },
    { id: 4, title: "Horror", icon: <Ghost size={28} /> },
    { id: 5, title: "Sports", icon: <Gamepad2 size={28} /> },
    { id: 6, title: "Strategy", icon: <Crown size={28} /> },
  ];

  return (
    <div className="max-w-7xl mx-auto  py-6">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">
          Browse by <span className="text-indigo-500">Categories</span>
        </h2>
        <p className="text-slate-400 mt-2">
          Explore games by your favorite genres
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/category/${cat.title.toLowerCase()}`}
            className="group bg-slate-900 px-6 py-8 rounded-xl border border-slate-800 
            hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/20 
            transition-all duration-300 flex flex-col items-center gap-4"
          >
            <div className="text-indigo-400 group-hover:text-indigo-300 transition">
              {cat.icon}
            </div>
            <p className="text-white font-semibold group-hover:text-indigo-300">
              {cat.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
