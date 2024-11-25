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
import img from "../../assets/HeroImages/image3.jpg";

const Home = () => {
  return (
    <div className="home section">
      <div className="home-container">
        <div className="hero-section container">
          {/* Title */}
          <div className="hero-title">
            <h1>
              GOSPEL REVIVAL <br /> <span>WAVE CHURCH</span>
            </h1>
            <p>Preaching Jesus Christ, the desire of all nations</p>
          </div>

          {/* Swiper Slider */}
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
                    />
                  )}
                  <div className="slide-text">
                    <p>{item.text}</p>
                    <button className="visit-btn">Visit us →</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="church-history-section container section">
          <div className="history-headers">
            <h2 className="small-header">About us</h2>
            <h1 className="big-header">Get to know us</h1>
          </div>

          <div className="church-history-contents">
            <div class="church-history-image-container">
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
        </div>
      </div>
    </div>
  );
};

export default Home;
