import Image from "next/image";

import Link from "next/link";
import testimonialSmallImage2 from "@/assets/img/testimonial/testimonial__small__img.png";
const TestimonialSlide = ({ slide }) => {
  const { name, desc, id, desig } = slide;
  return (
    <div>
      <div className="testimonial__text">
        <p>{desc}</p>
      </div>
      <div className="testimonial__bottom">
        <div className="testimonial__author">
          <h6>
            <Link href={`/team/${id}`}>{name}</Link>
          </h6>
          <span>{desig}</span>
        </div>
      </div>
      <div className="testimonial__small__img">
        <Image src={testimonialSmallImage2} alt="" />
      </div>
    </div>
  );
};

export default TestimonialSlide;
