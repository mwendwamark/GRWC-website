import React from 'react';
import './Ministries.css';
import { getImageUrl } from '../../Utils/apiConfig';

const Ministries = ({ ministries }) => {
  const ministriesArray = Array.isArray(ministries) ? ministries : [];

  return (
    <div className="ministries-page">
      {/* Hero Section */}
      <div className="ministries-hero">
        <div className="ministries-hero-overlay">
          <div className="container">
            <h1 className="ministries-hero-title">Our Ministries</h1>
            <p className="ministries-hero-subtitle">Discover how you can serve and grow in your faith</p>
          </div>
        </div>
      </div>

      {/* Ministries Grid */}
      <div className="container">
        <section className="ministries-grid">
          {ministriesArray.map((ministry) => (
            <div key={ministry.id} className="ministry-card">
              {ministry.image && (
                <div className="ministry-image">
                  <img 
                    src={getImageUrl(ministry.image.url)} 
                    alt={ministry.title}
                    className="ministry-image-content"
                  />
                </div>
              )}
              <div className="ministry-content">
                <h3 className="ministry-title">{ministry.title}</h3>
                <p className="ministry-description">{ministry.description}</p>
                <div className="ministry-leaders">
                  <h4>Leaders:</h4>
                  <ul>
                    {ministry.leaders?.map((leader, index) => (
                      <li key={index}>{leader.name}</li>
                    ))}
                  </ul>
                </div>
                <div className="ministry-contact">
                  <p>Contact: {ministry.contactEmail}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* Ministry Categories */}
      <section className="ministry-categories">
        <div className="container">
          <h2>Ministry Categories</h2>
          <div className="categories-grid">
            <div className="category-card">
              <h3>Worship & Music</h3>
              <p>Serving through music and praise</p>
            </div>
            <div className="category-card">
              <h3>Youth & Children</h3>
              <p>Ministries for all ages</p>
            </div>
            <div className="category-card">
              <h3>Community Service</h3>
              <p>Outreach and service ministries</p>
            </div>
            <div className="category-card">
              <h3>Discipleship</h3>
              <p>Growth and spiritual development</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ministries;
