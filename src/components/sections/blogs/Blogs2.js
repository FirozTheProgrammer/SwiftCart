import Image from "next/image";
import blogBg1 from "@/assets/img/blog/blog__bg_1.png";
import blogIcon from "@/assets/img/blog/blog__icon.png";
import projectImage1 from "@/assets/img/project/project__1.png";
import projectIcon from "@/assets/img/project/project__1__icon.png";
import Link from "next/link";
import BlogCard2 from "@/components/shared/cards/BlogCard2";
import getAllBlogs from "@/libs/getAllBlogs";

const Blogs2 = () => {
  const blogs = getAllBlogs().slice(3, 6);
  return (
    <div
      className="blog__2 sp_top_140 sp_bottom_140 special__spacing"
      id="blog__area"
      style={{ background: `url('${blogBg1.src}')` }}
    >
      <div className="container">
        <div
          className="row align-items-center sp_bottom_80"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
            <div className="section__title section__title--2 section__title--3 ">
              <div className="section__title__button">
                <span>Blog Post</span>
              </div>
              <div className="section__title__heading">
                <h3>IN-DEPTH ANALYSIS AND DISCUSSIONS</h3>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-12">
            <div className="blog__2__icon">
              <Image src={blogIcon} alt="" />
            </div>
          </div>
          <div className="col-xl-3 col-xl-3 col-lg-3 col-md-6 col-12">
            <div className="blog__2__small__img">
              <div className="bastun__brand__badge">
                <div className="bastun__brand__badge__inner position-relative">
                  <Link href="/">
                    <Image
                      className="bbb__animate"
                      src={projectImage1}
                      alt="Footer badge"
                    />
                    <Image
                      className="bbb__icon"
                      src={projectIcon}
                      alt="Footer icon badge"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {blogs?.map((blog, idx) => (
            <BlogCard2 key={idx} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs2;
