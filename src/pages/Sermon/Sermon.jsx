import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import "./Sermon.css";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import { BiBible } from "react-icons/bi";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { getFullApiUrl, getImageUrl } from "../../Utils/apiConfig";
import ShareSermon from "./ShareSermon"; // Import the new component
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

const renderContent = (content) => {
  if (!content || !Array.isArray(content)) return null;

  return content.map((block, index) => {
    switch (block.type) {
      case "list":
        const ListTag = block.format === "ordered" ? "ol" : "ul";
        return (
          <ListTag key={index} className="sermon-content-list">
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
          <p key={index} className="sermon-content-paragraph">
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

const Sermon = () => {
  const { id } = useParams();
  const [sermon, setSermon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(""); // Store current URL for sharing

  useEffect(() => {
    // Set current URL for sharing
    setCurrentUrl(window.location.href);

    const fetchSermon = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          getFullApiUrl(`api/sermons/${id}?populate=*`)
        );

        if (!response.ok) {
          throw new Error("Failed to fetch sermon details");
        }

        const sermonData = await response.json();
        setSermon(sermonData.data);
        console.log("Fetched sermon data:", sermonData.data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching sermon details:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchSermon();
    }
  }, [id]);

  // Function to handle sermon download
  const handleDownload = async (e) => {
    e.preventDefault();
    if (!videoUrl) return;

    try {
      setIsDownloading(true);

      // Fetch the file
      const response = await fetch(videoUrl);

      if (!response.ok) {
        throw new Error("Failed to download the sermon");
      }

      // Get the blob of the file
      const blob = await response.blob();

      // Create a URL for the blob
      const blobUrl = window.URL.createObjectURL(blob);

      // Create a temporary anchor element
      const downloadLink = document.createElement("a");
      downloadLink.href = blobUrl;

      // Set the filename for the download
      const filename = videoUrl.split("/").pop() || `sermon-${id}.mp4`;
      downloadLink.download = filename;

      // Append the link to the body
      document.body.appendChild(downloadLink);

      // Trigger the click event
      downloadLink.click();

      // Clean up
      document.body.removeChild(downloadLink);
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error("Error downloading sermon:", err);
      alert(
        "There was an error downloading the sermon. Please try again later."
      );
    } finally {
      setIsDownloading(false);
    }
  };

  if (loading)
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );

  if (error) return <div className="error-container">Error: {error}</div>;

  if (!sermon)
    return <div className="not-found-container">Sermon not found</div>;

  // Get sermon image URL if it exists
  let imageUrl = null;
  if (sermon.sermonCoverImage?.url) {
    imageUrl = getImageUrl(sermon.sermonCoverImage.url);
  }

  // Get preacher image URL if it exists
  let preacherImageUrl = null;
  if (sermon.preacherImage?.url) {
    preacherImageUrl = getImageUrl(sermon.preacherImage.url);
  }

  // Get video URL if it exists
  let videoUrl = null;
  if (
    sermon.sermonVideo &&
    sermon.sermonVideo.length > 0 &&
    sermon.sermonVideo[0]?.url
  ) {
    videoUrl = getImageUrl(sermon.sermonVideo[0].url);
  }

  // Format the date in a more readable way
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Get the day of the week from the date
  const getDayOfWeek = (dateString) => {
    const days = [
      "SUNDAY",
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
      "SATURDAY",
    ];
    const date = new Date(dateString);
    return days[date.getDay()];
  };

  // Format preached date
  const sermonDate = new Date(sermon.datePreached);
  const formattedDate = formatDate(sermon.datePreached);
  const dayOfWeek = getDayOfWeek(sermon.datePreached);

  return (
    <>
      <Helmet>
        <title>{sermon.sermonTitle} | Gospel Revival Wave Church</title>
        <meta
          name="description"
          content={sermon.sermonSummary || `Sermon: ${sermon.sermonTitle}`}
        />
        <meta property="og:title" content={sermon.sermonTitle} />
        <meta
          property="og:description"
          content={sermon.sermonSummary || `Listen to ${sermon.sermonTitle}`}
        />
        {imageUrl && <meta property="og:image" content={imageUrl} />}
      </Helmet>

      <div className="sermon-page container">
        <div className="sermon-navigation">
          <IoIosArrowRoundBack />
          <NavLink to="/sermons">Back to Sermons</NavLink>
        </div>

        <div className="sermon-hero sermon-section-bottom">
          <div className="sermon-hero-container">
            <div className="sermon-hero-overview">
              <div className="sermon-date-badge">
                <FaRegCalendarAlt />
                <span>
                  {formattedDate} | {dayOfWeek}
                </span>
              </div>
              <h1 className="sermon-title">{sermon.sermonTitle}</h1>

              {/* Display preacher info below sermon title */}
              {sermon.preacher && (
                <div className="sermon-preacher">
                  {preacherImageUrl && (
                    <div className="preacher-image-container">
                      <img
                        src={preacherImageUrl}
                        alt={sermon.preacher}
                        className="preacher-image"
                      />
                    </div>
                  )}
                  <div className="preacher-name">
                    <span>Preacher:</span> {sermon.preacher}
                  </div>
                </div>
              )}
            </div>

            <div className="sermon-hero-image">
              <img src={imageUrl} alt={sermon.sermonTitle} />
            </div>
          </div>
        </div>

        <div className="sermon-content-section small-section">
          <h2 className="sermon-section-heading">Watch Sermon</h2>
          {videoUrl && (
            <div className="sermon-video-container">
              <video className="sermon-video" controls poster={imageUrl}>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>

        {/* Share functionality is now handled by the button next to download */}

        <div className="sermon-content-layout">
          <div className="sermon-overview">
            <div className="sermon-overview-header">
              <h3>Sermon Details</h3>
            </div>
            <div className="sermon-overview-content">
              <div className="sermon-overview-item">
                <h3>Date Preached</h3>
                <div className="sermon-overview-display">
                  <FaRegCalendarAlt className="sermon-overview-icon" />
                  <span>
                    {new Intl.DateTimeFormat("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }).format(sermonDate)}
                  </span>
                </div>
              </div>
              {/* Add preacher section in sermon overview */}
              {sermon.preacher && (
                <div className="sermon-overview-item">
                  <h3>Preacher</h3>
                  <div className="sermon-overview-display sermon-preacher-overview">
                    {preacherImageUrl ? (
                      <img
                        src={preacherImageUrl}
                        alt={sermon.preacher}
                        className="sermon-overview-preacher-image"
                      />
                    ) : (
                      <FaUser className="sermon-overview-icon" />
                    )}
                    <span>{sermon.preacher}</span>
                  </div>
                </div>
              )}
              {sermon.bibleReference && (
                <div className="sermon-overview-item">
                  <h3>Bible Reference</h3>
                  <div className="sermon-overview-display">
                    <BiBible className="sermon-overview-icon" />
                    <span>{sermon.bibleReference}</span>
                  </div>
                </div>
              )}

              {sermon.sermonSummary && (
                <div className="sermon-overview-item">
                  <h3>Sermon Summary</h3>
                  <div className="sermon-summary-preview">
                    {sermon.sermonSummary}
                  </div>
                </div>
              )}
              {videoUrl && (
                <div className="sermon-action-buttons">
                  <button
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className="sermon-download-button"
                  >
                    {isDownloading ? "Downloading..." : "Download Sermon"}
                  </button>
                  <ShareSermon
                    sermon={sermon}
                    currentUrl={currentUrl}
                    showAsButton={true}
                    className="sermon-share-button"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sermon;