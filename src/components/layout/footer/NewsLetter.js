import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

import React from "react";

const NewsLetter = ({ style }) => {
  return (
    <div
      className={` ${
        !style
          ? "col-xl-4 col-lg-6 col-md-6 col-sm-12"
          : " col-xl-3  col-lg-3 col-md-6 col-sm-6"
      }`}
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div
        className={`footer__widget footer__right ${
          !style ? "" : "footer__right--2"
        }`}
      >
        <div className="footer__menu__title">
          <h6>SUBSCRIP NEWSLETTER :</h6>
        </div>
        <div className="footer__input">
          <input type="text" placeholder="Enter your email:" />
        </div>
        <div className="footer__bottom">
          <ButtonPrimary text={" SUBSCRIBE NOW"} type="submit" />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
