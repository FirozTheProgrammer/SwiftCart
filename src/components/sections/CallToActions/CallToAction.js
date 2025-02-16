import Image from "next/image";
import ctaImage1 from "@/assets/img/cta/cta__1.png";
import ctaImage2 from "@/assets/img/cta/cta__2.png";
import ctaImage3 from "@/assets/img/cta/cta__3.png";
import ctaImage4 from "@/assets/img/cta/cta__4.png";
import ctaFreeImage from "@/assets/img/freepik/free__1.png";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const CallToAction = ({ title, label }) => {
  return (
    <div className="cta__area sp_top_120 sp_bottom_330 gradient__bg position-relative">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="cta__area__wrap position-relative">
              <div
                className="section__title section__title--4 text-center sp_bottom_30"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="section__title__small">
                  <span>{label ? label : "CALL TO ACTION"}</span>
                </div>
                <div className="section__title__heading">
                  <h3>
                    {title
                      ? title
                      : "READY TO ELEVATE BUSINESS TO NEW HEIGHTS?"}
                  </h3>
                </div>

                <div className="section__title__btn">
                  <ButtonPrimary
                    text="STARTED NOW"
                    path="/services"
                    button={"white"}
                  />
                </div>
              </div>
              <div
                className="cta__area__img text-center"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <Image
                  src={ctaFreeImage}
                  alt="Call to action"
                  data-tilt
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cta__icon">
        <Image className="cta__img__1 ssla__animation" src={ctaImage1} alt="" />
        <Image className="cta__img__2 ssla__animation" src={ctaImage2} alt="" />
        <Image className="cta__img__3 ssla__animation" src={ctaImage3} alt="" />
        <Image className="cta__img__4 ssla__animation" src={ctaImage4} alt="" />
      </div>
    </div>
  );
};

export default CallToAction;
