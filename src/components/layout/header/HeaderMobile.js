import Image from "next/image";
import logoImage1 from "@/assets/img/logo/Logo_1.png";
import Link from "next/link";
import CartHeader from "./CartHeader";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import { useHeaderContex } from "@/providers/HeaderContex";

const HeaderMobile = () => {
  const { style } = useHeaderContex();
  return (
    <div className="mob_menu_wrapper container-fluid">
      <div className="d-flex justify-content-between align-items-center">
        <div className="offcanvas__header--menu__open ">
          <Link
            className="offcanvas__header--menu__open--btn"
            href="#"
            data-offcanvas
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon offcanvas__header--menu__open--svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
                d="M80 160h352M80 256h352M80 352h352"
              />
            </svg>
            <span className="visually-hidden">Offcanvas Menu Open</span>
          </Link>
        </div>
        <div className="mobile__log">
          <div className="mobile__log--title">
            <Link className="mobile__log--link" href="/">
              <Image
                placeholder="blur"
                className="mobile__log--img"
                src={logoImage1}
                alt="logo-img"
              />
            </Link>
          </div>
        </div>

        <div className="headerarea__component mobile__component__right">
          <div className="headerarea__right">
            <div className="headerarea__cart__wraper">
              <div className="headerarea__cart__icon">
                <Link href="#">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.0008 22H15.0008C19.0208 22 19.7408 20.39 19.9508 18.43L20.7008 12.43C20.9708 9.99 20.2708 8 16.0008 8H8.0008C3.7308 8 3.0308 9.99 3.3008 12.43L4.0508 18.43C4.2608 20.39 4.9808 22 9.0008 22Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.4945 12H15.5035"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.49451 12H8.50349"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <div className="headerarea__cart__border__dot"></div>
              </div>

              <CartHeader />
            </div>
            <div className="headerarea__button">
              <ButtonPrimary
                text="QUATE"
                path="#"
                button={!style || style === 3 ? "" : "white"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
