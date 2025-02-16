import Preloader from "@/components/shared/others/Preloader";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

const Loading = () => {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <Preloader />
    </PageWrapper>
  );
};

export default Loading;
