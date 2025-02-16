"use client";
import ProductDetailsModal from "@/components/shared/modals/ProductDetailsModal";
import getAllProducts from "@/libs/getAllProducts";
import { createContext, useContext, useState } from "react";

const ProductModalContext = createContext(null);

const ProductModalProvider = ({ children }) => {
  const allProducts = getAllProducts();
  const [currentProduct, setCurrentProduct] = useState(allProducts[0]);
  return (
    <ProductModalContext.Provider value={setCurrentProduct}>
      {children}
      <ProductDetailsModal product={currentProduct} />
    </ProductModalContext.Provider>
  );
};
export const useProductDetailContext = () => {
  return useContext(ProductModalContext);
};
export default ProductModalProvider;
