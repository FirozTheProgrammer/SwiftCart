"use client";
import countDiscount from "@/libs/countDiscount";
import countTotalPrice from "@/libs/countTotalPrice";
import { useCartContext } from "@/providers/CartContext";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CartProduct = ({ product }) => {
  const { id, title, price, quantity: quantity1, image, disc } = product;
  const { deleteProductFromCart, addProductToCart } = useCartContext();
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    if (quantity1 > 0) {
      setQuantity(quantity1);
    }
  }, [quantity1]);
  const { netPrice } = countDiscount(price, disc);
  const totalPrice = countTotalPrice([product]);
  const isQuantiy = quantity > 1;
  return (
    <tr>
      <td className="cartarea__product__thumbnail">
        <Link href={`/products/${id}`}>
          <Image loading="lazy" src={image} alt="product-1" />
        </Link>
      </td>
      <td className="cartarea__product__name">
        <Link href={`/products/${id}`}>
          {" "}
          {title.length > 30 ? title.slice(0, 30) : title}
        </Link>
      </td>
      <td className="cartarea__product__price__cart">
        <span className="amount">${netPrice?.toFixed(2)}</span>
      </td>
      <td className="cartarea__product__quantity">
        <div className="featurearea__quantity__button cartarea__plus__minus qty-container">
          <div
            className="dec qtybutton qty-btn-minus"
            onClick={() => {
              setQuantity(
                !quantity || quantity < 2 ? 1 : parseInt(quantity) - 1
              );
              if (isQuantiy) {
                addProductToCart({ ...product, quantity: 1 }, true);
              }
            }}
          >
            -{" "}
          </div>
          <input
            className="input-qty input-qty"
            type="text"
            value={quantity}
            name="qty"
            onChange={(e) => {
              setQuantity(
                !parseInt(e.target.value) ? 1 : parseInt(e.target.value)
              );
              addProductToCart({ ...product, quantity: 1 }, false, true);
            }}
          />
          <div
            className="inc qtybutton qty-btn-plus"
            onClick={() => {
              setQuantity(!quantity ? 1 : parseInt(quantity) + 1);
              addProductToCart({ ...product, quantity: 1 });
            }}
          >
            +
          </div>
        </div>
      </td>
      <td className="cartarea__product__subtotal">
        ${totalPrice <= 0 ? "0.00" : totalPrice.toFixed(2)}
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
        <button onClick={() => deleteProductFromCart(id, title)}>
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
};

export default CartProduct;
