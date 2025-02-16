import Image from "next/image";
import Link from "next/link";
import { useCartContext } from "@/providers/CartContext";
import countTotalPrice from "@/libs/countTotalPrice";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import countDiscount from "@/libs/countDiscount";

const CartHeader = () => {
  const { cartProducts, deleteProductFromCart } = useCartContext();
  const totalProduct = cartProducts?.length;
  const totalPrice = countTotalPrice(cartProducts);
  return (
    <div className="headerarea__cart__dropdown__wrapper">
      <div className="headerarea__cart__dropdown__inner">
        {!cartProducts?.length ? (
          <p className="no-product-minicart">Empty</p>
        ) : (
          cartProducts?.map(
            ({ id, title, image, price, quantity, isCourse, disc }, idx) => {
              const { netPrice } = countDiscount(price, disc);
              return (
                <div key={idx} className="headerarea__cart__single__dropdown">
                  <div className="headerarea__cart__single__dropdown__img">
                    <Link href={`/products/${id}`}>
                      <Image placeholder="blur" src={image} alt="photo" />
                    </Link>
                  </div>
                  <div className="headerarea__cart__single__dropdown__content">
                    <Link href={`/products/${id}`}>
                      {title?.length > 22 ? title?.slice(0, 22) : title}
                    </Link>
                    <p>
                      {quantity} x{" "}
                      <span className="price"> ${netPrice.toFixed(2)}</span>
                    </p>
                  </div>
                  <div className="headerarea__cart__single__dropdown__close">
                    <Link
                      href="#"
                      onClick={() => deleteProductFromCart(id, title)}
                    >
                      <i className="icofont-close-line"></i>
                    </Link>
                  </div>
                </div>
              );
            }
          )
        )}
      </div>

      <p className="headerarea__cart__dropdown__price">
        Total: <span>${totalPrice.toFixed(2)}</span>
      </p>
      <div className="headerarea__cart__dropdown__button">
        <ButtonPrimary text="  VIEW CART" path="/cart" button="blue" />
        <ButtonPrimary text="CHECKOUT" path="/checkout" />
      </div>
    </div>
  );
};

export default CartHeader;
