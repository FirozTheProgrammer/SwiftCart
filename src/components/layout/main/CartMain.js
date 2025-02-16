import CartPrimary from "@/components/sections/cart/CartPrimary";
import HeroInner from "@/components/sections/hero-banners/HeroInner";

const CartMain = () => {
  return (
    <main>
      <HeroInner title={"Cart"} currentItem={"Cart Page"} />
      <CartPrimary />
    </main>
  );
};

export default CartMain;
