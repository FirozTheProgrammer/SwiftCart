import Home11Main from "@/components/layout/main/Home11Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Home 11 Onepage | Bastun- Business Consulting Next Js Template",
  description: "Home 11 Onepage | Bastun- Business Consulting Next Js Template",
};
export default function Home11Onepage() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      bodyBg={"black"}
      // headerBg={"black"}
      copyright={2}
      headerType={2}
      isOnepage={true}
      home={11}
    >
      <ThemeController />
      <Home11Main />
    </PageWrapper>
  );
}
