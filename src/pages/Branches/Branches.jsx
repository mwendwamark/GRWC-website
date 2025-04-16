import React from 'react'
import image from "../../assets/constructions.jpeg";
import { Helmet } from "react-helmet";

const Branches = () => {
  return (
    <>
      <Helmet>
        <title>Branches | Gospel Revival Wave Church</title>
        <meta name="description" content="Discover our church branches and locations. Find a Gospel Revival Wave Church branch near you." />
        <meta property="og:title" content="Branches | Gospel Revival Wave Church" />
        <meta property="og:description" content="Discover our church branches and locations. Find a Gospel Revival Wave Church branch near you." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://grwc.vercel.app/branches" />
        <link rel="canonical" href="https://grwc.vercel.app/branches" />
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

export default Branches
