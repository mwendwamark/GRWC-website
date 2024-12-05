import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { HeroData } from "../../assets/HeroImages/HeroData"; // Import your HeroData file
import { MinistriesData } from "../../assets/Ministries/MinistriesData";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { MdTrackChanges, MdOutlineAccessAlarms } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import img from "../../assets/HeroImages/image3.jpg";
import img1 from "../../assets/services.jpg";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_wmvkm1d", "template_yu5ltqs", form.current, {
        publicKey: "dpxx1mCJz_BtrNyGF",
      })
      .then(
        () => {
          toast.success("MESSAGE SENT");
        },
        (error) => {
          toast.error("FAILED...", error.text);
        }
      );
    e.target.reset();
  };
  return (
    <main className="home section">
      <ToastContainer />
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

        <section className="services-section section">
          <header className="history-headers container">
            <h2 className="small-header">SERVICES</h2>
            <h1 className="big-header">OUR SERVICES</h1>
          </header>

          <div className="services-contents container ">
            <div className="services-contents-left">
              <header className="services-headers">
                <h3 className="services-small-header"> MAIN SERVICES</h3>
                <h2 className="services-big-header">JOIN US EVERY SUNDAY</h2>
              </header>
              <div className="service-order">
                <h3>
                  First Service <span>(English Service)</span>
                </h3>
                <span>
                  <MdOutlineAccessAlarms /> <i>8:00 AM ~ 10:30 AM</i>
                </span>
                <p>
                  Join our powerful English Service Every Sunday. All are
                  welcome.
                </p>
              </div>
              <div className="service-order">
                <h3>
                  Second Service <span>(Swahili Service)</span>
                </h3>
                <span>
                  <MdOutlineAccessAlarms /> <i>11:00 AM ~ 1:00 PM</i>
                </span>
                <p>
                  Experience our vibrant Swahili Service and connect with the
                  community.
                </p>
              </div>

              <div className="sermons-button">
                <NavLink to="/sermons">View sermons</NavLink>
                <BsArrowUpRight style={{ color: "#fff" }} />
              </div>
            </div>

            <div className="services-image-right">
              <img src={img1} alt="Church Services" />
            </div>
          </div>
        </section>

        <section className="ministries-section section container">
          <header className="history-headers container">
            <h2 className="small-header">MINISTRIES</h2>
            <h1 className="big-header">CHURCH MINISTRIES</h1>
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
                <div className="ministries-card-content">
                  <img src={image} alt={title} className="ministries-img" />
                  <div className="ministries-info">
                    <h3 className="ministries-title">{title}</h3>
                    <p className="ministries-description">{description}</p>
                    <NavLink to="/ministries">More details</NavLink>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

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

        <section className="contact-us-section section section container">
          <header className="history-headers container">
            <h2 className="small-header">CONTACT US</h2>
            <h1 className="big-header">GET IN TOUCH</h1>
          </header>
          <div className="contact-us-contents">
            <form ref={form} onSubmit={sendEmail}>
              <h1>Send us a message</h1>
              <div className="name-field">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  required
                  name="name"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact">Phone Number</label>
                <input
                  type="text"
                  id="contact"
                  placeholder="0710203040"
                  required
                  name="contact"
                />
              </div>

              <div className="email-field">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  placeholder="john@gmail.com"
                  required
                  name="email"
                />
              </div>

              <div className="subject-field">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Prayer Item"
                  required
                  name="subject"
                />
              </div>

              <div className="content-field">
                <label htmlFor="content">Content</label>
                <textarea
                  type="textarea"
                  id="content"
                  placeholder="Prayer for ..."
                  required
                  name="content"
                ></textarea>
              </div>

              <button type="submit">Send</button>
            </form>
            <div className="map-section">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8990225418943!2d36.9192241!3d-1.2299784999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1572fdbd17e9%3A0x928ea601b7b9255d!2sRivival%20Wave%20Church!5e0!3m2!1sen!2ske!4v1733331807916!5m2!1sen!2ske"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="location"
              ></iframe>{" "}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
