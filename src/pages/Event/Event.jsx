import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Event.css";
import {
  FaRegCalendarAlt,
  FaMapMarkerAlt,
  FaUser,
  FaRegClock,
} from "react-icons/fa";
import { Helmet } from "react-helmet"; // Import React Helmet
import { getFullApiUrl, getImageUrl } from "../../Utils/apiConfig";

const renderContent = (content) => {
  if (!content || !Array.isArray(content)) return null;

  return content.map((block, index) => {
    switch (block.type) {
      case "list":
        const ListTag = block.format === "ordered" ? "ol" : "ul";
        return (
          <ListTag key={index} className="event-content-list">
            {block.children.map((item, itemIndex) => (
              <li key={itemIndex}>
                {item.children &&
                  item.children.map((text, textIndex) => (
                    <span
                      key={textIndex}
                      className={text.bold ? "bold-text" : ""}
                      style={text.bold ? { fontWeight: 700 } : {}}
                    >
                      {text.text}
                    </span>
                  ))}
              </li>
            ))}
          </ListTag>
        );

      case "paragraph":
        return (
          <p key={index} className="event-content-paragraph">
            {block.children &&
              block.children.map((text, textIndex) => (
                <span
                  key={textIndex}
                  className={text.bold ? "bold-text" : ""}
                  style={text.bold ? { fontWeight: 700 } : {}}
                >
                  {text.text}
                </span>
              ))}
          </p>
        );

      default:
        return null;
    }
  });
};

const Event = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          getFullApiUrl(`api/church-events/${id}?populate=*`)
        );

        if (!response.ok) {
          throw new Error("Failed to fetch event details");
        }

        const eventData = await response.json();
        setEvent(eventData.data);
        console.log("Fetched event data:", eventData.data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching event details:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchEvent();
    }
  }, [id]);

  if (loading)
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  if (error) return <div className="error-container">Error: {error}</div>;
  if (!event) return <div className="not-found-container">Event not found</div>;

  // Convert the fetched data structure to match your existing format
  const eventDetails = {
    ...event,
    id: event.id,
  };

  // Get image URL if it exists
  let imageUrl = null;
  if (event && event.eventCoverImage && event.eventCoverImage.url) {
    imageUrl = getImageUrl(event.eventCoverImage.url);
  }

  // Get event leader image if it exists
  let leaderImageUrl = null;
  if (event && event.eventLeaderImage && event.eventLeaderImage.url) {
    leaderImageUrl = getImageUrl(event.eventLeaderImage.url);
  }

  // Format the date in a more readable way
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Extract day of the week and time
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

  return (
    <>
      <Helmet>
        <title>{eventDetails.eventTitle} | Gospel Revival Wave Church</title>
        <meta
          name="description"
          content={
            eventDetails.eventSummary ||
            `Details about ${eventDetails.eventTitle}`
          }
        />
        {/* You can add more meta tags as needed */}
        <meta property="og:title" content={eventDetails.eventTitle} />
        <meta
          property="og:description"
          content={
            eventDetails.eventSummary ||
            `Join us for ${eventDetails.eventTitle}`
          }
        />
        {imageUrl && <meta property="og:image" content={imageUrl} />}
      </Helmet>{" "}
      <div className="event-page small-section">
        <div
          className="event-hero"
          style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : "none" }}
        >
          <div className="event-hero-overlay">
            <div className="event-hero-content">
              <h1 className="event-title">{eventDetails.eventTitle}</h1>
              {eventDetails.eventSummary && (
                <p className="event-summary-text">
                  {eventDetails.eventSummary}
                </p>
              )}
              <div className="event-date-badge">
                <span className="event-date-icon">
                  <FaRegCalendarAlt />
                </span>
                <span>{formatDate(eventDetails.eventDate)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="event-content-wrapper">
            <div className="event-content-card">
              <h2 className="event-details-heading">Event Details</h2>
              <div className="event-details-content">
                {renderContent(eventDetails.eventDetails)}
              </div>
            </div>
            <div className="event-sidebar container">
              <div className="event-info-card">
                <div className="event-info-item">
                  <h3>Day</h3>
                  <div className="event-day-display">
                    <FaRegCalendarAlt className="event-info-icon" />
                    <span>
                      {new Intl.DateTimeFormat("en-US", {
                        weekday: "long",
                      }).format(eventDate)}
                    </span>
                  </div>
                </div>

                <div className="event-info-item">
                  <h3>Hour</h3>
                  <div className="event-time-display">
                    <FaRegClock className="event-info-icon" />
                    <span>{formattedTime}</span>
                  </div>
                </div>

                <div className="event-info-item">
                  <h3>Location</h3>
                  <div className="event-location-display">
                    <FaMapMarkerAlt className="event-info-icon" />
                    <span>{eventDetails.eventLocation}</span>
                  </div>
                </div>

                {eventDetails.eventLeader && (
                  <div className="event-info-item">
                    <h3>Co-ordinator</h3>
                    <div className="event-leader-container">
                      {leaderImageUrl ? (
                        <img
                          src={leaderImageUrl}
                          alt={eventDetails.eventLeader}
                          className="event-leader-image"
                        />
                      ) : (
                        <div className="event-leader-placeholder">
                          <FaUser />
                        </div>
                      )}
                      <span>{eventDetails.eventLeader}</span>
                    </div>
                  </div>
                )}

                <button className="event-register-button">Register Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
