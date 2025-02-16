import WishlistMain from "@/components/layout/main/WishlistMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Wishlist | Bastun- Business Consulting Next Js Template",
  description: "Wishlist | Bastun- Business Consulting Next Js Template",
};
export default function Wishlist() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <WishlistMain />
    </PageWrapper>
  );
}
