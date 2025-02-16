import Home10Main from "@/components/layout/main/Home10Main";

import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Home 10 Onepage | Bastun- Business Consulting Next Js Template",
  description: "Home 10 Onepage | Bastun- Business Consulting Next Js Template",
};
export default function Home10Onepage() {
  return (
    <PageWrapper
      headerStyle={4}
      footerStyle={4}
      headerType={3}
      isOnepage={true}
    >
      <ThemeController />
      <Home10Main />
    </PageWrapper>
  );
}
