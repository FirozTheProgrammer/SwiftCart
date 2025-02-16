import Home4Main from "@/components/layout/main/Home4Main";

import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Home 4 Onepage | Bastun- Business Consulting Next Js Template",
  description: "Home 4 Onepage | Bastun- Business Consulting Next Js Template",
};
export default function Home4Onepage() {
  return (
    <PageWrapper headerStyle={4} footerStyle={4} isOnepage={true}>
      <ThemeController />
      <Home4Main />
    </PageWrapper>
  );
}
