import ShopMain from "@/components/layout/main/ShopMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Shop 3 Column | Bastun- Business Consulting Next Js Template",
  description: "Shop 3 Column | Bastun- Business Consulting Next Js Template",
};
export default function Shop3Column() {
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
