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
          <h1 data-aos="fade-down" data-aos-duration="1200">
            GOSPEL REVIVAL <br /> <span data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">WAVE CHURCH</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">Preaching Jesus Christ, the desire of all nations</p>
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
                <div className="slide-overlay"></div> {/* Dark overlay */}
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
                  <p data-aos="fade-right" data-aos-duration="1000">{item.text}</p>
                  <NavLink
                    className="visit-btn btn btn-primary btn-icon"
                    to="/about"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    Visit us <LiaLongArrowAltRightSolid />
                  </NavLink>
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