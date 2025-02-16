"use client";

import serviceBgImage4 from "@/assets/img/service/service__bg__4.png";
import ServiceCard3 from "@/components/shared/cards/ServiceCard3";
import getAllServices from "@/libs/getAllServices";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Services5 = () => {
  const allServices = getAllServices();
  const services = [
    ...allServices?.slice(13, 17),
    ...allServices?.slice(13, 15),
  ];
  return (
    <div
      className="service sp_top_140 sp_bottom_140 special__spacing"
      id="service__area"
      style={{ background: `url('${serviceBgImage4.src}')` }}
    >
      <div className="container">
        <div
          className="row sp_bottom_70"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="col-xl-9 col-lg-9 col-md-9 col-sm-8 col-8">
            <div className="section__title section__title--2  section__title--3">
              <div className="section__title__button">
                <span>Our Service</span>
              </div>
              <div className="section__title__heading">
                <h3>CONSULTING SERVICE</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="row position-relative">
          <Swiper
            className="service__slider__active position-static"
            grabCursor={true}
            navigation={true}
            slidesPerView={1}
            modules={[Navigation]}
            breakpoints={{
              500: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },

              768: {
                slidesPerView: 2,
              },

              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
              1500: {
                slidesPerView: 4,
              },
            }}
          >
            {services?.map((service, idx) => (
              <SwiperSlide
                className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12"
                key={idx}
              >
                <ServiceCard3 service={service} />
              </SwiperSlide>
            ))}
            <div className="slider__control__top__wrap">
              <div className="slider__controls__wrap slider__controls__pagination slider__controls__arrows slider__controls__arrows--3">
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
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Services5;
