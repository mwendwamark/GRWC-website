import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Branches from "./pages/Branches/Branches";
import Sermons from "./pages/Sermons/Sermons";
import Sermon from "./pages/Sermon/Sermon";
import Ministries from "./pages/Ministries/Ministries";
import Events from "./pages/Events/Events";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import Give from "./pages/Give/Give";
import useFetch from "./Hooks/useFetch";
import Announcements from "./pages/Announcements/Announcements";
import Event from "./pages/Event/Event";
import Announcement from "./pages/Announcement/Announcement";
import { getFullApiUrl } from "./Utils/apiConfig";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({
      duration: 1000,      // Animation duration in ms
      once: true,          // Whether animation should happen only once
      easing: 'ease-out',  // Default easing for animations
      offset: 120,         // Offset (in px) from the original trigger point
      delay: 0,            // Default delay before animation starts
      mirror: false,       // Whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // Which position of the element regarding to window should trigger the animation
    });
  }, []);

  // Fetch announcements data using environment-based URLs
  const { 
    loading: announcementsLoading, 
    error: announcementsError, 
    data: announcementsData 
  } = useFetch(getFullApiUrl("api/announcements"));
  
  // Updated to fetch with the correct endpoint (with query parameters for populating media)
  const { 
    loading: eventsLoading, 
    error: eventsError, 
    data: eventsData 
  } = useFetch(getFullApiUrl("api/church-events?populate=*"));

  const { 
    loading: sermonsLoading, 
    error: sermonsError, 
    data: sermonsData 
  } = useFetch(getFullApiUrl("api/sermons?populate=*"));
  // Check if any data is still loading
  if (announcementsLoading || eventsLoading || sermonsLoading) {
    return <p className="loading-message">Loading...</p>;
  }

  // Display any errors
  if (announcementsError) {
    console.error("Error loading announcements:", announcementsError);
  }
  
  if (eventsError) {
    console.error("Error loading events:", eventsError);
  }

  console.log("Sermons data:", sermonsData);
  if (sermonsError) {
    console.error("Error loading sermons:", sermonsError);
  }


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/sermons" element={<Sermons sermons={sermonsData?.data} />} />
        <Route path="/sermons/:id" element={<Sermon />} />
        <Route path="/events" element={<Events events={eventsData?.data} />} />
        <Route path="/church-events/:id" element={<Event />} />
        <Route path="/announcements" element={<Announcements announcements={announcementsData?.data} />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/about" element={<About />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/donate" element={<Give />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;