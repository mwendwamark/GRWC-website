import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        {/* Logo */}
        <NavLink to="/" className="navbar-logo">
          <img src={logo} alt="Logo" />
        </NavLink>

        {/* Navigation Links */}
        <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <NavLink to="/" onClick={closeMenu} className="nav-item">
            Home
          </NavLink>
          <NavLink to="/about" onClick={closeMenu} className="nav-item">
            About Us
          </NavLink>
          <NavLink to="/ministries" onClick={closeMenu} className="nav-item">
            Ministries
          </NavLink>
          <NavLink to="/sermons" onClick={closeMenu} className="nav-item">
            Sermons
          </NavLink>
          <NavLink to="/events" onClick={closeMenu} className="nav-item">
            Events
          </NavLink>
          <NavLink to="/branches" onClick={closeMenu} className="nav-item">
            Branches
          </NavLink>
          {/* <NavLink to="/gallery" onClick={closeMenu} className="nav-item">
            Gallery
          </NavLink> */}
          {/* <NavLink
            to="/announcements"
            onClick={closeMenu}
            className="nav-item"
            >Announcements</NavLink> */}
          <div className="nav-right-side hide-on-large">
            {/* Add Buttons Here for Small Screens */}
            <NavLink to="/donate" onClick={closeMenu} className="nav-item">
              Give
            </NavLink>
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className="nav-item contact-button"
            >
              Contact Us
            </NavLink>
          </div>
        </div>

        <div className="nav-right-side hide-on-small">
          <NavLink to="/donate" onClick={closeMenu} className="nav-item">
            Give
          </NavLink>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className="nav-item contact-button"
          >
            Contact Us
          </NavLink>
        </div>

        {/* Menu Icon */}
        <div className="navbar-menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes style={{ color: "black" }} /> : <FaBars />}
        </div>
      </div>

      <div className="navbar-line"></div>
    </nav>
  );
};

export default Navbar;
