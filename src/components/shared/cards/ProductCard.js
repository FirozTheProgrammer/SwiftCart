"use client";

import { useCartContext } from "@/providers/CartContext";
import { useProductDetailContext } from "@/providers/ProductModalContext";
import { useWishlistContext } from "@/providers/WshlistContext";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product, handleCurrentProduct }) => {
  const setCurrentProduct = useProductDetailContext();
  const { addProductToCart, cartProducts } = useCartContext();
  const { addProductToWishlist } = useWishlistContext();

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
    size,
  } = product;
  const priceAfterDisc = disc ? price * ((100 - disc) / 100) : price;
  const currentPrice = priceAfterDisc.toFixed(2);
  const depts = [
    { name: "sale", bg: "" },
    { name: "new", bg: "blue__color" },
    { name: "sold out", bg: "green__color" },
    { name: "% off", bg: "yellow__color" },
  ];
  const currentDept = depts?.find(
    (dept, idx) =>
      status?.toLowerCase()?.includes(dept?.name) ||
      dept.name === status.toLowerCase()
  );

  return (
    <div
      className="gridarea__wraper product__grid"
      onMouseEnter={() => setCurrentProduct(product)}
    >
      <div className="gridarea__img">
        <Link href={`/products/${id}`}>
          <Image loading="lazy" src={image} alt="grid" placeholder="blur" />
        </Link>
        <div className="gridarea__small__button gridarea__small__button__1">
          <div className={`grid__badge ${currentDept.bg}`}>{status}</div>
        </div>
        <div className="gridarea__small__icon">
          <button
            onClick={() => addProductToWishlist({ ...product, quantity: 1 })}
          >
            <i className="icofont-heart-alt"></i>
          </button>
        </div>

        <div className="product__grid__action">
          <ul>
            <li>
              <Link
                href="#"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title=""
                tabIndex="0"
                data-bs-original-title="Add To Compare"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M304 160l-64-64 64-64M207 352l64 64-64 64"
                  />
                  <circle
                    cx="112"
                    cy="96"
                    r="48"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                  />
                  <circle
                    cx="400"
                    cy="416"
                    r="48"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                  />
                  <path
                    d="M256 96h84a60 60 0 0160 60v212M255 416h-84a60 60 0 01-60-60V144"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <button
                onClick={() =>
                  addProductToCart({
                    ...product,
                    quantity: 1,
                    color: color,
                  })
                }
                className="grid__cart"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title=""
                tabIndex="0"
                data-bs-original-title="Add to cart"
              >
                Add to cart
              </button>
            </li>
            <li>
              <span data-bs-toggle="modal" data-bs-target="#exampleModal">
                <button
                  href="#"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title=""
                  tabIndex="0"
                  data-bs-original-title="Quick View"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                    />
                    <circle
                      cx="256"
                      cy="256"
                      r="80"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                      strokeWidth="32"
                    />
                  </svg>
                </button>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="gridarea__content">
        <div className="gridarea__heading">
          <h3>
            <Link href={`/products/${id}`}>
              {title?.length > 21 ? title?.slice(0, 21) : title}
            </Link>
          </h3>
        </div>
        <div className="gridarea__price">
          ${currentPrice} {disc ? <del>/ ${price.toFixed(2)}</del> : ""}
        </div>
        <div className="gridarea__bottom">
          <Link href={`/shop?category=${type.toLowerCase()}`}>{type}</Link>

          <div className="gridarea__star">
            <i className="icofont-star"></i> <i className="icofont-star"></i>{" "}
            <i className="icofont-star"></i> <i className="icofont-star"></i>{" "}
            <i className="icofont-star"></i> <span>({reviews})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
