import Link from "next/link";

const Pagination = ({ items, currenIndex, handleCurrentPage, path }) => {
  return (
    <div className="pagination" data-aos="fade-up" data-aos-duration="1500">
      <ul>
        <li>
          <Link
            onClick={(e) => handleCurrentPage(e, currenIndex - 1)}
            className="common__gradient__bg"
            href={`#${path ? path : "blogs"}`}
            style={{
              visibility: currenIndex > 0 ? "visible" : "hidden",
            }}
          >
            <span>
              <i className="icofont-simple-left"></i>
            </span>
          </Link>
        </li>

        {items?.map((item, idx) => (
          <li key={idx}>
            <Link
              onClick={(e) => handleCurrentPage(e, idx)}
              className={`common__gradient__bg  ${
                idx === currenIndex ? "active" : ""
              }`}
              href={`#${path ? path : "blogs"}`}
            >
              <span>{idx + 1}</span>
            </Link>
          </li>
        ))}

        <li>
          <Link
            onClick={(e) => handleCurrentPage(e, currenIndex + 1)}
            className="common__gradient__bg"
            href={`#${path ? path : "blogs"}`}
            style={{
              visibility:
                currenIndex < items?.length - 1 ? "visible" : "hidden",
            }}
          >
            <span>
              <i className="icofont-simple-right"></i>
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
