import React from "react";
import "./Events.css";
import { NavLink } from "react-router-dom";
import { getImageUrl } from "../../Utils/apiConfig";

const Events = ({ events }) => {
  // Debug logging
  console.log("Events in component:", events);

  const eventsArray = Array.isArray(events) ? events : [];

  return (
    <div className="events-container container ">
      <header className="events-page-headers container small-section">
        <h2 className="events-small-header">EVENTS</h2>
        <h1 className="events-page-big-header">UPCOMING EVENTS</h1>
      </header>

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
            if (
              event.eventCoverImage && 
              event.eventCoverImage.url
            ) {
              imageUrl = getImageUrl(event.eventCoverImage.url);
            }

            return (
              <div key={event.id} className="event-card">
                {imageUrl && (
                  <div className="event-image-container">
                    <img
                      src={imageUrl}
                      alt={event.eventTitle}
                      className="event-cover-image"
                    />
                  </div>
                )}

                <div className="event-info">
                  <div className="event-meta">
                    <span className="event-date">
                      {new Date(event.eventDate).toLocaleDateString()}
                    </span>
                  </div>
                  <h2 className="events-title">{event.eventTitle}</h2>
                  <div className="event-summary">
                    {/* Check if eventSummary is an array that can be mapped, otherwise render as string */}
                    {Array.isArray(event.eventSummary) ? (
                      event.eventSummary.map((paragraph, index) => (
                        <p key={index}>
                          {paragraph.children.map((child, childIndex) => (
                            <span key={childIndex}>{child.text}</span>
                          ))}
                        </p>
                      ))
                    ) : (
                      <p>{event.eventSummary}</p>
                    )}
                  </div>
                  <div className="events-btn">
                    <NavLink
                      to={`/church-events/${event.documentId}`}
                      className="event-card-link"
                    >
                      See more
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Events;