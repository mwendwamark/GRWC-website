import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Event.css";

// Helper function to render rich text content
const renderContent = (content) => {
  if (!content || !Array.isArray(content)) return null;

  return content.map((block, index) => {
    switch (block.type) {
      case "list":
        const ListTag = block.format === "ordered" ? "ol" : "ul";
        return (
          <ListTag key={index}>
            {block.children.map((item, itemIndex) => (
              <li key={itemIndex}>
                {item.children.map((text, textIndex) => (
                  <span
                    key={textIndex}
                    style={{ fontWeight: text.bold ? "bold" : "normal" }}
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
          <p key={index}>
            {block.children.map((text, textIndex) => (
              <span
                key={textIndex}
                style={{ fontWeight: text.bold ? "bold" : "normal" }}
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
          `http://localhost:1337/api/church-events/${id}?populate=*`
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
    return <div className="container section">Loading event details...</div>;
  if (error) return <div className="container section">Error: {error}</div>;
  if (!event) return <div className="container section">Event not found</div>;

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
    event.eventCoverImage&&
    event.eventCoverImage &&
    event.eventCoverImage.url
  ) {
    imageUrl = event.eventCoverImage.url;
  }

  return (
    <div className="container section event-detail-page">
      <h1 className="event-detail-title">{eventDetails.eventTitle}</h1>

      <div className="event-detail-meta">
        <span className="event-detail-date">
          Date: {new Date(eventDetails.eventDate).toLocaleDateString()}
        </span>
      </div>

      {imageUrl && (
        <div className="event-detail-image-container">
          <img
            src={`http://localhost:1337${imageUrl}`}
            alt={eventDetails.eventTitle}
            className="event-detail-image"
          />
        </div>
      )}

      <div className="event-detail-content">
        <h2>Event Details</h2>
        {renderContent(eventDetails.eventDetails)}
      </div>
    </div>
  );
};

export default Event;
