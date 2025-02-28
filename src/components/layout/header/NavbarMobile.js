import Link from "next/link";
import ItemMobile from "./ItemMobile";
import { useHeaderContex } from "@/providers/HeaderContex";

const NavbarMobile = () => {
  const { isOnepage, style, headerType, isCollection, home } =
    useHeaderContex();
  const mobileItems = [
    {
      name: "HOME",
      path: "/",
    },
   
    {
      name:
        isOnepage && home === 13
          ? "PROJECTS"
          : isOnepage && (!style || home === 14)
          ? "ABOUT"
          : isOnepage && (style === 2 || (style === 3 && headerType !== 3))
          ? "SERVICE"
          : style === 3 && headerType === 3
          ? "PROJECTS"
          : "eCommerce",
      toggler: true,
      path:
        isOnepage && home === 13
          ? "#project__area"
          : isOnepage && (!style || home === 14)
          ? "#about__mission__area"
          : isOnepage && (style === 2 || (style === 3 && headerType !== 3))
          ? "#service__area"
          : style === 3 && headerType === 3
          ? "#project__area"
          : "/shop",
      dropdown: isOnepage ? false : true,
      dropdownItems: [
        {
          name: "Shop",
          path: "/shop",
        },
        {
          name: "Product Details",
          path: "/products/1",
        },

        {
          name: "Cart",
          path: "/cart",
        },
        {
          name: "Checkout",
          path: "/checkout",
        },

        {
          name: "Wishlist",
          path: "/wishlist",
        },
      ],
    },
    {
      name:
        isOnepage && home === 19
          ? "PORTFOLIO"
          : isOnepage && home === 13
          ? "PRICING"
          : isOnepage && (home === 12 || home === 18)
          ? "SERVICE"
          : isOnepage && headerType !== 3
          ? "PROJECTS"
          : style === 3 && headerType === 3
          ? "ABOUT"
          : "About ",
      toggler: false,
      path:
        isOnepage && home === 19
          ? "#tb__portfolio"
          : isOnepage && home === 13
          ? "#tb__pricing"
          : isOnepage && (home === 12 || home === 18)
          ? "#service__area"
          : isOnepage && headerType !== 3
          ? "#project__area"
          : style === 3 && headerType === 3
          ? "#about__mission__area"
          : "/about",
      dropdown: null,
    },
    isOnepage
      ? {
          name:
            isOnepage && (home === 12 || home === 19)
              ? "CONTACT"
              : isOnepage &&
                (!style ||
                  style === 2 ||
                  home === 13 ||
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
                  home === 13 ||
                  (style === 3 && headerType === 2))
              ? "#blog__area"
              : isOnepage && style === 3
              ? "#tb__contact"
              : "/blogs",
          dropdown: null,
        }
      : {},
    {
      name:
        isOnepage && (home === 12 || home === 19)
          ? "BLOGS"
          : isOnepage &&
            (!style ||
              style === 2 ||
              home === 13 ||
              (style === 3 && headerType === 2))
          ? "CONTACT"
          : isOnepage && style === 3
          ? "BLOGS"
          : "Contact ",
      toggler: false,
      path:
        isOnepage && (home === 12 || home === 19)
          ? "#blog__area"
          : isOnepage &&
            (!style ||
              style === 2 ||
              home === 13 ||
              (style === 3 && headerType === 2))
          ? "#tb__contact"
          : isOnepage && style === 3
          ? "#blog__area"
          : "/contact",
      dropdown: null,
    },
  ];
  return (
    <nav className="offcanvas__menu">
      <ul className="offcanvas__menu_ul">
        {mobileItems?.map((item, idx) =>
          !item?.name ? "" : <ItemMobile key={idx} item={item} />
        )}
      </ul>
      {/* <div className="offcanvas__account--items">
        <Link
          className="offcanvas__account--items__btn d-flex align-items-center"
          href="/login"
        >
          <span className="offcanvas__account--items__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20.51"
              height="19.443"
              viewBox="0 0 512 512"
            >
              <path
                d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              />
              <path
                d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="32"
              />
            </svg>
          </span>
          <span className="offcanvas__account--items__label">
            Login / Register
          </span>
        </Link>
      </div> */}
    </nav>
  );
};

export default NavbarMobile;
