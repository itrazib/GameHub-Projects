
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAxios from '../Hooks/useAxios';

export default function GameDetails() {
  const { id } = useParams();
  const [game, setGame] = useState("")
  const axiosSecure = useAxios()
 

  useEffect(() => {
    try{
      axiosSecure.get(`/games/${id}`)
      .then(res => {
        console.log(res.data)
        setGame(res.data[0])
      })
    }catch(err){
      console.log("someThing Wrong!", err)
    }
  }, [])
 console.log(game.title)
  return (
    <div className="grid md:grid-cols-3 gap-17 items-center">
      <title>{game.title}</title>
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
