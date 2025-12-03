import React, { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import GameCard from "./GameCard";

const Games = () => {
  const [games, setGames] = useState([]);
  const axiosSecure = useAxios();
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    setLoading(true);
    try {
      axiosSecure.get("/games").then((res) => {
        console.log(res.data.result);
        setGames(res.data.result);
      });
    } catch (err) {
      console.log("error", err);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      axiosSecure.get(`/game?search=${searchText}&rating=ratings&order=${sortOrder}`).then((res) => {
        console.log(res.data);
        setGames(res.data);
      });
    } catch (err) {
      console.log("something Went Wrong", err);
    } finally {
      setLoading(false);
    }

    console.log(searchText);
  };

  if (loading) {
    return (
      <p className="text-3xl min-h-screen text-bold flex justify-center items-center">
        Loading..
      </p>
    );
  }
  return (
    <div className="max-w-7xl mx-auto  py-6">
      <h1 className="text-5xl font-bold  text-center text-gradient pb-10">
        All <span className="text-indigo-500">Games</span>
      </h1>
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center mb-5">
        <h1 className="font-semibold text-3xl text-gradient mb-3">
          Total Products <span>({games.length})</span>
        </h1>
        <form className="flex gap-5" onSubmit={handleSearch}>
          <div className="">
            <label className="input">
              <svg
                className="h-[1em] opacity-50 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
           
            <input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              type="search"
              required
              placeholder="Search"
            
            />
             </label>
          </div>
          <div>
            <select
              className="p-2 bg-slate-900 text-white border border-slate-700 rounded"
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="">Sort by Rating</option>
              <option value="high">High → Low</option>
              <option value="low">Low → High</option>
            </select>
          </div>
        </form>
      </div>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {games.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </div>
    </div>
  );
};

export default Games;
