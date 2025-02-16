"use client";
import TeamSlide from "@/components/shared/team/TeamSlide";
import getTeamMembers from "@/libs/getTeamMembers";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Team2 = ({ type }) => {
  const team = getTeamMembers().slice(12, 18);
  return (
    <div
      className={`team__member ${
        type === 2 ? " sp_bottom_120 " : "sp_top_140 sp_bottom_140 "
      }`}
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section__title text-center sp_bottom_90">
              <div className="section__title__button">
                <span className="text__gradient">Our Team</span>
              </div>
              <div className="section__title__heading">
                <h3>WE OFFER CONSULTANCY SERVICES.</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row position-relative">
          <Swiper
            className="team__slider__active team__padding"
            style={{ position: "static" }}
            grabCursor={true}
            navigation={true}
            maxBackfaceHiddenSlides={10}
            slidesPerView={1}
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
            modules={[Navigation]}
          >
            {team?.map((teamSingle, idx) => (
              <SwiperSlide
                className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12"
                key={idx}
                // data-aos="fade-up"
                // data-aos-duration={teamSingle?.duration}
              >
                <TeamSlide teamSingle={teamSingle} />
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
    </div>
  );
};

export default Team2;
