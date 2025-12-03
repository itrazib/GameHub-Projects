import React from "react";
import { Link } from "react-router";

const GameCard = ({game}) => {


  return (
   <div className="bg-gradient rounded-2xl shadow-lg overflow-hidden  transform hover:scale-105 transition-transform duration-300 flex flex-col">
      {/* Cover Photo */}
     <div className="">
         <img
        src={game.coverPhoto}
        alt={game.title}
        className="w-full h-40 object-cover"
      />
     </div>

      {/* Card content */}
      <div className="p-4 text-white flex flex-col flex-1 justify-between">
        <div>
            <p className="text-sm  mb-1 badge badge-warning">{game.category}</p>
          <h2 className="text-xl font-bold mb-1">{game.title}</h2>
          
          <p className="text-sm text-gray-300 mb-1 ">Developer:  <span> {game.developer}</span></p>
          <p className="text-sm text-yellow-400 mb-3 flex justify-between items-center font-semibold">Rating: <span className="badge badge-warning badge-md">{game.ratings}</span></p>
        </div>
        
        <Link  to={`/game/${game._id}`}>
        <button
          className="mt-2 inline-block w-full text-center bg-yellow-500 text-gray-900 font-semibold py-2 rounded-lg hover:bg-yellow-400 transition-colors"
        >
          View Details
        </button>
        </Link>
      </div>
    </div>
  );
};

export default GameCard;
