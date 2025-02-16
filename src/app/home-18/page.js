import Home18Main from "@/components/layout/main/Home18Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Home 18 | Bastun- Business Consulting Next Js Template",
  description: "Home 18 | Bastun- Business Consulting Next Js Template",
};
export default function Home18() {
  return (
    <PageWrapper footerStyle={2}>
      <ThemeController />
      <Home18Main />
    </PageWrapper>
  );
}
