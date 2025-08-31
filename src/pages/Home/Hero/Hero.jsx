// import { Swiper, SwiperSlide } from "swiper/react";
// import { memo, useState, useEffect, useCallback } from "react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Autoplay, Pagination } from "swiper/modules";
// import { HeroData } from "../../../assets/HeroImages/HeroData";
// import "./Hero.css";
// import { NavLink } from "react-router-dom";
// import { LiaLongArrowAltRightSolid } from "react-icons/lia";

// const Hero = memo(() => {
//   const [isClient, setIsClient] = useState(false);
//   const [loadedImages, setLoadedImages] = useState(new Set());

//   const criticalStyles = {
//     heroSection: {
//       position: 'relative',
//       width: '100%',
//       height: '800px',
//       marginTop: '60px',
//     }
//   };

//   useEffect(() => {
//     setIsClient(true);

//     // Preload the first image for faster LCP
//     if (HeroData.length > 0 && !HeroData[0].image.endsWith(".mp4")) {
//       const firstImage = new Image();
//       firstImage.src = HeroData[0].image;
//       firstImage.onload = () => {
//         setLoadedImages(prev => new Set([...prev, HeroData[0].image]));
//       };
//     }

//     // Initialize AOS with performance optimizations
//     if (typeof window !== 'undefined' && window.AOS) {
//       window.AOS.init({
//         duration: 800,
//         once: true,
//         mirror: false,
//         disable: window.innerWidth < 768 ? 'mobile' : false,
//         easing: 'ease-out-cubic'
//       });
//     }
//   }, []);

//   const handleImageLoad = useCallback((imageSrc) => {
//     setLoadedImages(prev => new Set([...prev, imageSrc]));
//   }, []);

//   const renderSlideContent = useCallback((item, index) => {
//     const isVideo = item.image.endsWith(".mp4");
//     const isFirstSlide = index === 0;

//     if (isVideo) {
//       return (
//         <video
//           src={item.image}
//           autoPlay
//           loop
//           muted
//           playsInline
//           preload={isFirstSlide ? "metadata" : "none"}
//           poster={`${item.image.replace('.mp4', '')}-poster.jpg`}
//           className="video-slide"
//           style={{
//             width: '100%',
//             height: '700px',
//             objectFit: 'cover'
//           }}
//         >
//           Your browser does not support the video tag.
//         </video>
//       );
//     }

//     return (
//       <img
//         src={item.image}
//         alt={`Gospel Revival Wave Church - ${item.text.substring(0, 50)}...`}
//         className="image-slide"
//         loading={isFirstSlide ? "eager" : "lazy"}
//         decoding="async"
//         fetchpriority={isFirstSlide ? "high" : "auto"}
//         onLoad={() => handleImageLoad(item.image)}
//         style={{
//           width: '100%',
//           height: '700px',
//           objectFit: 'cover',
//           opacity: loadedImages.has(item.image) || isFirstSlide ? 1 : 0,
//           transition: 'opacity 0.3s ease-in-out'
//         }}
//       />
//     );
//   }, [loadedImages, handleImageLoad]);

//   if (!isClient) {
//     // Server-side rendering fallback with critical content
//     return (
//       <section className="hero-section container" style={criticalStyles.heroSection}>
//         <div className="hero-title">
//           <h1>
//             GOSPEL REVIVAL <br />
//             <span>WAVE CHURCH</span>
//           </h1>
//           <p>Preaching Jesus Christ, the desire of all nations</p>
//         </div>
//         <div className="slide">
//           <div className="slide-overlay"></div>
//           <img
//             src={HeroData[0]?.image}
//             alt="Gospel Revival Wave Church"
//             className="image-slide"
//             loading="eager"
//             style={{
//               width: '100%',
//               height: '700px',
//               objectFit: 'cover'
//             }}
//           />
//           <div className="slide-text">
//             <p>{HeroData[0]?.text}</p>
//             <NavLink
//               className="visit-btn btn btn-primary btn-icon"
//               to="/about"
//             >
//               Visit us <LiaLongArrowAltRightSolid />
//             </NavLink>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="hero-section container">
//       <div className="hero-title">
//         <h1 data-aos="fade-down" data-aos-duration="800">
//           GOSPEL REVIVAL <br />
//           <span data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
//             WAVE CHURCH
//           </span>
//         </h1>
//         <p data-aos="fade-up" data-aos-delay="400" data-aos-duration="600">
//           Preaching Jesus Christ, the desire of all nations
//         </p>
//       </div>

//       <Swiper
//         slidesPerView={1}
//         spaceBetween={0}
//         loop={true}
//         pagination={{
//           clickable: true,
//           dynamicBullets: true,
//         }}
//         navigation={false}
//         modules={[Autoplay, Pagination]}
//         autoplay={{
//           delay: 8000,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: true,
//         }}
//         speed={1200}
//         lazy={{
//           loadPrevNext: true,
//           loadPrevNextAmount: 1,
//         }}
//         watchSlidesProgress={true}
//         updateOnWindowResize={true}
//         observer={true}
//         observeParents={true}
//       >
//         {HeroData.map((item, index) => (
//           <SwiperSlide key={item.id}>
//             <div className="slide">
//               <div className="slide-overlay"></div>
//               {renderSlideContent(item, index)}
//               <div className="slide-text">
//                 <p
//                   data-aos={index === 0 ? "fade-right" : ""}
//                   data-aos-duration="600"
//                 >
//                   {item.text}
//                 </p>
//                 <NavLink
//                   className="visit-btn btn btn-primary btn-icon"
//                   to="/about"
//                   data-aos={index === 0 ? "zoom-in" : ""}
//                   data-aos-delay="200"
//                   aria-label="Visit Gospel Revival Wave Church about page"
//                 >
//                   Visit us <LiaLongArrowAltRightSolid aria-hidden="true" />
//                 </NavLink>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// });

// Hero.displayName = 'Hero';

// export default Hero;

import { Swiper, SwiperSlide } from "swiper/react";
import { memo, useState, useEffect, useCallback } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { HeroData } from "../../../assets/HeroImages/HeroData";
import "./Hero.css";
import { NavLink } from "react-router-dom";
// import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { FaLongArrowAltRight } from "react-icons/fa";

const Hero = memo(() => {
  const [isClient, setIsClient] = useState(false);
  const [loadedImages, setLoadedImages] = useState(new Set());

  const criticalStyles = {
    heroSection: {
      position: 'relative',
      width: '100%',
      height: '800px',
      marginTop: '60px',
    }
  };

  useEffect(() => {
    setIsClient(true);
    // You no longer need to manually preload the first image here.
    // The `<img loading="eager" fetchpriority="high">` attribute handles this correctly.

    // Initialize AOS with performance optimizations
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init({
        duration: 800,
        once: true,
        mirror: false,
        disable: window.innerWidth < 768 ? 'mobile' : false,
        easing: 'ease-out-cubic'
      });
    }
  }, []);

  const renderSlideContent = useCallback((item, index) => {
    const isVideo = !!item.video;
    const isFirstSlide = index === 0;

    if (isVideo) {
      return (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload={isFirstSlide ? "metadata" : "none"}
          poster={`${item.video.replace('.mp4', '')}-poster.jpg`}
          className="video-slide"
          style={{
            width: '100%',
            height: '700px',
            objectFit: 'cover'
          }}
        >
          <source src={item.videoMobile} type="video/webm" media="(max-width: 768px)" />
          <source src={item.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }

    return (
      <picture>
        <source srcSet={`${item.imageWebp} 1200w`} type="image/webp" />
        <img
          src={item.image}
          srcSet={`${item.imageSmall} 800w, ${item.image} 1200w`}
          sizes="(max-width: 768px) 800px, 1200px"
          alt={`Gospel Revival Wave Church - ${item.text.substring(0, 50)}...`}
          className="image-slide"
          loading={isFirstSlide ? "eager" : "lazy"}
          decoding="async"
          fetchpriority={isFirstSlide ? "high" : "auto"}
          onLoad={() => setLoadedImages(prev => new Set([...prev, item.image]))}
          style={{
            width: '100%',
            height: '700px',
            objectFit: 'cover',
            opacity: loadedImages.has(item.image) || isFirstSlide ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
        />
      </picture>
    );
  }, [loadedImages]);

  if (!isClient) {
    const firstHeroItem = HeroData[0];
    const isFirstItemVideo = !!firstHeroItem?.video;
    
    return (
      <section className="hero-section container" style={criticalStyles.heroSection}>
        <div className="hero-title">
          <h1>
            GOSPEL REVIVAL <br />
            <span>WAVE CHURCH</span>
          </h1>
          <p>Preaching Jesus Christ, the desire of all nations</p>
        </div>
        <div className="slide">
          <div className="slide-overlay"></div>
          {isFirstItemVideo ? (
            <video
              src={firstHeroItem.video}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster={`${firstHeroItem.video.replace('.mp4', '')}-poster.jpg`}
              className="video-slide"
              style={{ width: '100%', height: '700px', objectFit: 'cover' }}
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={firstHeroItem.image}
              alt="Gospel Revival Wave Church"
              className="image-slide"
              loading="eager"
              style={{
                width: '100%',
                height: '700px',
                objectFit: 'cover'
              }}
            />
          )}
          <div className="slide-text">
            <p>{firstHeroItem.text}</p>
            <NavLink
              className="visit-btn btn btn-primary btn-icon"
              to="/about"
            >
              Visit us <FaLongArrowAltRight aria-hidden="true" />
            </NavLink>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="hero-section container">
      <div className="hero-title">
        <h1 data-aos="fade-down" data-aos-duration="800">
          GOSPEL REVIVAL <br />
          <span data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
            WAVE CHURCH
          </span>
        </h1>
        <p data-aos="fade-up" data-aos-delay="400" data-aos-duration="600">
          Preaching Jesus Christ, the desire of all nations
        </p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1200}
        lazy={{
          loadPrevNext: true,
          loadPrevNextAmount: 1,
        }}
        watchSlidesProgress={true}
        updateOnWindowResize={true}
        observer={true}
        observeParents={true}
      >
        {HeroData.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div className="slide">
              <div className="slide-overlay"></div>
              {renderSlideContent(item, index)}
              <div className="slide-text">
                <p
                  data-aos={index === 0 ? "fade-right" : ""}
                  data-aos-duration="600"
                >
                  {item.text}
                </p>
                <NavLink
                  className="visit-btn btn btn-primary btn-icon"
                  to="/about"
                  data-aos={index === 0 ? "zoom-in" : ""}
                  data-aos-delay="200"
                  aria-label="Visit Gospel Revival Wave Church about page"
                >
                  Visit us <FaLongArrowAltRight aria-hidden="true" />
                </NavLink>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;