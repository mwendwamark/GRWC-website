import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/branches" element={<Branches />}></Route>
        <Route path="/sermons" element={<Sermons />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/ministries" element={<Ministries />}></Route>
        <Route path="/contact" element={<Contacts />}></Route>
        <Route path="/donate" element={<Give />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
