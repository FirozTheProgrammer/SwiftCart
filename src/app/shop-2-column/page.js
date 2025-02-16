import ShopMain from "@/components/layout/main/ShopMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Shop 2 Column | Bastun- Business Consulting Next Js Template",
  description: "Shop 2 Column | Bastun- Business Consulting Next Js Template",
};
export default function Shop2Column() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <ShopMain shop={0} />
    </PageWrapper>
  );
}
