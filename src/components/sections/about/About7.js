import Image from "next/image";
import aboutImage2 from "@/assets/img/about/about__2.png";
import aboutSmallImage2 from "@/assets/img/about/about__small__img__2.png";

const About7 = ({ id }) => {
  return (
    <div
      className="about position-relative sp_bottom_120 sp_top_120"
      id={id ? id : "about__mission__area"}
    >
      <div className="container">
        <div className="row">
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
                src={aboutImage2}
                alt=""
                placeholder="blur"
              />
              <div className="about__big__title">
                <h1>FAQ</h1>
              </div>

              <div className="section__strock__line__animation">
                <Image
                  className="ssla__animation ssl__img__3"
                  src={aboutSmallImage2}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
            data-aos="fade-up"
            data-aos-duration="2100"
          >
            <div className="about__inner about__inner--2">
              <div className="section__title section__title--2  sp_bottom_30">
                <div className="section__title__button">
                  <span className="text__gradient">About FAQ</span>
                </div>
                <div className="section__title__heading">
                  <h3>WE 32 YEAR OF EXPRIENCE.</h3>
                </div>
              </div>

              <div className="faq__accordion">
                <div className="accordion" id="accordionPanelsStayOpenExample">
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingOne"
                    >
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        What is business consulting?
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="panelsStayOpen-headingOne"
                    >
                      <div className="accordion-body">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="accordion__text">
                              <p>
                                Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur excepteur sint occaecat
                                cupidatat.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingTwo"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo"
                      >
                        How do I choose the right consultant?
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingTwo"
                    >
                      <div className="accordion-body">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="accordion__text">
                              <p>
                                Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur excepteur sint occaecat cupidatat
                                non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingThree"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree"
                      >
                        What services do business consultants offer?
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingThree"
                    >
                      <div className="accordion-body">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="accordion__text">
                              <p>
                                Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur excepteur sint occaecat cupidatat
                                non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingfour"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapsefour"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapsefour"
                      >
                        How do I choose the right consultant?
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapsefour"
                      className="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingfour"
                    >
                      <div className="accordion-body">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="accordion__text">
                              <p>
                                Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur excepteur sint occaecat cupidatat
                                non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About7;
