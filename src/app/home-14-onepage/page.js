import Home14Main from "@/components/layout/main/Home14Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Home 14 Onepage | Bastun- Business Consulting Next Js Template",
  description: "Home 14 Onepage | Bastun- Business Consulting Next Js Template",
};
export default function Home14Onepage() {
  return (
    <PageWrapper
      headerStyle={3}
      headerBg={"black"}
      footerStyle={2}
      home={14}
      isNotHeaderTop={true}
      isOnepage={true}
      headerType={2}
    >
      <ThemeController />
      <Home14Main />
    </PageWrapper>
  );
}
