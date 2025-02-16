import HeroInner from "@/components/sections/hero-banners/HeroInner";
import WishlishPrimary from "@/components/sections/wishlist/WishlishPrimary";
import React from "react";

const WishlistMain = () => {
  return (
    <main>
      <HeroInner title={"Wishlist"} currentItem={"Wishlist"} />
      <WishlishPrimary />
    </main>
  );
};

export default WishlistMain;
