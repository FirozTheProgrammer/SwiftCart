import ButtonPopup from "@/components/shared/buttons/ButtonPopup";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";
import heroImage5 from "@/assets/img/herobaner/herobanner__bg__5.png";
import heroVectorImage1 from "@/assets/img/herobaner/vector__1.png";
import heroVectorImage4 from "@/assets/img/herobaner/vector__4.png";

const Hero5 = () => {
  return (
    <div
      className="herobanner d-flex align-items-center height__800 bg__image position-relative"
      style={{ background: `url('${heroImage5.src}')` }}
    >
      <div className="container">
        <div className="herobanner__wrapper">
          <div className="herobanner__single">
            <div className="row align-items-center">
              <div
                className="col-xxl-6 col-xl-7 col-lg-8 col-md-12 col-sm-12"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="herobanner__content__wrapper herobanner__content__wrapper--2">
                  <div className="herobanner__small__text">
                    <span className="text__gradient">
                      WE ARE EXPERT IN THIS FIELD
                    </span>
                  </div>
                  <div className="herobanner__title herobanner__title--2">
                    <h1>
                      Invest Savings For{" "}
                      <span className="text__gradient">Future</span> Costing.
                    </h1>
                  </div>
                  <div className="herobanner__text herobanner__text--2">
                    <p>
                      Sagittis purus amet volutpat consequat mauris nunc congue
                      nisi and tortor.
                    </p>
                  </div>
                  <div className="herobanner__button">
                    <ButtonPrimary text="OUR ALL SERVICES" path="/services" />

                    <div className="video__button">
                      <ButtonPopup />

                      <span> Watch Demo</span>
                    </div>
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

export default Hero5;
