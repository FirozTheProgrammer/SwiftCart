import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import React from "react";

const ConsultingFooter = () => {
  return (
    <div className="col-xl-12" data-aos="fade-up" data-aos-duration="1500">
      <div className="footer__4__wrapper">
        <div className="footer__4__small__text">
          <span>RADY TO ELEVATE YOUR BUSINESS TO NEW HEIGHTS?</span>
        </div>
        <div className="footer__4__heading">
          <h1>
            MAXIMIZE YOUR BUSINESSS GROWTH TRAJECTORY WITH OUR STRATEGIC
            CONSULTING.
          </h1>
        </div>
        <div className="footer__4__button">
          <ButtonPrimary text="START NOW" path="/services" />
        </div>
      </div>
    </div>
  );
};

export default ConsultingFooter;
