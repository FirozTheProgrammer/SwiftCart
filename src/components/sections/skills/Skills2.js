import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import React from "react";

const Skills2 = () => {
  return (
    <div
      className="skillarea sp_bottom_110 sp_top_120"
      style={{ backgroundColor: "var(--navyBlue2)" }}
      id="about__mission__area"
    >
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="about__inner about__inner--2">
              <div className="section__title  section__title--2 section__title--3">
                <div className="section__title__button">
                  <span>About</span>
                </div>
                <div className="section__title__heading">
                  <h3>QUALITY SECURE BUSINESS.</h3>
                </div>
              </div>

              <div className="about__vision__wrapper about__vision__wrapper--3">
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
                      Lorem ipsum dolor sit amet, consectetur elit adipiscing,{" "}
                      <a href="#">sed do eiusmod tempor incididunt</a> labore et
                      dolore magna aliqua.
                    </p>
                  </div>
                  <div className="about__button">
                    <ButtonPrimary
                      text={"LEARN MORE ABOUT"}
                      path={"/about"}
                      button={"white"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <div className="skill__sets bg__black">
              <div className="single-progress mt-0">
                <h6 className="title">Web Development</h6>
                <div className="progress">
                  <div
                    className="progress-bar progress__gradient"
                    role="progressbar"
                    style={{
                      width: "90%",
                      visibility: "visible",
                      animationDuration: "0.5s",
                      animationDelay: "0.3s",
                      animationName: "fadeInLeft",
                    }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <span className="progress-number">90%</span>
                </div>
              </div>

              <div className="single-progress">
                <h6 className="title">Photoshop Design</h6>
                <div className="progress">
                  <div
                    className="progress-bar progress__gradient"
                    role="progressbar"
                    style={{
                      width: "75%",
                      visibility: "visible",
                      animationDuration: "0.5s",
                      animationDelay: "0.3s",
                      animationName: "fadeInLeft",
                    }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <span className="progress-number">75%</span>
                </div>
              </div>

              <div className="single-progress">
                <h6 className="title">App Development</h6>
                <div className="progress">
                  <div
                    className="progress-bar progress__gradient"
                    role="progressbar"
                    style={{
                      width: "95%",
                      visibility: "visible",
                      animationDuration: "0.5s",
                      animationDelay: "0.3s",
                      animationName: "fadeInLeft",
                    }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <span className="progress-number">95%</span>
                </div>
              </div>

              <div className="single-progress">
                <h6 className="title">Application Development</h6>
                <div className="progress">
                  <div
                    className="progress-bar progress__gradient"
                    role="progressbar"
                    style={{
                      width: "95%",
                      visibility: "visible",
                      animationDuration: "0.5s",
                      animationDelay: "0.3s",
                      animationName: "fadeInLeft",
                    }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <span className="progress-number">95%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills2;
