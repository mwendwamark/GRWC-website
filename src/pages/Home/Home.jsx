import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { HeroData } from "../../assets/HeroImages/HeroData"; // Import your HeroData file
import "./Home.css";
import { NavLink } from "react-router-dom";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { MdTrackChanges } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import img from "../../assets/HeroImages/image3.jpg";

const Home = () => {
  return (
    <main className="home section">
      <div className="home-container">
        <section className="hero-section container">
          <div className="hero-title">
            <h1>
              GOSPEL REVIVAL <br /> <span>WAVE CHURCH</span>
            </h1>
            <p>Preaching Jesus Christ, the desire of all nations</p>
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            speed={1800} // Transition speed in milliseconds
          >
            {HeroData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="slide">
                  {/* Check if the file is a video */}
                  {item.image.endsWith(".mp4") ? (
                    <video
                      src={item.image}
                      autoPlay
                      loop
                      muted
                      className="video-slide"
                    />
                  ) : (
                    <img
                      src={item.image}
                      alt={`Slide ${item.id}`}
                      className="image-slide"
                      loading="lazy"
                    />
                  )}
                  <div className="slide-text">
                    <p>{item.text}</p>
                    <NavLink className="visit-btn">Visit us →</NavLink>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

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
                steadily expanded under the leadership of Bishop Jesse Ireri
                James and a dedicated team. Through ministries like youth
                outreach, community service, and vibrant worship, the church has
                touched lives across generations.
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
                community where every individual can experience spiritual
                growth, transformation, and a renewed purpose in life. “
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
                with compassion, and creating lasting change through God’s
                love.“
              </div>
            </div>
          </div>
        </section>
        <section className="section"></section>
      </div>
    </main>
  );
};

export default Home;
