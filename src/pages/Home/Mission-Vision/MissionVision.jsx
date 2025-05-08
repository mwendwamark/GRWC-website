import React from "react";
import "./MissionVision.css";
import { FaRegLightbulb } from "react-icons/fa";
import { MdTrackChanges } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';

const MissionVision = () => {
  return (
    <>
      <section className="mission-and-vision container section">
        <header className="mission-and-vision-headers" data-aos="fade-down" data-aos-duration="800">
          <h2 className="small-header-h3">OUR MISSION & VISION</h2>
        </header>
        <div className="mission-and-vision-contents">
          <div className="church-mission" data-aos="flip-left" data-aos-duration="1200" data-aos-easing="ease-out-cubic">
            <header className="church-mission-header">
              <h2>Church Mission</h2>{" "}
              <MdTrackChanges className="mission-and-vision-icon" data-aos="zoom-in" data-aos-delay="300" />
            </header>
            <div className="church-mission-text" data-aos="fade-up" data-aos-delay="200">
              “To spread the love and truth of Jesus Christ, fostering a
              community where every individual can experience spiritual growth,
              transformation, and a renewed purpose in life. “
            </div>
          </div>

          <div className="church-vision" data-aos="flip-right" data-aos-duration="1200" data-aos-easing="ease-out-cubic" data-aos-delay="300">
            <header className="church-vision-header">
              <h2>Church Vision</h2>
              <FaRegLightbulb className="mission-and-vision-icon" data-aos="zoom-in" data-aos-delay="600" />
            </header>
            <div className="church-vision-text" data-aos="fade-up" data-aos-delay="500">
              “To be a light in Kenya and beyond, empowering individuals and
              families to live out their faith boldly, impacting communities
              with compassion, and creating lasting change through God’s love.“
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionVision;
