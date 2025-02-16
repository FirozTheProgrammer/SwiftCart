import Image from "next/image";
import React from "react";

const FeatureCard = ({ feature }) => {
  const { id, title, desc, img, duration } = feature;
  return (
    <div
      className="col-lg-4 col-md-6"
      data-aos="fade-up"
      data-aos-duration={duration}
    >
      <div className="service__features__item">
        <div className="service__features__icon">
          <Image src={img} alt="" />
        </div>
        <div className="service__features__content">
          <h4 className="service__name">{title}</h4>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
