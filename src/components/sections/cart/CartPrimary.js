"use client";
import CartProduct from "@/components/shared/cart/CartProduct";
import useSweetAlert from "@/hooks/useSweetAlert";
import addItemsToLocalstorage from "@/libs/addItemsToLocalstorage";
import countTotalPrice from "@/libs/countTotalPrice";
import { useCartContext } from "@/providers/CartContext";
import Link from "next/link";
import React from "react";

const CartPrimary = () => {
  const { cartProducts: currentProducts, setCartProducts } = useCartContext();
  const creteAlert = useSweetAlert();
  const cartProducts = currentProducts;
  const totalPrice = countTotalPrice(cartProducts);
  const isCartProduct = cartProducts?.length || false;
  // update cart
  const handleUpdateCart = () => {
    creteAlert("success", "Success! Cart updated.");
  };
  // clear cart
  const handleClearCart = () => {
    addItemsToLocalstorage("cart", []);
    setCartProducts([]);
    creteAlert("success", "Success! Cart cleared.");
  };

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
                  {!isCartProduct ? (
                    <tr className="position-relative">
                      <td className="p-5 md:p-10 " style={{ border: 0 }}>
                        <p className="empty">Empty</p>
                      </td>
                    </tr>
                  ) : (
                    cartProducts?.map((product, idx) => (
                      <CartProduct key={idx} product={product} />
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="cartarea__shiping__update__wrapper">
              <div className="cartarea__shiping__update">
                <Link href={"/shop"}>Continue Shopping</Link>
              </div>
              {isCartProduct && (
                <div className="cartarea__clear">
                  <button onClick={handleUpdateCart}>Update Cart</button>
                  <button onClick={handleClearCart}>Clear Cart</button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-12">
            <div className="cartarea__tax">
              <div className="cartarea__title">
                <h4>Estimate Shipping And Tax</h4>
              </div>
              <div className="cartarea__text">
                <p>Enter your destination to get a shipping estimate.</p>
              </div>
              <div className="cartarea__select">
                <div className="cartarea__tax__select">
                  <label htmlFor="address__country">* Country</label>
                  <select name="email" id="address__country">
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Canada">Canada</option>
                    <option value="Russia">Russia</option>
                    <option value="China">China</option>
                  </select>
                </div>
              </div>
              <div className="cartarea__code cartarea__select">
                <label htmlFor="address__zip">* Zip/Postal Code</label>
                <input
                  type="text"
                  placeholder="Zip/Postal Code"
                  id="address__zip"
                  name="address[zip]"
                />
              </div>
              <button type="button" className="default__button">
                CALCULATE SHIPPING
              </button>
            </div>
          </div>
          <div className="col-lg-4 col-lg-4 col-md-12 col-12">
            <div className="cartarea__discount__code__wrapper cartarea__tax">
              <div className="cartarea__title">
                <h4>Cart Note</h4>
              </div>
              <div className="cartarea__discount__code">
                <p>Special instructions for seller</p>
                <textarea name="note" id="CartSpecialInstructions" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-lg-4 col-md-12 col-12">
            <div className="cartarea__grand__totall cartarea__tax">
              <div className="cartarea__title">
                <h4>Cart Total</h4>
              </div>
              <h5>
                Cart Totals
                <span>${totalPrice ? totalPrice?.toFixed(2) : 0.0}</span>
              </h5>
              <Link href="/checkout">Proceed to Checkout</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPrimary;
