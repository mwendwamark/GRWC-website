import React from "react";
import "./MissionVision.css";
import { FaRegLightbulb } from "react-icons/fa";
import { MdTrackChanges } from "react-icons/md";

const MissionVision = () => {
  return (
    <>
      <section className="mission-and-vision container section">
        <header className="mission-and-vision-headers">
          <h2 className="small-header-h3">OUR MISSION & VISION</h2>
        </header>
        <div className="mission-and-vision-contents">
          <div className="church-mission">
            <header className="church-mission-header">
              <h2>Church Mission</h2>{" "}
              <MdTrackChanges className="mission-and-vision-icon" />
            </header>
            <div className="church-mission-text">
              “To spread the love and truth of Jesus Christ, fostering a
              community where every individual can experience spiritual growth,
              transformation, and a renewed purpose in life. “
            </div>
          </div>

          <div className="church-vision">
            <header className="church-vision-header">
              <h2>Church Vision</h2>
              <FaRegLightbulb className="mission-and-vision-icon" />
            </header>
            <div className="church-vision-text">
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
