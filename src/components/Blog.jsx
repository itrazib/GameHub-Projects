import React from "react";
import { Link } from "react-router";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Battle Royale Games of 2025",
    excerpt:
      "Discover the most thrilling battle royale games of 2025, featuring PUBG, Fortnite, Apex Legends and more.",
    coverPhoto: "https://i.ibb.co/n8cM357K/pubg.png",
    date: "Dec 1, 2025",
  },
  {
    id: 2,
    title: "Indie Games You Must Try",
    excerpt:
      "Explore the hidden gems of indie gaming, from Stardew Valley to Hades, that are capturing players’ hearts.",
    coverPhoto: "https://i.ibb.co/G4FWB0tx/hades.jpg",
    date: "Nov 28, 2025",
  },
  {
    id: 3,
    title: "Top RPGs of 2025",
    excerpt:
      "Step into immersive worlds with these RPG titles that redefine storytelling and gameplay.",
    coverPhoto: "https://i.ibb.co/4RkzZW7x/cyberpunk.jpg",
    date: "Dec 2, 2025",
  },
];

export default function Blog() {
  return (
    <div className=" max-w-7xl mx-auto  text-white py-10">
        <title>Blog</title>
      <div className=" mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl text-gradient font-bold mb-2">GameHub Blog</h1>
          <p className="text-gradient text-lg">
            Stay updated with news, reviews, and insights from the gaming world.
          </p>
        </div>

        <div className="md:flex md:gap-8">
          {/* Blog Posts */}
          <div className="md:flex-1 grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-gradient rounded-2xl overflow-hidden shadow-lg hover:scale-105 transform transition-transform duration-300"
              >
                <img
                  src={post.coverPhoto}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                  <p className="text-gray-200 mb-3">{post.excerpt}</p>
                  <p className="text-gray-400 text-sm mb-3">{post.date}</p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-yellow-400 font-semibold hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="md:w-1/3 mt-10 md:mt-0">
            <div className="bg-gray-800 p-5 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <ul className="text-gray-300 space-y-2">
                <li>
                  <Link to="#" className="hover:text-yellow-400">
                    Battle Royale
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-yellow-400">
                    RPG
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-yellow-400">
                    Indie Games
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-yellow-400">
                    Simulation
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-5 rounded-2xl shadow-lg mt-6">
              <h3 className="text-xl font-bold mb-4">Popular Posts</h3>
              <ul className="space-y-3">
                {blogPosts.map((post) => (
                  <li key={post.id}>
                    <Link to={`/blog/${post.id}`} className="hover:text-yellow-400">
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
