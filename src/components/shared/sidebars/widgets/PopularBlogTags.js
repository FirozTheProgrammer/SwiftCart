"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const PopularBlogTags = () => {
  const currentTag = useSearchParams().get("tag");

  const tags = [
    "Management",
    "Consulting",
    "Start-up",
    "Marketing",
    "Operation",
    "HR Management",
  ];
  return (
    <div
      className="sidebar__widget"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="sidebar__title">
        <h5>Popular Tags:</h5>
      </div>
      <div className="sidebar__tag">
        <ul>
          {tags?.map((tag, idx) => (
            <li key={idx}>
              <Link
                className={`common__gradient__bg  ${
                  tag.toLowerCase().split(" ").join("-") === currentTag
                    ? "active"
                    : ""
                }`}
                href={`/blogs?tag=${tag.toLowerCase().split(" ").join("-")}`}
              >
                <span>{tag}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PopularBlogTags;
