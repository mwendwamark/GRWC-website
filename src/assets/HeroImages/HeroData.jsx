// import img1 from "./image1.jpg";
// import img2 from "../grwcImages/InsideChurch.jpg";
// import img3 from "../grwcImages/BishopPreaching.jpg";
// import img4 from "../grwcImages/HeroImage4.jpg";
// import vid1 from "./vid1.mp4";

// export const HeroData = [
//   {
//     id: 1,
//     image: img1,
//     text: "Welcome to Gospel Revival Wave Church, where everyone is valuable, calling all nations to experience His saving grace. 'Go into all the world and preach the gospel to all creation.' – Mark 16:15",
//     location: "Kasarani",
//   },
//   {
//     id: 2,
//     image: img2,
//     text: "Join us in heartfelt worship and experience the power of unity in the body of Christ. 'God is spirit, and those who worship him must worship in spirit and truth.' – John 4:24",
//     location: "Kasarani",
//   },
//   {
//     id: 3,
//     image: img3,
//     text: "Be part of a growing community dedicated to building faith, hope, and love. 'And let us consider how to stir up one another to love and good works, not neglecting to meet together.' – Hebrews 10:24-25",
//     location: "Kasarani",
//   },
//   {
//     id: 4,
//     image: img4,
//     text: "Experience the transformational power of prayer and God's Word in every service. 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.' – Philippians 4:6",
//     location: "Kasarani",
//   },
//   {
//     id: 5,
//     image: vid1,
//     text: "Watch the powerful testimony of lives changed and renewed in Christ. 'Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!' – 2 Corinthians 5:17",
//     location: "Kasarani",
//   },
// ];

import img1 from "./image1.jpg";
import img2 from "../grwcImages/InsideChurch.jpg";
import img3 from "../grwcImages/BishopPreaching.jpg";
import img4 from "../grwcImages/HeroImage4.jpg";
import vid1 from "./vid1.mp4";

// Assuming you have created and placed these new, optimized files in your assets folder
import img1Webp from "./image1.webp";

import img2Webp from "../grwcImages/InsideChurch.webp";

import img3Webp from "../grwcImages/BishopPreaching.webp";

import img4Webp from "../grwcImages/HeroImage4.webp";

// For the video, create a mobile-friendly version
import vid1Mobile from "./vid1.webm";

export const HeroData = [
  {
    id: 1,
    image: img1,
    imageWebp: img1Webp,
    text: "Welcome to Gospel Revival Wave Church, where everyone is valuable, calling all nations to experience His saving grace. 'Go into all the world and preach the gospel to all creation.' – Mark 16:15",
    location: "Kasarani",
  },
  {
    id: 2,
    image: img2,
    imageWebp: img2Webp,
    text: "Join us in heartfelt worship and experience the power of unity in the body of Christ. 'God is spirit, and those who worship him must worship in spirit and truth.' – John 4:24",
    location: "Kasarani",
  },
  {
    id: 3,
    image: img3,
    imageWebp: img3Webp,
    text: "Be part of a growing community dedicated to building faith, hope, and love. 'And let us consider how to stir up one another to love and good works, not neglecting to meet together.' – Hebrews 10:24-25",
    location: "Kasarani",
  },
  {
    id: 4,
    image: img4,
    imageWebp: img4Webp,
    text: "Experience the transformational power of prayer and God's Word in every service. 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.' – Philippians 4:6",
    location: "Kasarani",
  },
  {
    id: 5,
    video: vid1,
    videoMobile: vid1Mobile,
    text: "Watch the powerful testimony of lives changed and renewed in Christ. 'Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!' – 2 Corinthians 5:17",
    location: "Kasarani",
  },
];