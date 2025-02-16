import Home19Main from "@/components/layout/main/Home19Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Home 19 Onepage | Bastun- Business Consulting Next Js Template",
  description: "Home 19 Onepage | Bastun- Business Consulting Next Js Template",
};
export default function Home19Onepage() {
  return (
    <PageWrapper isOnepage={true} home={19}>
      <ThemeController />
      <Home19Main />
    </PageWrapper>
  );
}
