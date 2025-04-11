import React from 'react';
import './Sermons.css';
import { getImageUrl } from '../../Utils/apiConfig';
import { NavLink } from 'react-router-dom';

const Sermons = ({ sermons }) => {
  const sermonsArray = Array.isArray(sermons) ? sermons : [];

  return (
    <div className="sermons-page">
      {/* Hero Section */}
      <div className="sermons-hero">
        <div className="sermons-hero-overlay">
          <div className="container">
            <h1 className="sermons-hero-title">Sermons</h1>
            <p className="sermons-hero-subtitle">Listen to our messages and grow in your faith</p>
          </div>
        </div>
      </div>

      {/* Sermons List */}
      <div className="container">
        <section className="sermons-list">
          {sermonsArray.length === 0 ? (
            <p className="no-sermons">No sermons available at this time.</p>
          ) : (
            <div className="sermons-grid">
              {sermonsArray.map((sermon) => (
                <div key={sermon.id} className="sermon-card">
                  {sermon.image && (
                    <div className="sermon-image">
                      <img 
                        src={getImageUrl(sermon.image.url)} 
                        alt={sermon.title}
                        className="sermon-image-content"
                      />
                    </div>
                  )}
                  <div className="sermon-content">
                    <h3 className="sermon-title">{sermon.title}</h3>
                    <div className="sermon-meta">
                      <span className="sermon-preacher">{sermon.preacher}</span>
                      <span className="sermon-date">
                        {new Date(sermon.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="sermon-description">{sermon.description}</p>
                    <div className="sermon-actions">
                      <button 
                        className="sermon-play-button"
                        onClick={() => window.open(sermon.audioUrl, '_blank')}
                      >
                        Listen Now
                      </button>
                      <NavLink 
                        to={`/sermons/${sermon.id}`}
                        className="sermon-read-more"
                      >
                        Read More
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Categories Filter */}
        <section className="sermons-categories">
          <div className="categories-filter">
            <button className="category-btn active">All</button>
            <button className="category-btn">Recent</button>
            <button className="category-btn">Popular</button>
            <button className="category-btn">Series</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sermons;
