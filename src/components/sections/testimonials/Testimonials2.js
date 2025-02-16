"use client";
import Image from "next/image";
import testimonialSmallImage4 from "@/assets/img/testimonial/testimonial__small__img__4.png";
import TestimonialsSlider from "@/components/shared/testimonials/TestimonialsSlider";

const Testimonials2 = ({ isGradient, type }) => {
  return (
    <div
      className={`testimonial testimonial__2 sp_bottom_140  ${
        type === 2 ? "" : "sp_top_100"
      }`}
    >
      <div className="container position-relative">
        <div className="row">
          <div
            className="col-xl-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="section__title text-center sp_bottom_50">
              <div className="section__title__button">
                <span className={isGradient ? "text__gradient" : ""}>
                  Happy Customers
                </span>
              </div>
              <div className="section__title__heading">
                <h3>WE OFFER CONSULTANCY SERVICES.</h3>
              </div>
            </div>
          </div>
        </div>

        <div
          className="testimonial__slider__padding position-relative row"
          data-aos="fade-up"
          data-aos-duration="1800"
        >
          <TestimonialsSlider />
        </div>

        <div className="testimonial__2__small__icon">
          <Image src={testimonialSmallImage4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials2;
