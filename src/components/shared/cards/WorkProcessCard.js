import Link from "next/link";
import React from "react";

const WorkProcessCard = ({ item }) => {
  const { img, path, title, desc, duration } = item;
  return (
    <div
      className="work__process__single single__transform "
      data-aos="fade-up"
      data-aos-duration={duration}
    >
      <div className="work__process__icon">
        <Link href={path}>{img}</Link>
      </div>
      <div className="work__process__content">
        <div className="work__process__name">
          <h6>
            <Link href={path}>{title}</Link>
          </h6>
        </div>
        <div className="work__process__text">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkProcessCard;
