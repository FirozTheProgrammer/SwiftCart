import Link from "next/link";
import React from "react";

const WPArorowButton = ({ arrow }) => {
  const { path, duration } = arrow;
  return (
    <div
      className="work__process__arrow"
      data-aos="fade-up"
      data-aos-duration={duration}
    >
      <Link className="direction__btn direction__btn--2" href={path}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.4297 5.92999L20.4997 12L14.4297 18.07"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.5 12L20.33 12"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
};

export default WPArorowButton;
