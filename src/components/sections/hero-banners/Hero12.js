import heroVectorImage1 from "@/assets/img/herobaner/vector__1.png";
import heroVectorImage4 from "@/assets/img/herobaner/vector__4.png";
import heroBgImage1 from "@/assets/img/herobaner/herobanner__1.jpg";
import Image from "next/image";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const Hero12 = ({ bgImg, title, desc, isNotTag }) => {
  return (
    <div
      className="herobanner herobanner__with__transparent__header"
      style={{ background: `url('${bgImg ? bgImg.src : heroBgImage1.src}')` }}
    >
      <div className="container">
        <div className="herobanner__wrapper">
          <div className="herobanner__single position-relative">
            <div className="row align-items-center height__950">
              <div
                className="col-xl-10 col-lg-12 col-md-12 col-sm-12 text-center m-auto"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="herobanner__content__wrapper">
                  {isNotTag ? (
                    "tag"
                  ) : (
                    <div className="herobanner__small__text sp_bottom_20">
                      <span className="text__gradient">
                        WE ARE EXPERT IN THIS FIELD
                      </span>
                    </div>
                  )}
                  <div className="herobanner__title">
                    <h1>{title ? title : "WE ARE CREATIVE AGENCY"}</h1>
                  </div>
                  <div className="herobanner__text">
                    <p className="m-auto">
                      {desc
                        ? desc
                        : "Sagittis purus amet volutpat consequat mauris nunc congue nisi and tortor."}
                    </p>
                  </div>
                  <div className="herobanner__button justify-content-center sp_top_30">
                    <ButtonPrimary text="OUR ALL SERVICES" path="/services" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="herobanner__icon">
        <Image
          className="herobanner__vector hero__icon__1"
          src={heroVectorImage1}
          alt="Vector photo"
        />
        <Image
          className="herobanner__vector hero__icon__4"
          src={heroVectorImage4}
          alt="Vector photo"
        />
      </div>
    </div>
  );
};

export default Hero12;
