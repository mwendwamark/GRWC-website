import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Event.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { getFullApiUrl, getImageUrl } from "../../Utils/apiConfig";

// Helper function to render rich text content
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
                {item.children.map((text, textIndex) => (
                  <span
                    key={textIndex}
                    className={text.bold ? "bold-text" : ""}
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
            {block.children.map((text, textIndex) => (
              <span
                key={textIndex}
                className={text.bold ? "bold-text" : ""}
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
    return <div className="loading-container"><div className="loading-spinner"></div></div>;
  if (error) return <div className="error-container">Error: {error}</div>;
  if (!event) return <div className="not-found-container">Event not found</div>;

  // Convert the fetched data structure to match your existing format
  const eventDetails = {
    ...event,
    id: event.id,
  };

  // Get image URL if it exists
  let imageUrl = null;
  if (
    event &&
    event.eventCoverImage &&
    event.eventCoverImage.url
  ) {
    imageUrl = getImageUrl(event.eventCoverImage.url);
  }

  // Format the date in a more readable way
  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="event-page">
      <div className="event-hero" style={{backgroundImage: imageUrl ? `url(${imageUrl})` : 'none'}}>
        <div className="event-hero-overlay">
          <div className="event-hero-content">
            <h1 className="event-title">{eventDetails.eventTitle}</h1>
            <div className="event-date-badge">
              <span className="event-date-icon"><FaRegCalendarAlt /></span>
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
          
          <div className="event-sidebar">
            <div className="event-info-card">
              <div className="event-info-item">
                <h3>When</h3>
                <p>{formatDate(eventDetails.eventDate)}</p>
              </div>
              
              {eventDetails.eventLocation && (
                <div className="event-info-item">
                  <h3>Where</h3>
                  <p>{eventDetails.eventLocation}</p>
                </div>
              )}
              
              <button className="event-register-button">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;