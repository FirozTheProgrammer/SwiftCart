"use client";
import { useEffect } from "react";

const ThemeController = () => {
  useEffect(() => {
    if (
      localStorage.getItem("theme-color") === "dark" ||
      (!("theme-color" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("is_dark");
    }
    if (localStorage.getItem("theme-color") === "light") {
      document.documentElement.classList.remove("is_dark");
    }

    // Dark to light mode js
    const lightToDarkButton = document.getElementById("light--to-dark-button");
    lightToDarkButton?.addEventListener("click", function () {
      if (localStorage.getItem("theme-color")) {
        if (localStorage.getItem("theme-color") === "light") {
          document.documentElement.classList.add("is_dark");
          localStorage.setItem("theme-color", "dark");
          lightToDarkButton?.classList.add("dark--mode");
        } else {
          document.documentElement.classList.remove("is_dark");
          localStorage.setItem("theme-color", "light");
          lightToDarkButton?.classList?.remove("dark--mode");
        }
      } else {
        if (document.documentElement.classList.contains("is_dark")) {
          document.documentElement.classList.remove("is_dark");
          lightToDarkButton?.classList?.remove("dark--mode");
          localStorage.setItem("theme-color", "light");
        } else {
          document.documentElement.classList.add("is_dark");
          localStorage.setItem("theme-color", "dark");
          lightToDarkButton?.classList.add("dark--mode");
        }
      }
    });
  }, []);

  return (
    <div className="mode_switcher my_switcher">
      <button id="light--to-dark-button" className="light align-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon dark__mode"
          viewBox="0 0 512 512"
        >
          <path
            d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon light__mode"
          viewBox="0 0 512 512"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="32"
            d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
          />
          <circle
            cx="256"
            cy="256"
            r="80"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="32"
          />
        </svg>

        <span className="light__mode">Light</span>
        <span className="dark__mode">Dark</span>
      </button>
    </div>
  );
};

export default ThemeController;
