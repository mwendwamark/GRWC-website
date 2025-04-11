import React from 'react';
import './About.css';
import { getImageUrl } from '../../Utils/apiConfig';

const About = ({ aboutData }) => {
  const { 
    title = 'About Us',
    subtitle = 'Our Story',
    content = 'Welcome to our church community. We are dedicated to spreading love and faith.',
    vision = 'Our Vision',
    mission = 'Our Mission',
    values = 'Our Values',
    history = 'Our History',
    image = null
  } = aboutData || {};

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero" style={{ backgroundImage: image ? `url(${getImageUrl(image.url)})` : 'none' }}>
        <div className="about-hero-overlay">
          <div className="container">
            <h1 className="about-hero-title">{title}</h1>
            <p className="about-hero-subtitle">{subtitle}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container">
        {/* Content Section */}
        <section className="about-content-section">
          <div className="about-content">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </section>

        {/* Vision, Mission, Values Grid */}
        <section className="about-grid-section">
          <div className="about-grid">
            <div className="about-grid-item">
              <h3>{vision}</h3>
              <div className="about-grid-content">
                <p>Our vision is to be a beacon of light in our community, spreading love, hope, and faith to all who seek it.</p>
              </div>
            </div>
            <div className="about-grid-item">
              <h3>{mission}</h3>
              <div className="about-grid-content">
                <p>Our mission is to create a welcoming and inclusive community where people can grow in their faith and serve others.</p>
              </div>
            </div>
            <div className="about-grid-item">
              <h3>{values}</h3>
              <div className="about-grid-content">
                <p>Our core values include love, compassion, integrity, and community service.</p>
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="about-history-section">
          <h2>{history}</h2>
          <div className="about-timeline">
            {/* Timeline items will be populated from data */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
