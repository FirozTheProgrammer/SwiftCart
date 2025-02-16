import heroVectorImage1 from "@/assets/img/herobaner/vector__1.png";
import heroVectorImage4 from "@/assets/img/herobaner/vector__4.png";
import heroTravelImage4 from "@/assets/img/herobaner/herobanner__front__travel.png";
import heroBgImage1 from "@/assets/img/herobaner/herobanner__1.jpg";
import Image from "next/image";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const Hero17 = () => {
  return (
    <div
      className="herobanner herobanner__with__transparent__header bg__image herobanner__front__img__wrapper"
      style={{ background: `url('${heroBgImage1.src}')` }}
    >
      <div className="container">
        <div className="herobanner__wrapper">
          <div className="herobanner__single position-relative">
            <div className="row align-items-center height__950">
              <div
                className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="herobanner__content__wrapper herobanner__content__wrapper--2">
                  <div className="herobanner__title">
                    <h1>
                      WE ARE <span className="text__gradient">POPULAR</span>{" "}
                      TRAVEL AGENCY.
                    </h1>
                  </div>
                  <div className="herobanner__text">
                    <p>
                      Sagittis purus amet volutpat consequat mauris nunc congue
                      nisi and tortor.
                    </p>
                  </div>
                  <div className="herobanner__button sp_top_30">
                    <ButtonPrimary
                      text={" OUR ALL SERVICES"}
                      path={"/services"}
                      button={"white"}
                    />
                  </div>
                </div>
              </div>

              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div
                  className="herobanner__front__img position-relative"
                  data-tilt
                >
                  <Image
                    className="rounded"
                    src={heroTravelImage4}
                    alt="Travel"
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

export default Hero17;
