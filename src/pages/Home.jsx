import React, { useEffect, useState } from "react";

import { Link } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import Banner from "../components/Banner";
import useAxios from "../Hooks/useAxios";
import GameCard from "../components/GameCard";
import Categories from "../components/Categories";
import UpcomingGames from "../components/UpcomingGames";
import Testimonials from "../components/Testimonials";


export default function Home() {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const axiosSecure = useAxios()

  useEffect(() => {
    setLoading(true)
    try{
      axiosSecure.get("/top-rated")
      .then(res => {
        console.log(res.data)
        setGames(res.data)
      })
    }catch(err) {
      alert("something Wrong", err)
    }finally{
      setLoading(false)
    }
  },[])

  if(loading){
    return <p className="min-h-screen text-3xl flex justify-center items-center font-semibold">Loading...</p>
  }
  return (
    <div>
      <title>Home</title>
      <Banner></Banner>
      <section className="mb-8 mt-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gradient  text-center mb-8">
          Popular <span className="text-indigo-500">Games</span> 
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 ">
          {games.map((game) => (
            <GameCard key={game._id} game={game}></GameCard>
          ))}
        </div>
      </section>

      {/* Categories */}
      <Categories></Categories>

      {/* upcomming */}
      <UpcomingGames></UpcomingGames>
      {/* testimonials */}
      <Testimonials></Testimonials>

     <section className="card bg-gradient max-w-7xl mx-auto  text-center p-10 rounded-3xl shadow-2xl">
  <h3 className="font-semibold mb-3 text-4xl text-white drop-shadow">Newsletter</h3>
  <p className="text-gray-200 mb-5">Subscribe to get updates about new indie titles.</p>

  <form
    onSubmit={(e) => {
      e.preventDefault();
      toast.success("Thanks — check your inbox!");
    }}
    className="flex flex-col sm:flex-row gap-3 justify-center"
  >
    <input
      type="email"
      name="email"
      placeholder="you@example.com"
      required
      className="flex-1 rounded-xl px-4 py-3 bg-[#1a1a25] text-white border border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
    <button className="py-3 px-6 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-lg hover:opacity-90 transition">
      Subscribe
    </button>
  </form>
  <ToastContainer position="top-center" />
</section>
    </div>
  );
}
