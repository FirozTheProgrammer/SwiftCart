"use client";
import { useHeaderContex } from "@/providers/HeaderContex";
import Link from "next/link";
import React from "react";

const NavbarMobile2 = () => {
  const { isOnepage, home } = useHeaderContex();
  const mobileItems1 = [
    {
      name: "Business Consulting",
      path: "/",
    },
    {
      name: "Marketing Consulting",
      path: "/home-2",
    },
    {
      name: "Corporate Business",
      path: "/home-3",
    },
    {
      name: "Digital Agency",
      path: "/home-4",
    },
    {
      name: "Finance Consulting",
      path: "/home-5",
    },
    {
      name: "Insurance",
      path: "/home-6",
    },
    {
      name: "Human Resource",
      path: "/home-7",
    },

    {
      name: "Creative Agency",
      path: "/home-8",
    },
    {
      name: "eCommerce",
      path: "/home-9",
    },
    {
      name: "Personal Portfolio",
      path: "/home-10",
    },
    {
      name: "SEO Agency",
      path: "/home-11",
    },
    {
      name: "Creative Portfolio",
      path: "/home-12",
    },
    {
      name: "Event Conference",
      path: "/home-13",
    },
    {
      name: "Sass App",
      path: "/home-14",
    },
    {
      name: "Freelancer",
      path: "/home-15",
    },

    {
      name: "Technology",
      path: "/home-16",
    },
    {
      name: "Web Agency",
      path: "/home-17",
    },
    {
      name: "Travel Agency",
      path: "/home-18",
    },
    {
      name: "International Consulting",
      path: "/home-19",
    },
    {
      name: "Startup",
      path: "/home-20",
    },
  ];
  const mobileItems2 = [
    {
      name: "HOME",
      path: "#",
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
