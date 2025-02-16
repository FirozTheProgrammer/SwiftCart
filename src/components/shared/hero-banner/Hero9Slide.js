import Image from "next/image";
import Link from "next/link";

const Hero9Slide = ({ slide }) => {
  const { title, desc, id, img, tag, price, disc } = slide;
  const currentPrice = (price * (100 - disc)) / 100;
  return (
    <div className="row align-items-center">
      <div
        className="col-xxl-6 col-xl-7 col-lg-6 col-md-12 col-sm-12"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="herobanner__content__wrapper herobanner__content__wrapper--2">
          <div className="herobanner__small__text">
            <span className="text__gradient">{tag}</span>
          </div>
          <div className="herobanner__title herobanner__title--2">
            <h1>{title}</h1>
          </div>
          <div className="herobanner__text herobanner__text--2">
            <p>{desc}</p>
          </div>

          <div className="herobannerarea__price">
            {currentPrice?.toFixed(2)} <del> ${price?.toFixed(2)}</del>
            <span>{disc}% Off</span>
          </div>

          <div className="herobanner__button">
            <Link
              className="default__button"
              href={`/checkout?id=${id}&quantity=1&color=Blue&size=M`}
            >
              BUY NOW
            </Link>
            <Link className="default__button btn__black ms-4" href="/shop">
              DISCOVER MORE
            </Link>
          </div>
        </div>
      </div>
      <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-12 col-sm-12">
        <div className="herobanner__front__img" data-tilt>
          <Image src={img} alt="front__img__ecommerce1" placeholder="blur" />
        </div>
      </div>
    </div>
  );
};

export default Hero9Slide;
