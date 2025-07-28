import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import moviesData from "./movies.json";

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

export default function IndividualMovie() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [showPlayer, setShowPlayer] = useState(false);

  // Search all arrays for the movie
  const allMovies = [
    ...(moviesData.newMovies || []),
    ...(moviesData.upcomingMovies || []),
    ...(moviesData.topRated || []),
    ...(moviesData.comedy || [])
  ];
  const movie = allMovies.find((m) => slugify(m.title) === name);

  if (!movie) {
    return <div className="min-h-screen flex items-center justify-center text-2xl">Movie not found</div>;
  }

  // Determine which image map to use
  let imageMap = undefined;
  if ((moviesData.newMovies || []).some(m => slugify(m.title) === name)) {
    imageMap = newMovieImages;
  } else if ((moviesData.upcomingMovies || []).some(m => slugify(m.title) === name)) {
    imageMap = upcomingMovieImages;
  } else if ((moviesData.comedy || []).some(m => slugify(m.title) === name)) {
    imageMap = comedyMovieImages;
  } else if ((moviesData.topRated || []).some(m => slugify(m.title) === name)) {
    imageMap = imdbMovieImages;
  }
  const bannerUrl = imageMap ? resolveImageUrl(movie.banner, imageMap) : movie.banner;

  return (
    <div className="relative min-h-screen w-full flex items-end bg-black">
      {/* Banner background */}
      <img
        src={bannerUrl}
        alt={movie.title}
        className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-100"
        style={{ filter: "brightness(0.7)" }}
      />
      {/* Overlay for gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/20 to-transparent z-10" />
      {/* Back Icon */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-8 left-8 z-30 bg-black/60 hover:bg-black/80 text-white rounded-full p-3 shadow-lg transition-colors"
        aria-label="Back"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      {/* Content */}
      <div className="relative z-20 max-w-3xl p-8 m-8 bg-black/50 border-2 border-primary rounded-2xl shadow-2xl text-white">
        <h1 className="text-5xl font-extrabold mb-2 tracking-wide">
          {movie.title}
        </h1>
        {movie.status && (
          <div className="text-blue-500 font-semibold mb-2 text-lg">{movie.status}</div>
        )}
        <div className="flex flex-wrap items-center gap-4 text-lg mb-4">
          <span>{movie.year}</span>
          <span>· {movie.rating}</span>
          <span>· {movie.duration}</span>
          <span>· {movie.languages.length} Languages</span>
        </div>
        <p className="mb-4 text-base text-slate-200">{movie.description}</p>
        <div className="flex flex-wrap gap-3 mb-4">
          {Array.isArray(movie.genres) && movie.genres.map((genre) => (
            <span key={genre} className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
              {genre}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          {Array.isArray(movie.languages) && movie.languages.map((lang, idx) => (
            <span key={lang} className={`px-3 py-1 rounded-full text-sm font-semibold ${idx === 0 ? 'bg-white text-black' : 'bg-white/20 text-white'}`}>
              {lang}
            </span>
          ))}
        </div>
        <button
          className="bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold px-8 py-3 rounded-lg text-lg shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
          onClick={() => setShowPlayer(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.25v13.5l13.5-6.75-13.5-6.75z" />
          </svg>
          Watch Now
        </button>
      </div>
      {/* Video Player Overlay */}
      {showPlayer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <button
            onClick={() => setShowPlayer(false)}
            className="absolute top-6 right-6 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 z-50"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <video
            src={movie.video}
            controls
            autoPlay
            className="w-full max-w-3xl rounded-xl shadow-2xl border-4 border-white"
            style={{ maxHeight: "80vh" }}
          />
        </div>
      )}
    </div>
  );
} 