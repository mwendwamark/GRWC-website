import React from "react";
import "./About.css";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import communityImage from "../../assets/aboutImage2.jpg";
import bibleImage from "../../assets/bible-image.jpg"; // You'll need this image
import churchGroupImage from "../../assets/church-group.jpg"; // You'll need this image
import Shapes from "../../components/Shapes/Shapes";
import Leaders from "./Leaders/Leaders";
import { GoArrowUpRight } from "react-icons/go";
import { FaUsers } from "react-icons/fa"; // Added for the Our Pastors button


const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Gospel Revival Wave Church</title>
        <meta
          name="description"
          content="Learn about our church community, mission, and values."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="about-hero small-section">
        <div className="container">
          <h1 className="about-hero-title">About Us</h1>
          <p className="about-hero-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            explicabo quia voluptate, provident quod quisquam, quas ipsum
            asperiores laborum iste sunt expedita esse cum temporibus suscipit
            voluptas perspiciatis debitis eligendi magnam commodi consequuntur.
          </p>
          <div className="about-hero-buttons">
            <NavLink to="/sermons" className="about-hero-btn about-btn-primary">
              Sermons <GoArrowUpRight />
            </NavLink>
            <a href="#leaders" className="about-hero-btn about-transparent-btn">
              <FaUsers style={{ marginRight: '8px' }} /> Our Pastors
            </a>
          </div>
        </div>
      </section>

      {/* Church Trust Section - Now with overlapping content */}
      <section className="trust-section section">
        <Shapes />
        <div className="trust-image">
          <img
            src={churchGroupImage}
            alt="Church community praying together"
            className="trust-photo"
            loading="lazy"
          />
        </div>
        <div className="trust-content">
          <div className="content-divider"></div>
          <h1 className="trust-title">
            In our church we trust in the strength of God's love
          </h1>
          <p className="trust-description">
            Lorem ipsum dolor sit amet consectetur adipiscing elit urna vitae ac
            vitae lacus ac proin ultricies eleifend dui ut felis bibendum ut
            amet nunc turpis diam urna quam congue.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Mission Section - This matches the second image layout */}
      <section className="dark-container-mission section">
        <div className="mission-section ">
          <div className="mission-container">
            <div className="mission-content">
              <div className="divider"></div>
              <h1>Our mission</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat duis aute irure dolor.
              </p>
              <p>
                Tempus quam pellentesque nec nam aliquam sem et est velit
                egestas dui id ornare. Nisi condimentum id venenatis a
                condimentum vitae sapien. Id cursus metus aliquam eleifend mi
                in.
              </p>
            </div>
            <div className="mission-image">
              <img src={bibleImage} alt="Bible study" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Community Section - Original from your code */}
      <section className="community-section section">
        <Shapes />
        <div className="community-image">
          <img
            src={communityImage}
            alt="Church Community"
            className="community-photo"
            loading="lazy"
          />
        </div>
        <div className="community-content">
          <div className="content-divider"></div>
          <h1 className="community-title">
            We foster a community built on faith and fellowship
          </h1>
          <p className="community-description">
            Our community is built on the foundation of faith, hope, and love.
            We gather together to support one another, grow spiritually, and
            share God's message with the world around us.
          </p>
        </div>
      </section>

      {/* <hr className="section-divider" /> */}

      <section className="dark-container-vision  section">
        <div className="mission-section">
          <div className="mission-container">
            <div className="mission-content">
              <div className="divider"></div>
              <h1>Our vision</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat duis aute irure dolor.
              </p>
              <p>
                Tempus quam pellentesque nec nam aliquam sem et est velit
                egestas dui id ornare. Nisi condimentum id venenatis a
                condimentum vitae sapien. Id cursus metus aliquam eleifend mi
                in.
              </p>
            </div>
            <div className="mission-image">
              <img src={bibleImage} alt="Bible study" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values Section */}
      <section className="leaders_and_pastors-section" id="leaders">
        <Leaders />
      </section>
      {/* Join Us Section */}
      <section className="join-us section-bottom">
        <div className="container">
          <h1>Join Us This Sunday</h1>
          <p>
            We'd love to have you join us for worship. Our services are designed
            to be welcoming to all, regardless of where you are on your
            spiritual journey.
          </p>
          <NavLink to="/contact" className="btn btn-cta">
            Plan Your Visit
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default About;
