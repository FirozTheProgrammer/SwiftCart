import Home5Main from "@/components/layout/main/Home5Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Home 5 | Bastun- Business Consulting Next Js Template",
  description: "Home 5 | Bastun- Business Consulting Next Js Template",
};
export default function Home5() {
  return (
    <PageWrapper headerStyle={3} footerStyle={2} headerBg={"black"}>
      <ThemeController />
      <Home5Main />
    </PageWrapper>
  );
}
