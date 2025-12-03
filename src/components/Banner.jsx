import React, { useEffect, useState } from "react";

// GameHub Carousel Banner
// Single-file React component (Tailwind CSS assumed).
// Usage: import GameCarousel from './GameCarousel'; then <GameCarousel />

const games = [
  {
    id: "1",
    title: "PlayerUnknown's Battlegrounds (PUBG)",
    coverPhoto: "https://i.ibb.co/n8cM357K/pubg.png",
    category: "Battle Royale",
    downloadLink: "https://www.pubg.com/",
    description:
      "PlayerUnknown’s Battlegrounds (PUBG) is one of the most influential battle royale games that redefined online multiplayer experiences. In PUBG, up to 100 players parachute onto a vast and diverse map where they must scavenge for weapons, armor, and supplies while fighting to be the last survivor or team standing.",
    ratings: "4.5",
    developer: "Krafton",
  },
  {
    id: "2",
    title: "Stardew Valley",
    coverPhoto: "https://i.ibb.co/Z61TDmSr/Logo-of-Stardew-Valley.png",
    category: "Simulation",
    downloadLink: "https://www.stardewvalley.net/",
    description:
      "Stardew Valley is a heartwarming farming simulation and life-building RPG that invites players to escape the chaos of city life and start anew in a small rural town. After inheriting a run-down farm from your grandfather, you begin your journey by clearing the land, planting crops, raising animals, and slowly transforming your farm into a thriving homestead.",
    ratings: "4.8",
    developer: "ConcernedApe",
  },
  {
    id: "3",
    title: "The Legend of Zelda: Breath of the Wild",
    coverPhoto:
      "https://i.ibb.co/WWVp94v1/The-Legend-Of-Zelda-Breath-Of-The-Wild-Download-Free-PNG.png",
    category: "Adventure",
    downloadLink: "https://www.zelda.com/breath-of-the-wild/",
    description:
      "The Legend of Zelda: Breath of the Wild is a groundbreaking open-world adventure that reimagines one of gaming’s most iconic franchises. Players step into the role of Link, who awakens from a century-long slumber to find the kingdom of Hyrule in ruins and the evil Calamity Ganon threatening to destroy it.",
    ratings: "4.9",
    developer: "Nintendo",
  },
];

export default function Banner() {
  const [index, setIndex] = useState(0);
  const total = games.length;

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % total), 6000);
    return () => clearInterval(t);
  }, [total]);

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <section className="w-full max-w-7xl  mx-auto py-6">
      <div className="relative overflow-hidden rounded-2xl shadow-lg bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        {/* Slides container */}
        <div className="flex items-center justify-between gap-8 p-8 md:p-12">
          {/* Left: Text */}
          <div className="w-full md:w-1/2 text-white">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full badge badge-warning text-sm font-semibold">
                {games[index].category}
              </span>
              <span className="text-sm text-gray-300">•</span>
              <span className="text-sm text-gray-300">{games[index].developer}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
              {games[index].title}
            </h2>

            <p className="mt-4 text-gray-200 line-clamp-5">{games[index].description}</p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={games[index].downloadLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-xl bg-white/10 backdrop-blur hover:bg-white/20 border border-white/5 text-sm font-medium"
              >
                Visit Page
              </a>

              <button
                onClick={() => (window.location.href = '/login')}
                className="px-4 py-2 rounded-xl bg-yellow-500 text-gray-900 font-semibold py-2 rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Login
              </button>

              <button
                onClick={() => (window.location.href = '/register')}
                className="px-4 py-2 rounded-xl bg-transparent border border-indigo-500 text-indigo-200 hover:bg-indigo-600/20 text-sm font-medium"
              >
                Register
              </button>

              <div className="ml-2 text-sm text-gray-300">Rating: {games[index].ratings} ⭐</div>
            </div>

            {/* Pagination dots (clickable) */}
            <div className="mt-6 flex items-center gap-2">
              {games.map((g, i) => (
                <button
                  key={g.id}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-3 h-3 rounded-full ${i === index ? 'bg-white' : 'bg-white/30'} transition-all`}
                />
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="hidden md:flex md:w-1/2 items-center justify-center">
            <div className="w-full max-w-md p-4 rounded-xl bg-gradient-to-b from-white/5 to-white/2 border border-white/5">
              <img
                src={games[index].coverPhoto}
                alt={games[index].title}
                className="w-full h-64 md:h-72 object-contain rounded-lg"
                loading="lazy"
              />

              <div className="mt-4 flex items-center justify-between text-sm text-gray-300">
                <div>
                  <div className="font-semibold text-white">{games[index].title}</div>
                  <div className="text-xs">{games[index].developer}</div>
                </div>
                <div className="text-xs">{games[index].category}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <button onClick={prev} className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white">
            ‹
          </button>
        </div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <button onClick={next} className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white">
            ›
          </button>
        </div>
      </div>

      {/* Mobile variant: show image above text */}
      <div className="md:hidden mt-6">
        <div className="rounded-xl overflow-hidden shadow-sm">
          <img src={games[index].coverPhoto} alt={games[index].title} className="w-full h-56 object-cover" />
          <div className="p-4 bg-gray-800 text-white">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{games[index].title}</h3>
              <div className="text-sm">{games[index].ratings} ⭐</div>
            </div>
            <p className="mt-2 text-sm text-gray-300 line-clamp-3">{games[index].description}</p>
            <div className="mt-3 flex gap-2">
              <button onClick={() => (window.location.href = '/login')} className="flex-1 px-3 py-2 rounded bg-indigo-600 text-white text-sm">
                Login
              </button>
              <button onClick={() => (window.location.href = '/register')} className="flex-1 px-3 py-2 rounded border border-indigo-500 text-indigo-200 text-sm">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
