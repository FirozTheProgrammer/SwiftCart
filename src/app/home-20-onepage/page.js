import Home17Main from "@/components/layout/main/Home17Main";
import Home20Main from "@/components/layout/main/Home20Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Home 20 Onepage | Bastun- Business Consulting Next Js Template",
  description: "Home 20 Onepage | Bastun- Business Consulting Next Js Template",
};
export default function Home20Onepage() {
  return (
    <PageWrapper headerStyle={2} footerStyle={2} isOnepage={true} home={14}>
      <ThemeController />
      <Home20Main />
    </PageWrapper>
  );
}
