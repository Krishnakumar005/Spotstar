import React from "react";
import { Link } from "react-router-dom";
import moviesData from "./movies.json";

// Import all local images for each section
const newMovieImages = import.meta.glob('./images/movie/new/*', { eager: true, as: 'url' });
const upcomingMovieImages = import.meta.glob('./images/movie/upcoming/*', { eager: true, as: 'url' });
const comedyMovieImages = import.meta.glob('./images/movie/comedy/*', { eager: true, as: 'url' });
const imdbMovieImages = import.meta.glob('./images/movie/imdb/*', { eager: true, as: 'url' });

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function resolveImageUrl(path, imageMap) {
  if (typeof path === 'string' && path.startsWith('./images/')) {
    return imageMap[path] || path;
  }
  return path;
}

function MovieSection({ title, movies, imageMap }) {
  if (!Array.isArray(movies)) return null;
  return (
    <div className="mb-12 w-full px-2">
      <h2 className="text-3xl font-bold text-secondary mt-10 mb-8 text-center">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {movies.map((movie, idx) => (
          <Link
            key={idx}
            to={`/movie/${slugify(movie.title)}`}
            className="flex flex-col items-center p-3 border-2 rounded-xl shadow-xl transition-transform duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer max-w-xs w-full mx-auto"
          >
            <img
              src={imageMap ? resolveImageUrl(movie.poster, imageMap) : movie.poster}
              alt={movie.title}
              className="w-full h-auto aspect-[3/3.5] object-cover rounded-xl"
              loading="lazy"
            />
            <span className="text-lg font-semibold text-secondary text-center mt-2">{movie.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Movies() {
  const { newMovies, upcomingMovies, topRated, comedy } = moviesData;
  return (
    <div className="min-h-screen bg-[#fdf2e9] flex flex-col items-center pb-32 w-full">
      <header className="w-full bg-button py-5 flex flex-col items-center mb-5">
        <h1 className="text-5xl font-extrabold text-primary tracking-wide">Movies</h1>
      </header>
      <div className="w-full max-w-7xl">
        <MovieSection title="New Movies" movies={newMovies} imageMap={newMovieImages} />
        <MovieSection title="Upcoming Movies" movies={upcomingMovies} imageMap={upcomingMovieImages} />
        <MovieSection title="Top Rated on IMDb" movies={topRated} imageMap={imdbMovieImages} />
        <MovieSection title="Comedy Movies" movies={comedy} imageMap={comedyMovieImages} />
      </div>
    </div>
  );
} 