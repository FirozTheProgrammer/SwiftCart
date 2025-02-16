import Image from "next/image";
import Link from "next/link";

const TestimonialsSlide2 = ({ slide }) => {
  const { name, desc, id, desig, img, imgSmall } = slide;
  return (
    <div className="testimonial__2__single">
      <div className="testimonial__text testimonial__text--2 text-center">
        <p>{desc}</p>
      </div>
      <div className="testimonial__2__author">
        <div className="testimonial__2__author__img">
          <Image src={img} alt="" />
        </div>
        <div className="testimonial__2__author__name">
          <h6>
            <Link href="#">{name}</Link>
          </h6>
          <span className="text__gradient">{desig}</span>
        </div>
      </div>
      <div className="testimonial__2__icon">
        <Image src={imgSmall} alt="" />
      </div>
    </div>
  );
};

export default TestimonialsSlide2;
