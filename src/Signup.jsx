import { Link } from "react-router-dom";
import React, { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary">
      <div className="bg-primary shadow-2xl rounded-2xl p-8 w-full max-w-md flex flex-col items-center">
        <div className="mb-6 flex flex-col items-center">
          <div className="w-16 h-16 bg-button rounded-full flex items-center justify-center mb-2">
            <span className="text-white text-3xl font-bold">S</span>
          </div>
          <span className="text-2xl font-extrabold text-button tracking-wide">SpotStar</span>
        </div>
        <h2 className="text-xl font-semibold text-secondary mb-4">Create your account</h2>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-button rounded-lg focus:outline-none focus:ring-2 focus:ring-button text-secondary transition"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-button rounded-lg focus:outline-none focus:ring-2 focus:ring-button text-secondary transition"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-button rounded-lg focus:outline-none focus:ring-2 focus:ring-button text-secondary transition"
            required
          />
          <button type="submit" className="w-full bg-button text-white py-2 rounded-lg font-semibold hover:bg-hover transition mb-2 shadow">
            Sign Up
          </button>
        </form>
        <div className="text-sm text-center w-full mt-2">
          <Link to="/login" className="text-button hover:underline">Already have an account? Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup; 