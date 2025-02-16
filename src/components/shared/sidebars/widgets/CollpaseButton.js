"use client";
import React, { useEffect, useState } from "react";

const CollpaseButton = () => {
  useEffect(() => {
    const sidebarCollapseBtns = document.querySelectorAll(
      ".sidebar-collapse-btn"
    );
    sidebarCollapseBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const sibling = this.nextElementSibling;
        sibling.style.display =
          sibling.style.display === "block" ? "none" : "block";
        this.classList.toggle("sidebar-collapse-show");
      });
    });
  }, []);
  return (
    <button
      type="button"
      className="default__button sidebar-collapse-btn"
      data-aos="fade-up"
      data-aos-duration="1800"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 32 32"
        width="24"
      >
        <g id="Layer_2" dataname="Layer 2">
          <path d="m28.552 6.184h-2.671a4.556 4.556 0 0 0 -8.659 0h-13.774a1.449 1.449 0 0 0 0 2.9h13.774a4.556 4.556 0 0 0 8.659 0h2.671a1.449 1.449 0 0 0 0-2.9zm-7 3.138a1.69 1.69 0 1 1 1.689-1.69 1.692 1.692 0 0 1 -1.689 1.69z"></path>
          <path d="m28.552 14.552h-13.774a4.556 4.556 0 0 0 -8.659 0h-2.671a1.448 1.448 0 0 0 0 2.9h2.671a4.556 4.556 0 0 0 8.659 0h13.774a1.448 1.448 0 0 0 0-2.9zm-18.1 3.138a1.69 1.69 0 1 1 1.686-1.69 1.692 1.692 0 0 1 -1.69 1.69z"></path>
          <path d="m28.552 22.919h-2.671a4.556 4.556 0 0 0 -8.659 0h-13.774a1.449 1.449 0 0 0 0 2.9h13.774a4.556 4.556 0 0 0 8.659 0h2.671a1.449 1.449 0 0 0 0-2.9zm-7 3.138a1.69 1.69 0 1 1 1.689-1.689 1.692 1.692 0 0 1 -1.689 1.689z"></path>
        </g>
      </svg>
      FILTER
    </button>
  );
};

export default CollpaseButton;
