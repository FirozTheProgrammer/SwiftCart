import Home12Main from "@/components/layout/main/Home12Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Home 12 Onepage | Bastun- Business Consulting Next Js Template",
  description: "Home 12 Onepage | Bastun- Business Consulting Next Js Template",
};
export default function Home12Onepage() {
  return (
    <PageWrapper isOnepage={true} home={12}>
      <ThemeController />
      <Home12Main />
    </PageWrapper>
  );
}
