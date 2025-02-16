import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }) => {
  const { id, title, img, desc, day, date, duration } = blog;
  return (
    <div
      className="blog__single"
      data-aos="fade-up"
      data-aos-duration={duration}
    >
      <div className="blog__img">
        <Image src={img} alt="" />
      </div>
      <div className="blog__date">
        <div className="blog__date__inner">
          <span>{day}</span>
          <p>{date}</p>
        </div>
      </div>
      <div className="blog__content">
        <h6>
          <Link className="text-uppercase" href={`/blogs/${id}`}>
            {title.length > 30 ? `${title.slice(0, 30)}...` : title}.
          </Link>
        </h6>
        <p>{desc}</p>
      </div>
      <div className="blog__icon">
        <Link className="direction__btn" href={`/blogs/${id}`}>
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.4258 10.9897L23.0101 10.9897L23.0101 19.574"
              stroke="#0A0624"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.9902 23.0107L22.8908 11.1101"
              stroke="#0A0624"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
