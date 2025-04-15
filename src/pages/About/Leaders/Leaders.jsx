import React from "react";
import "./Leaders.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import {  FaTwitter, FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import img1 from "../../../assets/LeadersImages/leaderImg1.jpg";
import img2 from "../../../assets/LeadersImages/leaderImg2.jpg";
import img3 from "../../../assets/LeadersImages/leaderImg3.jpg";
import img4 from "../../../assets/LeadersImages/leaderImg4.jpg";
import bishop from "../../../assets/HeroImages/image1.jpg"

// Leaders and Pastors Data
const leadersData = [
  {
    name: "Bishop James Ireri",
    role: "BISHOP OF THE CHURCH",
    image: bishop,
    bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit uma vitae ac vitae lacus ac proin ultricies tellend qui ut felis dolor sit amet sui con",
    social: {
      facebook: "https://facebook.com/bishopireri",
      twitter: "https://twitter.com/bishopireri",
      instagram: "https://instagram.com/bishopireri",
    },
  },
  {
    name: "John Carter",
    role: "PRINCIPAL PASTOR",
    image: img1,
    bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit uma vitae ac vitae lacus ac proin ultricies tellend qui ut felis dolor sit amet sui con",
    social: {
      facebook: "https://facebook.com/pastorjohn",
      twitter: "https://twitter.com/pastorjohn",
      instagram: "https://instagram.com/pastorjohn",
    },
  },
  {
    name: "Sophie Carter",
    role: "PRINCIPAL PASTOR",
    image: img2,
    bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit uma vitae ac vitae lacus ac proin ultricies tellend qui ut felis dolor sit amet sui con",
    social: {
      facebook: "https://facebook.com/pastorjane",
      twitter: "https://twitter.com/pastorjane",
      instagram: "https://instagram.com/pastorjane",
    },
  },
  {
    name: "Pastor Michael Brown",
    role: "Worship Leader",
    image: img3,
    bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit uma vitae ac vitae lacus ac proin ultricies tellend qui ut felis dolor sit amet sui con",
    social: {
      facebook: "https://facebook.com/pastormichael",
      twitter: "https://twitter.com/pastormichael",
      instagram: "https://instagram.com/pastormichael",
    },
  },
  {
    name: "Pastor Sarah Wilson",
    role: "Children's Pastor",
    image: img4,
    bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit uma vitae ac vitae lacus ac proin ultricies tellend qui ut felis dolor sit amet sui con",
    social: {
      facebook: "https://facebook.com/pastorsarah",
      twitter: "https://twitter.com/pastorsarah",
      instagram: "https://instagram.com/pastorsarah",
    },
  },
];

const Leaders = () => {
  return (
    <div className="leaders-section">
      <div className="leaders-container">
        <div className="leaders-header">
          <div className="title-line"></div>
          <h2>Meet our leadership team and,<br />our beloved pastors</h2>
          <p className="leaders-subtitle">
            Lorem ipsum dolor sit amet consectetur adipiscing elit uma
            vitae ac vitae lacus ac proin ultricies ellefend qui ut felis
          </p>
        </div>
        
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="leaders-swiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            // 1800: {
            //   slidesPerView: 4,
            // }
          }}
        >
          {leadersData.map((leader, index) => (
            <SwiperSlide key={index}>
              <div className="leader-card">
                <div className="leader-image">
                  <img src={leader.image} alt={leader.name} loading="lazy"/>
                </div>
                <div className="leader-info">
                  <h3>{leader.name}</h3>
                  <h4>{leader.role}</h4>
                  <p>{leader.bio}</p>
                  <div className="social-icons">
                    <a href={leader.social.facebook} aria-label="Facebook" className="leaders-social-link">
                      <div className="leaders-social-icon">
                        <FaFacebook />
                      </div>
                    </a>
                    <a href={leader.social.twitter} aria-label="Twitter" className="leaders-social-link">
                      <div className="leaders-social-icon">
                        <FaTwitter />
                      </div>
                    </a>
                    <a href={leader.social.instagram} aria-label="Instagram" className="leaders-social-link">
                      <div className="leaders-social-icon">
                        <FaInstagram />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Leaders;