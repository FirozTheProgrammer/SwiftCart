import Image from "next/image";
import errorImage from "@/assets/img/contact/error.png";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const ErrorPrimary = () => {
  return (
    <div className="error sp_top_140 sp_bottom_160">
      <div className="container">
        <div className="row">
          <div
            className="col-xl-12 sp_bottom_80"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="error__img text-center">
              <Image src={errorImage} alt="" />
            </div>
          </div>
          <div
            className="col-xl-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="error__text__wrapper">
              <h3>
                {" "}
                <span className="text__gradient">Lost In The Filed?</span> Let
                us help you find your way back.
              </h3>
              <div className="error__button">
                <ButtonPrimary text={"SEND MESSAGE"} path="/contact" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPrimary;
