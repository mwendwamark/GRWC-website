import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { HeroData } from "../../../assets/HeroImages/HeroData"; // Import your HeroData file
import "./Hero.css";
import { NavLink } from "react-router-dom";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const Hero = () => {
  return (
    <>
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
                    // loading="lazy"
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
    </>
  );
};

export default Hero;
