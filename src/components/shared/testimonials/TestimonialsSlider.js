"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialsSlide2 from "./TestimonialsSlide2";
import testimonialSmallImage3 from "@/assets/img/testimonial/testimonial__small__img__3.png";
import testimonialImage3 from "@/assets/img/testimonial/testimonial__3.png";
import { Navigation } from "swiper/modules";
const TestimonialsSlider = () => {
  const slides = [
    {
      id: 1,
      name: "MATTIE WARNER",
      img: testimonialImage3,
      imgSmall: testimonialSmallImage3,
      desig: "Business Man",
      desc: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      name: "MATTIE WARNER",
      img: testimonialImage3,
      imgSmall: testimonialSmallImage3,
      desig: "Business Man",
      desc: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      name: "MATTIE WARNER",
      img: testimonialImage3,
      imgSmall: testimonialSmallImage3,
      desig: "Business Man",
      desc: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      name: "MATTIE WARNER",
      img: testimonialImage3,
      imgSmall: testimonialSmallImage3,
      desig: "Business Man",
      desc: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 5,
      name: "MATTIE WARNER",
      img: testimonialImage3,
      imgSmall: testimonialSmallImage3,
      desig: "Business Man",
      desc: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <Swiper
      className="testimonial__slider__active__2 position-static"
      grabCursor={true}
      navigation={true}
      modules={[Navigation]}
      slidesPerView={1}
      breakpoints={{
        575: {
          slidesPerView: 1,
        },

        768: {
          slidesPerView: 1,
        },

        992: {
          slidesPerView: 1,
        },
        1200: {
          slidesPerView: 2,
        },
        1500: {
          slidesPerView: 2,
        },
      }}
      wrapperClass="testimonial__2__wrap"
    >
      {slides?.map((testimonial, idx) => (
        <SwiperSlide className="col-md-3 testimonial__single__slider" key={idx}>
          <TestimonialsSlide2 slide={testimonial} />
        </SwiperSlide>
      ))}

      <div className="slider__controls__wrap slider__controls__pagination slider__controls__arrows">
        <div className="swiper-button-next arrow-btn arrow-btn-2">
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
        <div className="swiper-button-prev arrow-btn arrow-btn-2">
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
  );
};

export default TestimonialsSlider;
