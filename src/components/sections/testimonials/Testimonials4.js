import TestimonialsSlider from "@/components/shared/testimonials/TestimonialsSlider";
import testimonialSmallImage4 from "@/assets/img/testimonial/testimonial__small__img__4.png";
import Image from "next/image";

const Testimonials4 = () => {
  return (
    <div className="testimonial testimonial__2 sp_bottom_140 sp_top_100 white__bg">
      <div className="container position-relative">
        <div className="row">
          <div
            className="col-xl-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="section__title text-center  sp_bottom_50">
              <div className="section__title__small">
                <span>CUSTOMER REVIEW</span>
              </div>
              <div className="section__title__heading">
                <h3> SEE WHAT OTHER ARE SAYING</h3>
              </div>
            </div>
          </div>
        </div>
        <div
          className="testimonial__slider__padding position-relative row"
          data-aos="fade-up"
          data-aos-duration="1500"
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

export default Testimonials4;
