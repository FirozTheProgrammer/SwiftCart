import HeroInner from "@/components/sections/hero-banners/HeroInner";
import LoginPrimary from "@/components/sections/login/LoginPrimary";
import React from "react";

const LoginMain = () => {
  return (
    <main>
      <HeroInner title={"Login"} currentItem={"Login"} />
      <LoginPrimary />
    </main>
  );
};

export default LoginMain;
