import React from 'react';
import { Link } from 'react-router';


export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2 text-slate-400">Page not found</p>
      <div className="mt-4">
        <Link to="/" className="btn">Go Home</Link>
      </div>
    </div>
  );
}
