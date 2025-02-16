import ChecoutPrimary from "@/components/sections/checkout-priamry/ChecoutPrimary";
import HeroInner from "@/components/sections/hero-banners/HeroInner";

const CheckoutMain = () => {
  return (
    <main>
      <HeroInner title={"Checkout"} currentItem={"Checkout Page"} />
      <ChecoutPrimary />
    </main>
  );
};

export default CheckoutMain;
