import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Ministries.css";
import { Helmet } from "react-helmet";
import img1 from "../../assets/HeroImages/image2.jpg";
import { MinistriesPageData } from "./MinistriesPageData";

const Ministries = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Ministries | Gospel Revival Wave Church</title>
        <meta
          name="description"
          content="Explore the ministries at Gospel Revival Wave Church. Find your place to serve and grow in faith."
        />
        <meta
          property="og:title"
          content="Ministries | Gospel Revival Wave Church"
        />
        <meta
          property="og:description"
          content="Explore the ministries at Gospel Revival Wave Church. Find your place to serve and grow in faith."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://grwc.vercel.app/ministries" />
        <link rel="canonical" href="https://grwc.vercel.app/ministries" />
      </Helmet>

      {/* Hero Section with Animated Title */}
      <section className="ministries-hero">
        <div className="ministry-card small-section container">
          <div className="image-overlay" />
          <img
            src={img1}
            alt="Ministry at Gospel Revival Wave Church"
            className="ministries-page-background-image"
            loading="eager"
          />
          <h1 className="ministry-title">Ministries</h1>
        </div>
      </section>

      {/* Ministry Details Section */}
      {MinistriesPageData.map(
        ({ id, title, icon, description, keyVerse, verseText, image }, index) => (
          <section
            className={`ministries-detailed_page container`}
            key={id}
          >
            <div className="ministries-page_details">
              <div className="ministries-details_contents">
                <div className="ministries-details_left">
                  <b className="ministry-icon">{icon}</b>
                  <div className="ministries-page_content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className="ministries-page_verses">
                      <span>{verseText} - </span>
                      <i>"{keyVerse}"</i>
                    </div>
                    <div className="ministry-button-container">
                      <Link to={`/ministries/${id}`} className="ministry-learn-more">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="ministries-details_right-image">
                  <img src={image} alt={`${title} Ministry`} />
                </div>
              </div>
            </div>
          </section>
        )
      )}
    </>
  );
};

export default Ministries;