"use client";
import heroBgImage1 from "@/assets/img/herobaner/herobanner__seo__1.jpg";
import heroBgImage2 from "@/assets/img/herobaner/herobanner__seo__2.jpg";

import heroBgImage31 from "@/assets/img/herobaner/slider_31.jpg";
import heroBgImage32 from "@/assets/img/herobaner/slider_32.jpg";
import heroBgImage33 from "@/assets/img/herobaner/slider_33.jpg";
import BrandBadge from "@/components/shared/badges/BrandBadge";
import Hero3Slide from "@/components/shared/hero-banner/Hero3Slide";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Hero3 = ({ type }) => {
  const slides = [
    {
      title:
        type === 2 ? (
          <>
            HIGH-QUALITY CONSULTING FOR{" "}
            <span className="ht__gradient__bg">YOUR BUSINESS</span>
          </>
        ) : (
          <>
            <span className="ht__white__bg">HIGH-QUALITY</span> CONSULTING FOR{" "}
            <span className="ht__gradient__bg">YOUR CORPORATE</span>{" "}
            <span className="text__gradient">BUSINESS</span>
          </>
        ),
      desc: "Sagittis purus amet volutpat consequat mauris nunc congue nisi and tortor.",
      path: "/services",
      img: type === 2 ? heroBgImage1 : heroBgImage31,
    },
    {
      title:
        type === 2 ? (
          <>
            HIGH-QUALITY CONSULTING FOR{" "}
            <span className="ht__gradient__bg">YOUR BUSINESS</span>
          </>
        ) : (
          <>
            <span className="ht__white__bg">HIGH-QUALITY</span> CONSULTING FOR{" "}
            <span className="ht__gradient__bg">YOUR CORPORATE</span>{" "}
            <span className="text__gradient">BUSINESS</span>
          </>
        ),
      desc: "Sagittis purus amet volutpat consequat mauris nunc congue nisi and tortor.",
      path: "/services",
      img: type === 2 ? heroBgImage33 : heroBgImage32,
    },
    {
      title:
        type === 2 ? (
          <>
            HIGH-QUALITY CONSULTING FOR{" "}
            <span className="ht__gradient__bg">YOUR BUSINESS</span>
          </>
        ) : (
          <>
            <span className="ht__white__bg">HIGH-QUALITY</span> CONSULTING FOR{" "}
            <span className="ht__gradient__bg">YOUR CORPORATE</span>{" "}
            <span className="text__gradient">BUSINESS</span>
          </>
        ),
      desc: "Sagittis purus amet volutpat consequat mauris nunc congue nisi and tortor.",
      path: "/services",
      img: type === 2 ? heroBgImage2 : heroBgImage33,
    },
  ];
  return (
    <div className="herobanner herobanner--3">
      <div className="herobanner__wrapper">
        <Swiper
          className="herobanner__slider__active slider__bg__position"
          grabCursor={true}
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
        >
          {slides?.map((slide, idx) => (
            <SwiperSlide
              key={idx}
              className="herobanner__single  position-relative"
              style={{ background: `url('${slide?.img.src}')` }}
            >
              <Hero3Slide slide={slide} />
            </SwiperSlide>
          ))}

          <div className="slider__controls__wrap slider__controls__pagination slider__controls__arrows herobanner__arrow__1 herobanner__arrow__1--2">
            <div
              className={`swiper-button-next arrow-btn ${
                type === 2 ? "0" : "arrow-btn-3"
              }`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.4297 5.92999L20.4997 12L14.4297 18.07"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.5 12H20.33"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              className={`swiper-button-prev arrow-btn ${
                type === 2 ? "0" : "arrow-btn-3"
              }`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.57031 5.92999L3.50031 12L9.57031 18.07"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.5 12H3.67"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </Swiper>
      </div>
      <BrandBadge badge={true} />
    </div>
  );
};

export default Hero3;
