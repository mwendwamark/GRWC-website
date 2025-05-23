import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { MinistriesData } from "../../../assets/Ministries/MinistriesData";
import "./HomeMinistries.css";
import { NavLink } from "react-router-dom";

const HomeMinistries = () => {
  return (
    <>
      <section className="ministries-section section container">
        <header className="history-headers container">
          <h2 className="small-header" data-aos="fade-down" data-aos-duration="800">MINISTRIES</h2>
          <h1 className="big-header" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">CHURCH MINISTRIES</h1>
        </header>

        <Swiper
          slidesPerView={1}
          spaceBetween={12}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          speed={1800}
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            660: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 12,
            },
          }}
        >
          {MinistriesData.map(({ id, image, title, description }) => (
            <SwiperSlide className="ministries-card" key={id}>
              <div className="ministries-card-content" data-aos="flip-up" data-aos-duration="1000">
                <img src={image} alt={title} className="ministries-img" data-aos="zoom-in" data-aos-delay="200" />
                <div className="ministries-info">
                  <h3 className="ministries-title" data-aos="fade-up" data-aos-delay="300">{title}</h3>
                  <p className="ministries-description" data-aos="fade-up" data-aos-delay="400">{description}</p>
                  <NavLink to="/ministries" data-aos="zoom-in" data-aos-delay="500">More details</NavLink>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default HomeMinistries;
