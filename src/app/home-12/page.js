import Home11Main from "@/components/layout/main/Home11Main";
import Home12Main from "@/components/layout/main/Home12Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Home 12 | Bastun- Business Consulting Next Js Template",
  description: "Home 12 | Bastun- Business Consulting Next Js Template",
};
export default function Home12() {
  return (
    <PageWrapper>
      <ThemeController />
      <Home12Main />
    </PageWrapper>
  );
}
