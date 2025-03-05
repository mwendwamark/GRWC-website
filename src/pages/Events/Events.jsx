import React from "react";
import "./Events.css";
import { NavLink } from "react-router-dom";

const Events = ({ events }) => {
  // Debug logging
  console.log("Events in component:", events);

  const eventsArray = Array.isArray(events) ? events : [];

  return (
    <div className="events-container container section">
      <h1 className="section-title">Upcoming Events</h1>

      {/* Events list */}
      <div className="events-list">
        {eventsArray.length === 0 ? (
          <p className="no-events">No upcoming events at this time.</p>
        ) : (
          eventsArray.map((event) => {
            // Debug logging for individual event
            console.log("Event data:", event);

            // Get image URL if it exists
            let imageUrl = null;
            if (event.eventCoverImage && event.eventCoverImage.url) {
              imageUrl = event.eventCoverImage.url;
            }

            return (
              <NavLink key={event.documentId} to={`/church-events/${event.documentId}`} className="event-card-link">
                <div className="event-card">
                  {imageUrl && (
                    <div className="event-image-container">
                      <img
                        src={`http://localhost:1337${imageUrl}`}
                        alt={event.eventTitle}
                        className="event-cover-image"
                      />
                    </div>
                  )}

                  <div className="event-info">
                    <h2 className="event-title">{event.eventTitle}</h2>
                    <div className="event-meta">
                      <span className="event-date">
                        {new Date(event.eventDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </NavLink>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Events;
