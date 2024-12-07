import React from "react";

// IMPORT FILES
import "./Home.css";
import Hero from "./Hero/Hero";
import HomeHistory from "./ChurchHistory/HomeHistory";
import MissionVision from "./Mission-Vision/MissionVision";
import HomeServices from "./Servies/HomeServices";
import HomeMinistries from "./Ministries/HomeMinistries";
import HomeEvent from "./Events-Section/HomeEvent";
import HomeContact from "./Contact/HomeContact";

const Home = () => {
  return (
    <main className="home section">
      <div className="home-container">
        <Hero />
        <HomeHistory />
        <MissionVision />
        <HomeServices />
        <HomeMinistries />
        <HomeEvent />
        <HomeContact />
      </div>
    </main>
  );
};

export default Home;
