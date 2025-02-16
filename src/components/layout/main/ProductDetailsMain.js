import HeroInner from "@/components/sections/hero-banners/HeroInner";
import ProductDesc from "@/components/sections/product-desc/ProductDesc";
import ProductDetailsPrimary from "@/components/sections/product-details/ProductDetailsPrimary";
import FeatureProducts from "@/components/sections/products/FeatureProducts";
import React from "react";

const ProductDetailsMain = () => {
  return (
    <main>
      <HeroInner title={"Product Details"} currentItem={"Product Details"} />
      <ProductDetailsPrimary />
      <ProductDesc />
      <FeatureProducts
        type={2}
        title="CORPORATE PRODUCTS."
        tag="Featured Collection"
      />
    </main>
  );
};

export default ProductDetailsMain;
