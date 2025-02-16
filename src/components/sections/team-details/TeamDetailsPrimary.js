"use client";

import getTeamMembers from "@/libs/getTeamMembers";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const TeamDetailsPrimary = ({ pb }) => {
  const { id: currentId } = useParams();
  const team = getTeamMembers();
  const { id, name, desig, img } = team?.find(
    ({ id }) => id === parseInt(currentId)
  );

  return (
    <div
      className={`team__details sp_top_140 ${
        pb ? pb : "sp_bottom_140"
      } special__spacing`}
    >
      <div className="container">
        <div className="row">
          <div
            className="col-xl-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="team__details__project__manager">
              <div className="team__member__3__single team__member__border text-center single__transform team__details__top">
                <div className="team__member__3__single__inner">
                  <div className="team__member__3__img">
                    <Image src={img} alt="" />
                  </div>

                  <div className="team__member__icon">
                    <ul>
                      <li>
                        <Link
                          className="direction__btn"
                          href="https://www.facebook.com"
                        >
                          <i className="icofont-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link className="direction__btn" href="https://x.com">
                          <i className="icofont-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="direction__btn"
                          href="https://www.skype.com"
                        >
                          <i className="icofont-skype"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="team__details__project__manager__content">
                <div className="team__details__project__manager__title">
                  <h6>{name}</h6>
                  <span className="text__gradient">{desig}</span>
                </div>
                <div className="team__details__project__manager__text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="team__details__project__manager__number">
                  <div className="team__details__project__icon">
                    <Link href="#">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1501_3494)">
                          <path
                            d="M17.3866 13.6282C16.9362 13.1592 16.3929 12.9084 15.8171 12.9084C15.246 12.9084 14.6981 13.1545 14.2291 13.6235L12.7619 15.0861C12.6412 15.0211 12.5204 14.9608 12.4043 14.9004C12.2372 14.8168 12.0793 14.7379 11.9447 14.6543C10.5703 13.7814 9.32123 12.6438 8.12327 11.1719C7.54287 10.4382 7.15283 9.82069 6.8696 9.19385C7.25034 8.8456 7.60323 8.48343 7.94683 8.13518C8.07684 8.00517 8.20685 7.87052 8.33686 7.74051C9.31194 6.76543 9.31194 5.50246 8.33686 4.52738L7.06925 3.25977C6.92531 3.11583 6.77673 2.96725 6.63743 2.81866C6.35884 2.53078 6.06631 2.23361 5.7645 1.95502C5.31411 1.50927 4.77549 1.27246 4.20901 1.27246C3.64254 1.27246 3.09463 1.50927 2.63031 1.95502C2.62566 1.95966 2.62566 1.95966 2.62102 1.96431L1.04232 3.55694C0.44798 4.15128 0.109023 4.87562 0.0347313 5.71605C-0.0767067 7.07188 0.322613 8.33485 0.629067 9.16134C1.38127 11.1904 2.50494 13.071 4.18115 15.0861C6.2149 17.5146 8.66189 19.4322 11.4571 20.7834C12.5251 21.2895 13.9506 21.8885 15.5432 21.9906C15.6407 21.9953 15.7428 21.9999 15.8357 21.9999C16.9083 21.9999 17.8091 21.6145 18.5149 20.8484C18.5195 20.8391 18.5288 20.8345 18.5334 20.8252C18.7749 20.5327 19.0535 20.268 19.346 19.9848C19.5457 19.7944 19.75 19.5947 19.9496 19.3858C20.4093 18.9075 20.6508 18.3503 20.6508 17.7792C20.6508 17.2035 20.4047 16.6509 19.9357 16.1866L17.3866 13.6282ZM19.0488 18.5175C19.0442 18.5175 19.0442 18.5221 19.0488 18.5175C18.8678 18.7125 18.682 18.889 18.4824 19.084C18.1806 19.3719 17.8741 19.6737 17.5862 20.0126C17.1172 20.5141 16.5647 20.7509 15.8404 20.7509C15.7707 20.7509 15.6964 20.7509 15.6268 20.7463C14.2477 20.658 12.9662 20.1194 12.005 19.6597C9.37695 18.3875 7.06925 16.5813 5.15159 14.2921C3.56824 12.3838 2.50958 10.6193 1.80845 8.72488C1.37663 7.56871 1.21876 6.66792 1.28841 5.8182C1.33484 5.27494 1.54379 4.82455 1.92918 4.43916L3.51253 2.85581C3.74004 2.64222 3.98149 2.52614 4.2183 2.52614C4.51082 2.52614 4.74763 2.70258 4.89621 2.85117C4.90086 2.85581 4.9055 2.86045 4.91014 2.8651C5.19338 3.12976 5.46269 3.40371 5.74593 3.69624C5.88987 3.84482 6.03845 3.99341 6.18704 4.14663L7.45464 5.41424C7.94683 5.90643 7.94683 6.36146 7.45464 6.85365C7.31999 6.9883 7.18998 7.12296 7.05533 7.25297C6.66529 7.65229 6.29383 8.02375 5.88987 8.38592C5.88058 8.39521 5.8713 8.39985 5.86665 8.40914C5.46733 8.80846 5.54163 9.19849 5.6252 9.46315C5.62985 9.47708 5.63449 9.49101 5.63913 9.50494C5.9688 10.3036 6.43313 11.0558 7.1389 11.9519L7.14355 11.9566C8.42508 13.5353 9.77627 14.7657 11.2668 15.7083C11.4571 15.8291 11.6521 15.9266 11.8379 16.0194C12.005 16.103 12.1629 16.1819 12.2976 16.2655C12.3161 16.2748 12.3347 16.2887 12.3533 16.298C12.5111 16.377 12.6597 16.4141 12.813 16.4141C13.1983 16.4141 13.4398 16.1727 13.5187 16.0937L15.1067 14.5057C15.2646 14.3479 15.5153 14.1575 15.8079 14.1575C16.0957 14.1575 16.3325 14.3386 16.4765 14.4964C16.4811 14.5011 16.4811 14.5011 16.4858 14.5057L19.0442 17.0642C19.5225 17.5378 19.5225 18.0253 19.0488 18.5175Z"
                            fill="url(#paint0_linear_1501_3494)"
                          />
                          <path
                            d="M11.8871 5.23324C13.1036 5.43755 14.2087 6.01331 15.0909 6.89553C15.9731 7.77774 16.5442 8.88284 16.7532 10.0994C16.8043 10.4058 17.0689 10.6194 17.3707 10.6194C17.4079 10.6194 17.4404 10.6148 17.4775 10.6101C17.8211 10.5544 18.0487 10.2294 17.9929 9.88578C17.7422 8.41387 17.0457 7.07197 15.9824 6.00867C14.9191 4.94536 13.5772 4.24887 12.1053 3.99814C11.7617 3.94242 11.4413 4.16994 11.3809 4.5089C11.3206 4.84785 11.5435 5.17752 11.8871 5.23324Z"
                            fill="url(#paint1_linear_1501_3494)"
                          />
                          <path
                            d="M21.974 9.70466C21.5607 7.28089 20.4185 5.07534 18.6633 3.32019C16.9082 1.56505 14.7026 0.422806 12.2789 0.0095565C11.9399 -0.0508058 11.6195 0.181357 11.5592 0.520314C11.5034 0.863915 11.731 1.1843 12.0746 1.24466C14.2383 1.61148 16.2117 2.63764 17.7811 4.20241C19.3505 5.77183 20.3721 7.74521 20.7389 9.90897C20.7899 10.2154 21.0546 10.429 21.3564 10.429C21.3936 10.429 21.4261 10.4244 21.4632 10.4197C21.8022 10.3686 22.0343 10.0436 21.974 9.70466Z"
                            fill="url(#paint2_linear_1501_3494)"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_1501_3494"
                            x1="0.015625"
                            y1="13.423"
                            x2="20.6508"
                            y2="13.423"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#00229E" />
                            <stop offset="0.479167" stopColor="#6E1299" />
                            <stop offset="1" stopColor="#FE0094" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_1501_3494"
                            x1="11.3711"
                            y1="7.8761"
                            x2="18.0013"
                            y2="7.8761"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#00229E" />
                            <stop offset="0.479167" stopColor="#6E1299" />
                            <stop offset="1" stopColor="#FE0094" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_1501_3494"
                            x1="11.5508"
                            y1="6.11356"
                            x2="21.9835"
                            y2="6.11356"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#00229E" />
                            <stop offset="0.479167" stopColor="#6E1299" />
                            <stop offset="1" stopColor="#FE0094" />
                          </linearGradient>
                          <clipPath id="clip0_1501_3494">
                            <rect width="22" height="22" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                    <div className="team__details__number">
                      <p>(000) 967-237-96</p>
                    </div>
                  </div>

                  <div className="team__details__project__icon">
                    <Link href="#">
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1501_3467)">
                          <path
                            d="M18.9833 8.26401C18.7934 8.07261 18.4843 8.07134 18.2928 8.26123C18.1014 8.45117 18.1001 8.76035 18.2901 8.9518L18.293 8.95483C18.3881 9.05068 18.5127 9.09844 18.6374 9.09844C18.7619 9.09844 18.8865 9.05088 18.9821 8.95605C19.1735 8.76611 19.1733 8.45547 18.9833 8.26401Z"
                            fill="url(#paint0_linear_1501_3467)"
                          />
                          <path
                            d="M24.8564 14.1358L20.3214 9.60078C20.1307 9.41016 19.8215 9.41016 19.6308 9.60078C19.4401 9.79146 19.4401 10.1006 19.6308 10.2914L23.231 13.8915H14.6458C13.9336 13.8915 13.3542 13.3121 13.3542 12.6V4.0148L16.83 7.49048C17.0206 7.6811 17.3298 7.6811 17.5205 7.49048C17.7112 7.29981 17.7112 6.99063 17.5205 6.7999L13.1099 2.38931C12.9192 2.19868 12.61 2.19868 12.4194 2.38931L4.63519 10.1736C4.44452 10.3643 4.44452 10.6735 4.63519 10.8642L16.3817 22.6107C16.4733 22.7022 16.5975 22.7537 16.727 22.7537C16.8565 22.7537 16.9807 22.7022 17.0723 22.6107L24.8565 14.8264C24.948 14.7348 24.9995 14.6106 24.9995 14.4812C24.9994 14.3517 24.948 14.2274 24.8564 14.1358ZM12.3778 3.81211V10.0307H6.15922L12.3778 3.81211ZM16.2387 21.0866L6.15922 11.0072H12.3778V12.6C12.3778 13.8506 13.3953 14.8681 14.6459 14.8681H16.2387V21.0866ZM17.2152 21.0866V14.8681H23.4337L17.2152 21.0866Z"
                            fill="url(#paint1_linear_1501_3467)"
                          />
                          <path
                            d="M3.35112 12.4023H0.488281C0.218604 12.4023 0 12.621 0 12.8906C0 13.1603 0.218604 13.3789 0.488281 13.3789H3.35112C3.6208 13.3789 3.8394 13.1603 3.8394 12.8906C3.8394 12.621 3.6208 12.4023 3.35112 12.4023Z"
                            fill="url(#paint2_linear_1501_3467)"
                          />
                          <path
                            d="M4.80811 12.4023H4.80078C4.5311 12.4023 4.3125 12.621 4.3125 12.8906C4.3125 13.1603 4.5311 13.3789 4.80078 13.3789H4.80811C5.07778 13.3789 5.29639 13.1603 5.29639 12.8906C5.29639 12.621 5.07778 12.4023 4.80811 12.4023Z"
                            fill="url(#paint3_linear_1501_3467)"
                          />
                          <path
                            d="M2.05093 7.27539H0.488281C0.218604 7.27539 0 7.49404 0 7.76367C0 8.0333 0.218604 8.25195 0.488281 8.25195H2.05093C2.32061 8.25195 2.53921 8.0333 2.53921 7.76367C2.53921 7.49404 2.32061 7.27539 2.05093 7.27539Z"
                            fill="url(#paint4_linear_1501_3467)"
                          />
                          <path
                            d="M5.49551 7.27539H3.64844C3.37876 7.27539 3.16016 7.49404 3.16016 7.76367C3.16016 8.0333 3.37876 8.25195 3.64844 8.25195H5.49551C5.76519 8.25195 5.98379 8.0333 5.98379 7.76367C5.98379 7.49404 5.76519 7.27539 5.49551 7.27539Z"
                            fill="url(#paint5_linear_1501_3467)"
                          />
                          <path
                            d="M6.55855 15.0879H3.82422C3.55454 15.0879 3.33594 15.3065 3.33594 15.5762C3.33594 15.8458 3.55454 16.0645 3.82422 16.0645H6.55855C6.82822 16.0645 7.04683 15.8458 7.04683 15.5762C7.04683 15.3065 6.82817 15.0879 6.55855 15.0879Z"
                            fill="url(#paint6_linear_1501_3467)"
                          />
                          <path
                            d="M8.69331 18.2126H1.80859C1.53892 18.2126 1.32031 18.4313 1.32031 18.7009C1.32031 18.9706 1.53892 19.1892 1.80859 19.1892H8.69331C8.96299 19.1892 9.18159 18.9706 9.18159 18.7009C9.18159 18.4313 8.96299 18.2126 8.69331 18.2126Z"
                            fill="url(#paint7_linear_1501_3467)"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_1501_3467"
                            x1="18.1484"
                            y1="8.69341"
                            x2="19.1257"
                            y2="8.69341"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#00229E" />
                            <stop offset="0.479167" stopColor="#6E1299" />
                            <stop offset="1" stopColor="#FE0094" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_1501_3467"
                            x1="4.49219"
                            y1="14.2679"
                            x2="24.9995"
                            y2="14.2679"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#00229E" />
                            <stop offset="0.479167" stopColor="#6E1299" />
                            <stop offset="1" stopColor="#FE0094" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_1501_3467"
                            x1="7.84023e-09"
                            y1="12.9748"
                            x2="3.8394"
                            y2="12.9748"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#00229E" />
                            <stop offset="0.479167" stopColor="#6E1299" />
                            <stop offset="1" stopColor="#FE0094" />
                          </linearGradient>
                          <linearGradient
                            id="paint3_linear_1501_3467"
                            x1="4.3125"
                            y1="12.9748"
                            x2="5.29639"
                            y2="12.9748"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#00229E" />
                            <stop offset="0.479167" stopColor="#6E1299" />
                            <stop offset="1" stopColor="#FE0094" />
                          </linearGradient>
                          <linearGradient
                            id="paint4_linear_1501_3467"
                            x1="5.18517e-09"
                            y1="7.84786"
                            x2="2.53921"
                            y2="7.84786"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#00229E" />
                            <stop offset="0.479167" stopColor="#6E1299" />
                            <stop offset="1" stopColor="#FE0094" />
                          </linearGradient>
                          <linearGradient
                            id="paint5_linear_1501_3467"
                            x1="3.16016"
                            y1="7.84786"
                            x2="5.98379"
                            y2="7.84786"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#00229E" />
                            <stop offset="0.479167" stopColor="#6E1299" />
                            <stop offset="1" stopColor="#FE0094" />
                          </linearGradient>
                          <linearGradient
                            id="paint6_linear_1501_3467"
                            x1="3.33594"
                            y1="15.6604"
                            x2="7.04683"
                            y2="15.6604"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#00229E" />
                            <stop offset="0.479167" stopColor="#6E1299" />
                            <stop offset="1" stopColor="#FE0094" />
                          </linearGradient>
                          <linearGradient
                            id="paint7_linear_1501_3467"
                            x1="1.32031"
                            y1="18.7851"
                            x2="9.18159"
                            y2="18.7851"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#00229E" />
                            <stop offset="0.479167" stopColor="#6E1299" />
                            <stop offset="1" stopColor="#FE0094" />
                          </linearGradient>
                          <clipPath id="clip0_1501_3467">
                            <rect width="25" height="25" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                    <div className="team__details__number">
                      <p>farnsinfo@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetailsPrimary;
