import Home6Main from "@/components/layout/main/Home6Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Home 6 Onepage | Bastun- Business Consulting Next Js Template",
  description: "Home 6 Onepage | Bastun- Business Consulting Next Js Template",
};
export default function Home6Onepage() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
      isOnepage={true}
    >
      <ThemeController />
      <Home6Main />
    </PageWrapper>
  );
}
