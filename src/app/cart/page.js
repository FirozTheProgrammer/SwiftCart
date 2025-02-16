import CartMain from "@/components/layout/main/CartMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Cart | Bastun- Business Consulting Next Js Template",
  description: "Cart | Bastun- Business Consulting Next Js Template",
};
export default function Cart() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <CartMain />
    </PageWrapper>
  );
}
