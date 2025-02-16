import Home18Main from "@/components/layout/main/Home18Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Home 18 Onepage | Bastun- Business Consulting Next Js Template",
  description: "Home 18 Onepage | Bastun- Business Consulting Next Js Template",
};
export default function Home18Onepage() {
  return (
    <PageWrapper footerStyle={2} isOnepage={true} home={18}>
      <ThemeController />
      <Home18Main />
    </PageWrapper>
  );
}
