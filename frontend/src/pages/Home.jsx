import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <nav className="navbar">
        <h1 className="logo">Finance Manager</h1>
        <div>
          <button className="btn btn-primary" onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </nav>

      <div className="hero">
        <h2>Smart Finance Management 💰</h2>
        <p>Track, manage, and grow your money easily.</p>
        <button className="btn btn-primary" onClick={() => navigate("/login")}>
          Start Now
        </button>
      </div>
    </div>
  );
}
