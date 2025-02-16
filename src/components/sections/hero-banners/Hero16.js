import heroVectorImage1 from "@/assets/img/herobaner/vector__1.png";
import heroVectorImage4 from "@/assets/img/herobaner/vector__4.png";
import heroTechnologyImage from "@/assets/img/herobaner/herobanner__front__technology.png";
import Image from "next/image";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ButtonPopup from "@/components/shared/buttons/ButtonPopup";
const Hero16 = () => {
  return (
    <div
      className="herobanner d-flex align-items-center height__700 position-relative herobanner__margin herobanner__front__img__wrapper"
      style={{ background: "var(--gradientColor)" }}
    >
      <div className="container-fluid full__width__padding">
        <div className="herobanner__wrapper">
          <div className="herobanner__single">
            <div className="row align-items-center">
              <div
                className="col-xxl-6 col-xl-7 col-lg-6 col-md-12 col-sm-12"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="herobanner__content__wrapper herobanner__content__wrapper--2">
                  <div className="herobanner__small__text">
                    <span>LEADING CREATIVE AGENCY</span>
                  </div>
                  <div className="herobanner__title ">
                    <h1>Most Popular Best Creative Agency.</h1>
                  </div>
                  <div className="herobanner__text">
                    <p>
                      Sagittis purus amet volutpat consequat mauris nunc congue
                      nisi and tortor.
                    </p>
                  </div>
                  <div className="herobanner__button">
                    <ButtonPrimary
                      text={" OUR ALL SERVICES"}
                      path={"/services"}
                      button={"white"}
                    />

                    <div className="video__button video__button--white">
                      <ButtonPopup />

                      <span> Watch Demo</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-12 col-sm-12">
                <div className="herobanner__front__img" data-tilt>
                  <Image
                    src={heroTechnologyImage}
                    alt="front__img__technology"
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

export default Hero16;
