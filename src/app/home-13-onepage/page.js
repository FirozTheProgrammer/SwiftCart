import Home13Main from "@/components/layout/main/Home13Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Home 13 Onepage | Bastun- Business Consulting Next Js Template",
  description: "Home 13 Onepage | Bastun- Business Consulting Next Js Template",
};
export default function Home13Onepage() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      bodyBg={"black"}
      headerBg={"black"}
      isOnepage={true}
      home={13}
    >
      <ThemeController />
      <Home13Main />
    </PageWrapper>
  );
}
