import React from "react";
import "./HomeEvent.css";
import { NavLink } from "react-router-dom";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
const HomeEvent = () => {
  return (
    <>
      <section className="events-section section">
        <header className="events-headers container">
          <h2 className="small-header">EVENTS</h2>
          <h1 className="big-header">UPCOMING EVENTS</h1>
        </header>
        <div className="events-contents">
          <p>Click the button to show the upcoming events</p>
          <NavLink to="/events">
            <p>Upcoming events</p> <LiaLongArrowAltRightSolid />
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default HomeEvent;
