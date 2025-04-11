import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="not-found-illustration">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#c930ff" d="M44.7,-76.2C58.9,-69.2,71.7,-59,79.9,-45.5C88.1,-31.9,91.7,-16,91.8,0.1C91.9,16.1,88.6,32.2,80.3,45.6C72,59,58.8,69.7,44.4,76.6C30,83.5,15,86.7,-0.2,87C-15.3,87.4,-30.7,84.9,-44.4,77.8C-58.1,70.7,-70.1,59,-78.3,44.8C-86.5,30.7,-90.8,15.3,-91.9,-0.6C-93,-16.5,-90.8,-33.1,-83.1,-47C-75.4,-60.9,-62.1,-72.2,-47.4,-78.8C-32.6,-85.4,-16.3,-87.4,-0.5,-86.6C15.4,-85.7,30.5,-83.1,44.7,-76.2Z" transform="translate(100 100)" />
          </svg>
        </div>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Oops! The page you were looking for doesn't exist or has been moved.</p>
        
        <div className="error-details">
          <div className="error-detail">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            Error 404
          </div>
          <div className="error-detail">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 4 23 10 17 10"></polyline>
              <polyline points="1 20 1 14 7 14"></polyline>
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
            </svg>
            Try Again
          </div>
        </div>
        
        <Link to="/" className="home-link">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;