"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const ServiceCard2 = ({ service, type }) => {
  const currentCategory = useSearchParams().get("category");
  const { title, img, id, duration, desc } = service;
  return (
    <div
      className={`${
        currentCategory ? "col-xl-3" : "col-xl-4"
      }  col-lg-4 col-md-6 col-sm-6 col-12`}
      data-aos="fade-up"
      data-aos-duration={duration}
    >
      <div className="service__single__wraper service__single__wraper--2 common__gradient__bg single__transform">
        <div className="service__single__inner">
          <div className="service__img">
            <Image src={img} alt="" />
            <div className="service__bg__img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="165"
                height="150"
                viewBox="0 0 165 150"
                fill="none"
              >
                <path
                  d="M165 65C165 106.421 116.421 150 75 150C33.5786 150 0 116.421 0 75C0 33.5786 33.5786 0 75 0C116.421 0 165 23.5786 165 65Z"
                  fill="url(#paint0_linear_1212_422)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1212_422"
                    x1="3.36937e-07"
                    y1="87.931"
                    x2="165"
                    y2="87.931"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.479167" stopColor="#00229E" />
                    <stop offset="0.479167" stopColor="#6E1299" />
                    <stop offset="1" stopColor="#FE0094" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="service__content">
            <div className="service__heading">
              <h5 className="text-uppercase">
                <Link href={`/services/${id}`}>
                  {currentCategory ? title?.slice(0, 13) : title?.slice(0, 20)}
                </Link>
              </h5>
            </div>
            <div className="service__text">
              <p>{desc}</p>
            </div>
          </div>
          <div className="service__icon service__icon--2">
            <Link
              className={`direction__btn  ${
                type === 2 ? "" : "direction__btn--2"
              }`}
              href={`/services/${id}`}
            >
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.4258 10.9897L23.0101 10.9897L23.0101 19.574"
                  stroke="#0A0624"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.9902 23.0107L22.8908 11.1101"
                  stroke="#0A0624"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard2;
