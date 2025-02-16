"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import { useEffect, useState } from "react";
import getAllProducts from "@/libs/getAllProducts";
import { useCartContext } from "@/providers/CartContext";

const ProductDetailsModal = ({ product }) => {
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
    <div
      className="grid__quick__view__modal modalarea modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal__wraper">
        <div className="modal-content">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <div className="modal-body">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                <div className="featurearea__details__img">
                  <Swiper
                    className=" modal__gallery__big"
                    wrapperClass="featurearea__big__img--modal"
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
                    className="modal__gallery"
                    wrapperClass="featurearea__thumb__img--modal "
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
                        className="featurearea__single__thumb__img"
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

              <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                <div className="featurearea__inner">
                  <div className="featurearea__small__title">
                    <span>{productType}</span>
                  </div>
                  <div className="featurearea__main__title">
                    <h3
                      onClick={() => {
                        document
                          .querySelector(".grid__quick__view__modal")
                          .classList.toggle("show");
                        document
                          .querySelector(".modal-backdrop")
                          .classList.toggle("show");
                      }}
                    >
                      <a href={`/products/${id}`}>{title}</a>
                    </h3>
                  </div>
                  <div className="featurearea__price">
                    {disc ? (
                      <span>
                        <del> ${price.toFixed(2)}</del>
                      </span>
                    ) : (
                      ""
                    )}{" "}
                    <span>${currentPrice}</span>{" "}
                    <span className="featurearea__price__button text-uppercase">
                      {status}{" "}
                    </span>{" "}
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
                      praesentium a odit iste earum.
                    </p>
                  </div>

                  <div className="featurearea__size">
                    <span>Size: </span> {currentSize.toLowerCase()}
                  </div>
                  <div className="featurearea__size__button">
                    <ul>
                      {demoSizes?.map((size, idx) => (
                        <li style={{ marginRight: "5px" }} key={idx}>
                          <button
                            className=""
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
                    <span>Color:</span> {currentColor}
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
                            !quantity || quantity < 2
                              ? 1
                              : parseInt(quantity) - 1
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
                        onChange={(e) =>
                          setQuantity(
                            !parseInt(e.target.value)
                              ? 1
                              : parseInt(e.target.value)
                          )
                        }
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
                    <a
                      href={`/checkout?id=${id}&quantity=${quantity}&color=${currentColor}&size=${currentSize}`}
                    >
                      By it now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
