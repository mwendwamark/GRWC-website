import React from "react";
import "./HomeEvent.css";
import { NavLink } from "react-router-dom";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
const HomeEvent = () => {
  return (
    <>
      <section className="events-section section">
        <header className="events-headers container">
          <h2 className="small-header" data-aos="fade-down" data-aos-duration="800">EVENTS</h2>
          <h1 className="big-header" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">UPCOMING EVENTS</h1>
        </header>
        <div className="events-contents" data-aos="zoom-in" data-aos-duration="1000">
          <p data-aos="fade-up" data-aos-delay="300">Click the button to show the upcoming events</p>
          <NavLink to="/events" className="btn btn-primary" data-aos="flip-up" data-aos-delay="500">
            <p>Upcoming events</p> <LiaLongArrowAltRightSolid />
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default HomeEvent;
