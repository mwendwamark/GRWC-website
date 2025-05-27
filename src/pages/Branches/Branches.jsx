// import React from "react";
// import "./Branches.css";
// import img1 from "../../assets/HeroImages/image2.jpg";
// import { Helmet } from "react-helmet";
// import { BranchesData } from "./BranchesData";
// import { CiMail } from "react-icons/ci";
// import { MdOutlinePhone } from "react-icons/md";
// import { FaFacebook } from "react-icons/fa";
// import { BsInstagram } from "react-icons/bs";
// import { FaTiktok } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { GrLocation } from "react-icons/gr";
// import { NavLink } from "react-router-dom";

// const Branches = () => {
//   return (
//     <>
//       <Helmet>
//         <title>Branches | Gospel Revival Wave Church</title>
//         <meta
//           name="description"
//           content="Discover our church branches and locations. Find a Gospel Revival Wave Church branch near you."
//         />
//         <meta
//           property="og:title"
//           content="Branches | Gospel Revival Wave Church"
//         />
//         <meta
//           property="og:description"
//           content="Discover our church branches and locations. Find a Gospel Revival Wave Church branch near you."
//         />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://grwc.vercel.app/branches" />
//         <link rel="canonical" href="https://grwc.vercel.app/branches" />
//       </Helmet>
//       <section className="branches-hero">
//         <div className="branch-card small-section container">
//           <div className="branches-image-overlay" />
//           <img
//             src={img1}
//             alt="Branches at Gospel Revival Wave Church"
//             className="branches-page-background-image"
//             loading="eager"
//           />
//           <h1 className="branch-title">Branches</h1>
//         </div>
//       </section>

//       <section className="brief-branch_info">
//         <h2>One Church with Five different locations</h2>
//         <p>
//           We share a unified vision to exalt Jesus throughout Gospel Revival
//           Wave Church, and our individual campuses allow us to meet in smaller
//           environments that reflect the diversity and unique nature of our city's
//           neighbourhoods
//         </p>
//       </section>

//       {/* Branches details section */}
//       {BranchesData.map(
//         ({
//           id,
//           title,
//           image,
//           address,
//           sermon_times,
//           map_link,
//           facebook_link,
//           instagram_link,
//           gmail_link,
//           phone_number,
//           phone_display,
//         }) => (
//           <section className="small-section branches-contents_section" key={id}>
//             <div className="branches-page_details">
//               <div className="branches-details_contents small-section">
//                 <h3>{title}</h3>
//                 <i>{address}</i>
//                 <p>
//                   Service Times <br /> <span>{sermon_times}</span>
//                 </p>

//                 <NavLink to={map_link}> Get Directions</NavLink>
//               </div>

//               <div className="branches-details_contacts">
//                 <NavLink to={facebook_link}>
//                   <FaFacebook />
//                 </NavLink>
//                 <NavLink to={gmail_link}>
//                   <CiMail />
//                 </NavLink>
//                 <a href={`tel:${phone_number}`} className="phone-link">
//                   <MdOutlinePhone />
//                 </a>
//                 <NavLink to={instagram_link}>
//                   <BsInstagram />
//                 </NavLink>
//               </div>
//             </div>

//             <div className="branches-details_right-image">
//               <img src={image} alt={`${title} location`} />
//             </div>
//           </section>
//         )
//       )}
//     </>
//   );
// };

// export default Branches;

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
      duration: 1200,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      anchorPlacement: "top-bottom",
      offset: 50,
      delay: 100,
      disable: window.innerWidth < 768 ? "mobile" : false,
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
        <div 
          className="branch-card small-section container"
          
        >
          <div className="branches-image-overlay" />
          <img
            src={img1}
            alt="Branches at Gospel Revival Wave Church"
            className="branches-page-background-image"
            loading="eager"
          />
          <h1 
            className="branch-title"
            
          >
            Branches
          </h1>
        </div>
      </section>

      <section 
        className="brief-branch_info"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="100"
      >
        <h2 
          data-aos="slide-right"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          One Church with Five different locations
        </h2>
        <p
          data-aos="slide-left"
          data-aos-delay="400"
          data-aos-duration="800"
        >
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
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-duration="1000"
            data-aos-delay={index * 100}
            data-aos-offset="150"
            data-aos-easing="ease-out-cubic"
          >
            <div 
              className="branches-page_details"
              data-aos="slide-up"
              data-aos-delay={200 + (index * 50)}
              data-aos-duration="800"
            >
              <div className="branches-details_contents small-section">
                <h3 
                  data-aos="zoom-in"
                  data-aos-delay={300 + (index * 50)}
                  data-aos-duration="600"
                >
                  {title}
                </h3>
                <i 
                  data-aos="fade-up"
                  data-aos-delay={400 + (index * 50)}
                  data-aos-duration="500"
                >
                  {address}
                </i>
                <p
                  data-aos="fade-up"
                  data-aos-delay={500 + (index * 50)}
                  data-aos-duration="500"
                >
                  Service Times <br /> <span>{sermon_times}</span>
                </p>

                <NavLink 
                  to={map_link}
                  data-aos="flip-up"
                  data-aos-delay={600 + (index * 50)}
                  data-aos-duration="400"
                > 
                  Get Directions
                </NavLink>
              </div>

              <div 
                className="branches-details_contacts"
                data-aos="fade-in"
                data-aos-delay={700 + (index * 50)}
                data-aos-duration="600"
              >
                <NavLink 
                  to={facebook_link}
                  data-aos="zoom-in"
                  data-aos-delay={750 + (index * 25)}
                  data-aos-duration="300"
                >
                  <FaFacebook />
                </NavLink>
                <NavLink 
                  to={gmail_link}
                  data-aos="zoom-in"
                  data-aos-delay={775 + (index * 25)}
                  data-aos-duration="300"
                >
                  <CiMail />
                </NavLink>
                <a 
                  href={`tel:${phone_number}`} 
                  className="phone-link"
                  data-aos="zoom-in"
                  data-aos-delay={800 + (index * 25)}
                  data-aos-duration="300"
                >
                  <MdOutlinePhone />
                </a>
                <NavLink 
                  to={instagram_link}
                  data-aos="zoom-in"
                  data-aos-delay={825 + (index * 25)}
                  data-aos-duration="300"
                >
                  <BsInstagram />
                </NavLink>
              </div>
            </div>

            <div 
              className="branches-details_right-image"
              data-aos={index % 2 === 0 ? "slide-left" : "slide-right"}
              data-aos-delay={300 + (index * 100)}
              data-aos-duration="1000"
              data-aos-easing="ease-out-back"
            >
              <img 
                src={image} 
                alt={`${title} location`}
                data-aos="zoom-in"
                data-aos-delay={500 + (index * 100)}
                data-aos-duration="800"
              />
            </div>
          </section>
        )
      )}
    </>
  );
};

export default Branches;