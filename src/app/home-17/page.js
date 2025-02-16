import Home17Main from "@/components/layout/main/Home17Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Home 17 | Bastun- Business Consulting Next Js Template",
  description: "Home 17 | Bastun- Business Consulting Next Js Template",
};
export default function Home17() {
  return (
    <PageWrapper headerStyle={2} footerStyle={2}>
      <ThemeController />
      <Home17Main />
    </PageWrapper>
  );
}
