"use client";

import getAllProducts from "@/libs/getAllProducts";
import { useCartContext } from "@/providers/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductDetailsPrimary = () => {
  const { id: currentId } = useParams();
  const allProducts = getAllProducts();
  const product = allProducts?.find(({ id }) => id === parseInt(currentId));
  const { addProductToCart, cartProducts } = useCartContext();

  const {
    id,
    title,
    price,
    image,
    status,
    type,
    previousPrice,
    reviews,
    color,
    disc,
    productType,
    size,
  } = product;

  const [quantity, setQuantity] = useState(1);
  const [currentColor, setCurrentColor] = useState(color);
  const [currentSize, setCurrentSize] = useState(size);

  const priceAfterDisc = disc ? price * ((100 - disc) / 100) : price;
  const currentPrice = priceAfterDisc.toFixed(2);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const slides = [
    product,
    ...getAllProducts()
      ?.filter(({ id: idx }) => idx !== id)
      .slice(0, 6),
  ];

  const demoColors = [
    { name: "Violet" },
    { name: "Black" },
    { name: "Blue" },
    { name: "Grey" },
    { name: "Pink" },
  ];
  const demoSizes = ["x", "xl", "m", "s"];
  const colorsWithImge = demoColors?.map((color, idx) => ({
    ...color,
    image: slides[idx]?.image,
  }));
  useEffect(() => {
    setCurrentSize(size);
    setCurrentColor(color);
  }, [size, color]);
  return (
    <div className="featurearea featurearea--2 sp_top_100 sp_bottom_100">
      <div className="">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="featurearea__details__img products__details__gallery">
                <Swiper
                  className="details__gallery__big"
                  wrapperClass="featurearea__big__img "
                  spaceBetween={10}
                  modules={[Thumbs]}
                  thumbs={{ swiper: thumbsSwiper }}
                >
                  {slides?.map(({ image }, idx) => (
                    <SwiperSlide
                      className="featurearea__single__big__img "
                      key={idx}
                    >
                      <Image
                        loading="lazy"
                        src={image}
                        alt="Product Big Img"
                        placeholder="blur"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <Swiper
                  className="details__gallery"
                  wrapperClass="featurearea__thumb__img  "
                  spaceBetween={10}
                  slidesPerView={5}
                  freeMode={true}
                  modules={[Thumbs]}
                  watchSlidesProgress={true}
                  onSwiper={setThumbsSwiper}
                >
                  {slides?.map(({ image }, idx) => (
                    <SwiperSlide
                      key={idx}
                      className="featurearea__single__thumb__img "
                    >
                      <Image
                        loading="lazy"
                        src={image}
                        alt="Product Thumb Img"
                        placeholder="blur"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="featurearea__inner">
                <div className="featurearea__small__title">
                  <span>{productType}</span>
                </div>
                <div className="featurearea__main__title">
                  <h3>{title}</h3>
                </div>
                <div className="featurearea__price">
                  {disc ? (
                    <span>
                      <del> ${price.toFixed(2)}</del>
                    </span>
                  ) : (
                    ""
                  )}{" "}
                  <span>${currentPrice}</span>
                  <span className="featurearea__price__button"> {status} </span>
                  {disc ? (
                    <span className="featurearea__price__button black__color">
                      -{disc}%
                    </span>
                  ) : (
                    ""
                  )}
                </div>

                <div className="featurearea__desc">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur earum consectetur hic quisquam? Iusto fugiat
                    praesentium a odit iste earum. borem ipsum dolor sit, amet
                    consectetur adipisicing.
                  </p>
                </div>

                <div className="featurearea__countdown__title">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-clock timer__icon"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <h5>Hurry up! Sale ends in</h5>
                </div>
                <div
                  className="featurearea__countdown"
                  data-countdown="2027/06/01"
                >
                  <div className="count">
                    <p>00</p>
                    <span>Days</span>
                  </div>
                  <div className="count">
                    <p>00</p>
                    <span>Hrs</span>
                  </div>
                  <div className="count">
                    <p>00</p>
                    <span>Min</span>
                  </div>
                  <div className="count">
                    <p>00</p>
                    <span>Sec</span>
                  </div>
                </div>
                <div className="featurearea__progress__text">
                  <h6>Only 10 items in stock!</h6>
                  <div className="progress">
                    <div
                      role="progressbar"
                      className="progress-bar wow fadeInLeft"
                      data-wow-duration="0.6s"
                      data-wow-delay=".4s"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{
                        width: "50%",
                        visibility: "visible",
                        animationDuration: "0.6s",
                        animationDelay: "0.4s",
                        animationName: "fadeInLeft",
                      }}
                    ></div>
                  </div>
                </div>

                <div className="featurearea__size">
                  <span>Size:</span>
                  {currentSize.toLowerCase()}
                </div>
                <div className="featurearea__size__button">
                  <ul>
                    {demoSizes?.map((size, idx) => (
                      <li style={{ marginRight: "5px" }} key={idx}>
                        <button
                          onClick={(e) => {
                            setCurrentSize(size);
                          }}
                        >
                          {size}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="featurearea__size">
                  <span>Color:</span>
                  {currentColor}
                </div>
                <div className="featurearea__size__img">
                  <ul>
                    {colorsWithImge?.map(({ image, name }, idx) => (
                      <li key={idx}>
                        <button
                          onClick={(e) => {
                            setCurrentColor(name);
                          }}
                        >
                          <Image loading="lazy" src={image} alt="" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="featurearea__size">
                  <span>Quantity</span>
                </div>
                <div className="featurearea__quantity">
                  <div className="featurearea__quantity__button cartarea__plus__minus qty-container">
                    <div
                      className="dec qtybutton qty-btn-minus"
                      onClick={() =>
                        setQuantity(
                          !quantity || quantity < 2 ? 1 : parseInt(quantity) - 1
                        )
                      }
                    >
                      -{" "}
                    </div>
                    <input
                      className="input-qty input-qty"
                      type="text"
                      defaultValue="1"
                      name="qty"
                    />
                    <div
                      className="inc qtybutton qty-btn-plus"
                      onClick={() =>
                        setQuantity(!quantity ? 1 : parseInt(quantity) + 1)
                      }
                    >
                      +
                    </div>
                  </div>

                  <button
                    className="default__button"
                    onClick={() => {
                      addProductToCart({
                        id,
                        title,
                        price,
                        quantity,
                        currentColor,
                        currentSize,
                        image,
                      });
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
                <div className="featurearea__bottom__button">
                  <Link
                    href={`/checkout?id=${id}&quantity=${quantity}&color=${currentColor}&size=${currentSize}`}
                  >
                    By it now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPrimary;
