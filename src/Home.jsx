import React from "react";
import { Link } from "react-router-dom";

import musicImg from "./images/music.jpeg";
import movieImg from "./images/movie.jpeg";

export default function Home() {
  return (
    <div className="min-h-screen bg-primary flex flex-col">
      {/* Header */}
      <header className="w-full bg-button py-8 flex flex-col items-center">
        <h1 className="text-5xl font-extrabold text-primary tracking-wide">Spotstar</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center gap-16">
        <div className="flex flex-row gap-16 mt-12">
          {/* Music Card */}
          <Link to="/music" className="bg-white rounded-2xl shadow-xl flex flex-col items-center p-6 transition-transform hover:scale-105 cursor-pointer">
            <img src={musicImg} alt="Music" className="w-80 h-56 object-cover rounded-xl mb-4" />
            <span className="text-2xl font-bold text-button mt-2">Music</span>
          </Link>
          {/* Movie Card */}
          <Link to="/movie" className="bg-white rounded-2xl shadow-xl flex flex-col items-center p-6 transition-transform hover:scale-105 cursor-pointer">
            <img src={movieImg} alt="Movie" className="w-80 h-56 object-cover rounded-xl mb-4" />
            <span className="text-2xl font-bold text-button mt-2">Movie</span>
          </Link>
        </div>
      </main>
    </div>
  );
} 