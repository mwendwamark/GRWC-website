import React from "react";
import "./HomeHistory.css";
import { NavLink } from "react-router-dom";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import img from "../../../assets/HeroImages/image3.jpg";


import "react-toastify/dist/ReactToastify.css";
const HomeHistory = () => {
  return (
    <>
      <section className="church-history-section container section">
        <header className="history-headers">
          <h2 className="small-header">About us</h2>
          <h1 className="big-header">Get to know us</h1>
        </header>

        <div className="church-history-contents">
          <div className="church-history-image-container">
            <img src={img} alt="History of Gospel Revival Wave" />
          </div>

          <div className="church-history-texts">
            <h3>History of gospel revival wave</h3>
            <p>
              Gospel Revival Wave Church, founded in 1999, began as a small
              gathering of faithful believers in Kenya, committed to spreading
              hope, healing, and transformation. Over the years, it has grown
              into a thriving community rooted in faith and service to God.
            </p>
            <p>
              In its early days, the church operated in modest settings but
              steadily expanded under the leadership of Bishop Jesse Ireri James
              and a dedicated team. Through ministries like youth outreach,
              community service, and vibrant worship, the church has touched
              lives across generations.
            </p>
            <p>
              Today, Gospel Revival Wave Church inspires unity and faith,
              encouraging individuals to live out God’s love. With a focus on
              spiritual growth and community transformation, the church
              continues to embrace the future with faith and purpose.
            </p>

            <NavLink to="/about" className="read-more-btn">
              Read more <LiaLongArrowAltRightSolid className="purple-icon" />
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHistory;
