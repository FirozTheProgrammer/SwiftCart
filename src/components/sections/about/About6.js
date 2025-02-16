import React from "react";
import aboutSassImage2 from "@/assets/img/about/about__sass__2.png";
import Image from "next/image";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
const About6 = () => {
  return (
    <div
      className="about ext-about position-relative sp_top_140"
      id="about__mission__area"
    >
      <div className="container">
        <div className="row">
          <div
            className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
            data-aos="fade-up"
            data-aos-duration="2100"
          >
            <div className="about__inner about__inner--2">
              <div className="section__title section__title--2  sp_bottom_30">
                <div className="section__title__button">
                  <span className="text__gradient">Why Choose Us</span>
                </div>
                <div className="section__title__heading">
                  <h3>
                    WE HAVE 32 YEARS OF EXPERIENCE SINCE{" "}
                    <span className="text__gradient">1986.</span>{" "}
                  </h3>
                </div>
              </div>

              <div className="about__vision__wrapper sp_bottom_20">
                <div className="about__number">
                  <div className="about__number__inner">
                    <span>29</span>
                    <p>Years Experience</p>
                    <div className="about__number__icon">
                      <a href="#">
                        {" "}
                        <svg
                          width="34"
                          height="34"
                          viewBox="0 0 34 34"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.4258 10.9897L23.0101 10.9897L23.0101 19.574"
                            stroke="#0A0624"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M10.9902 23.0107L22.8908 11.1101"
                            stroke="#0A0624"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="about__text__wrapper">
                  <div className="about__misson">
                    <h6> Mission & Vision</h6>
                  </div>
                  <div className="about__text__2">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adi elit,{" "}
                      <a href="#">sed do eiusmod tempor incididunt</a> ut labore
                      et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
              <div className="about__list">
                <ul>
                  <li>
                    <i className="icofont-check"></i>Hiring Solution
                  </li>
                  <li>
                    <i className="icofont-check"></i>Finding the right talent
                  </li>
                  <li>
                    <i className="icofont-check"></i>Onboarding Solution
                  </li>
                  <li>
                    <i className="icofont-check"></i>Smooth onboarding sets
                  </li>
                  <li>
                    <i className="icofont-check"></i>Competitive compensation
                  </li>
                  <li>
                    <i className="icofont-check"></i>A positive workplace
                    culture
                  </li>
                </ul>
              </div>
              <div className="about__button">
                <ButtonPrimary
                  text={"LEARN MORE ABOUT"}
                  button={"black"}
                  path={"/about"}
                />
              </div>
            </div>
          </div>

          <div
            className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <div
              className="about__img__wrapper about__img__wrapper--2 position-relative"
              data-tilt
            >
              <Image
                className="about__img__1"
                src={aboutSassImage2}
                alt="about__sass2"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About6;
