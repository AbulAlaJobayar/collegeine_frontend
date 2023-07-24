// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <>
     <div className="">
     <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: "url(https://i.ibb.co/MfDQVwn/first.jpg)",
              
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-screen-md">
                <h1 className="mb-5 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold">Higher Learning Hub</h1>
                <p className="mb-5">
                  Welcome to our Multi-College Website! Discover a world of
                  educational opportunities as we bring together a diverse
                  network of esteemed institutions, each offering its unique
                  strengths and programs. 
                </p>
                <button className="btn bg-[#ff6900] hover:bg-[#ca5400] text-white">
                  <Link to="/admission">
                  Get Started
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: "url(https://i.ibb.co/BLZSvZJ/seacond.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-screen-md">
                <h1 className="mb-5 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold">Higher Learning Hub</h1>
                <p className="mb-5">
                Welcome to our Multi-College Website! Discover a world of
                  educational opportunities as we bring together a diverse
                  network of esteemed institutions, each offering its unique
                  strengths and programs. 
                </p>
                <button className="btn bg-[#ff6900] hover:bg-[#ca5400] text-white">
                  <Link to="/admission">
                  Get Started
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: "url(https://i.ibb.co/9TWC8sT/third.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-screen-md">
                <h1 className="mb-5 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold ">Higher Learning Hub </h1>
                <p className="mb-5">
                Welcome to our Multi-College Website! Discover a world of
                  educational opportunities as we bring together a diverse
                  network of esteemed institutions, each offering its unique
                  strengths and programs. 
                </p>
                <button className="btn bg-[#ff6900] hover:bg-[#ca5400] text-white">
                  <Link to="/admission">
                  Get Started
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
     </div>
    </>
  );
};

export default HeroSection;
