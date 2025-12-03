import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
  };

  return (
    <div className="w-7xl mx-auto  text-white py-6">
        <title>Contact</title>
        <h1 className="text-5xl text-gradient text-center font-bold mb-6">Contact</h1>
      <div className="max-w-7xl mx-auto md:flex gap-12">
        {/* Contact Form */}
        <div className="md:flex-1 bg-gradient backdrop-blur-xl p-8 rounded-3xl shadow-lg">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-300 mb-6">
            Have questions or feedback? Fill out the form below and we'll respond as soon as possible.
          </p>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 text-gray-200">Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 rounded-xl bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-200">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 rounded-xl bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-200">Message</label>
              <textarea
                rows="5"
                required
                className="w-full px-4 py-2 rounded-xl bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-gray-900 font-bold py-3 rounded-xl hover:bg-yellow-400 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info / Sidebar */}
        <div className="md:w-1/3 mt-10 md:mt-0 space-y-8">
          <div className="bg-gradient backdrop-blur-xl p-6 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
            <p className="text-gray-300 mb-2">
              <strong>Email:</strong> support@gamehub.com
            </p>
            <p className="text-gray-300 mb-2">
              <strong>Phone:</strong> +880 123 456 789
            </p>
            <p className="text-gray-300 mb-2">
              <strong>Address:</strong> 123 GameHub Street, Dhaka, Bangladesh
            </p>
          </div>

          <div className="bg-gradient backdrop-blur-xl p-6 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4 text-xl text-gray-300">
              <a href="#" className="hover:text-blue-500 transition-colors"><FaFacebookF /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><FaTwitter /></a>
              <a href="#" className="hover:text-pink-500 transition-colors"><FaInstagram /></a>
              <a href="#" className="hover:text-red-600 transition-colors"><FaYoutube /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
