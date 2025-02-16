import React from "react";
import ButtonPrimary from "../buttons/ButtonPrimary";

const Hero3Slide = ({ slide }) => {
  const { title, desc, path } = slide;
  return (
    <div className="container">
      <div className="row align-items-center height__800">
        <div
          className="col-xxl-6 col-xl-7 col-lg-8 col-md-8 col-sm-12"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="herobanner__content__wrapper">
            <div className="herobanner__title herobanner__title--mid">
              <h1>{title}</h1>
            </div>
            <div className="herobanner__text">
              <p>{desc}</p>
            </div>
            <div className="herobanner__button">
              <ButtonPrimary text={"OUR ALL SERVICES"} path={path} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3Slide;
