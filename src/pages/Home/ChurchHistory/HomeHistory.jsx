import React from "react";
import "./HomeHistory.css";
import { NavLink } from "react-router-dom";
import { FaChurch, FaHeart, FaCross } from "react-icons/fa";
import img from "../../../assets/HeroImages/image3.jpg";
import img2 from "../../../assets/Ministries/youngster.jpg"

const HomeHistory = () => {
  return (
    <section className="about-section container section">
      <div className="about-header" data-aos="fade-down" data-aos-duration="800">
        <h2 className="small-header">About us</h2>
        <h1 className="big-header">Our Journey of Faith</h1>
      </div>

      <div className="about-content">
        <div className="about-image-wrapper" data-aos="fade-right" data-aos-duration="1000">
          <div className="image-container">
            <img src={img} alt="Gospel Revival Wave Church" className="main-image-1" />
            <img src={img2} alt="Gospel Revival Wave Church" className="main-image-2" />
            {/* <div className="image-overlay"></div> */}
          </div>
          {/* <div className="year-badge">
            <span>Since</span>
            <h3>1999</h3>
          </div> */}
        </div>
        
        <div className="about-text-container" data-aos="fade-left" data-aos-duration="1000">
          <h3 className="vision-text">Spreading hope, healing, and transformation</h3>
          
          <div className="about-features">
            <div className="home__about-feature-item" data-aos="fade-up" data-aos-delay="200">
              <div className="home__about-feature-icon">
                <FaChurch />
              </div>
              <div className="home__about-feature-text">
                <h4>Community</h4>
                <p>A thriving faith family led by Bishop Jesse Ireri James</p>
              </div>
            </div>
            
            <div className="home__about-feature-item" data-aos="fade-up" data-aos-delay="300">
              <div className="home__about-feature-icon">
                <FaHeart />
              </div>
              <div className="home__about-feature-text">
                <h4>Service</h4>
                <p>Committed to serving our community through various ministries</p>
              </div>
            </div>
            
            <div className="home__about-feature-item" data-aos="fade-up" data-aos-delay="400">
              <div className="home__about-feature-icon">
                <FaCross />
              </div>
              <div className="home__about-feature-text">
                <h4>Worship</h4>
                <p>Vibrant worship experiences that connect people with God</p>
              </div>
            </div>
          </div>
          
          <NavLink to="/about" className="read-more-btn btn btn-primary" data-aos="fade-up" data-aos-delay="500">
            Our Story
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default HomeHistory;