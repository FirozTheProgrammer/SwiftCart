import Image from "next/image";
import blogSmallImage1 from "@/assets/img/blog/blog__small__1.png";
import blogSmallImage2 from "@/assets/img/blog/blog__small__2.png";
import blogSmallImage3 from "@/assets/img/blog/blog__small__3.png";
import Link from "next/link";

const RecentPosts = () => {
  return (
    <div
      className="sidebar__widget"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="sidebar__title">
        <h5>Recent Post:</h5>
      </div>
      <div className="sidebar__post">
        <ul>
          <li>
            <Link href="/blogs/1">
              <div className="sidebar__post__img">
                <Image src={blogSmallImage1} alt="" />
              </div>
              <div className="sidebar__post__text">
                <h6>Sodales neque sodales and etiam nulla magna</h6>
                <span className="text__gradient">02 Dec, 2024</span>
              </div>
            </Link>
          </li>

          <li>
            <Link href="/blogs/2">
              <div className="sidebar__post__img">
                <Image src={blogSmallImage2} alt="" />
              </div>
              <div className="sidebar__post__text">
                <h6>Sodales neque sodales and etiam nulla magna</h6>
                <span className="text__gradient">02 Dec, 2024</span>
              </div>
            </Link>
          </li>

          <li>
            <Link href="/blogs/3">
              <div className="sidebar__post__img">
                <Image src={blogSmallImage3} alt="" />
              </div>
              <div className="sidebar__post__text">
                <h6>Sodales neque sodales and etiam nulla magna</h6>
                <span className="text__gradient">02 Dec, 2024</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RecentPosts;
