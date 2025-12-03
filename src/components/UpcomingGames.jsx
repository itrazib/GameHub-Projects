import React from "react";
import { Link } from "react-router";
import { Calendar, Clock } from "lucide-react";

export default function UpcomingGames() {
  const upcoming = [
    
    {
      id: 1,
      title: "Elder Rings: Shadowfall",
      image: "https://i.ibb.co/7Jn0Xv4Y/images-2.jpg",
      release: "2025-02-14",
      genre: "Action RPG",
    },
    {
      id: 2,
      title: "Star Frontier Legends",
      image: "https://i.ibb.co/Kjb0hCKj/sf-alpha-dawn-cover.webp",
      release: "2025-03-09",
      genre: "Sci-fi Adventure",
    },
    {
      id: 3,
      title: "Nightmare Valley",
      image: "https://i.ibb.co/PZFCrX2Y/nightmare.jpg",
      release: "2025-04-22",
      genre: "Horror Survival",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto  py-6">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">
          Upcoming <span className="text-indigo-500">Games</span>
        </h2>
        <p className="text-gradient mt-2">
          Stay updated with the most awaited game releases
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {upcoming.map((game) => (
          <div
            key={game.id}
            className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden 
            hover:shadow-xl hover:shadow-indigo-600/20 transition-all duration-300"
          >
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">{game.title}</h3>

              <div className="flex items-center gap-3 text-slate-400 mt-3">
                <Calendar size={18} />
                <span>Release: {game.release}</span>
              </div>

              <div className="flex items-center gap-3 text-slate-400 mt-2">
                <Clock size={18} />
                <span>Genre: {game.genre}</span>
              </div>

              <Link
                to={`/game/${game.id}`}
                className="mt-4 inline-block w-full text-center py-2 rounded-lg 
                bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
