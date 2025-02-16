import ServiceMain from "@/components/layout/main/ServiceMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Services | Bastun- Business Consulting Next Js Template",
  description: "Services | Bastun- Business Consulting Next Js Template",
};
export default function Services() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <ServiceMain />
    </PageWrapper>
  );
}
