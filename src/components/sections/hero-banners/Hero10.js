import heroPortfolioImage from "@/assets/img/herobaner/herobanner__portfolio.png";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";

const Hero10 = () => {
  return (
    <div className="herobanner d-flex align-items-center  herobanner__with__transparent__header">
      <div className="container">
        <div className="herobanner__wrapper">
          <div className="herobanner__single herobanner__single--portfolio">
            <div className="row align-items-center">
              <div
                className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 position-relative height__970"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="herobanner__content__wrapper herobanner__content__wrapper--portfolio">
                  <div
                    className="herobanner__title herobanner__title--2"
                    data-aos="fade-up"
                    data-aos-duration="2500"
                  >
                    <h1>
                      FULL STACK
                      <span className="text__gradient d-block">
                        WEB & MOBILE
                      </span>
                      DEVELOPER<span className="text__gradient">.</span>
                    </h1>
                  </div>
                  <div
                    className="herobanner__button"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                  >
                    <ButtonPrimary
                      text={"OUR ALL SERVICES"}
                      path={"/services"}
                    />
                  </div>
                </div>

                <div
                  className="herobanner__img herobanner__img--portfolio"
                  data-tilt
                >
                  <Image
                    className="img-fluid"
                    src={heroPortfolioImage}
                    alt="herobanner__portfolio"
                    placeholder="blur"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero10;
