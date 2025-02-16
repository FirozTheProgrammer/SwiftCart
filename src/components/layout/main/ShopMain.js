import HeroInner from "@/components/sections/hero-banners/HeroInner";
import ShopPrimary from "@/components/sections/shop/SopPrimary";
import React from "react";

const ShopMain = ({ shop }) => {
  return (
    <main>
      <HeroInner title={"Shop"} currentItem={"Shop Page"} />
      <ShopPrimary listIndex={shop} />
    </main>
  );
};

export default ShopMain;
