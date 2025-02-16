import Home13Main from "@/components/layout/main/Home13Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Home 13 | Bastun- Business Consulting Next Js Template",
  description: "Home 13 | Bastun- Business Consulting Next Js Template",
};
export default function Home13() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      bodyBg={"black"}
      headerBg={"black"}
    >
      <ThemeController />
      <Home13Main />
    </PageWrapper>
  );
}
