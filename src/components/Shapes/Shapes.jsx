import React from 'react';
import './Shapes.css';

const Shapes = ({ section }) => {
  // Determine which shapes to show based on section
  const showBasicShapes = () => {
    // Reduce shapes for mission and contact sections
    if (section === 'mission' || section === 'contact') {
      return (
        <>
          <div className="shape-circle circle-1"></div>
          <div className="shape-wave wave-1"></div>
        </>
      );
    }
    
    return (
      <>
        {/* Circles */}
        <div className="shape-circle circle-1"></div>
        <div className="shape-circle circle-2"></div>
        
        {/* Squares */}
        <div className="shape-square square-1"></div>
        
        {/* Waves */}
        <div className="shape-wave wave-1"></div>
      </>
    );
  };
  
  return (
    <div className={`shapes-container ${section}-shapes`}>
      {/* Basic shapes (reduced for certain sections) */}
      {showBasicShapes()}
      
      {/* Christian symbols */}
      <div className="shape-cross cross-1"></div>
      {section !== 'mission' && section !== 'contact' && (
        <div className="shape-cross cross-2"></div>
      )}
      
      {/* Fish symbol (Ichthys) */}
      <div className="shape-fish fish-1"></div>
      
      {/* Dove symbol */}
      {section === 'hero' || section === 'mission' && (
        <div className="shape-dove dove-1"></div>
      )}
      
      {/* Abstract shapeless blob */}
      <div className="shape-blob blob-1"></div>
      {section !== 'mission' && section !== 'contact' && (
        <div className="shape-blob blob-2"></div>
      )}
      
      {/* Light particles (only for hero section) */}
      {section === 'hero' && (
        <>
          <div className="light-particle"></div>
          <div className="light-particle"></div>
          <div className="light-particle"></div>
          <div className="light-particle"></div>
          <div className="light-particle"></div>
        </>
      )}
      
      {/* Animated lines (only for mission section, reduced) */}
      {section === 'mission' && (
        <>
          <div className="animated-line line-1"></div>
        </>
      )}
      
      {/* Pulse circles (only for events section) */}
      {section === 'events' && (
        <>
          <div className="pulse-circle pulse-1"></div>
          <div className="pulse-circle pulse-2"></div>
        </>
      )}
      
      {/* Water ripple effect (baptism symbol) */}
      {section === 'ministries' && (
        <div className="water-ripple"></div>
      )}
    </div>
  );
};

export default Shapes;