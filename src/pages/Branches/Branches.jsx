import React, { useEffect } from "react";
import "./Branches.css";
import img1 from "../../assets/HeroImages/image2.jpg";
import { Helmet } from "react-helmet";
import { BranchesData } from "./BranchesData";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Branches = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true, // Animation happens only once
      mirror: false, // Prevents re-animation when scrolling back up
      anchorPlacement: "top-bottom",
      offset: 100,
      delay: 0,
    });

    // Refresh AOS on window resize for responsive behavior
    const handleResize = () => {
      AOS.refresh();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Helmet>
        <title>Branches | Gospel Revival Wave Church</title>
        <meta
          name="description"
          content="Discover our church branches and locations. Find a Gospel Revival Wave Church branch near you."
        />
        <meta
          property="og:title"
          content="Branches | Gospel Revival Wave Church"
        />
        <meta
          property="og:description"
          content="Discover our church branches and locations. Find a Gospel Revival Wave Church branch near you."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://grwc.vercel.app/branches" />
        <link rel="canonical" href="https://grwc.vercel.app/branches" />
      </Helmet>
      
      <section className="branches-hero">
        <div className="branch-card small-section container">
          <div className="branches-image-overlay" />
          <img
            src={img1}
            alt="Branches at Gospel Revival Wave Church"
            className="branches-page-background-image"
            loading="eager"
          />
          <h1 className="branch-title">Branches</h1>
        </div>
      </section>

      <section 
        className="brief-branch_info"
        data-aos="fade-up"
      >
        <h2>One Church with Five different locations</h2>
        <p>
          We share a unified vision to exalt Jesus throughout Gospel Revival
          Wave Church, and our individual campuses allow us to meet in smaller
          environments that reflect the diversity and unique nature of our city's
          neighbourhoods
        </p>
      </section>

      {/* Branches details section */}
      {BranchesData.map(
        ({
          id,
          title,
          image,
          address,
          sermon_times,
          map_link,
          facebook_link,
          instagram_link,
          gmail_link,
          phone_number,
          phone_display,
        }, index) => (
          <section 
            className="small-section branches-contents_section" 
            key={id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="branches-page_details">
              <div className="branches-details_contents small-section">
                <h3>{title}</h3>
                <i>{address}</i>
                <p>
                  Service Times <br /> <span>{sermon_times}</span>
                </p>

                <NavLink to={map_link}>Get Directions</NavLink>
              </div>

              <div className="branches-details_contacts">
                <NavLink to={facebook_link}>
                  <FaFacebook />
                </NavLink>
                <NavLink to={gmail_link}>
                  <CiMail />
                </NavLink>
                <a href={`tel:${phone_number}`} className="phone-link">
                  <MdOutlinePhone />
                </a>
                <NavLink to={instagram_link}>
                  <BsInstagram />
                </NavLink>
              </div>
            </div>

            <div className="branches-details_right-image">
              <img src={image} alt={`${title} location`} />
            </div>
          </section>
        )
      )}
    </>
  );
};

export default Branches;