import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import heroVectorImage1 from "@/assets/img/herobaner/vector__1.png";
import heroVectorImage4 from "@/assets/img/herobaner/vector__4.png";
import Image from "next/image";
import ButtonPopup from "@/components/shared/buttons/ButtonPopup";
import heroHrImage from "@/assets/img/herobaner/front__img__hr.png";
import heroSassImage from "@/assets/img/herobaner/herobanner__sass.png";
const Hero7 = ({ type }) => {
  return (
    <div
      className={`herobanner d-flex align-items-center ${
        type === 2 ? "height__700 " : "height__800 "
      }  herobanner__front__img__wrapper position-relative `}
    >
      <div className="container">
        <div className="herobanner__wrapper">
          <div className="herobanner__single">
            <div className="row align-items-center">
              <div
                className="col-xxl-6 col-xl-7 col-lg-6 col-md-12 col-sm-12"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="herobanner__content__wrapper herobanner__content__wrapper--2">
                  {type === 2 ? (
                    ""
                  ) : (
                    <div className="herobanner__small__text">
                      <span className="text__gradient">BEST HR AGENCY</span>
                    </div>
                  )}
                  <div className="herobanner__title herobanner__title--2">
                    <h1>
                      {type === 2 ? (
                        <>
                          The Best{" "}
                          <span className="text__gradient">
                            Business Management
                          </span>{" "}
                          with Software & Apps.
                        </>
                      ) : (
                        <>
                          {" "}
                          We Optimize Your{" "}
                          <span className="text__gradient">
                            Human Resource
                          </span>{" "}
                          Process.
                        </>
                      )}
                    </h1>
                  </div>
                  <div className="herobanner__text herobanner__text--2">
                    <p>
                      Sagittis purus amet volutpat consequat mauris nunc congue
                      nisi and tortor.
                    </p>
                  </div>
                  <div className="herobanner__button">
                    <ButtonPrimary
                      text={"OUR ALL SERVICES"}
                      path={"/service"}
                    />
                    <div className="video__button">
                      <ButtonPopup
                        link={"https://www.youtube.com/watch?v=gLb2Gbo_bbs"}
                      />

                      <span className="video__button__text"> Watch Demo</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-12 col-sm-12">
                <div className="herobanner__front__img" data-tilt>
                  <Image
                    src={type === 2 ? heroSassImage : heroHrImage}
                    alt="HR"
                    placeholder="blur"
                  />
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

export default Hero7;
