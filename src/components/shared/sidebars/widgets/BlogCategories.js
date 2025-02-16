"use client";
import { useCommonContext } from "@/providers/CommonContext";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const BlogCategories = () => {
  const currentCategory = useSearchParams().get("category");
  const { sidebar } = useCommonContext();
  const categories = [
    {
      id: 1,
      name: "Strategic Planning",
    },
    {
      id: 2,
      name: "Market Entry Strategy",
    },
    {
      id: 3,
      name: "Business Process",
    },
    {
      id: 4,
      name: "Financial Restructuring",
    },
    {
      id: 5,
      name: "Cost Reduction Analysis",
    },
    {
      id: 6,
      name: "Supply Chain Optimization",
    },
  ];

  return (
    <div
      className="sidebar__widget"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="sidebar__title">
        <h5>{sidebar === "service" ? "All Services:" : "Post category:"}</h5>
      </div>
      <div className="sidebar__list">
        <ul>
          {categories?.map(({ id, name }, idx) => (
            <li key={idx}>
              <Link
                className={`sidebar__common__input ${
                  currentCategory === name.toLowerCase().split(" ").join("-")
                    ? "active"
                    : ""
                }`}
                href={`/${
                  sidebar === "service" ? "services" : "blogs"
                }?category=${name.toLocaleLowerCase().split(" ").join("-")}`}
              >
                {name}
                <i className="icofont-rounded-right"></i>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogCategories;
