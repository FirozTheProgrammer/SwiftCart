import IndexMain from "@/components/layout/main/IndexMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <ThemeController />
      <IndexMain />
    </PageWrapper>
  );
}
