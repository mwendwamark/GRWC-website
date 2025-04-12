import React from "react";
import "./About.css";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import image from "../../assets/aboutImage2.jpg";
import Shapes from "../../components/Shapes/Shapes"
const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Church Name</title>
        <meta name="description" content="Learn about our church community, mission, and values." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="about-hero section">
        <div className="container">
          <h1 className="about-hero-title">About Us</h1>
          <p className="about-hero-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            explicabo quia voluptate, provident quod quisquam, quas ipsum
            asperiores laborum iste sunt expedita esse cum temporibus suscipit
            voluptas perspiciatis debitis eligendi magnam commodi consequuntur.
          </p>
          <div className="about-hero-buttons">
            <NavLink to="/sermons" className="btn btn-primary">
              Sermons
            </NavLink>
            <NavLink to="/pastors" className="btn transparent-btn">
              Our Pastors
            </NavLink>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="community-section section">
        <Shapes/>
        <div className="community-image">
          <img src={image} alt="Church Community" className="community-photo" />
        </div>
        <div className="community-content">
          <div className="content-divider"></div>
          <h2 className="community-title">
            In our church we trust in the strength of God's love
          </h2>
          <p className="community-description">
            Our community is built on the foundation of faith, hope, and love.
            We gather together to support one another, grow spiritually, and
            share God's message with the world around us.
          </p>
        </div>
      </section>

      {/* Mission and Values Section */}
      <section className="mission-values section">
        <div className="container">
          <div className="mission-box">
            <h3>Our Mission</h3>
            <p>
              To create a welcoming community where people can experience God's
              love, grow in their faith, and be equipped to serve others in
              Christ's name.
            </p>
          </div>
          <div className="values-box">
            <h3>Our Values</h3>
            <ul>
              <li>Biblical Teaching</li>
              <li>Authentic Community</li>
              <li>Compassionate Service</li>
              <li>Inclusive Worship</li>
              <li>Purposeful Discipleship</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="join-us section">
        <div className="container">
          <h2>Join Us This Sunday</h2>
          <p>
            We'd love to have you join us for worship. Our services are designed
            to be welcoming to all, regardless of where you are on your
            spiritual journey.
          </p>
          <NavLink to="/visit" className="btn btn-cta">
            Plan Your Visit
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default About;