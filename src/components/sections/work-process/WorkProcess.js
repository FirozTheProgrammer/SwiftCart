import WPArorowButton from "@/components/shared/buttons/WPArorowButton";
import WorkProcessCard from "@/components/shared/cards/WorkProcessCard";
import wpBgImage from "@/assets/img/process/process__bg__1.png";
import React from "react";

const WorkProcess = ({ type }) => {
  const arrows = [
    {
      path: "/service",
      duration: 1800,
    },
    {
      path: "/projects",
      duration: 2400,
    },
  ];
  const items = [
    {
      id: 1,
      title: "BOOK A SERVICE",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      duration: 1500,
      path: "/services",

      img: (
        <svg
          width="58"
          height="58"
          viewBox="0 0 58 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <mask
            id="mask0_1230_28533"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="58"
            height="58"
          >
            <rect width="58" height="58" fill="url(#pattern10)" />
          </mask>
          <g mask="url(#mask0_1230_28533)">
            <rect width="58" height="58" fill="url(#paint0_linear_1230_5555)" />
          </g>
          <defs>
            <pattern
              id="pattern10"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_1230_28534"
                transform="scale(0.0078125)"
              />
            </pattern>
            <linearGradient
              id="paint0_linear_1230_5555"
              x1="1.18439e-07"
              y1="34"
              x2="58"
              y2="34"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#00229E" />
              <stop offset={0.479167} stopColor="#6E1299" />
              <stop offset={1} stopColor="#FE0094" />
            </linearGradient>
            <image
              id="image0_1230_28534"
              width="128"
              height="128"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      ),
    },
    {
      id: 2,
      title: "START PROJECT",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      duration: 2100,
      path: "/projects",

      img: (
        <svg
          width="58"
          height="58"
          viewBox="0 0 58 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <mask
            id="mask0_1230_2861"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="58"
            height="58"
          >
            <rect width="58" height="58" fill="url(#pattern0_1230_2861)" />
          </mask>
          <g mask="url(#mask0_1230_2861)">
            <rect width="58" height="58" fill="url(#paint0_linear_1230_5555)" />
          </g>
          <defs>
            <pattern
              id="pattern0_1230_2861"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_1230_2861" transform="scale(0.0078125)" />
            </pattern>
            <image
              id="image0_1230_2861"
              width="128"
              height="128"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      ),
    },
    {
      id: 3,
      title: "COMPLETE PROJECT",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      duration: 2700,
      path: "/projects",

      img: (
        <svg
          width="58"
          height="58"
          viewBox="0 0 58 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <mask
            id="mask0_1230_2870"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="58"
            height="58"
          >
            <rect width="58" height="58" fill="url(#pattern0_1230_2870)" />
          </mask>
          <g mask="url(#mask0_1230_2870)">
            <rect width="58" height="58" fill="url(#paint0_linear_1230_2870)" />
          </g>
          <defs>
            <pattern
              id="pattern0_1230_2870"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_1230_2870" transform="scale(0.0078125)" />
            </pattern>
            <linearGradient
              id="paint0_linear_1230_2870"
              x1="1.18439e-07"
              y1="34"
              x2="58"
              y2="34"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#00229E" />
              <stop offset={0.479167} stopColor="#6E1299" />
              <stop offset={1} stopColor="#FE0094" />
            </linearGradient>
            <image
              id="image0_1230_2870"
              width="128"
              height="128"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      ),
    },
  ];

  return (
    <div
      className={`work__process sp_top_140  ${
        type === 2 ? "sp_bottom_140" : "sp_bottom_270"
      }`}
      style={{ background: `var(--blackBlue) url('${wpBgImage.src}')` }}
    >
      <div className="container">
        <div className="row">
          <div
            className="col-xl-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="section__title section__title--3 text-center sp_bottom_70">
              <div className="section__title__button">
                <span>{type === 2 ? "What we can do" : "Work Process"}</span>
              </div>
              <div className="section__title__heading">
                <h3>
                  {type === 2 ? "MAIN GOAL EVENT CONFERENCE." : "HOW IT WORK?"}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="work__process__inner__wrap">
          {items?.map((item, idx) => (
            <React.Fragment key={idx}>
              <WorkProcessCard item={item} />
              {idx < 2 ? <WPArorowButton arrow={arrows[idx]} /> : ""}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
