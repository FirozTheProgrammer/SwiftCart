"use client";

import { useEffect } from "react";
import MobileMenu from "./MobileMenu";
import mobileMenu from "@/libs/mobileMenu";
import HeaderLarge from "./HeaderLarge";
import HeaderMobile from "./HeaderMobile";
import { useHeaderContex } from "@/providers/HeaderContex";
import MobileMenu2 from "./MobileMenu2";
import HeaderAnimate from "./HeaderAnimate";
import HeaderTop from "./HeaderTop";
import stickyHeader from "@/libs/stickyHeader";

const Header = () => {
  const { style, bg, isNotHeaderTop } = useHeaderContex();
  useEffect(() => {
    mobileMenu();
    stickyHeader();
  }, []);
  return (
    <>
      {isNotHeaderTop ? "" : style === 3 ? <HeaderAnimate /> : ""}
      <header>
        <div
          className={`headerarea ${bg === "black" ? "bg__black" : ""} ${
            style === 3 ? "" : "headerarea__transparent"
          } ${
            !style
              ? "headerarea--1 main__header "
              : `headerarea--${style}  headerarea--headerarea__display__none`
          } header__sticky  `}
        >
          {style === 2 ? <HeaderTop /> : ""}
          <HeaderLarge />
          {style === 4 ? "" : <HeaderMobile />}
        </div>
      </header>
      {style === 4 ? <MobileMenu2 /> : <MobileMenu />}
    </>
  );
};

export default Header;
