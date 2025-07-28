import React from "react";
import { Routes, Route, useParams, useLocation } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import OtpVerification from "./OtpVerification";
import Home from "./Home";
import Music from "./Music";
import Navbar from "./Navbar";
import Movies from "./Movies";
import IndividualMusic from "./IndividualMusic";
import IndividualMovie from "./IndividualMovie";
import songsData from "./songs.json";

// Map all possible images for dynamic import
const imageModules = import.meta.glob('./images/music/**/*', { eager: true, as: 'url' });

function IndividualMusicRoute() {
  const { type, name } = useParams();
  const key = name;
  const data = songsData[key] || null;
  let image = undefined;
  if (data && data.image) {
    // Remove leading './' if present
    let imgPath = data.image.startsWith('./') ? data.image : `./${data.image}`;
    image = imageModules[imgPath];
  }
  if (!data) return <div className="min-h-screen flex items-center justify-center text-2xl">Not found</div>;
  return <IndividualMusic image={image} name={data.name} description={data.description} songs={data.songs} />;
}

export default function App() {
  const location = useLocation();
  const hideNavbar =
    location.pathname.startsWith("/music/") ||
    location.pathname.startsWith("/movie/") && location.pathname !== "/movie";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/music/:type/:name" element={<IndividualMusicRoute />} />
        <Route path="/sid-sriram" element={<IndividualMusic />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/movie/:name" element={<IndividualMovie />} />
      </Routes>
    </>
  );
}
