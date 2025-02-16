import heroVectorImage1 from "@/assets/img/herobaner/vector__1.png";
import heroVectorImage4 from "@/assets/img/herobaner/vector__4.png";
import heroFreelancerImage4 from "@/assets/img/herobaner/herobanner__bg__freelancer.png";
import Image from "next/image";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
const Hero15 = () => {
  return (
    <div
      className="herobanner d-flex align-items-center height__970 herobanner__front__img__wrapper position-relative bg__image herobanner__with__transparent__header"
      style={{ background: `url('${heroFreelancerImage4.src}')` }}
    >
      <div className="container">
        <div className="herobanner__wrapper">
          <div className="herobanner__single">
            <div className="row align-items-center">
              <div
                className="col-xxl-7 col-xl-7 col-lg-6 col-md-12 col-sm-12"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="herobanner__content__wrapper herobanner__content__wrapper--2 herobanner__content__wrapper--3">
                  <div className="herobanner__title">
                    <h1>
                      <span className="ht__whie__bg">Hi, I am Jon Doe</span>
                      <br />
                      Best Passionate
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Harum, perspiciatis dolore non dolor sunt ratione
                      temporibus.
                    </p>
                  </div>
                  <div className="herobanner__button">
                    <ButtonPrimary
                      text={" OUR ALL SERVICES"}
                      path={"/services"}
                    />
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

export default Hero15;
