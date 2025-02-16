import BlogsMain from "@/components/layout/main/BlogsMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Blogs | Bastun- Business Consulting Next Js Template",
  description: "Blogs | Bastun- Business Consulting Next Js Template",
};
export default function Blogs() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <BlogsMain />
    </PageWrapper>
  );
}
