import TeamMain from "@/components/layout/main/TeamMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Team | Bastun- Business Consulting Next Js Template",
  description: "Team | Bastun- Business Consulting Next Js Template",
};
export default function Team() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <TeamMain />
    </PageWrapper>
  );
}
