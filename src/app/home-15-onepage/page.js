import Home15Main from "@/components/layout/main/Home15Main";

import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Home 15 Onepage | Bastun- Business Consulting Next Js Template",
  description: "Home 15 Onepage | Bastun- Business Consulting Next Js Template",
};
export default function Home15Onepage() {
  return (
    <PageWrapper
      headerStyle={4}
      footerStyle={4}
      headerType={3}
      bodyBg={"black"}
      isOnepage={true}
      home={15}
    >
      <ThemeController />
      <Home15Main />
    </PageWrapper>
  );
}
