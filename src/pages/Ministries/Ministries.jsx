import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Ministries.css";
import { Helmet } from "react-helmet";
import img1 from "../../assets/HeroImages/image2.jpg";
import { MinistriesPageData } from "./MinistriesPageData";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Ministries = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 120,
      delay: 100,
    });

    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Refresh AOS on component mount
    AOS.refresh();

    // Cleanup function
    return () => {
      AOS.refresh();
    };
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
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay={index * 100}
          >
            <div className="ministries-page_details">
              <div className="ministries-details_contents">
                <div 
                  className="ministries-details_left"
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-duration="900"
                  data-aos-delay={200 + (index * 100)}
                >
                  <b 
                    className="ministry-icon"
                    data-aos="flip-left"
                    data-aos-duration="600"
                    data-aos-delay={400 + (index * 100)}
                  >
                    {icon}
                  </b>
                  <div 
                    className="ministries-page_content"
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay={300 + (index * 100)}
                  >
                    <h3
                      data-aos="fade-down"
                      data-aos-duration="600"
                      data-aos-delay={350 + (index * 100)}
                    >
                      {title}
                    </h3>
                    <p
                      data-aos="fade-up"
                      data-aos-duration="700"
                      data-aos-delay={400 + (index * 100)}
                    >
                      {description}
                    </p>
                    <div 
                      className="ministries-page_verses"
                      data-aos="fade-in"
                      data-aos-duration="800"
                      data-aos-delay={500 + (index * 100)}
                    >
                      <span>{verseText} - </span>
                      <i>"{keyVerse}"</i>
                    </div>
                    <div 
                      className="ministry-button-container"
                      data-aos="zoom-in"
                      data-aos-duration="600"
                      data-aos-delay={600 + (index * 100)}
                    >
                      <Link to={`/ministries/${id}`} className="ministry-learn-more">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>

                <div 
                  className="ministries-details_right-image"
                  data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                  data-aos-duration="900"
                  data-aos-delay={300 + (index * 100)}
                >
                  <img 
                    src={image} 
                    alt={`${title} Ministry`}
                    data-aos="zoom-in-up"
                    data-aos-duration="800"
                    data-aos-delay={400 + (index * 100)}
                  />
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