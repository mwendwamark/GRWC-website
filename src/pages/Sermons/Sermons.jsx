import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import { getFullApiUrl, getImageUrl } from "../../Utils/apiConfig";
import "./Sermons.css";

const Sermons = () => {
  const [sermons, setSermons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter states
  const [selectedSeries, setSelectedSeries] = useState("");
  const [selectedBook, setSelectedBook] = useState("");
  const [selectedPreacher, setSelectedPreacher] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  
  // Available filter options (to be populated from API data)
  const [filterOptions, setFilterOptions] = useState({
    series: [],
    books: [],
    preachers: [],
    formats: [],
    years: []
  });

  useEffect(() => {
    const fetchSermons = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          getFullApiUrl("api/sermons?populate=*&sort=datePreached:desc")
        );

        if (!response.ok) {
          throw new Error("Failed to fetch sermons");
        }

        const data = await response.json();
        setSermons(data.data || []);
        
        // Extract filter options from sermons data
        if (data.data && data.data.length > 0) {
          const series = [...new Set(data.data.map(sermon => sermon.series).filter(Boolean))];
          const books = [...new Set(data.data.map(sermon => {
            const match = sermon.bibleReference?.match(/^(\d*\s*[A-Za-z]+)/);
            return match ? match[0].trim() : null;
          }).filter(Boolean))];
          const preachers = [...new Set(data.data.map(sermon => sermon.preacher).filter(Boolean))];
          const formats = [...new Set(data.data.map(sermon => sermon.format).filter(Boolean))];
          const years = [...new Set(data.data.map(sermon => 
            new Date(sermon.datePreached).getFullYear()
          ).filter(Boolean))].sort((a, b) => b - a); // Sort years descending
          
          setFilterOptions({
            series,
            books,
            preachers,
            formats,
            years
          });
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching sermons:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSermons();
  }, []);

  // Format the date nicely
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Get day of week
  const getDayOfWeek = (dateString) => {
    const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    const date = new Date(dateString);
    return days[date.getDay()];
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedSeries("");
    setSelectedBook("");
    setSelectedPreacher("");
    setSelectedFormat("");
    setSelectedYear("");
  };

  // Filter sermons based on search and filter criteria
  const filteredSermons = sermons.filter(sermon => {
    // Search term filter
    const searchMatch = sermon.sermonTitle.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Other filters
    const seriesMatch = selectedSeries ? sermon.series === selectedSeries : true;
    const bookMatch = selectedBook ? sermon.bibleReference?.includes(selectedBook) : true;
    const preacherMatch = selectedPreacher ? sermon.preacher === selectedPreacher : true;
    const formatMatch = selectedFormat ? sermon.format === selectedFormat : true;
    const yearMatch = selectedYear ? 
      new Date(sermon.datePreached).getFullYear() === parseInt(selectedYear) : true;
    
    return searchMatch && seriesMatch && bookMatch && preacherMatch && formatMatch && yearMatch;
  });

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (error) {
    return <div className="error-container">Error: {error}</div>;
  }

  return (
    <div className="sermons-page">
      <div className="sermons-container">
        <h1 className="sermons-title">Weekly Sermons</h1>
        
        <div className="sermons-filters">
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="SEARCH"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="sermons-search"
            />
          </div>
          
          <div className="filter-dropdowns">
            <div className="filter-dropdown">
              <select 
                value={selectedSeries} 
                onChange={(e) => setSelectedSeries(e.target.value)}
                className="filter-select"
              >
                <option value="">SERIES</option>
                {filterOptions.series.map((series, index) => (
                  <option key={index} value={series}>{series}</option>
                ))}
              </select>
            </div>
            
            <div className="filter-dropdown">
              <select 
                value={selectedBook} 
                onChange={(e) => setSelectedBook(e.target.value)}
                className="filter-select"
              >
                <option value="">BOOK</option>
                {filterOptions.books.map((book, index) => (
                  <option key={index} value={book}>{book}</option>
                ))}
              </select>
            </div>
            
            <div className="filter-dropdown">
              <select 
                value={selectedPreacher} 
                onChange={(e) => setSelectedPreacher(e.target.value)}
                className="filter-select"
              >
                <option value="">PREACHER</option>
                {filterOptions.preachers.map((preacher, index) => (
                  <option key={index} value={preacher}>{preacher}</option>
                ))}
              </select>
            </div>
            
            <div className="filter-dropdown">
              <select 
                value={selectedFormat} 
                onChange={(e) => setSelectedFormat(e.target.value)}
                className="filter-select"
              >
                <option value="">FORMAT</option>
                {filterOptions.formats.map((format, index) => (
                  <option key={index} value={format}>{format}</option>
                ))}
              </select>
            </div>
            
            <div className="filter-dropdown">
              <select 
                value={selectedYear} 
                onChange={(e) => setSelectedYear(e.target.value)}
                className="filter-select"
              >
                <option value="">YEAR</option>
                {filterOptions.years.map((year, index) => (
                  <option key={index} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        <div className="sermons-results">
          <div className="sermons-count">
            Showing {filteredSermons.length} out of {sermons.length}
            {filteredSermons.length < sermons.length && (
              <button onClick={resetFilters} className="reset-filters">                
                Reset Filters
              </button>
            )}
          </div>
        </div>
        
        <div className="sermons-grid">
          {filteredSermons.map((sermon) => {
            // Get sermon image URL if it exists
            let imageUrl = null;
            if (sermon.sermonCoverImage?.url) {
              imageUrl = getImageUrl(sermon.sermonCoverImage.url);
            }
            
            // Get video type badge
            const videoType = sermon.sermonVideo && sermon.sermonVideo.length > 0 ? "VIDEO" : null;
            
            return (
              <NavLink 
                to={`/sermons/${sermon.documentId}`} 
                key={sermon.documentId} 
                className="sermon-card"
                aria-label="View sermon details"
              >
                <div className="sermon-image">
                  {imageUrl ? (
                    <img src={imageUrl} alt={sermon.sermonTitle} />
                  ) : (
                    <div className="placeholder-image"></div>
                  )}
                  {videoType && <div className="sermon-badge">{videoType}</div>}
                </div>
                
                <div className="sermon-details">
                  <div className="sermon-date">
                    {sermon.datePreached && (
                      <>
                        <span className="date-details">{formatDate(sermon.datePreached)}</span>
                        <span className="day-of-week">{getDayOfWeek(sermon.datePreached)}</span>
                      </>
                    )}
                  </div>
                  
                  <h3 className="sermons-title">{sermon.sermonTitle}</h3>
                  
                  {sermon.bibleReference && (
                    <div className="sermon-reference">
                      Reference: {sermon.bibleReference}
                    </div>
                  )}
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sermons;