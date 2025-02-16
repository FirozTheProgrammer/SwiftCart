import Image from "next/image";
import footerSmallImage1 from "@/assets/img/footer/footer__Small__1.png";
import footerSmallImage2 from "@/assets/img/footer/footer__Small__2.png";
import footerSmallImage3 from "@/assets/img/footer/footer__Small__3.png";
import footerSmallImage4 from "@/assets/img/footer/footer__Small__4.png";
import footerSmallImage5 from "@/assets/img/footer/footer__Small__5.png";

const GalleryFooter = () => {
  const items = [
    {
      img: footerSmallImage1,
      path: "/blogs/1",
    },
    {
      img: footerSmallImage2,
      path: "/blogs/2",
    },
    {
      img: footerSmallImage3,
      path: "/blogs/3",
    },
    {
      img: footerSmallImage4,
      path: "/blogs/4",
    },
    {
      img: footerSmallImage5,
      path: "/blogs/5",
    },
    {
      img: footerSmallImage1,
      path: "/blogs/6",
    },
  ];
  return (
    <div
      className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12"
      data-aos="fade-up"
      data-aos-duration="2400"
    >
      <div className=" footer__widget footer__gallery">
        <div className="footer__menu__title">
          <h6>OUR GALLERY:</h6>
        </div>
        <div className="footer__gallery__img">
          {items?.map(({ img, path }, idx) => (
            <div key={idx} className="footer__single__gallery__img">
              <Image src={img} alt="photo" />
              <div className="footer__gallery__icon">
                <a className="direction__btn" href={path}>
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
                    ></path>
                    <path
                      d="M10.9902 23.0107L22.8908 11.1101"
                      stroke="#0A0624"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryFooter;
