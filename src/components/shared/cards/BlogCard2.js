import Image from "next/image";
import Link from "next/link";
import React from "react";
import ButtonPrimary from "../buttons/ButtonPrimary";

const BlogCard2 = ({ blog }) => {
  const { id, title, img, desc, day, date, duration } = blog;
  return (
    <div
      className="col-xl-4 col-lg-4 col-md-6 col-12"
      data-aos="fade-up"
      data-aos-duration="1800"
    >
      <div className="blog__2__wrapper common__gradient__bg single__transform">
        <div className="blog__2__inner">
          <div className="blog__2__img">
            <Image src={img} alt="" placeholder="blur" />
          </div>
          <div className="blog__2__number">
            <span>{day}</span>
            <p>{date}</p>
          </div>
          <div className="blog__2__heading">
            <h3>
              <Link className="text-uppercase" href={`/blogs/${id}`}>
                {title.length > 18 ? `${title.slice(0, 18)}...` : title}.
              </Link>
            </h3>
          </div>
          <div className="blog__2__text">
            <p>{desc}</p>
          </div>
          <div className="blog__2__button">
            <ButtonPrimary
              text="READ MORE"
              path={`/blogs/${id}`}
              button={"white"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard2;
