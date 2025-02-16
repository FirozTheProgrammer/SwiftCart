import Link from "next/link";
import React from "react";

const PricingCard = ({ plan }) => {
  const { id, name, price, business, features, isSpecial } = plan;
  return (
    <div
      className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 pricing__single__wrap"
      data-aos="fade-up"
      data-aos-duration="2400"
    >
      <div className="common__gradient__bg pricing__gradient single__transform">
        <div
          className={`pricing__single ${isSpecial ? " pricing__special" : ""}`}
        >
          {isSpecial ? (
            <div className="pricing__special__badge">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="55"
                viewBox="0 0 36 55"
                fill="none"
              >
                <path
                  d="M14.8596 32.0792L18.1387 30.3798L21.4161 32.0742L20.7867 28.4819L23.4394 25.9344L19.7738 25.4119L18.134 22.1436L16.496 25.4149L12.832 25.9407L15.4843 28.4835L14.8596 32.0792Z"
                  fill="#07B318"
                />
                <path d="M0 0H36V6.55273H0V0Z" fill="#07B318" />
                <path
                  d="M0 55L18 45.5225L36 55V9.77539H0V55ZM14.3229 22.4692L18.1308 14.8611L21.9469 22.4663L30.4709 23.6811L24.306 29.6056L25.7663 37.9657L18.1389 34.0208L10.5166 37.9707L11.9693 29.6103L5.79759 23.6937L14.3229 22.4692Z"
                  fill="#07B318"
                />
              </svg>
            </div>
          ) : (
            ""
          )}
          <div className="pricing__small__button">
            <span>{name}</span>
          </div>

          <div className="common__gradient__bg pricing__inner__gradient">
            <div className="pricing__single__price">
              <h6 className="text__gradient ">{price}</h6>
              <span>{business}</span>
            </div>
          </div>
          <div className="pricing__single__text">
            <ul>
              {features?.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="pricing__single__button">
            <Link className="default__button common__gradient__bg" href="#">
              <span>GET STARTED</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
