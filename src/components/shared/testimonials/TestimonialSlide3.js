import Image from "next/image";
import Link from "next/link";
import React from "react";

const TestimonialSlide3 = ({ slide, type }) => {
  const { name, desc, id, desig, img } = slide;
  return (
    <div>
      <div className="testimonial__3__single__inner">
        <div
          className={`testimonial__3__content ${
            type == 2 ? "bg__pink" : ""
          } common__gradient__bg `}
        >
          <p>{desc}</p>
        </div>
        <div className="testimonial__3__author">
          <div className="testimonial__3__img">
            <Image src={img} alt="" />
          </div>
          <div
            className={`testimonial__3__name ${
              type === 2 ? "color__black" : ""
            }`}
          >
            <h6>
              <Link href="#">{name}</Link>
            </h6>
            <p>{desig}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlide3;
