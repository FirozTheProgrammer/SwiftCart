import heroVectorImage1 from "@/assets/img/herobaner/vector__1.png";
import heroVectorImage4 from "@/assets/img/herobaner/vector__4.png";
import heroEventImage from "@/assets/img/herobaner/herobanner__event.png";
import Image from "next/image";
import ButtonPopup from "@/components/shared/buttons/ButtonPopup";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const Hero13 = () => {
  return (
    <div className="herobanner d-flex align-items-center height__800 herobanner__front__img__wrapper position-relative">
      <div className="container">
        <div className="herobanner__wrapper">
          <div className="herobanner__single">
            <div className="row align-items-center">
              <div
                className="col-xxl-6 col-xl-7 col-lg-6 col-md-12 col-sm-12"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="herobanner__content__wrapper herobanner__content__wrapper--2 herobanner__content__wrapper--3">
                  <div className="herobanner__title">
                    <h1>
                      Create Events
                      <br />
                      <span className="animated--header-first-word">For- </span>
                      <span
                        className="txt-type text__gradient"
                        data-wait="3000"
                        data-words='["Leadership", "Marketing", "Workshop", " Summit", "Innovation", "Technology"]'
                      >
                        {" "}
                      </span>
                    </h1>
                  </div>
                  <div className="herobanner__text">
                    <p>
                      Sagittis purus amet volutpat consequat mauris nunc congue
                      nisi and tortor.
                    </p>
                  </div>
                  <div className="herobanner__button">
                    <ButtonPrimary
                      path={"/services"}
                      text={"OUR ALL SERVICES"}
                    />
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-12 col-sm-12">
                <div
                  className="herobanner__front__img position-relative"
                  data-tilt
                >
                  <Image className="rounded" src={heroEventImage} alt="Event" />
                  <div className="video__button">
                    <ButtonPopup />
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

export default Hero13;
