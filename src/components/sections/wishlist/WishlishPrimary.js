"use client";
import countDiscount from "@/libs/countDiscount";
import { useCartContext } from "@/providers/CartContext";
import { useWishlistContext } from "@/providers/WshlistContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WishlishPrimary = () => {
  const { wishlistProducts, deleteProductFromWishlist } = useWishlistContext();
  const { addProductToCart } = useCartContext();
  const iswishlistProducts = wishlistProducts?.length ? true : false;
  return (
    <div className="cartarea sp_bottom_140 sp_top_100">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="cartarea__table__content table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {!iswishlistProducts ? (
                    <tr className="position-relative">
                      <td className="p-5 md:p-10 " style={{ border: 0 }}>
                        <p className="empty">Empty</p>
                      </td>
                    </tr>
                  ) : (
                    wishlistProducts?.map(
                      (
                        {
                          id,
                          title,
                          price,
                          image,
                          quantity,
                          color,
                          isCourse,
                          disc,
                        },
                        idx
                      ) => {
                        const { netPrice } = countDiscount(price, disc);
                        return (
                          <tr key={idx}>
                            <td className="cartarea__product__thumbnail">
                              <Link href={`/products/${id}`}>
                                <Image
                                  loading="lazy"
                                  src={image}
                                  alt="food-1"
                                  placeholder="blur"
                                />
                              </Link>
                            </td>
                            <td className="cartarea__product__name">
                              <Link href={`/products/${id}`}>
                                {" "}
                                {title.length > 30 ? title.slice(0, 30) : title}
                              </Link>
                            </td>
                            <td className="cartarea__product__price__cart">
                              <span className="amount">
                                ${netPrice.toFixed(2)}
                              </span>
                            </td>
                            <td className="cartarea__product__quantity">
                              <div className="cartarea__plus__button">
                                <button
                                  onClick={() =>
                                    addProductToCart({
                                      id,
                                      title,
                                      quantity,
                                      color: isCourse ? "red" : color,
                                      price,
                                      image,
                                      isCourse: isCourse || false,
                                    })
                                  }
                                  className="default__button"
                                >
                                  Add To Cart
                                </button>
                              </div>
                            </td>
                            <td className="cartarea__product__subtotal">
                              ${netPrice?.toFixed(2)}
                            </td>
                            <td className="cartarea__product__remove">
                              <button>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="ionicon"
                                  viewBox="0 0 512 512"
                                >
                                  <title>Pencil</title>
                                  <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="32"
                                    d="M364.13 125.25L87 403l-23 45 44.99-23 277.76-277.13-22.62-22.62zM420.69 68.69l-22.62 22.62 22.62 22.63 22.62-22.63a16 16 0 000-22.62h0a16 16 0 00-22.62 0z"
                                  />
                                </svg>
                              </button>{" "}
                              <button
                                onClick={() =>
                                  deleteProductFromWishlist(id, title)
                                }
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="ionicon"
                                  viewBox="0 0 512 512"
                                >
                                  <title>Trash</title>
                                  <path
                                    d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="32"
                                  />
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    strokeWidth="32"
                                    d="M80 112h352"
                                  />
                                  <path
                                    d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="32"
                                  />
                                </svg>
                              </button>
                            </td>
                          </tr>
                        );
                      }
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlishPrimary;
