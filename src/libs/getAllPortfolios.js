import portfolioImage1 from "@/assets/img/poartfolio/portfolio-1.jpg";
import portfolioImage2 from "@/assets/img/poartfolio/portfolio-2.jpg";
import portfolioImage3 from "@/assets/img/poartfolio/portfolio-3.jpg";
import portfolioImage4 from "@/assets/img/poartfolio/portfolio-4.jpg";
import portfolioImage5 from "@/assets/img/poartfolio/portfolio-5.jpg";
import portfolioImage6 from "@/assets/img/poartfolio/portfolio-6.jpg";
import portfolioImage7 from "@/assets/img/poartfolio/portfolio-7.jpg";
import portfolioImage8 from "@/assets/img/poartfolio/portfolio-8.jpg";

const getAllPortfolios = () => {
  const portfolios = [
    {
      id: 1,
      title: "RISK MANAGEMENT",
      img: portfolioImage1,
      dep: "Marketing Agency",
      duration: "1500",
    },
    {
      id: 2,
      title: "SKILL MANAGEMENT",
      img: portfolioImage2,
      dep: "Marketing Agency",
      duration: "1700",
    },
    {
      id: 3,
      title: "TOP MANAGEMENT",
      img: portfolioImage3,
      dep: "Marketing Agency",
      duration: "1900",
    },
    {
      id: 4,
      title: "RISK MANAGEMENT",
      img: portfolioImage4,
      dep: "Marketing Agency",
      duration: "2100",
    },
    {
      id: 5,
      title: "SKILL MANAGEMENT",
      img: portfolioImage5,
      dep: "Marketing Agency",
      duration: "2300",
    },
    {
      id: 6,
      title: "TOP MANAGEMENT",
      img: portfolioImage6,
      dep: "Marketing Agency",
      duration: "2500",
    },
    {
      id: 7,
      title: "SKILL MANAGEMENT",
      img: portfolioImage7,
      dep: "Marketing Agency",
      duration: "2700",
    },
    {
      id: 8,
      title: "TOP MANAGEMENT",
      img: portfolioImage8,
      dep: "Marketing Agency",
      duration: "2900",
    },
  ];
  return portfolios;
};

export default getAllPortfolios;
