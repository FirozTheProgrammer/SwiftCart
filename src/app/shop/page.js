import ShopMain from "@/components/layout/main/ShopMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Shop | Bastun- Business Consulting Next Js Template",
  description: "Shop | Bastun- Business Consulting Next Js Template",
};
export default function Shop() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <ShopMain shop={1} />
    </PageWrapper>
  );
}
