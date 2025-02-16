import ProductDetailsMain from "@/components/layout/main/ProductDetailsMain";

import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import getAllProducts from "@/libs/getAllProducts";
import { notFound } from "next/navigation";
export const metadata = {
  title: "Product Details | Bastun- Business Consulting Next Js Template",
  description: "Product Details | Bastun- Business Consulting Next Js Template",
};
const products = getAllProducts();
export default function ProductDetails({ params }) {
  const { id } = params;
  const isExistProducts = products?.find(({ id: id1 }) => id1 === parseInt(id));
  if (!isExistProducts) {
    notFound();
  }
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <ProductDetailsMain />
    </PageWrapper>
  );
}
export async function generateStaticParams() {
  return products?.map(({ id }) => ({ id: id.toString() }));
}
