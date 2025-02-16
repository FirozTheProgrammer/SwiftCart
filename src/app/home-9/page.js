import Home9Mani from "@/components/layout/main/Home9Mani";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Home 9 | Bastun- Business Consulting Next Js Template",
  description: "Home 9 | Bastun- Business Consulting Next Js Template",
};
export default function Home9() {
  return (
    <PageWrapper
      headerStyle={3}
      headerBg={"black"}
      footerStyle={3}
      footerBg={"black"}
    >
      <ThemeController />
      <Home9Mani />
    </PageWrapper>
  );
}
