import Image from "next/image";
import herbannerImage4 from "@/assets/img/herobaner/herobanner__6.png";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
const Hero4 = () => {
  return (
    <div className="herobanner d-flex align-items-center height__970 herobanner__with__transparent__header">
      <div className="container">
        <div className="herobanner__wrapper">
          <div className="herobanner__single">
            <div className="row align-items-center">
              <div
                className="col-xxl-5 col-xl-6 col-lg-6 col-md-12 col-sm-12"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="herobanner__content__wrapper">
                  <div className="herobanner__small__text">
                    <span>CONSULTING AGENCY</span>
                  </div>
                  <div className="herobanner__title herobanner__title--2">
                    <h1>BUSINESS ADVISORY SERVICE</h1>
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
                      path={"/services"}
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-xxl-7 col-xl-6 col-lg-6 col-md-12 col-sm-12"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="herobanner__img sp_top_90" data-tilt>
                  <Image className="img-fluid" src={herbannerImage4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero4;
