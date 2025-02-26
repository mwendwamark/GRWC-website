
// import React from "react";
// import "./Events.css";
// import image from "../../assets/constructions.jpeg";

// // Helper function to render rich text content
// const renderContent = (content) => {
//   return content.map((block, index) => {
//     switch (block.type) {
//       case "list":
//         const ListTag = block.format === "ordered" ? "ol" : "ul";
//         return (
//           <ListTag key={index}>
//             {block.children.map((item, itemIndex) => (
//               <li key={itemIndex}>
//                 {item.children.map((text, textIndex) => (
//                   <span key={textIndex} style={{ fontWeight: text.bold ? "bold" : "normal" }}>
//                     {text.text}
//                   </span>
//                 ))}
//               </li>
//             ))}
//           </ListTag>
//         );

//       case "text":
//         return (
//           <p key={index} style={{ fontWeight: block.bold ? "bold" : "normal" }}>
//             {block.text}
//           </p>
//         );

//       default:
//         return null;
//     }
//   });
// };

// const Events = ({ events }) => {
//   const eventsArray = Array.isArray(events) ? events : [];

//   return (
//     <div className="events-container container section">
//       {/* Construction notice */}
//       {/* <div className="container construction-div section">
//         <h1>Page under construction</h1>
//         <img src={image} alt="Under construction" className="construction-img" />
//       </div> */}

//       {/* Events list */}
//       <div className="events-list">
//         {eventsArray.map((event) => (
//           <div key={event.id} className="event-card">
//             <h2 className="event-title">{event.announcementTitle}</h2>
//             <div className="event-meta">
//               <span className="event-date">
//                 {new Date(event.announcementDate).toLocaleDateString()}
//               </span>
//               <span className="event-author">by {event.author}</span>
//             </div>
//             <div className="event-content">
//               {renderContent(event.announcementContent)}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Events;

import React from "react";
import "./Events.css";
import image from "../../assets/constructions.jpeg";

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

const Events = ({ events }) => {
  const eventsArray = Array.isArray(events) ? events : [];

  return (
    <div className="events-container container section">
      {/* Events list */}
      <div className="events-list">
        {eventsArray.map((event) => (
          <div key={event.id} className="event-card">
            <h2 className="event-title">{event.announcementTitle}</h2>
            <div className="event-meta">
              <span className="event-date">
                {new Date(event.announcementDate).toLocaleDateString()}
              </span>
              <span className="event-author">by {event.author}</span>
            </div>
            <div className="event-content">
              {renderContent(event.announcementContent)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
