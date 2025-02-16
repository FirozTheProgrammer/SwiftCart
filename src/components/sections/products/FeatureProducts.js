"use client";
import ProductCard from "@/components/shared/cards/ProductCard";
import getAllProducts from "@/libs/getAllProducts";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const FeatureProducts = ({ tag, title, type, id }) => {
  const products = getAllProducts()?.filter(({ featured }) => featured);
  return (
    <section
      className={`featured__collection ${
        type === 2 ? " sp_bottom_140 " : "sp_top_120 sp_bottom_120 "
      }`}
      id={id ? id : "featured__collection"}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div
              className="section__title text-center sp_bottom_50"
              data-aos="fade-up"
              data-aos-duration="1800"
            >
              <div className="section__title__button">
                <span className="text__gradient">
                  {tag ? tag : "Featured Collection"}
                </span>
              </div>
              <div className="section__title__heading">
                <h3>{title ? title : "CORPORATE PRODUCTS."}</h3>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row row__custom__class position-relative"
          data-aos="fade-up"
          data-aos-duration="2200"
        >
          <Swiper
            className="team__slider__active position-static"
            grabCursor={true}
            navigation={true}
            slidesPerView={1}
            modules={[Navigation]}
            breakpoints={{
              575: {
                slidesPerView: 1,
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
            {products?.map((product, idx) => (
              <SwiperSlide
                className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 column__custom__class"
                key={idx}
              >
                <ProductCard product={product} />
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
        </div>
      </div>
    </section>
  );
};

export default FeatureProducts;
