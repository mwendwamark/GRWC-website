import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaFacebookF, FaEnvelope, FaInstagram, FaTwitter, FaLink, FaShareAlt } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ShareSermon.css";

const ShareSermon = ({ sermon, currentUrl, showAsButton = false }) => {
  const [showShareOptions, setShowShareOptions] = useState(false);
  
  // Close share options when user clicks escape key
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && showShareOptions) {
        setShowShareOptions(false);
      }
    };

    window.addEventListener('keydown', handleEscKey);
    
    // If share options are open, prevent body from scrolling
    if (showShareOptions) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = '';
    };
  }, [showShareOptions]);
  
  // Get current URL or use a passed one
  const url = currentUrl || window.location.href;
  const title = sermon?.sermonTitle || "Sermon";
  const summary = sermon?.sermonSummary || "Check out this sermon from Gospel Revival Wave Church";
  
  // Create share URLs for different platforms
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} - ${summary} ${url}`)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const emailUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${summary} ${url}`)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${title} - ${summary}`)}&url=${encodeURIComponent(url)}`;
  
  // Toast configuration
  const toastConfig = {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored"
  };
  
  // Function to handle Instagram sharing
  const handleInstagramShare = () => {
    navigator.clipboard.writeText(url);
    toast.info("Link copied! Instagram doesn't support direct sharing. Please paste this link in Instagram.", toastConfig);
  };

  // Function to copy link to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    toast.success("Link copied to clipboard!", toastConfig);
  };

  // Toggle share options visibility
  const toggleShareOptions = () => {
    setShowShareOptions(!showShareOptions);
  };

  // Close when clicking the overlay
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('share-overlay')) {
      setShowShareOptions(false);
    }
  };

  return (
    <>
      <ToastContainer />
      
      {/* Share button */}
      {(showAsButton || !showShareOptions) && (
        <div className="sermon-share-container">
          <button 
            className="sermon-share-button" 
            onClick={toggleShareOptions}
            aria-label="Share sermon"
          >
            <FaShareAlt />
            <span>Share Sermon</span>
          </button>
        </div>
      )}
      
      {/* Share overlay and options */}
      {showShareOptions && (
        <>
          <div className="share-overlay" onClick={handleOverlayClick}></div>
          <div className="sermon-share-container expanded">
            <div className="sermon-share-header">
              <h3 className="sermon-share-title">Share This Sermon</h3>
              <button 
                className="share-close-button" 
                onClick={toggleShareOptions}
                aria-label="Close share options"
              >
                ×
              </button>
            </div>
            
            <div className="sermon-share-buttons">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="share-button whatsapp"
                aria-label="Share on WhatsApp"
                onClick={() => toast.success("Opening WhatsApp...", toastConfig)}
              >
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>
              
              <a 
                href={facebookUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="share-button facebook"
                aria-label="Share on Facebook"
                onClick={() => toast.success("Opening Facebook...", toastConfig)}
              >
                <FaFacebookF />
                <span>Facebook</span>
              </a>
              
              <a 
                href={emailUrl} 
                className="share-button email"
                aria-label="Share via Email"
                onClick={() => toast.success("Opening email client...", toastConfig)}
              >
                <FaEnvelope />
                <span>Email</span>
              </a>
              
              <button 
                onClick={handleInstagramShare}
                className="share-button instagram"
                aria-label="Share on Instagram"
              >
                <FaInstagram />
                <span>Instagram</span>
              </button>
              
              <a 
                href={twitterUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="share-button twitter"
                aria-label="Share on Twitter"
                onClick={() => toast.success("Opening Twitter...", toastConfig)}
              >
                <FaTwitter />
                <span>Twitter</span>
              </a>
              
              <button 
                onClick={copyToClipboard}
                className="share-button copy-link"
                aria-label="Copy Link"
              >
                <FaLink />
                <span>Copy Link</span>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ShareSermon;
