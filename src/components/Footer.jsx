import React from "react";
import { Link } from "react-router";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "./../assets/logo1.png"

export default function Footer() {
  return (
    <div className="w-7xl mx-auto ">
     
      <footer className="bg-gradient  text-gray-200 py-10 rounded-t-2xl">
      <div className="max-w-3xl mx-auto">
           <img className="w-70 h-40 text-center mx-auto" src={logo} alt="" />
      </div>
      <div className="max-w-5xl mx-auto px-4 md:flex md:justify-between md:items-start">
        {/* Logo & About */}
        <div className="mb-6 md:mb-0">
          <Link to="/" className="text-2xl font-bold text-white mb-2 inline-block">
            GameHub
          </Link>
          <p className="text-gray-400 max-w-xs">
            GameHub is your ultimate gaming portal, where you can explore, download, and stay updated on the latest and greatest indie and AAA games.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link>
            </li>
            <li className="mb-2">
              <Link to="/games" className="hover:text-yellow-400 transition-colors">Games</Link>
            </li>
            <li className="mb-2">
              <Link to="/blog" className="hover:text-yellow-400 transition-colors">Blog</Link>
            </li>
            <li className="mb-2">
              <Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-500 transition-colors"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500 transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-red-600 transition-colors"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm max-w-7xl mx-auto">
        &copy; {new Date().getFullYear()} GameHub. All rights reserved.
      </div>
    </footer>
    </div>
  );
}
