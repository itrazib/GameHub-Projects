import React from 'react';
import games from '../../public/games.json'
import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

export default function Home() {
  const popular = [...games].sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings)).slice(0, 6);
  return (
    <div>
      <div className="card mb-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <h1 className="text-2xl font-bold">Discover indie games — GameHub</h1>
          <p className="text-slate-400 mt-2">Explore, read details and support developers.</p>
        </motion.div>
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Popular Games</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {popular.map(g => (
            <div key={g.id} className="card">
              <img src={g.coverPhoto} alt={g.title} className="w-full h-40 object-cover rounded-lg mb-3" />
              <h3 className="font-semibold">{g.title}</h3>
              <p className="text-slate-400 text-sm">{g.category} • {g.ratings} ★</p>
              <div className="mt-3">
                <Link to={`/game/${g.id}`} className="btn">Details</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card">
        <h3 className="font-semibold mb-2">Newsletter</h3>
        <p className="text-slate-400 mb-3">Subscribe to get updates about new indie titles.</p>
        <form onSubmit={(e) => { e.preventDefault(); alert('Thanks — check your inbox!'); }}>
          <div className="flex gap-2">
            <input type="email" name="email" placeholder="you@example.com" required className="flex-1 rounded-md px-3 py-2 bg-slate-700 text-slate-100" />
            <button className="btn">Subscribe</button>
          </div>
        </form>
      </section>
    </div>
  );
}
