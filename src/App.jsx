// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Navbar from "./components/Navbar/Navbar";
// import Home from "./pages/Home/Home";
// import Footer from "./components/Footer/Footer";
// import Branches from "./pages/Branches/Branches";
// import Sermons from "./pages/Sermons/Sermons";
// import Ministries from "./pages/Ministries/Ministries";
// import Events from "./pages/Events/Events";
// import About from "./pages/About/About";
// import Contacts from "./pages/Contacts/Contacts";
// import Give from "./pages/Give/Give";
// import useFetch from "./Hooks/useFetch";
// import Announcements from "./pages/Announcements/Announcements";
// import Event from "./pages/Event/Event";
// import Announcement from "./pages/Announcement/Announcement";

// const App = () => {
//   // Fetch announcements data
//   const { 
//     loading: announcementsLoading, 
//     error: announcementsError, 
//     data: announcementsData 
//   } = useFetch("http://localhost:1337/api/announcements");
  
//   // Updated to fetch with the correct endpoint (with query parameters for populating media)
//   const { 
//     loading: eventsLoading, 
//     error: eventsError, 
//     data: eventsData 
//   } = useFetch("http://localhost:1337/api/church-events?populate=*");

//   // Check if any data is still loading
//   if (announcementsLoading || eventsLoading) {
//     return <p className="loading-message">Loading...</p>;
//   }

//   // Display any errors
//   if (announcementsError) {
//     console.error("Error loading announcements:", announcementsError);
//   }
  
//   if (eventsError) {
//     console.error("Error loading events:", eventsError);
//   }

//   console.log("Events data:", eventsData);

//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/branches" element={<Branches />} />
//         <Route path="/sermons" element={<Sermons />} />
//         <Route path="/events" element={<Events events={eventsData?.data} />} />
//         <Route path="/church-events/:id" element={<Event events={eventsData?.data}  />} />
//         <Route path="/announcements" element={<Announcements announcements={announcementsData?.data} />} />
//         <Route path="/announcement" element={<Announcement />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/ministries" element={<Ministries />} />
//         <Route path="/contact" element={<Contacts />} />
//         <Route path="/donate" element={<Give />} />
//       </Routes>
//       <Footer />
//     </>
//   );
// };

// export default App;
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Branches from "./pages/Branches/Branches";
import Sermons from "./pages/Sermons/Sermons";
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

  // Check if any data is still loading
  if (announcementsLoading || eventsLoading) {
    return <p className="loading-message">Loading...</p>;
  }

  // Display any errors
  if (announcementsError) {
    console.error("Error loading announcements:", announcementsError);
  }
  
  if (eventsError) {
    console.error("Error loading events:", eventsError);
  }

  console.log("Events data:", eventsData);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/sermons" element={<Sermons />} />
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