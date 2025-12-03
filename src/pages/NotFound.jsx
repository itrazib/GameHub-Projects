import React from 'react';
import { Link } from 'react-router';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient text-white px-4">
      <title>Page Not Found</title>
      
      <h1 className="text-[10rem] font-extrabold mb-4 drop-shadow-lg">404</h1>
      
      <h2 className="text-4xl md:text-5xl font-bold mb-2">Oops! Page not found</h2>
      
      <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-xl text-center">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      
      <Link 
        to="/" 
        className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition-colors shadow-lg"
      >
        Go Home
      </Link>
    </div>
  );
}
