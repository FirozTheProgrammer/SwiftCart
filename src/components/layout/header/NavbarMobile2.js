"use client";
import { useHeaderContex } from "@/providers/HeaderContex";
import Link from "next/link";
import React from "react";

const NavbarMobile2 = () => {
  const { isOnepage, home } = useHeaderContex();
  const mobileItems1 = [
    {
      name: "Home",
      path: "/",
    },

  ];
  const mobileItems2 = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "ABOUT",
      path: "#about__mission__area",
    },
    {
      name: "SERVICE",
      path: "#service__area",
    },
    {
      name: "PORTFOLIO",
      path: "#tb__portfolio",
    },
    {
      name: "PRICING",
      path: "#tb__pricing",
    },
    {
      name: "BLOGS",
      path: "#blog__area",
    },
    {
      name: "CONTACT",
      path: "#tb__contact",
    },
  ];
  const mobileItems3 = [
    {
      name: "Home",
      path: "#",
    },
    {
      name: "About",
      path: "#about__mission__area",
    },
    {
      name: "Projects",
      path: "#project__area",
    },
    {
      name: "Pricing",
      path: "#tb__pricing",
    },

    {
      name: "Blogs",
      path: "#blog__area",
    },
    {
      name: "Contact",
      path: "#tb__contact",
    },
  ];
  const mobileItems = isOnepage
    ? home === 15
      ? mobileItems3
      : mobileItems2
    : mobileItems1;
  return (
    <ul className="headerarea__offcavas__menu">
      {mobileItems?.map(({ name, path }, idx) => (
        <li key={idx}>
          <Link href={path}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarMobile2;
