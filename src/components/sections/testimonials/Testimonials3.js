"use client";
import TestimonialSlide from "@/components/shared/testimonials/TestimonialSlide";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import testimonialImage4 from "@/assets/img/testimonial/testimonial__4.png";
import testimonialImage5 from "@/assets/img/testimonial/testimonial__5.png";
import testimonialImage6 from "@/assets/img/testimonial/testimonial__6.png";
import { Navigation, Pagination } from "swiper/modules";
import TestimonialSlide3 from "@/components/shared/testimonials/TestimonialSlide3";
const Testimonials3 = ({ type, pb, pt }) => {
  const slides = [
    {
      id: 1,
      name: "Mattie Warner",
      img: testimonialImage4,
      imgSmall: testimonialImage4,
      desig: "Business Man",
      desc: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.”",
    },
    {
      id: 2,
      name: "Kristin Gilbert",
      img: testimonialImage5,
      imgSmall: testimonialImage5,
      desig: "Business Man",
      desc: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.”",
    },
    {
      id: 3,
      name: "Arlene Miles",
      img: testimonialImage6,
      imgSmall: testimonialImage6,
      desig: "Business Man",
      desc: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.”",
    },
    {
      id: 4,
      name: "Mattie Warner",
      img: testimonialImage4,
      imgSmall: testimonialImage4,
      desig: "Business Man",
      desc: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.”",
    },
    {
      id: 5,
      name: "Mattie Warner",
      img: testimonialImage5,
      imgSmall: testimonialImage5,
      desig: "Business Man",
      desc: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.”",
    },
    {
      id: 6,
      name: "Arlene Miles",
      img: testimonialImage6,
      imgSmall: testimonialImage6,
      desig: "Business Man",
      desc: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.”",
    },
  ];
  return (
    <div
      className={` ${
        type === 2
          ? `testimonial ${pt ? pt : "sp_top_140"}  ${
              pb ? pb : "sp_bottom_140"
            }`
          : "testimonial__3 sp_top_140 sp_bottom_200"
      } `}
    >
      <div className="container">
        <div className="row">
          <div
            className="col-xl-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div
              className={`${
                type === 2
                  ? "section__title  text-center"
                  : "section__title section__title--3 text-center"
              }  sp_bottom_60`}
            >
              <div className="section__title__button">
                <span className={type === 2 ? "text__gradient" : ""}>
                  Testimonial
                </span>
              </div>
              <div className="section__title__heading">
                <h3>
                  SEE WHAT OTHER ARE <br />
                  SAYING
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row position-relative"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <Swiper
            className="testimonial__3__slider__active position-static"
            grabCursor={true}
            pagination={
              type === 1
                ? null
                : {
                    clickable: true,
                  }
            }
            navigation={true}
            slidesPerView={1}
            modules={type === 2 ? [Navigation] : [Navigation, Pagination]}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },

              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {slides?.map((slide, idx) => (
              <SwiperSlide
                className="testimonial__3__single__wraper  col-md-4"
                key={idx}
              >
                <TestimonialSlide3 slide={slide} type={type} />
              </SwiperSlide>
            ))}

            <div className="slider__controls__wrap slider__controls__pagination slider__controls__arrows">
              <div
                className={`swiper-button-next arrow-btn ${
                  type === 2 ? "arrow-btn-3" : "b"
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
                  type === 2 ? "arrow-btn-3" : "b"
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
      </div>
    </div>
  );
};

export default Testimonials3;
