import React from "react";
import games from "../../public/games.json";
import { motion } from "framer-motion";
import { Link } from "react-router";

export default function Home() {
  const popular = [...games]
    .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
    .slice(0, 6);
  return (
    <div>
      <div className="card mb-6 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div class="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] h-[40vh] flex  items-center justify-center text-white rounded-xl">
            <div>
           
              <div class=" inset-0 flex flex-col items-center justify-center ">
                <h1 class="text-5xl md:text-7xl font-extrabold mb-4">
                  Welcome to <span class="text-indigo-500">GameHub</span>
                </h1>
                <p class="text-lg md:text-xl mb-6">
                  Discover the world’s best games, reviews, and communities —
                  all in one hub.
                </p>
                <button class="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg text-white font-semibold hover:scale-105 transition">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-center">
          Popular Games
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {popular.map((g) => (
            <div key={g.id} className="card bg-white p-5">
              <img
                src={g.coverPhoto}
                alt={g.title}
                className="w-full h-130 object-cover rounded-lg mb-3"
              />
              <h3 className="font-semibold">{g.title}</h3>
              <p className="text-slate-400 text-sm">
                {g.category} • {g.ratings} ★
              </p>
              <div className="mt-3">
                <Link
                  to={`/game/${g.id}`}
                  className="btn btn-accent text-white font-semibold"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card ">
        <h3 className="font-semibold mb-2">Newsletter</h3>
        <p className="text-slate-400 mb-3">
          Subscribe to get updates about new indie titles.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks — check your inbox!");
          }}
        >
          <div className="flex gap-2">
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="flex-1 rounded-md px-3 py-2 bg-slate-700 text-slate-100"
            />
            <button className="btn">Subscribe</button>
          </div>
        </form>
      </section>
    </div>
  );
}
