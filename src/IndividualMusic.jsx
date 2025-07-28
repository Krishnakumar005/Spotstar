import React from "react";
import { useNavigate } from "react-router-dom";

export default function IndividualMusic({ image, name, description, songs }) {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-primary flex flex-col items-center px-2 pb-12">
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
      <section className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row items-center p-6 md:p-8 mb-10 mx-auto mt-16">
        <img src={image} alt={name} className="w-60 h-60 object-cover rounded-xl shadow mb-4 md:mb-0 md:mr-8" />
        <p className="text-slate-700 text-base md:text-lg text-justify">{description}</p>
      </section>
      <section className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6 mx-auto">
        {songs && songs.map((song, idx) => (
          <div key={song.title} className="mb-6">
            <div className="font-semibold text-lg mb-1">{idx + 1}. {song.title}</div>
            <audio controls className="w-full">
              <source src={song.src} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </section>
    </div>
  );
} 