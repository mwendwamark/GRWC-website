import React from 'react'
import image from "../../assets/constructions.jpeg";
import { Helmet } from "react-helmet";

const Give = () => {
  return (
    <>
      <Helmet>
        <title>Give | Gospel Revival Wave Church</title>
        <meta name="description" content="Support the ministry of Gospel Revival Wave Church. Give online and help us reach more lives." />
        <meta property="og:title" content="Give | Gospel Revival Wave Church" />
        <meta property="og:description" content="Support the ministry of Gospel Revival Wave Church. Give online and help us reach more lives." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://grwc.vercel.app/give" />
        <link rel="canonical" href="https://grwc.vercel.app/give" />
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

export default Give
