import LoginMain from "@/components/layout/main/LoginMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Login | Bastun- Business Consulting Next Js Template",
  description: "Login | Bastun- Business Consulting Next Js Template",
};
export default function Login() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <LoginMain />
    </PageWrapper>
  );
}
