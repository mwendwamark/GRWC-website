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
          <h2 className="small-header" data-aos="fade-down">SERVICES</h2>
          <h1 className="big-header" data-aos="fade-up" data-aos-delay="200">OUR SERVICES</h1>
        </header>

        <div className="home-services-contents container ">
          <div className="home-services-contents-left" data-aos="fade-right" data-aos-duration="1000">
            <header className="home-services-headers">
              <h3 className="home-services-small-header" data-aos="fade-up" data-aos-delay="100"> MAIN SERVICES</h3>
              <h2 className="home-services-big-header" data-aos="fade-up" data-aos-delay="200">JOIN US EVERY SUNDAY</h2>
            </header>
            <div className="service-order" data-aos="fade-up" data-aos-delay="300" data-aos-offset="50">
              <h3>
                First Service <span>(English Service)</span>
              </h3>
              <span data-aos="fade-left" data-aos-delay="400">
                <MdOutlineAccessAlarms /> <i>8:00 AM ~ 10:30 AM</i>
              </span>
              <p data-aos="fade-up" data-aos-delay="450">
                Join our powerful English Service Every Sunday. All are welcome.
              </p>
            </div>
            <div className="service-order" data-aos="fade-up" data-aos-delay="500" data-aos-offset="50">
              <h3>
                Second Service <span>(Swahili Service)</span>
              </h3>
              <span data-aos="fade-left" data-aos-delay="600">
                <MdOutlineAccessAlarms /> <i>11:00 AM ~ 1:00 PM</i>
              </span>
              <p data-aos="fade-up" data-aos-delay="650">
                Experience our vibrant Swahili Service and connect with the
                community.
              </p>
            </div>

            <div className="sermons-button" data-aos="zoom-in" data-aos-delay="700">
              <NavLink to="/sermons">View sermons</NavLink>
              <BsArrowUpRight style={{ color: "#fff" }} />
            </div>
          </div>

          <div className="home-services-image-right" data-aos="fade-left" data-aos-duration="1200" data-aos-offset="100">
            <img src={img1} alt="Church Services" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeServices;
