import Home17Main from "@/components/layout/main/Home17Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Home 17 Onepage | Bastun- Business Consulting Next Js Template",
  description: "Home 17 Onepage | Bastun- Business Consulting Next Js Template",
};
export default function Home17Onepage() {
  return (
    <PageWrapper headerStyle={2} footerStyle={2} isOnepage={true}>
      <ThemeController />
      <Home17Main />
    </PageWrapper>
  );
}
