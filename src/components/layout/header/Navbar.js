import megaMenuImage1 from "@/assets/img/mega/mega_menu_1.png";

import DropdownEcommerce from "./DropdownEcommerce";
import NavItem from "./NavItem";
import { useHeaderContex } from "@/providers/HeaderContex";

const Navbar = () => {
  const { isOnepage, style, headerType, footerStyle, isCollection, home } =
    useHeaderContex();
  const navItemsRaw = [
    {
      name: "HOME",
      path: "/",
    },
    {
      name:
        isOnepage && home === 0
          ? "STRATEGY"
          : isOnepage && (home === 12 || home === 18)
          ? "PORTFOLIO"
          : isOnepage && (!style || headerType === 3 || home === 14)
          ? "SERVICE"
          : isOnepage && isCollection && (style === 2 || style === 3)
          ? "COLLECTION"
          : isOnepage && (style === 2 || style === 3)
          ? "ABOUT"
          : "PAGES",

      path:
        isOnepage && home === 19
          ? "#tb__strategy"
          : isOnepage && (home === 12 || home === 18)
          ? "#tb__portfolio"
          : isOnepage && (!style || headerType === 3 || home === 14)
          ? "#service__area"
          : isOnepage && isCollection && (style === 2 || style === 3)
          ? "#popular__products"
          : isOnepage && (style === 2 || style === 3)
          ? home === 13
            ? "#tb_about"
            : "#about__mission__area"
          : "#",
      dropdown: null,
      position: "none",
      dropdownThumbs: {
        img: megaMenuImage1,
        path: "#",
      },
    },
    {
      name:
        isOnepage && (home == 14 || home === 19)
          ? "ABOUT"
          : isOnepage && home == 13
          ? "PROJECTS"
          : isOnepage && (style === 2 || (style === 3 && headerType !== 3))
          ? "SERVICE"
          : style === 3 && headerType === 3
          ? "PROJECTS"
          : "ABOUT",
      icon: false,
      path:
        isOnepage && (home == 14 || home === 19)
          ? "#about__mission__area"
          : isOnepage && home == 13
          ? "#project__area"
          : isOnepage && !style
          ? "#about__mission__area"
          : isOnepage && (style === 2 || (style === 3 && headerType !== 3))
          ? "#service__area"
          : style === 3 && headerType === 3
          ? "#project__area"
          : "/about",
      dropdown: null,
    },
    {
      name:
        isOnepage && home === 19
          ? "PORTFOLIO"
          : isOnepage && home == 13
          ? "PRICING"
          : isOnepage && (home === 12 || home === 18)
          ? "SERVICE"
          : isOnepage && headerType !== 3
          ? "PROJECTS"
          : style === 3 && headerType === 3
          ? "ABOUT"
          : "ECOMMERCE",
      icon: isOnepage ? false : true,
      path:
        isOnepage && home === 19
          ? "#tb__portfolio"
          : isOnepage && home == 13
          ? "#tb__pricing"
          : isOnepage && (home === 12 || home === 18)
          ? "#service__area"
          : isOnepage && headerType !== 3
          ? "#project__area"
          : style === 3 && headerType === 3
          ? "#about__mission__area"
          : "/shop",
      dropdown: null,
      dropdownItems: [
        {
          name: "Shop",
          path: "/shop",
          label: "Online Store",
          icon: false,
        },

        {
          name: "Product Details",
          path: "/products/1",
          label: null,
        },
        {
          name: "Cart",
          path: "/cart",
          label: null,
        },
        {
          name: "Checkout",
          path: "/checkout",
          label: null,
        },
        {
          name: "Team",
          path: "/team",
          label: null,
        },
        {
          name: "Wishlist",
          path: "/wishlist",
          label: null,
        },
      ],
    },
    {
      name:
        isOnepage && (home === 12 || home === 19)
          ? "CONTACT"
          : isOnepage &&
            (!style ||
              style === 2 ||
              home == 13 ||
              (style === 3 && headerType === 2))
          ? "BLOGS"
          : isOnepage && style === 3
          ? "CONTACT"
          : "BLOGS",
      icon: false,
      path:
        isOnepage && (home === 12 || home === 19)
          ? "#tb__contact"
          : isOnepage &&
            (!style ||
              style === 2 ||
              home == 13 ||
              (style === 3 && headerType === 2))
          ? "#blog__area"
          : isOnepage && style === 3
          ? "#tb__contact"
          : "/blogs",
      dropdown: null,
    },

    {
      name:
        isOnepage && home === 13
          ? "CONTACT"
          : isOnepage && (home === 12 || home === 19)
          ? "BLOGS"
          : isOnepage && style === 3 && (!headerType || headerType === 3)
          ? "BLOGS"
          : "CONTACT",
      icon: false,
      path:
        isOnepage && home === 13
          ? "#tb__contact"
          : isOnepage && (home === 12 || home === 19)
          ? "#blog__area"
          : isOnepage &&
            (!style || style === 2 || (style === 3 && headerType === 2))
          ? "#tb__contact"
          : isOnepage && style === 3
          ? "#blog__area"
          : "/contact",
      dropdown: null,
    },
  ];

  const navItems = navItemsRaw
    ?.map((navItem, idx) =>
      idx === 0
        ? { ...navItem, dropdown: null } // Removed dropdown from Home
        : idx === 3
        ? {
            ...navItem,
            dropdown: isOnepage ? null : (
              <DropdownEcommerce dropdownItems={navItem.dropdownItems} />
            ),
          }
        : navItem
    )
    .filter((_, idx) => idx !== 1); // Removed Pages

  return (
    <div className="headerarea__component">
      <div className="headerarea__main__menu">
        <nav>
          <ul>
            {navItems?.map((navItem, idx) => (
              <NavItem key={idx} item={navItem} />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
