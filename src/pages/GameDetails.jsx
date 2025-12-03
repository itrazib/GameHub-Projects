import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAxios from '../Hooks/useAxios';
import { Star } from 'lucide-react';

export default function GameDetails() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxios();

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const res = await axiosSecure.get(`/games/${id}`);
        setGame(res.data[0]);
      } catch (err) {
        console.log("Something went wrong!", err);
      } finally {
        setLoading(false);
      }
    };
    fetchGame();
  }, [id, axiosSecure]);

  if (loading) return <p className="text-center py-10 text-gray-500 min-h-screen flex justify-center items-center">Loading...</p>;
  if (!game) return <p className="text-center py-10 text-red-500">Game not found!</p>;

  return (
    <div className="max-w-7xl mx-auto text-white p-6 grid md:grid-cols-3 gap-10 items-start bg-gradient rounded-2xl shadow-md mt-10">
      {/* Game Cover */}
      <div className="md:col-span-1">
        <img
          src={game.coverPhoto}
          alt={game.title}
          className="w-full rounded-xl shadow-lg object-cover"
        />
      </div>

      {/* Game Info */}
      <div className="md:col-span-2 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold ">{game.title}</h1>
          <div className="flex items-center mt-2 gap-2 ">
            <span>{game.category}</span>
            <span>•</span>
            <Star className="w-5 h-5 text-yellow-400" />
            <span>{game.ratings}</span>
          </div>
          <p className="mt-2 font-medium">Developed by {game.developer}</p>

          <p className="mt-4  leading-relaxed">{game.description}</p>
        </div>

        {/* Download / Visit Button */}
        <div className="mt-6">
          <a
            href={game.downloadLink}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-6 py-3 bg-yellow-500 text-gray-900 font-semibold py-2 rounded-lg hover:bg-yellow-400 transition-colors"
          >
            Install / Visit
          </a>
        </div>
      </div>
    </div>
  );
}
