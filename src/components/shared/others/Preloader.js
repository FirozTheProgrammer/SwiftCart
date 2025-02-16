"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import preImage from "@/assets/img/pre.png";

const Preloader = () => {
  useEffect(() => {
    //preloader
    var backPreloader = document.getElementById("back__preloader");

    setTimeout(function () {
      backPreloader.style.display = "none";
    }, 1000);
  }, []);
  return (
    <div id="back__preloader">
      <div id="back__circle_loader"></div>
      <div className="back__loader_logo">
        <Image loading="lazy" src={preImage} alt="Preload" />
      </div>
    </div>
  );
};

export default Preloader;
