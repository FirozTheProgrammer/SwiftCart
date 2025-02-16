"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import herobannerImage1 from "@/assets/img/herobaner/herobanner__front__1.png";
import herobannerImage2 from "@/assets/img/herobaner/herobanner__front__2.png";
import herobannerImage3 from "@/assets/img/herobaner/herobanner__front__3.png";
import herobannerImageBg from "@/assets/img/herobaner/herobanner__1.jpg";
import HeroIcons from "@/components/shared/hero-banner/HeroIcons";
import HeroSlide from "@/components/shared/hero-banner/HeroSlide";
const Hero1 = () => {
  const slides = [
    {
      title: "WE ARE CONSULTING AGENCY",
      desc: "Sagittis purus amet volutpat consequat mauris nunc congue nisi and tortor.",
      path: "/services",
      img: herobannerImage1,
    },
    {
      title: "WE ARE CONSULTING AGENCY",
      desc: "Sagittis purus amet volutpat consequat mauris nunc congue nisi and tortor.",
      path: "/services",
      img: herobannerImage2,
    },
    {
      title: "WE ARE CONSULTING AGENCY",
      desc: "Sagittis purus amet volutpat consequat mauris nunc congue nisi and tortor.",
      path: "/services",
      img: herobannerImage3,
    },
  ];
  return (
    <div
      className="herobanner herobanner__with__transparent__header"
      style={{
        background: `url('${herobannerImageBg.src}')`,
      }}
    >
      <div className="container">
        <div className="herobanner__wrapper">
          <Swiper
            grabCursor={true}
            slidesPerView={1}
            navigation={true}
            modules={[Navigation]}
            className="herobanner__slider__active"
          >
            {slides?.map((slide, idx) => (
              <SwiperSlide
                key={idx}
                className="herobanner__single position-relative"
              >
                <HeroSlide slide={slide} />
              </SwiperSlide>
            ))}

            <div className="slider__controls__wrap slider__controls__pagination slider__controls__arrows herobanner__arrow__1">
              <div className="swiper-button-next arrow-btn">
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
              <div className="swiper-button-prev arrow-btn">
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
              {/* <div className="swiper-pagination"></div> --> */}
            </div>
          </Swiper>
        </div>
      </div>
      <HeroIcons />
    </div>
  );
};

export default Hero1;
