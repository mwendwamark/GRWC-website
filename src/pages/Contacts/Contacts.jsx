import React from 'react'
import image from "../../assets/constructions.jpeg";
import { Helmet } from "react-helmet";

const Contacts = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Gospel Revival Wave Church</title>
        <meta name="description" content="Reach out to Gospel Revival Wave Church. We'd love to connect with you for questions, prayer requests, or more information." />
        <meta property="og:title" content="Contact Us | Gospel Revival Wave Church" />
        <meta property="og:description" content="Reach out to Gospel Revival Wave Church. We'd love to connect with you for questions, prayer requests, or more information." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://grwc.vercel.app/contact" />
        <link rel="canonical" href="https://grwc.vercel.app/contact" />
      </Helmet>
      <div>
        <div className="container construction-div section">
          <h1>Page under construction</h1>
          <img src={image} alt="" className="construction-img" />
        </div>
      </div>
    </>
  );
}

export default Contacts
