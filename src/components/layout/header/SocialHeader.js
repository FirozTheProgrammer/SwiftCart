import Social from "@/components/shared/socials/Social";
import React from "react";

const SocialHeader = () => {
  return (
    <div className="headerarea__icon">
      <Social>
        <li className="headerarea__icon__offcanvas">
          <button
            className="headerarea__bar__wrapper"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="20" height="2" fill="#0A0624" />
              <rect y="7" width="20" height="2" fill="#0A0624" />
              <rect y="14" width="20" height="2" fill="#0A0624" />
            </svg>
          </button>
        </li>
      </Social>
    </div>
  );
};

export default SocialHeader;
