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
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Gospel Revival Wave Church | Home</title>
        <meta name="description" content="Welcome to Gospel Revival Wave Church. Join us for worship, community, and spiritual growth." />
        <meta property="og:title" content="Gospel Revival Wave Church | Home" />
        <meta property="og:description" content="Welcome to Gospel Revival Wave Church. Join us for worship, community, and spiritual growth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://grwc.vercel.app/" />
        <link rel="canonical" href="https://grwc.vercel.app/" />
      </Helmet>
      <main className="home small-section">
        <div className="home-container">
          <div className="section-wrapper hero-wrapper">
            <Shapes section="hero" />
            <Hero />
          </div>
          
          <div className="section-wrapper history-wrapper" data-aos="fade-up">
            <Shapes section="history" />
            <HomeHistory />
          </div>
          
          <div className="section-wrapper mission-wrapper" data-aos="fade-up" data-aos-delay="1000">
            <Shapes section="mission" />
            <MissionVision />
          </div>
          
          <div className="section-wrapper services-wrapper" data-aos="fade-up" data-aos-delay="1000">
            <Shapes section="services" />
            <HomeServices />
          </div>
          
          <div className="section-wrapper ministries-wrapper" data-aos="fade-up" data-aos-delay="1000">
            <Shapes section="ministries" />
            <HomeMinistries />
          </div>
          
          <div className="section-wrapper events-wrapper" data-aos="fade-up" data-aos-delay="1500">
            <Shapes section="events" />
            <HomeEvent />
          </div>
          
          <div className="section-wrapper contact-wrapper" data-aos="fade-up" data-aos-delay="100">
            <Shapes section="contact" />
            <HomeContact />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
