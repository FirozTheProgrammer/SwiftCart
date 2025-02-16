import Home19Main from "@/components/layout/main/Home19Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Home 19 | Bastun- Business Consulting Next Js Template",
  description: "Home 19 | Bastun- Business Consulting Next Js Template",
};
export default function Home19() {
  return (
    <PageWrapper>
      <ThemeController />
      <Home19Main />
    </PageWrapper>
  );
}
