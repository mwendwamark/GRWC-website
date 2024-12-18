import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import logo from "../../assets/logo.png";
import mpesa from "../../assets/mpesa.png";

const Footer = () => {
  return (
    <>
      <section className="footer-section section">
        <footer className="footer container">
          <div className="left-footer">
            <div className="left-footer-header">
              <img src={logo} alt="" />
              <h1>GOSPEL REVIVAL WAVE CHURCH</h1>
            </div>

            <div className="left-footer-text">
              <p>
                {" "}
                Welcome to our Church Where EveryBody is Valuable. Here the Lord
                God will Minister to you. Join us at Gospel Revival Wave as we
                strive to serve God and serve our community.
              </p>
            </div>

            <div className="left-footer-btn">
              <NavLink to="/contact"> Join us</NavLink>
            </div>
          </div>
          <div className="center-footer">
            <div className="footer-links">
              <div className="footer-links-title">
                <h3>Pages</h3>
              </div>
              <div className="f-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About us</NavLink>
                <NavLink to="/ministries">Ministries</NavLink>
                <NavLink to="/sermons">Sermons</NavLink>
                <NavLink to="/events">Events</NavLink>
                <NavLink to="/branches">Branches</NavLink>
                <NavLink to="/gallery">Gallery</NavLink>
              </div>
            </div>
          </div>

          <div className="give-footer">
            <div className="give-footer-header">
              <h3>Give</h3>
            </div>
            <div className="give-footer-info">
              <img src={mpesa} alt="" />
              <p>Paybill No: <span> 400222</span></p>
              <p>Account No: <span> 162929#tithe</span></p>
            </div>
          </div>
          <div className="right-footer">
            <div className="right-footer-header">
              <h3>Get in Touch</h3>
            </div>
            <div className="phone-email-location">
              <div className="footer-location">
                <GrLocation className="right-footer-icon" /> <p>Bishop Ireri Road, opposite Murema Primary School</p>
              </div>
              <div className="footer-email">
                <CiMail className="right-footer-icon" /> <p>gospelrevivalwavechurch@yahoo.com</p>
              </div>
              <div className="footer-phone">
                <MdOutlinePhone className="right-footer-icon" /> <p>+254726 863953</p>
              </div>
            </div>
            <div className="social-links">
              <NavLink to="">
                <FaFacebook  className="social-icons"/>
              </NavLink>
              <NavLink to="">
                <BsInstagram className="social-icons" />
              </NavLink>
              <NavLink to="">
                <FaTiktok  className="social-icons"/>
              </NavLink>
              <NavLink to="">
                <FaYoutube  className="social-icons"/>
              </NavLink>
            </div>
          </div>

          {/* Rights Reserved Section */}
        </footer>{" "}
        <div className="footer-bottom container">
          <hr className="footer-line" />
          <p className="footer-rights">
            © {new Date().getFullYear()} Gospel Revival Wave Church. All Rights
            Reserved.
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
