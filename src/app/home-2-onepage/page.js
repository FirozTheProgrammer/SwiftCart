import Home2Main from "@/components/layout/main/Home2Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Home 2 Onepage | Bastun- Business Consulting Next Js Template",
  description: "Home 2 Onepage | Bastun- Business Consulting Next Js Template",
};
export default function Home2Onepage() {
  return (
    <PageWrapper headerStyle={2} footerStyle={2} isOnepage={true}>
      <ThemeController />
      <Home2Main />
    </PageWrapper>
  );
}
