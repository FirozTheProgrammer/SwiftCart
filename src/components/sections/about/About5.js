import Image from "next/image";
import aboutImage1 from "@/assets/img/about/about__1.png";
import aboutSmallImage1 from "@/assets/img/about/about__small__img__1.png";
import aboutSmallImage2 from "@/assets/img/about/about__small__img__2.png";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const About5 = ({ type, desc, title, img }) => {
  return (
    <div
      className={`about about__hiring__solution position-relative sp_bottom_140 ${
        type === 3 ? "" : "sp_top_140 "
      }`}
      id="about__mission__area"
    >
      <div className="container">
        <div className="row">
          <div
            className="col-xl-7 col-lg-7 col-md-12 col-sm-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="about__img__wrapper position-relative" data-tilt>
              <Image
                className="about__img__1"
                src={img ? img : aboutImage1}
                placeholder="blur"
                alt=""
              />
              <div className="about__number">
                <div className="about__number__inner about__number__position">
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
              <div className="section__strock__line__animation">
                <Image
                  className="ssla__animation ssl__img__1"
                  src={aboutSmallImage1}
                  alt=""
                />
                <Image
                  className="ssla__animation ssl__img__2"
                  src={aboutSmallImage2}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            className="col-xl-5 col-lg-5 col-md-12 col-sm-12"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="about__inner">
              <div className="section__title section__title--2 sp_bottom_30">
                <div
                  className={`section__title__heading  ${
                    type === 2 || type === 3 ? "" : "sp_bottom_20"
                  }`}
                >
                  <h3>
                    {title ? (
                      title
                    ) : (
                      <>
                        Your one-stop solution for All HR Needs Since{" "}
                        <span className="text__gradient">1998.</span>{" "}
                      </>
                    )}
                  </h3>
                </div>

                <div className="section__title__text">
                  <p>
                    {desc
                      ? desc
                      : "Welcome to our comprehensive HR solutions hub, your one-stop destination for addressing all your HR needs."}
                  </p>
                </div>
              </div>

              {type === 2 || type === 3 ? (
                <>
                  <div className="about__misson">
                    <h6>My Mission & Vision</h6>
                  </div>
                  <div className="about__text__2">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="about__text__3">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </>
              ) : (
                <div className="about__hiring__list">
                  <ul>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-briefcase"
                      >
                        <rect
                          x="2"
                          y="7"
                          width="20"
                          height="14"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </svg>{" "}
                      Hiring
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-user-plus"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="8.5" cy="7" r="4"></circle>
                        <line x1="20" y1="8" x2="20" y2="14"></line>
                        <line x1="23" y1="11" x2="17" y2="11"></line>
                      </svg>{" "}
                      Onboarding
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-dollar-sign"
                      >
                        <line x1="12" y1="1" x2="12" y2="23"></line>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                      </svg>
                      Compensation
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-users"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>{" "}
                      Culture
                    </li>
                  </ul>
                </div>
              )}

              <div className="about__button">
                <ButtonPrimary text={"LEARN MORE ABOUT"} path={"/about"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About5;
