import React from "react";
import "./Events.css";
import { NavLink } from "react-router-dom";

const Events = ({ events }) => {
  // Debug logging
  console.log("Events in component:", events);

  const eventsArray = Array.isArray(events) ? events : [];

  return (
    <div className="events-container container ">
      {/* <h1 className="section-title">Upcoming Events</h1> */}
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
            if (event.eventCoverImage && event.eventCoverImage.url) {
              imageUrl = event.eventCoverImage.url;
            }

            return (
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
                  {" "}
                  <div className="event-meta">
                    <span className="event-date">
                      {new Date(event.eventDate).toLocaleDateString()}
                    </span>
                  </div>
                  <h2 className="events-title">{event.eventTitle}</h2>
                  {/* <div className="event-summary">{event.eventSummary.children.text}</div> */}
                  <div className="event-summary">
                    {event.eventSummary?.map((paragraph, index) => (
                      <p key={index}>
                        {paragraph.children.map((child, childIndex) => (
                          <span key={childIndex}>{child.text}</span>
                        ))}
                      </p>
                    ))}
                  </div>
                  <div className="events-btn">
                    <NavLink
                      key={event.documentId}
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
