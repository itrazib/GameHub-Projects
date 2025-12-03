import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <div className=" text-white py-6">
        <title>About</title>
      <div className="max-w-7xl mx-auto space-y-16">
        {/* About GameHub */}
        <section className="bg-gradient backdrop-blur-xl p-10 rounded-3xl shadow-lg text-center">
          <h1 className="text-4xl font-bold mb-4">About GameHub</h1>
          <p className="text-gray-300 text-lg">
            GameHub is your ultimate destination for discovering, exploring, and downloading the latest indie and AAA games. Our mission is to bring gamers together, provide honest reviews, and keep you updated with news, guides, and game insights. Whether you are a casual player or a hardcore gamer, GameHub is built for you.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="md:flex md:gap-12">
          <div className="md:flex-1 bg-gradient backdrop-blur-xl p-8 rounded-3xl shadow-lg mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-3">Our Mission</h2>
            <p className="text-gray-300">
              To create a vibrant gaming community where gamers can discover new titles, share experiences, and access reliable content about their favorite games.
            </p>
          </div>
          <div className="md:flex-1 bg-gradient backdrop-blur-xl p-8 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-3">Our Vision</h2>
            <p className="text-gray-300">
              To be the most trusted and engaging platform for gamers worldwide, fostering creativity, collaboration, and a love for gaming culture.
            </p>
          </div>
        </section>

        {/* Team / Founder */}
        <section className="text-center space-y-6">
          <h2 className="text-4xl text-gradient font-bold mb-6">Meet the Team</h2>
          <div className="md:flex md:justify-center md:gap-10 flex-wrap gap-6">
            <div className="bg-gradient backdrop-blur-xl p-6 rounded-3xl shadow-lg w-60">
              <img
                src="https://i.ibb.co/8n97Jmn5/1584d6df-86ff-480e-a9e8-fa4b57ed2488-removebg-preview.png"
                alt="Founder"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold">Razib Das</h3>
              <p className="text-gray-300 text-sm mb-2">Founder & CEO</p>
              <div className="flex justify-center gap-3 text-lg text-gray-300">
                <a href="#" className="hover:text-blue-500 transition-colors"><FaFacebookF /></a>
                <a href="#" className="hover:text-blue-400 transition-colors"><FaTwitter /></a>
                <a href="#" className="hover:text-pink-500 transition-colors"><FaInstagram /></a>
                <a href="#" className="hover:text-blue-700 transition-colors"><FaLinkedin /></a>
              </div>
            </div>

            {/* You can duplicate this block for more team members */}
          </div>
        </section>
      </div>
    </div>
  );
}
