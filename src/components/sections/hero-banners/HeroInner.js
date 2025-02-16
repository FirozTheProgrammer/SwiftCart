import Link from "next/link";
import bannerBgImage from "@/assets/img/about/about__bg__1.jpg";

const HeroInner = ({ title, currentItem }) => {
  return (
    <div
      className="breadcrumbarea"
      style={{ background: `url('${bannerBgImage.src}')` }}
    >
      <div className="container">
        <div className="row">
          <div
            className="col-xl-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="breadcrumbarea__content__wraper">
              <div className="breadcrumbarea__title">
                <h2 className="heading">{title}</h2>
              </div>
              <div className="breadcrumbarea__inner">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>{" "}
                  <li>{"//"} </li> <li> {currentItem} </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroInner;
