import ErrorPrimary from "@/components/sections/error/ErrorPrimary";
import HeroInner from "@/components/sections/hero-banners/HeroInner";
import React from "react";

const ErrorMain = () => {
  return (
    <main>
      <HeroInner title={"ERROR"} currentItem={"Error"} />
      <ErrorPrimary />
    </main>
  );
};

export default ErrorMain;
