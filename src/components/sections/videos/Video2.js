import Image from "next/image";
import videoImage3 from "@/assets/img/video/video__3.png";
import videoImage4 from "@/assets/img/video/video__4.png";
import Link from "next/link";

const Video2 = () => {
  return (
    <div className="video__2 sp_bottom_140">
      <div className="container">
        <div className="video__border sp_top_70">
          <div className="row">
            <div className="col-xl-12">
              <div
                className="video__img position-relative"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="video__text video__text--1">
                  <h2>
                    INTRO <br />{" "}
                    <span className="video__text__spacing">VIDEO</span>
                  </h2>
                </div>
                <Image src={videoImage3} alt="" />
                <div className="video__small__img">
                  <Image src={videoImage4} alt="" />
                </div>
                <div className="video__button">
                  <Link
                    className="video__card--link glightbox"
                    data-gallery="video_popup"
                    href="https://www.youtube.com/watch?v=gLb2Gbo_bbs"
                  >
                    <svg
                      width="13"
                      height="15"
                      viewBox="0 0 13 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 7.5L0.250002 14.8612L0.250003 0.138783L13 7.5Z"
                        fill="#F8422E"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video2;
