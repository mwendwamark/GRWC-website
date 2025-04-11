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
import Shapes from "../../components/Shapes/Shapes";

const Home = () => {
  return (
    <main className="home small-section">
      <div className="home-container">
        <div className="section-wrapper hero-wrapper">
          <Shapes section="hero" />
          <Hero />
        </div>
        
        <div className="section-wrapper history-wrapper">
          <Shapes section="history" />
          <HomeHistory />
        </div>
        
        <div className="section-wrapper mission-wrapper">
          <Shapes section="mission" />
          <MissionVision />
        </div>
        
        <div className="section-wrapper services-wrapper">
          <Shapes section="services" />
          <HomeServices />
        </div>
        
        <div className="section-wrapper ministries-wrapper">
          <Shapes section="ministries" />
          <HomeMinistries />
        </div>
        
        <div className="section-wrapper events-wrapper">
          <Shapes section="events" />
          <HomeEvent />
        </div>
        
        <div className="section-wrapper contact-wrapper">
          <Shapes section="contact" />
          <HomeContact />
        </div>
      </div>
    </main>
  );
};

export default Home;
