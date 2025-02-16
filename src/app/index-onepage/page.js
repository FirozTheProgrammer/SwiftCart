import IndexMain from "@/components/layout/main/IndexMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Home 1 Onepage | Bastun- Business Consulting Next Js Template",
  description: "Home 1 Onepage | Bastun- Business Consulting Next Js Template",
};
export default function HomeOnepage() {
  return (
    <PageWrapper isOnepage={true}>
      <ThemeController />
      <IndexMain />
    </PageWrapper>
  );
}
