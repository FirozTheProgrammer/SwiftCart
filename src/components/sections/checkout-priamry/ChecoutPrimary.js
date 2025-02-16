"use client";
import countTotalPrice from "@/libs/countTotalPrice";
import getAllProducts from "@/libs/getAllProducts";
import { useCartContext } from "@/providers/CartContext";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

const ChecoutPrimary = () => {
  const [isFlatRate, setIsFlatRate] = useState(true);
  const allProducts = getAllProducts();
  const searchParams = useSearchParams();
  const currentId = parseInt(searchParams.get("id"));
  const currentQuantity = parseInt(searchParams.get("quantity"));
  const currentColor = searchParams.get("color");
  const currentSize = searchParams.get("size");
  const { cartProducts: products } = useCartContext();
  const currentProduct = allProducts?.find(({ id }) => id === currentId);
  const { title, price, disc } = currentProduct ? currentProduct : {};

  const isProducts = currentProduct || products?.length ? true : false;
  const subtotal = countTotalPrice(
    currentId ? [{ ...currentProduct, quantity: currentQuantity }] : products
  );
  const totalPrice =
    subtotal && isFlatRate ? subtotal + 3 : subtotal ? subtotal : 0;
  const totalPriceSingle = countTotalPrice([
    { price, quantity: currentQuantity, disc },
  ]);

  return (
    <div className="checkoutarea sp_bottom_140 sp_top_100">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="checkoutarea__billing">
              <div className="checkoutarea__billing__heading">
                <h2>Billing Details</h2>
              </div>
              <div className="checkoutarea__billing__form">
                <form action="#">
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="checkoutarea__inputbox">
                        <label htmlFor="first__name">First Name *</label>
                        <input
                          type="text"
                          id="first__name"
                          name="namm"
                          className="info"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="checkoutarea__inputbox">
                        <label htmlFor="last__name">Last Name*</label>
                        <input
                          type="text"
                          id="last__name"
                          name="namm"
                          className="info"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="checkoutarea__inputbox">
                        <label htmlFor="company__name">Company Name</label>
                        <input
                          type="text"
                          id="company__name"
                          name="namm"
                          className="info"
                          placeholder="Company Name"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="checkoutarea__inputbox">
                        <label htmlFor="email__address">Email Address*</label>
                        <input
                          type="text"
                          id="email__address"
                          name="namm"
                          className="info"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="checkoutarea__inputbox">
                        <label htmlFor="phone__number">Phone Number*</label>
                        <input
                          type="text"
                          id="phone__number"
                          name="namm"
                          className="info"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>

                    <div className="col-xl-12">
                      <div className="checkoutarea__inputbox">
                        <label htmlFor="address__info">Address *</label>
                        <input
                          type="text"
                          id="address__info"
                          name="namm"
                          className="info"
                          placeholder="Address"
                        />
                      </div>
                    </div>

                    <div className="col-xl-12">
                      <div className="checkoutarea__inputbox">
                        <label htmlFor="town__city">Town/City *</label>
                        <input
                          type="text"
                          id="town__city"
                          name="namm"
                          className="info"
                          placeholder="Town/City"
                        />
                      </div>
                    </div>

                    <div className="col-xl-12">
                      <div className="checkoutarea__inputbox">
                        <label htmlFor="post__code">Post Code/Zip Code*</label>
                        <input
                          type="text"
                          id="post__code"
                          name="namm"
                          className="info"
                          placeholder="Post Code/Zip Code"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="checkoutarea__inputbox">
                      <label htmlFor="order__note">Order Notes</label>
                      <input
                        type="text"
                        id="order__note"
                        name="namm"
                        className="info"
                        placeholder="Order Notes"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-12">
            <div className="checkoutarea__payment__wraper">
              <div className="checkoutarea__total">
                <h3>Your order</h3>
                <form action="#" method="post">
                  <div className="checkoutarea__table__wraper">
                    <table className="checkoutarea__table">
                      <thead>
                        <tr className="checkoutarea__item">
                          <td className="checkoutarea__ctg__type"> Product</td>
                          <td className="checkoutarea__cgt__des"> Total</td>
                        </tr>
                      </thead>
                      <tbody>
                        {!isProducts ? (
                          <tr className="checkoutarea__item prd-name">
                            <td className="checkoutarea__ctg__type">
                              {" "}
                              Product Title × <span>0</span>
                            </td>
                            <td className="checkoutarea__cgt__des"> $0.00</td>
                          </tr>
                        ) : currentProduct ? (
                          <tr className="checkoutarea__item prd-name">
                            <td className="checkoutarea__ctg__type">
                              {" "}
                              {title?.length > 12
                                ? title?.slice(0, 12)
                                : title}{" "}
                              × <span>{currentQuantity}</span>
                            </td>
                            <td className="checkoutarea__cgt__des">
                              {" "}
                              ${totalPriceSingle?.toFixed(2)}
                            </td>
                          </tr>
                        ) : (
                          products?.map(
                            ({ quantity, title, price, disc }, idx) => {
                              const totalPriceSingle = countTotalPrice([
                                { price, quantity, disc },
                              ]);
                              return (
                                <tr
                                  key={idx}
                                  className="checkoutarea__item prd-name"
                                >
                                  <td className="checkoutarea__ctg__type">
                                    {" "}
                                    {title?.length > 12
                                      ? title?.slice(0, 12)
                                      : title}{" "}
                                    × <span>{quantity}</span>
                                  </td>
                                  <td className="checkoutarea__cgt__des">
                                    {" "}
                                    ${totalPriceSingle?.toFixed(2)}
                                  </td>
                                </tr>
                              );
                            }
                          )
                        )}

                        <tr className="checkoutarea__item">
                          <td className="checkoutarea__ctg__type"> Subtotal</td>
                          <td className="checkoutarea__cgt__des">
                            ${subtotal ? subtotal.toFixed(2) : "0.00"}
                          </td>
                        </tr>
                        <tr className="checkoutarea__item">
                          <td className="checkoutarea__item">Shipping</td>
                          <td className="checkoutarea__cgt__des ship-opt">
                            <div className="checkoutarea__shipp">
                              <input
                                type="radio"
                                id="pay-toggle"
                                name="ship"
                                defaultChecked
                                onChange={(e) =>
                                  setIsFlatRate(e.target.checked)
                                }
                              />{" "}
                              <label htmlFor="pay-toggle">
                                Flat Rate:{" "}
                                <span>${totalPrice ? "3.00" : "0.00"}</span>
                              </label>
                            </div>
                            <div className="checkoutarea__shipp">
                              <input
                                type="radio"
                                id="pay-toggle2"
                                name="ship"
                                onChange={(e) => setIsFlatRate(false)}
                              />{" "}
                              <label htmlFor="pay-toggle2">Free Shipping</label>
                            </div>
                          </td>
                        </tr>
                        <tr className="checkoutarea__item">
                          <td className="checkoutarea__itemcrt-total">
                            {" "}
                            Total
                          </td>
                          <td className="checkoutarea__cgt__des prc-total">
                            {" "}
                            $ {totalPrice ? totalPrice.toFixed(2) : "0.00"}{" "}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </form>
              </div>
              <div className="checkoutarea__payment clearfix">
                <div className="checkoutarea__payment__toggle">
                  <form action="#">
                    <div className="checkoutarea__payment__total">
                      <div className="checkoutarea__payment__type">
                        <input type="radio" id="pay-toggle01" name="pay" />
                        <label htmlFor="pay-toggle01">
                          Direct Bank Transfer
                        </label>
                      </div>
                      <div className="checkoutarea__payment__type">
                        <input type="radio" id="pay-toggle02" name="pay" />
                        <label htmlFor="pay-toggle02">Cheque Payment</label>
                      </div>
                      <div className="checkoutarea__payment__type">
                        <input type="radio" id="pay-toggle03" name="pay" />
                        <label htmlFor="pay-toggle03">Cash on Delivery</label>
                      </div>
                      <div className="checkoutarea__payment__type">
                        <input
                          type="radio"
                          id="pay-toggle04"
                          name="pay"
                          defaultChecked
                        />
                        <label htmlFor="pay-toggle04">Paypal</label>
                      </div>
                    </div>
                    <div className="checkoutarea__payment__input__box">
                      <button
                        className="default__button"
                        type="submit"
                        style={{
                          opacity: isProducts ? 1 : "0.5",
                          cursor: isProducts ? "pointer" : "not-allowed",
                        }}
                        disabled={isProducts ? false : true}
                      >
                        PLACE ORDER
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChecoutPrimary;
