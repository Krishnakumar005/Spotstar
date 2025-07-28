import React from "react";
import { useNavigate } from "react-router-dom";

// Import singer images
import sidSriramImg from "./images/music/singer/sid sriram (2).jpg";
import pradeepKumarImg from "./images/music/singer/pradeep-kumar.jpg";
import karthikImg from "./images/music/singer/kathik.jpg";
import shakthisreeImg from "./images/music/singer/Shakthisree.jpg";
import hariharanImg from "./images/music/singer/Hariharan.jpg";

// Import actor images
import ajithImg from "./images/music/actor/ajithkumar.webp";
import rajaniImg from "./images/music/actor/rajani.jpg";
import vijayImg from "./images/music/actor/vijay.jpg";
import kamalImg from "./images/music/actor/kamal.jpg";
import suryaImg from "./images/music/actor/surya.jpg";

// Import music director images
import arrImg from "./images/music/music-director/arr.jpg";
import gvImg from "./images/music/music-director/Gv.jpg";
import yuvanImg from "./images/music/music-director/yuvan.jpg";
import anirudhImg from "./images/music/music-director/anirud.jpg";
import harisImg from "./images/music/music-director/haris.jpg";

// Import lyricist images
import vairamuthuImg from "./images/music/Lyricist/vairamutu.webp";
import naMuthukumarImg from "./images/music/Lyricist/na muthukumar.jpg";
import vivekImg from "./images/music/Lyricist/vivek.jpg";
import madanKarthyImg from "./images/music/Lyricist/madan karthy.jpg";
import vaaliImg from "./images/music/Lyricist/vaali.jpg";

const singers = [
  { name: "Sid Sriram", img: sidSriramImg },
  { name: "Pradeep Kumar", img: pradeepKumarImg },
  { name: "Karthik", img: karthikImg },
  { name: "Shakthisree", img: shakthisreeImg },
  { name: "Hariharan", img: hariharanImg }
];

const actors = [
  { name: "Ajith Kumar", img: ajithImg },
  { name: "Rajanikanth", img: rajaniImg },
  { name: "Vijay", img: vijayImg },
  { name: "Kamal Haasan", img: kamalImg },
  { name: "Suriya", img: suryaImg }
];

const musicDirectors = [
  { name: "A. R. Rahman", img: arrImg },
  { name: "GV Prakash", img: gvImg },
  { name: "Yuvan Shankar Raja", img: yuvanImg },
  { name: "Anirudh Ravichander", img: anirudhImg },
  { name: "Harris Jayaraj", img: harisImg }
];

const lyricists = [
  { name: "Vairamuthu", img: vairamuthuImg },
  { name: "Na. Muthukumar", img: naMuthukumarImg },
  { name: "Vivek", img: vivekImg },
  { name: "Madan Karthy", img: madanKarthyImg },
  { name: "Vaali", img: vaaliImg }
];

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function Section({ title, items, type }) {
  const navigate = useNavigate();
  return (
    <section className="w-full max-w-7xl mx-auto mb-12 px-2">
      
      <h2 className="text-3xl font-bold text-secondary mt-10 mb-8 text-center">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center p-3 border-2 rounded-xl shadow-xl transition-transform duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer max-w-xs w-full mx-auto"
            onClick={() => navigate(`/music/${type}/${slugify(item.name)}`)}
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-auto aspect-[3/3.5] object-cover rounded-xl"
              loading="lazy"
            />
            <span className="text-lg font-semibold text-secondary text-center mt-2">{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Music() {
  return (
    <div className="min-h-screen bg-primary flex flex-col">
      {/* Header removed, Navbar is now global */}
      <header className="w-full bg-button py-5 flex flex-col items-center mb-5">
        <h1 className="text-5xl font-extrabold text-primary tracking-wide">Music</h1>
      </header>
      <main className="flex-1 flex flex-col items-center w-full px-2 pb-12">
        <Section title="Singers" items={singers} type="singer" />
        <Section title="Actors" items={actors} type="actor" />
        <Section title="Music Directors" items={musicDirectors} type="music-director" />
        <Section title="Lyricists" items={lyricists} type="lyricist" />
      </main>
    </div>
  );
} 