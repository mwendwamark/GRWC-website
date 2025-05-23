import React from "react";
import "./Announcements.css";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

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

      case "paragraph": // Changed from "text" to "paragraph" to match Strapi's type
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

const Announcements = ({ announcements }) => {
  const eventsArray = Array.isArray(announcements) ? announcements : [];

  return (
    <>
      <Helmet>
        <title>Announcements | Gospel Revival Wave Church</title>
        <meta name="description" content="Read the latest announcements and updates from Gospel Revival Wave Church." />
        <meta property="og:title" content="Announcements | Gospel Revival Wave Church" />
        <meta property="og:description" content="Read the latest announcements and updates from Gospel Revival Wave Church." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://grwc.vercel.app/announcements" />
        <link rel="canonical" href="https://grwc.vercel.app/announcements" />
      </Helmet>
      <NavLink to={'/announcement'} className="events-container container section">
        {/* Announcements list */}
        <div className="events-list">
          {eventsArray.map((announcement) => (
            <div key={announcement.id} className="announcement-card">
              <h2 className="announcement-title">{announcement.announcementTitle}</h2>
              <div className="announcement-meta">
                <span className="announcement-date">
                  {new Date(announcement.announcementDate).toLocaleDateString()}
                </span>
                <span className="announcement-author">by {announcement.author}</span>
              </div>
              <div className="announcement-content">
                {renderContent(announcement.announcementContent)}
              </div>
            </div>
          ))}
        </div>
      </NavLink>
    </>
  );
};

export default Announcements;