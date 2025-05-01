import React from "react";
import "./HomeServices.css";
import { NavLink } from "react-router-dom";
import { MdOutlineAccessAlarms } from "react-icons/md";
import { BsArrowUpRight } from "react-icons/bs";

import img1 from "../../../assets/services.jpg";

const HomeServices = () => {
  return (
    <>
      <section className="home-services-section section">
        <header className="history-headers container">
          <h2 className="small-header">SERVICES</h2>
          <h1 className="big-header">OUR SERVICES</h1>
        </header>

        <div className="home-services-contents container ">
          <div className="home-services-contents-left">
            <header className="home-services-headers">
              <h3 className="home-services-small-header"> MAIN SERVICES</h3>
              <h2 className="home-services-big-header">JOIN US EVERY SUNDAY</h2>
            </header>
            <div className="service-order">
              <h3>
                First Service <span>(English Service)</span>
              </h3>
              <span>
                <MdOutlineAccessAlarms /> <i>8:00 AM ~ 10:30 AM</i>
              </span>
              <p>
                Join our powerful English Service Every Sunday. All are welcome.
              </p>
            </div>
            <div className="service-order">
              <h3>
                Second Service <span>(Swahili Service)</span>
              </h3>
              <span>
                <MdOutlineAccessAlarms /> <i>11:00 AM ~ 1:00 PM</i>
              </span>
              <p>
                Experience our vibrant Swahili Service and connect with the
                community.
              </p>
            </div>

            <div className="sermons-button">
              <NavLink to="/sermons">View sermons</NavLink>
              <BsArrowUpRight style={{ color: "#fff" }} />
            </div>
          </div>

          <div className="home-services-image-right">
            <img src={img1} alt="Church Services" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeServices;
