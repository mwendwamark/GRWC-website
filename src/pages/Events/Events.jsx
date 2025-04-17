import React from "react";
import "./Events.css";
import { NavLink } from "react-router-dom";
import { getImageUrl } from "../../Utils/apiConfig";
import { Helmet } from "react-helmet";
import { IoCalendarOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";

const Events = ({ events }) => {
  const eventsArray = Array.isArray(events) ? events : [];

  return (
    <>
      <Helmet>
        <title>Events | Gospel Revival Wave Church</title>
        <meta
          name="description"
          content="Stay up to date with upcoming church events at Gospel Revival Wave Church. Join us in worship, fellowship, and service!"
        />
        <meta
          property="og:title"
          content="Events | Gospel Revival Wave Church"
        />
        <meta
          property="og:description"
          content="Stay up to date with upcoming church events at Gospel Revival Wave Church. Join us in worship, fellowship, and service!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://grwc.vercel.app/events" />
        <link rel="canonical" href="https://grwc.vercel.app/events" />
      </Helmet>

      <div className="events-container">
        <header className="events-page-headers">
          <h2 className="events-page-big-header">
            You are all welcomed to participate in the church events!
          </h2>
        </header>

        <div className="events-list">
          {eventsArray.length === 0 ? (
            <p className="no-events">No upcoming events at this time.</p>
          ) : (
            eventsArray.map((event) => {
              let imageUrl = event.eventCoverImage?.url
                ? getImageUrl(event.eventCoverImage.url)
                : null;

              // Format date for display
              const eventDate = new Date(event.eventDate);
              const formattedDay = new Intl.DateTimeFormat("en-US", {
                weekday: "long",
              })
                .format(eventDate)
                .toUpperCase();
              const formattedTime = new Intl.DateTimeFormat("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              }).format(eventDate);
              const formattedDate = eventDate.toLocaleDateString("en-US", {
                month: "2-digit",
                day: "2-digit",
                year: "numeric",
              });

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
                      <div className="event-datetime-section">
                        <div className="event-date">
                          <IoCalendarOutline className="event-icon" />
                          <span className="event-day">{formattedDay}</span>
                          <span>{formattedDate}</span>
                        </div>

                        <div className="event-time">
                          <FaRegClock className="event-icon" />
                          <span>{formattedTime}</span>
                        </div>
                      </div>
                    </div>

                    <h2 className="events-title">{event.eventTitle}</h2>

                    <div className="event-summary">
                      {Array.isArray(event.eventSummary) ? (
                        event.eventSummary.map((paragraph, index) => (
                          <p key={index}>
                            {paragraph.children.map((child, childIndex) => (
                              <span key={childIndex}>{child.text}</span>
                            ))}
                          </p>
                        ))
                      ) : (
                        <p>
                          {event.eventSummary ||
                            "Lorem ipsum dolor sit amet consectetur adipiscing elit urna vitae ac vitae lacus ac proin ultricies."}
                        </p>
                      )}
                    </div>

                    <div className="events-btn">
                      <NavLink
                        to={`/church-events/${event.documentId}`}
                        className="event-card-link"
                      >
                        MORE INFORMATION
                      </NavLink>
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

export default Events;
