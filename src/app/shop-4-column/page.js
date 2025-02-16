import ShopMain from "@/components/layout/main/ShopMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Shop 4 Column | Bastun- Business Consulting Next Js Template",
  description: "Shop 4 Column | Bastun- Business Consulting Next Js Template",
};
export default function Shop4Column() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <ShopMain shop={2} />
    </PageWrapper>
  );
}
