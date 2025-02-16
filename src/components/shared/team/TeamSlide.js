import Image from "next/image";
import Link from "next/link";
import React from "react";

const TeamSlide = ({ teamSingle }) => {
  const { id, name, desig, img } = teamSingle;
  return (
    <div className="team__member__single common__gradient__bg single__transform">
      <div className="team__member__single__inner">
        <div className="team__member__img">
          <Image src={img} alt="tam-single" />
        </div>

        <div className="team__member__name">
          <h6>
            <Link href={`/team/${id}`}>{name}</Link>
          </h6>
          <p>{desig}</p>
        </div>
        <div className="team__member__icon team__member__icon--2">
          <ul>
            <li>
              <Link href="https://www.facebook.com">
                <i className="icofont-facebook"></i>
              </Link>
            </li>
            <li>
              <Link href="https://x.com">
                <i className="icofont-twitter"></i>
              </Link>
            </li>
            <li>
              <Link href="https://www.skype.com">
                <i className="icofont-skype"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamSlide;
