"use client";
import projectImage8 from "@/assets/img/project/project__8.png";
import projectImage9 from "@/assets/img/project/project__9.png";
import projectImage10 from "@/assets/img/project/project__10.png";

import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard3 from "@/components/shared/cards/ProjectCard3";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import { Navigation } from "swiper/modules";

const Projects3 = () => {
  const projects = [
    {
      id: 1,
      title: "Risk assessment and management",
      img: projectImage8,
    },
    {
      id: 2,
      title: "Best assessment and management",
      img: projectImage9,
    },
    {
      id: 3,
      title: "Asset assessment and management",
      img: projectImage10,
    },
    {
      id: 4,
      title: "Risk assessment and management",
      img: projectImage8,
    },
  ];
  return (
    <div className="project__3 sp_top_140 sp_bottom_140" id="project__area">
      <div className="container">
        <div
          className="row sp_bottom_70"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="col-xl-9 col-lg-9 col-md-9 col-sm-8 col-8">
            <div className="section__title section__title--2  section__title--3">
              <div className="section__title__button">
                <span>Our Project</span>
              </div>
              <div className="section__title__heading">
                <h3>COMPLETED PROJECTS</h3>
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
            className="project__slider__active position-static"
            grabCursor={true}
            navigation={true}
            modules={[Navigation]}
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
                slidesPerView: 3,
              },
              1500: {
                slidesPerView: 3,
              },
            }}
          >
            {projects?.map((project, idx) => (
              <SwiperSlide
                className="col-xl-4 col-lg-4 col-md-6 col-sm-12 "
                key={idx}
              >
                <ProjectCard3 project={project} />
              </SwiperSlide>
            ))}
            <div className="slider__control__top__wrap ">
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

          <div
            className="col-xl-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="project__3__button">
              <ButtonPrimary text="VIEW OTHER PROJECTS" path="/projects" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects3;
