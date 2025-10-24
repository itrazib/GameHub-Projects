import React from 'react';
import games from '../../public/games.json';
import { useParams } from 'react-router';

export default function GameDetails() {
  const { id } = useParams();
  const game = games.find(g => g.id === id);

  if (!game) return <div className="p-6">Game not found.</div>;

  return (
    <div className="grid md:grid-cols-3 gap-17 items-center">
      <div className="md:col-span-1 bg-white p-3">
        <img src={game.coverPhoto} alt={game.title} className="w-full rounded-lg" />
      </div>
      <div className="md:col-span-2">
        <h2 className="text-2xl font-bold">{game.title}</h2>
        <p className="text-slate-400 mt-1">{game.category} • {game.ratings} ★</p>
        <p className='font-semibold mt-2 text-gray-400'>Developed by {game.developer}</p>
        <p className="mt-4">{game.description}</p>
        <div className="mt-5">
          <a href={game.downloadLink} target="_blank" rel="noreferrer" className="btn btn-accent text-white font-bold">Install / Visit</a>
        </div>
      </div>
    </div>
  );
}
