import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-10">
      <div className="container mx-auto px-4 py-6 text-center text-slate-400">
        © {new Date().getFullYear()} GameHub — Built with ❤️
      </div>
    </footer>
  );
}
