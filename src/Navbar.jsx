import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-button rounded-xl shadow-2xl px-2 py-2 flex justify-center items-center space-x-10 border border-slate-200">
      <Link
        to="/"
        className={`text-lg font-bold transition-colors px-4 py-2 rounded-lg ${location.pathname === '/' ? 'bg-primary text-secondary' : 'text-primary hover:underline'}`}
      >
        Home
      </Link>
      <Link
        to="/music"
        className={`text-lg font-bold transition-colors px-4 py-2 rounded-lg ${location.pathname.startsWith('/music') ? 'bg-primary text-secondary' : 'text-primary hover:underline'}`}
      >
        Music
      </Link>
      <Link
        to="/movie"
        className={`text-lg font-bold transition-colors px-4 py-2 rounded-lg ${location.pathname === '/movie' ? 'bg-primary text-secondary' : 'text-primary hover:underline'}`}
      >
        Movie
      </Link>
    </nav>
  );
} 