import React from "react";
import healthcareimage from "../assets/front_image.jpeg"; // Adjust the path as necessary
import "./Home.css"; // Adjust the path as necessary
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <img
        src={healthcareimage}
        alt="Doctor, patient, bot"
        className="healthimg"
      />
      <div className="banner-content">
        <h1 className="banner-title">Dr. Revive –</h1>
        <p className="banner-description">
          Your Health Companion, From Chat to Care.
        </p>
        <Link to="/chatbot">
          <button className="banner-button">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
