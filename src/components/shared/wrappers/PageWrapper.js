"use client";
import AOS from "aos";
import Header from "@/components/layout/header/Header";
import Preloader from "../others/Preloader";
import { useEffect, useState } from "react";
import bootstrapCustom from "@/libs/bootstrap";
import CartContextProvider from "@/providers/CartContext";
import HeaderContex from "@/providers/HeaderContex";
import Footer from "@/components/layout/footer/Footer";
import controllSwiper from "@/libs/controllSwiper";
import popupVideo from "@/libs/popupVideo";
import smoothScroll from "@/libs/smoothScroll";
import counterUP from "@/libs/counterUP";
import countQuantity from "@/libs/countQuantity";
import ProductModalProvider from "@/providers/ProductModalContext";
import WishlistContextProvider from "@/providers/WshlistContext";
import typeWriter from "@/libs/typeWriter";
let idx = 0;
const PageWrapper = ({
  children,
  headerStyle,
  footerStyle,
  headerBg,
  bodyBg,
  footerBg,
  isOnepage,
  headerType,
  isCollection,
  copyright,
  home,
  isNotHeaderTop,
}) => {
  const [bootstrap, setBootstrap] = useState(null);

  if (bootstrap && idx === 1) {
    bootstrap?.bootstrapMain();
  }
  useEffect(() => {
    //hover effect parallex
    import("vanilla-tilt").then(({ default: VanillaTilt }) => {
      VanillaTilt.init(document.querySelectorAll(".tilt"));
    });

    AOS.init({
      offset: 40,
      duration: 1000,
      once: true,
      easing: "ease",
    });
    bootstrapCustom(setBootstrap);
    controllSwiper();
    popupVideo();
    smoothScroll();
    counterUP();
    countQuantity();
    typeWriter();
  }, []);
  useEffect(() => {
    const body = document.querySelector("body");
    if (bodyBg) {
      body.classList.add("bg__black");
    } else {
      body.classList.remove("bg__black");
    }
  }, [bodyBg]);
  idx = idx + 1;
  return (
    <CartContextProvider>
      <div className="main_wrapper overflow-hidden">
        {/* preloader */}
        <Preloader />

        {/* header */}
        <HeaderContex
          value={{
            style: headerStyle,
            bg: headerBg,
            isOnepage,
            bodyBg,
            footerStyle,
            headerType,
            isCollection,
            home,
            isNotHeaderTop,
          }}
        >
          <CartContextProvider>
            <Header />
            <WishlistContextProvider>
              <ProductModalProvider>
                {/* main boldy */}
                {children}
              </ProductModalProvider>
            </WishlistContextProvider>
          </CartContextProvider>
        </HeaderContex>

        {/* footer */}
        <Footer style={footerStyle} footerBg={footerBg} copyright={copyright} />
      </div>
    </CartContextProvider>
  );
};

export default PageWrapper;
