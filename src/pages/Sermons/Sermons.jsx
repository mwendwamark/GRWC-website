import React from "react";
import "./Sermons.css";
import { getImageUrl } from "../../Utils/apiConfig";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import { IoCalendarOutline } from "react-icons/io5";
import { BiBible } from "react-icons/bi";
import PropTypes from "prop-types";

const Sermons = ({ sermons }) => {
  const sermonsArray = Array.isArray(sermons) ? sermons : [];

  return (
    <>
      <Helmet>
        <title>Sermons | Gospel Revival Wave Church</title>
        <meta
          name="description"
          content="Listen to our sermons and messages to grow in faith at Gospel Revival Wave Church."
        />
        <meta
          property="og:title"
          content="Sermons | Gospel Revival Wave Church"
        />
        <meta
          property="og:description"
          content="Listen to our sermons and messages to grow in faith at Gospel Revival Wave Church."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://grwc.vercel.app/sermons" />
        <link rel="canonical" href="https://grwc.vercel.app/sermons" />
      </Helmet>

      <div className="sermons-container container">
                <header className="sermons-page-headers">
          <h1 className="sermons-page-big-header">
            Listen to our messages and grow in your faith
          </h1>
        </header>

        <div className="sermons-list">
          {sermonsArray.length === 0 ? (
            <p className="no-sermons">No sermons available at this time.</p>
          ) : (
            sermonsArray.map((sermon) => {
              // Access image URL directly from sermonCoverImage
              let imageUrl = sermon.sermonCoverImage?.url
                ? getImageUrl(sermon.sermonCoverImage.url)
                : null;

              // Format date for display
              const sermonDate = new Date(sermon.datePreached);
              const formattedDate = sermonDate.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              });

              return (
                <div className="sermon-info-container">
                  <div key={sermon.id} className="sermon-card">
                    {imageUrl && (
                      <div className="sermon-image-container">
                        <img
                          src={imageUrl}
                          alt={sermon.sermonTitle}
                          className="sermon-cover-image"
                        />
                      </div>
                    )}

                    <div className="sermon-info">
                      <div className="sermon-meta">
                        <div className="sermon-date">
                          <IoCalendarOutline className="sermon-icon" />
                          <span>{formattedDate}</span>
                        </div>
                        {sermon.bibleReference && (
                          <div className="sermon-reference">
                            <BiBible className="sermon-icon" />
                            <span>{sermon.bibleReference}</span>
                          </div>
                        )}
                      </div>

                      <h2 className="sermon-title">{sermon.sermonTitle}</h2>

                      <div className="sermon-summary">
                        <p>{sermon.sermonSummary}</p>
                      </div>

                      <div className="sermon-actions">
                        <NavLink
                          to={`/sermons/${sermon.documentId}`}
                          className="sermon-card-link"
                        >
                          VIEW SERMON
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

Sermons.propTypes = {
  sermons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      sermonTitle: PropTypes.string.isRequired,
      datePreached: PropTypes.string.isRequired,
      sermonCoverImage: PropTypes.object,
      sermonSummary: PropTypes.string,
      bibleReference: PropTypes.string,
      sermonVideo: PropTypes.array,
    })
  ),
};

export default Sermons;
