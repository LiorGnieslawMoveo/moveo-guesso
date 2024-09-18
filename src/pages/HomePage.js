import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home">
      <h1>Welcome to Guesso!</h1>
      <Link to="/guess">Make a Guess</Link>
      <Link to="/leaderboard">View Leaderboard</Link>
    </div>
  );
}

export default HomePage;
