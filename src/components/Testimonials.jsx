import React from "react";
import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Pro Gamer",
      avatar: "https://i.ibb.co/fHmpY6P/avatar1.png",
      review:
        "GameHub is my go-to platform for discovering new indie and AAA games. The UI is clean, smooth, and super fast!",
      rating: 5,
    },
    {
      id: 2,
      name: "Sophia Miller",
      role: "Streamer",
      avatar: "https://i.ibb.co/mtbQHFR/avatar2.png",
      review:
        "I love the detailed game descriptions and categories. Makes it so easy to find the type of game I want!",
      rating: 5,
    },
    {
      id: 3,
      name: "Daniel Carter",
      role: "Game Reviewer",
      avatar: "https://i.ibb.co/5svCjnJ/avatar3.png",
      review:
        "The upcoming games and popular game sections are amazing. Everything is well organized and clean.",
      rating: 4,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto  py-6">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">
          What <span className="text-indigo-500">Gamers Say</span>
        </h2>
        <p className="text-gradient mt-2">
          Thousands of gamers trust GameHub every day
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((r) => (
          <div
            key={r.id}
            className="bg-slate-900 p-6 border border-slate-800 rounded-2xl 
            hover:shadow-xl hover:shadow-indigo-600/20 hover:-translate-y-1 
            transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <img
                src={r.avatar}
                alt={r.name}
                className="w-14 h-14 rounded-full border border-slate-700"
              />
              <div>
                <h3 className="text-white font-semibold">{r.name}</h3>
                <p className="text-slate-500 text-sm">{r.role}</p>
              </div>
            </div>

            <p className="text-slate-300 mt-4">{r.review}</p>

            <div className="flex mt-4">
              {Array.from({ length: r.rating }).map((_, idx) => (
                <Star key={idx} size={18} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
