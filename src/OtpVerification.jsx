import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function OtpVerification() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedOtp = localStorage.getItem("otp");
    if (otp === storedOtp) {
      setSuccess(true);
      setError("");
      localStorage.removeItem("otp");
      setTimeout(() => {
        navigate("/reset-password");
      }, 1000);
    } else {
      setError("Invalid OTP. Please try again.");
      setSuccess(false);
    }
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
        <h2 className="text-xl font-semibold text-secondary mb-4">OTP Verification</h2>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full px-4 py-2 border border-button rounded-lg focus:outline-none focus:ring-2 focus:ring-button text-secondary transition"
            required
          />
          {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
          {success && <div className="text-green-600 text-sm mb-2">OTP Verified! Redirecting...</div>}
          <button type="submit" className="w-full bg-button text-white py-2 rounded-lg font-semibold hover:bg-hover transition mb-2 shadow">
            Verify OTP
          </button>
        </form>
        <div className="text-sm text-center w-full mt-2">
          <Link to="/login" className="text-button hover:underline">Back to Login</Link>
        </div>
      </div>
    </div>
  );
}

export default OtpVerification; 