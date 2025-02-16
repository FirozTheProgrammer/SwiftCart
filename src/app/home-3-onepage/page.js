import Home3Main from "@/components/layout/main/Home3Main";

import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Home 3 Onepage | Bastun- Business Consulting Next Js Template",
  description: "Home 3 Onepage | Bastun- Business Consulting Next Js Template",
};
export default function Home3Onepage() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      bodyBg={"black"}
      headerBg={"black"}
      isOnepage={true}
    >
      <ThemeController />
      <Home3Main />
    </PageWrapper>
  );
}
