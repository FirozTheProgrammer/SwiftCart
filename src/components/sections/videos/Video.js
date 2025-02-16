import Image from "next/image";
import videoImage1 from "@/assets/img/video/video__1.png";
import videoImage2 from "@/assets/img/video/video__2.png";
import ButtonPopup from "@/components/shared/buttons/ButtonPopup";

const Video = ({ video }) => {
  return (
    <div
      className={`video   ${
        video === 2 ? "sp_bottom_120 sp_top_120" : "sp_bottom_140 video__nmt"
      }`}
      id="video__area"
      data-aos="fade-up"
    >
      <div className="container-fluid full__width__padding">
        <div className="row">
          <div className="col-xl-12">
            <div className="video__img position-relative">
              <div className="video__text video__text--1">
                <h2>INTRO</h2>
              </div>

              <Image src={videoImage1} alt="" />
              <div className="video__small__img">
                <Image src={videoImage2} alt="" />
              </div>
              <div className="video__button">
                <ButtonPopup />
              </div>

              <div className="video__text video__text--2">
                <h2>VIDEO</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
